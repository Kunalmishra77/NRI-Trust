import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  Zap, 
  FolderLock, 
  Bell, 
  FileText, 
  ChevronRight, 
  ArrowUpRight,
  UserCheck,
  Search,
  MoreVertical,
  Download,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import { elegantFadeUp, luxuryStagger } from "@/motion/variants";

export default function ClientPortal() {
  const [activeTab, setActiveCategory] = useState("overview");

  const openIssues = [
    { title: "NRO Account KYC Update", status: "In Progress", priority: "High", due: "12 Mar" },
    { title: "Property Tax Assessment", status: "Pending Data", priority: "Medium", due: "20 Mar" },
    { title: "Health Insurance Top-up", status: "Manager Review", priority: "Low", due: "25 Mar" }
  ];

  const renewals = [
    { title: "Bank FD Renewal", date: "15 Mar 2026", type: "Banking" },
    { title: "Apartment Rent Renewal", date: "01 Apr 2026", type: "Property" },
    { title: "Parent's Health Policy", date: "12 Apr 2026", type: "Insurance" }
  ];

  const documents = [
    { name: "Family Succession Will.pdf", type: "Legal", date: "Feb 2026" },
    { name: "Ancestral Plot Deed.pdf", type: "Property", date: "Jan 2026" },
    { name: "NRE Account Statement.pdf", type: "Banking", date: "Mar 2026" }
  ];

  return (
    <div className="min-h-screen bg-[#050806] text-[#FDFCFB] flex flex-col lg:flex-row">
      {/* ─── SIDEBAR NAVIGATION ─── */}
      <aside className="w-full lg:w-72 border-r border-white/5 bg-[#0A0F0D] flex flex-col h-screen sticky top-0 shrink-0">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <span className="text-lg font-serif tracking-tight">NRI TRUST</span>
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-accent/60 font-bold">Client Portal</span>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {[
            { id: "overview", label: "Dashboard", icon: LayoutDashboard },
            { id: "vault", label: "Document Vault", icon: FolderLock },
            { id: "reminders", label: "Renewals", icon: Bell },
            { id: "issues", label: "Open Issues", icon: AlertCircle },
            { id: "messaging", label: "Secure Chat", icon: MessageSquare }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all ${
                activeTab === item.id 
                  ? "bg-accent/10 text-accent border border-accent/20" 
                  : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 mt-auto">
          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 group hover:bg-red-500/10 transition-all cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold">Emergency</span>
            </div>
            <p className="text-xs text-red-500/80 leading-relaxed font-medium">Initiate Rapid Response Deployment</p>
          </div>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ─── */}
      <main className="flex-1 p-8 lg:p-16 max-w-7xl">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <motion.div initial="hidden" animate="visible" variants={elegantFadeUp}>
            <h1 className="text-3xl md:text-4xl font-serif text-white mb-2">Welcome Back, <span className="italic text-accent">Mr. Advani.</span></h1>
            <p className="text-sm text-white/40 font-light tracking-wide">Last Audit: 48 Hours Ago • Portfollio ID: #NT-2026-8821</p>
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="relative group hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-accent transition-colors" />
              <input 
                type="text" 
                placeholder="Search portfolio..." 
                className="bg-[#0A0F0D] border border-white/5 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-accent/40 transition-all w-64"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center cursor-pointer hover:bg-accent/20 transition-all">
              <UserCheck className="w-5 h-5 text-accent" />
            </div>
          </div>
        </header>

        {/* Status Metrics */}
        <motion.div 
          initial="hidden" animate="visible" variants={luxuryStagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: "Active Issues", value: "03", icon: AlertCircle, color: "text-accent" },
            { label: "Pending Renewals", value: "02", icon: Clock, color: "text-orange-400" },
            { label: "Vault Documents", value: "48", icon: FolderLock, color: "text-emerald-400" },
            { label: "Manager Support", value: "Online", icon: UserCheck, color: "text-blue-400" }
          ].map((stat, i) => (
            <motion.div key={i} variants={elegantFadeUp} className="bg-[#0A0F0D] border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-accent transition-colors" />
              </div>
              <div className="text-3xl font-serif text-white mb-1">{stat.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Module: Open Issues (Column 8) */}
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-[#0A0F0D] border border-white/5 rounded-[2.5rem] overflow-hidden">
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <h3 className="text-lg font-serif">Open Operational Issues</h3>
                </div>
                <button className="text-[10px] font-mono uppercase tracking-widest text-accent/60 hover:text-accent font-bold">View History</button>
              </div>
              <div className="p-0">
                {openIssues.map((issue, i) => (
                  <div key={i} className="group p-8 flex items-center justify-between border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-all">
                    <div className="flex gap-6 items-center">
                      <div className={`w-1 h-12 rounded-full ${issue.priority === 'High' ? 'bg-red-500/40' : 'bg-accent/20'}`} />
                      <div>
                        <h4 className="text-white font-medium mb-1 group-hover:text-accent transition-colors">{issue.title}</h4>
                        <div className="flex gap-4 items-center">
                          <span className="text-[10px] font-mono text-white/30 uppercase font-bold tracking-widest">Due {issue.due}</span>
                          <span className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/40 uppercase font-bold">{issue.priority} Priority</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-xs text-white/60 font-light italic">{issue.status}</span>
                      <ChevronRight className="w-4 h-4 text-white/10 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Module: Document Vault Snippet */}
              <section className="bg-[#0A0F0D] border border-white/5 rounded-[2.5rem] p-8">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-lg font-serif italic">Secure Vault</h3>
                  <FolderLock className="w-5 h-5 text-white/20" />
                </div>
                <div className="space-y-6">
                  {documents.map((doc, i) => (
                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <FileText className="w-4 h-4 text-accent/40 group-hover:text-accent transition-colors" />
                        <div>
                          <p className="text-sm text-white/80 font-light truncate max-w-[140px]">{doc.name}</p>
                          <p className="text-[9px] font-mono text-white/20 uppercase font-bold">{doc.type}</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-white/10 group-hover:text-accent transition-colors" />
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-3 rounded-xl border border-white/5 text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-accent hover:border-accent/20 transition-all">Go to Full Vault</button>
              </section>

              {/* Module: Renewals Snippet */}
              <section className="bg-[#0A0F0D] border border-white/5 rounded-[2.5rem] p-8">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-lg font-serif italic">Upcoming Dues</h3>
                  <Bell className="w-5 h-5 text-white/20" />
                </div>
                <div className="space-y-6">
                  {renewals.map((rem, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-px h-10 bg-accent/20 relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-white/80 font-medium leading-none mb-2">{rem.title}</p>
                        <p className="text-[10px] font-mono text-white/30 uppercase tracking-tight">{rem.date} • {rem.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-3 rounded-xl bg-accent/5 border border-accent/10 text-[10px] font-mono uppercase tracking-widest text-accent font-bold hover:bg-accent/10 transition-all shadow-[0_0_20px_rgba(207,160,82,0.05)]">Sync to Calendar</button>
              </section>
            </div>
          </div>

          {/* Sidebar / Messaging (Column 4) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Manager Module */}
            <section className="bg-[#0A0F0D] border border-white/5 rounded-[2.5rem] overflow-hidden">
              <div className="p-8 bg-accent/[0.02] text-center border-b border-white/5">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-2 border-accent/30 border-dashed animate-slow-spin" />
                  <img 
                    src="/generated_images/Professional_man_headshot_testimonial_c0227483.png" 
                    className="w-full h-full rounded-full object-cover p-2 grayscale" 
                    alt="Relationship Manager"
                  />
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#0A0F0D]" />
                </div>
                <h4 className="text-xl font-serif text-white">Vikram Malhotra</h4>
                <p className="text-[10px] font-mono uppercase tracking-widest text-accent/60 font-bold">Senior Portfolio Lead</p>
              </div>
              <div className="p-8 space-y-6">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <p className="text-[11px] text-white/40 uppercase tracking-widest font-bold mb-3">Direct Response</p>
                  <p className="text-sm text-white/80 font-light leading-relaxed">"Mr. Advani, I have cleared the SBI KYC flag. We are now awaiting the MCD property tax invoice."</p>
                </div>
                <button className="w-full h-14 rounded-xl bg-white text-black text-sm font-medium flex items-center justify-center gap-3 hover:bg-accent transition-all group">
                  <MessageSquare className="w-4 h-4" />
                  <span>Secure Message</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="p-8 rounded-[2.5rem] border border-white/5 bg-[#050806]">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white/20 font-bold mb-8">System Commands</h3>
              <div className="space-y-3">
                {[
                  "Upload New Document",
                  "Request Site Audit",
                  "Assign New Power of Attorney",
                  "Portfolio Export (CSV)"
                ].map((action, i) => (
                  <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group text-left">
                    <span className="text-sm text-white/60 group-hover:text-white transition-colors">{action}</span>
                    <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-accent transition-colors" />
                  </button>
                ))}
              </div>
            </section>
          </div>

        </div>
      </main>
    </div>
  );
}

