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
          <motion.div 
            initial={{ opacity: 0, y: 14, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 14, scale: 0.95 }} 
            transition={{ duration: 0.28 }} 
            className='w-64 rounded-2xl bg-[#080C1A] border overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
            style={{ borderColor: config.color + '40' }}
          >
            <div className='flex items-center justify-between px-3.5 py-2.5 border-b' style={{ borderColor: config.color + '30' }}>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 rounded-full flex items-center justify-center' style={{ backgroundColor: config.color + '25', border: '1px solid ' + config.color + '50' }}>
                  <Shield className='w-3 h-3' style={{ color: config.color }} />
                </div>
                <div>
                  <p className='text-white font-black text-[12px]'>{config.label}</p>
                  <p className='text-white/70 text-[10px] font-mono uppercase tracking-widest'>{config.sublabel}</p>
                </div>
              </div>
              <button onClick={() => setExpanded(false)} className='text-white/70 hover:text-white transition-colors'><X className='w-3.5 h-3.5' /></button>
            </div>
            <div className='px-3.5 pt-2.5 pb-2'>
              <div className='w-full rounded-xl px-3 py-3 mb-3 shadow-inner' style={{ backgroundColor: config.color + '15', border: '1px solid ' + config.color + '40' }}>
                <p className='text-white text-[12px] leading-relaxed font-medium'>{config.description}</p>
                <div className='text-[11px] font-mono font-black uppercase tracking-[0.2em] mt-2' style={{ color: config.color }}>{config.ageRange}</div>
              </div>
              <p className='text-[10px] font-mono uppercase tracking-[0.25em] text-white/60 mb-2 font-black'>Switch zone</p>
              <div className='grid grid-cols-3 gap-1.5 mb-3'>
                {ZONES.map(z => { 
                  const c = PHASE_CONFIG[z]; 
                  const isActive = z === phase; 
                  return (
                    <button 
                      key={z} 
                      onClick={() => { selectZone(z); setExpanded(false); }} 
                      className='px-1.5 py-2 rounded-xl text-[9px] font-black uppercase tracking-wide transition-all duration-200 flex flex-col items-center gap-1' 
                      style={{ 
                        backgroundColor: isActive ? c.color + '25' : 'rgba(255,255,255,0.08)', 
                        border: '1px solid ' + (isActive ? c.color : 'rgba(255,255,255,0.15)'), 
                        color: isActive ? c.color : 'rgba(255,255,255,0.8)' 
                      }}
                    >
                      <div className='w-2 h-2 rounded-full shadow-sm' style={{ backgroundColor: c.color }} />
                      <span>{c.label.split(' ')[0]}</span>
                    </button>
                  ); 
                })}
              </div>
              <div className='flex gap-2 mb-3'>
                <Link href={config.zonePage} onClick={() => setExpanded(false)} className='flex-1'>
                  <button className='w-full flex items-center justify-center gap-1 py-2 rounded-xl text-[12px] font-black transition-all shadow-lg active:scale-95' style={{ backgroundColor: config.color, color: '#000' }}>
                    <ExternalLink className='w-3 h-3 stroke-[3px]' />
                    Zone
                  </button>
                </Link>
                <Link href='/contact' onClick={() => setExpanded(false)} className='flex-1'>
                  <button className='w-full flex items-center justify-center gap-1 py-2 rounded-xl text-[12px] font-black bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg active:scale-95'>
                    <Phone className='w-3 h-3' />
                    Contact
                  </button>
                </Link>
              </div>
            </div>
            <div className='px-4 pb-3'>
              <button onClick={() => { setExpanded(false); resetZone(); }} className='w-full flex items-center justify-center gap-2 py-1 text-white/60 text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors font-bold'><RotateCcw className='w-2.5 h-2.5' />Reset</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button 
        initial={{ opacity: 0, scale: 0.8, y: 20 }} 
        animate={{ opacity: 1, scale: 1, y: 0 }} 
        transition={{ delay: 0.4, duration: 0.6 }} 
        onClick={() => setExpanded(e => !e)} 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        className='flex items-center gap-2 px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer backdrop-blur-md' 
        style={{ 
          backgroundColor: 'transparent', 
          border: '1.5px solid ' + config.color, 
          boxShadow: expanded ? '0 0 20px ' + config.color + '40' : '0 8px 16px rgba(0,0,0,0.4)' 
        }}
      >
        <div className='relative'>
          <motion.div animate={{ scale: [1, 1.8], opacity: [0.6, 0] }} transition={{ duration: config.pulse, repeat: Infinity }} className='absolute inset-0 rounded-full' style={{ backgroundColor: config.color }} />
          <div className='w-2 h-2 rounded-full' style={{ backgroundColor: config.color }} />
        </div>
        <span className='text-[12px] font-black uppercase tracking-[0.15em]' style={{ color: config.color }}>{config.label}</span>
      </motion.button>
    </div>
  );
}
