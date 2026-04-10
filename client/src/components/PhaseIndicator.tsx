import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, RotateCcw, X, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { useUser, PHASE_CONFIG, Phase } from '@/context/UserContext';

const ZONES: Phase[] = ['green', 'orange', 'red'];

export default function PhaseIndicator() {
  const { phase, zoneSelected, selectZone, resetZone } = useUser();
  const [expanded, setExpanded] = useState(false);
  if (!zoneSelected || !phase) return null;
  const config = PHASE_CONFIG[phase];
  return (
    <div className='fixed bottom-6 right-6 z-[500] flex flex-col items-end gap-3'>
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ opacity: 0, y: 14, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.95 }} transition={{ duration: 0.28 }} className='w-72 rounded-2xl bg-[#050914]/96 backdrop-blur-xl border overflow-hidden shadow-2xl' style={{ borderColor: config.color + '25' }}>
            <div className='flex items-center justify-between px-4 py-3 border-b' style={{ borderColor: config.color + '12' }}>
              <div className='flex items-center gap-2.5'>
                <div className='w-7 h-7 rounded-full flex items-center justify-center' style={{ backgroundColor: config.color + '15', border: '1px solid ' + config.color + '30' }}>
                  <Shield className='w-3.5 h-3.5' style={{ color: config.color }} />
                </div>
                <div>
                  <p className='text-white font-black text-xs'>{config.label}</p>
                  <p className='text-white/30 text-[9px] font-mono uppercase tracking-widest'>{config.sublabel}</p>
                </div>
              </div>
              <button onClick={() => setExpanded(false)} className='text-white/25 hover:text-white/50 transition-colors'><X className='w-4 h-4' /></button>
            </div>
            <div className='px-4 pt-3 pb-2'>
              <div className='w-full rounded-xl px-3 py-2.5 mb-3' style={{ backgroundColor: config.color + '08', border: '1px solid ' + config.color + '18' }}>
                <p className='text-white/55 text-xs leading-relaxed'>{config.description}</p>
                <div className='text-[9px] font-mono font-black uppercase tracking-widest mt-2' style={{ color: config.color }}>{config.ageRange}</div>
              </div>
              <p className='text-[9px] font-mono uppercase tracking-[0.3em] text-white/25 mb-2 font-bold'>Switch zone</p>
              <div className='grid grid-cols-3 gap-1.5 mb-3'>
                {ZONES.map(z => { const c = PHASE_CONFIG[z]; const isActive = z === phase; return (
                  <button key={z} onClick={() => { selectZone(z); setExpanded(false); }} className='px-2 py-2 rounded-xl text-[9px] font-black uppercase tracking-wide transition-all duration-200 flex flex-col items-center gap-1' style={{ backgroundColor: isActive ? c.color + '18' : 'rgba(255,255,255,0.03)', border: '1px solid ' + (isActive ? c.color + '40' : 'rgba(255,255,255,0.06)'), color: isActive ? c.color : 'rgba(255,255,255,0.3)' }}>
                    <div className='w-2 h-2 rounded-full' style={{ backgroundColor: c.color }} />
                    <span>{c.label.split(' ')[0]}</span>
                  </button>
                ); })}
              </div>
              <div className='flex gap-2 mb-3'>
                <Link href={config.zonePage} onClick={() => setExpanded(false)} className='flex-1'><button className='w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold transition-all' style={{ backgroundColor: config.color + '15', border: '1px solid ' + config.color + '30', color: config.color }}><ExternalLink className='w-3 h-3' />Your Zone</button></Link>
                <Link href='/contact' onClick={() => setExpanded(false)} className='flex-1'><button className='w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white/60 hover:text-white/80 transition-all'><Phone className='w-3 h-3' />Contact</button></Link>
              </div>
              {phase === 'red' && (<a href='https://wa.me/919999999999?text=Emergency%20Support%20Needed' target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-black mb-3 transition-all' style={{ backgroundColor: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}><motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className='w-1.5 h-1.5 rounded-full bg-red-400' />Emergency WhatsApp Line</a>)}
            </div>
            <div className='px-4 pb-3'>
              <button onClick={() => { setExpanded(false); resetZone(); }} className='w-full flex items-center justify-center gap-2 py-2 text-white/20 text-[10px] font-mono uppercase tracking-widest hover:text-white/40 transition-colors'><RotateCcw className='w-3 h-3' />Reset zone</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} onClick={() => setExpanded(e => !e)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className='flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-xl shadow-2xl cursor-pointer' style={{ backgroundColor: config.color + '10', border: '1.5px solid ' + config.color + '30', boxShadow: expanded ? '0 0 30px ' + config.color + '18' : '0 4px 20px rgba(0,0,0,0.4)' }}>
        <div className='relative'>
          <motion.div animate={{ scale: [1, 1.8], opacity: [0.6, 0] }} transition={{ duration: config.pulse, repeat: Infinity }} className='absolute inset-0 rounded-full' style={{ backgroundColor: config.color }} />
          <div className='w-2 h-2 rounded-full' style={{ backgroundColor: config.color }} />
        </div>
        <span className='text-[11px] font-black uppercase tracking-[0.15em]' style={{ color: config.color }}>{config.label}</span>
      </motion.button>
      {phase === 'red' && (<motion.a href='https://wa.me/919999999999?text=Emergency%20Support%20Needed' target='_blank' rel='noopener noreferrer' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.5 }} whileHover={{ scale: 1.04 }} className='flex items-center gap-2 px-4 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest shadow-xl cursor-pointer' style={{ backgroundColor: 'rgba(239,68,68,0.12)', borderColor: 'rgba(239,68,68,0.35)', color: '#f87171' }}><motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className='w-2 h-2 rounded-full bg-red-400' />Emergency Line</motion.a>)}
    </div>
  );
}
