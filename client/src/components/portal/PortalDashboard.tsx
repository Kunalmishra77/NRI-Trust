import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, LayoutDashboard, FolderLock, Bell, AlertCircle, MessageSquare,
  LogOut, Zap, ChevronRight, Download, Upload, Search, ArrowUpRight,
  CheckCircle2, Clock, Lock, FileText, Heart, Landmark, Home, Scale,
  Send, Menu, X, ExternalLink, TrendingUp
} from "lucide-react";
import { useAuth, Category } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

type Tab = "overview" | "services" | "vault" | "deadlines" | "manager";

const CATEGORY_COLORS: Record<string, string> = {
  Insurance: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Banking: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Property: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Legal: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Emergency: "text-red-400 bg-red-400/10 border-red-400/20",
  General: "text-[#d4af37] bg-[#d4af37]/10 border-[#d4af37]/20",
};

const CATEGORY_ICONS: Record<string, any> = {
  Insurance: Heart,
  Banking: Landmark,
  Property: Home,
  Legal: Scale,
  Emergency: Zap,
  General: Shield,
};

const PRIORITY_COLORS: Record<string, string> = {
  High: "bg-red-500/20 text-red-400",
  Medium: "bg-[#d4af37]/15 text-[#d4af37]",
  Low: "bg-white/5 text-white/30",
};

const STATUS_COLORS: Record<string, string> = {
  "In Progress": "text-blue-400",
  "Pending Data": "text-[#d4af37]",
  "Manager Review": "text-purple-400",
  "Resolved": "text-emerald-400",
  "Action Needed": "text-red-400 bg-red-400/10 border border-red-400/20",
  "NRI Trust Handling": "text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20",
  "Done": "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20",
};

function CategoryBadge({ cat }: { cat: string }) {
  const Icon = CATEGORY_ICONS[cat] || Shield;
  return (
    <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border", CATEGORY_COLORS[cat])}>
      <Icon className="w-2.5 h-2.5" />
      {cat}
    </span>
  );
}

// ─── OVERVIEW TAB ───────────────────────────────────────────────────────────
function OverviewTab() {
  const { user } = useAuth();
  if (!user) return null;
  const activeIssues = user.issues.filter((i) => i.status !== "Resolved").length;
  const urgentDeadlines = user.deadlines.filter((d) => d.daysLeft <= 30).length;

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Open Issues", value: String(activeIssues).padStart(2, "0"), icon: AlertCircle, color: "text-[#d4af37]", bg: "bg-[#d4af37]/10" },
          { label: "Upcoming Deadlines", value: String(urgentDeadlines).padStart(2, "0"), icon: Clock, color: "text-orange-400", bg: "bg-orange-400/10" },
          { label: "Vault Documents", value: String(user.documents.length).padStart(2, "0"), icon: FolderLock, color: "text-emerald-400", bg: "bg-emerald-400/10" },
          { label: "Manager Status", value: "Online", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-400/10" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-[#0A0F0D] border border-white/5 rounded-[1.5rem] p-6 hover:border-white/10 transition-all group"
          >
            <div className="flex justify-between items-start mb-5">
              <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", stat.bg)}>
                <stat.icon className={cn("w-4 h-4", stat.color)} />
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/10 group-hover:text-white/30 transition-colors" />
            </div>
            <div className="text-2xl font-serif text-white mb-1">{stat.value}</div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/30 font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Open Issues */}
        <div className="lg:col-span-7">
          <div className="bg-[#0A0F0D] border border-white/5 rounded-[2rem] overflow-hidden">
            <div className="px-7 py-5 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
                <h3 className="text-sm font-semibold text-white">Open Issues</h3>
              </div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#d4af37]/50 font-bold">{activeIssues} Active</span>
            </div>
            {user.issues.length === 0 ? (
              <div className="p-10 text-center text-white/25 text-sm font-light">No open issues — all clear.</div>
            ) : (
              user.issues.slice(0, 3).map((issue, i) => (
                <div key={issue.id} className="group px-7 py-5 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.015] transition-all flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={cn("w-0.5 h-10 rounded-full shrink-0", issue.priority === "High" ? "bg-red-500/50" : issue.priority === "Medium" ? "bg-[#d4af37]/40" : "bg-white/10")} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors truncate">{issue.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <CategoryBadge cat={issue.category} />
                        <span className="text-[9px] font-mono text-white/25 uppercase font-bold">Due {issue.due}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={cn("text-[10px] font-light italic", STATUS_COLORS[issue.status])}>{issue.status}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/10 group-hover:text-[#d4af37] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Upcoming Deadlines */}
          <div className="bg-[#0A0F0D] border border-white/5 rounded-[2rem] p-7">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold text-white">Upcoming Deadlines</h3>
              <Bell className="w-4 h-4 text-white/20" />
            </div>
            {user.deadlines.length === 0 ? (
              <p className="text-white/25 text-sm font-light text-center py-4">No upcoming deadlines.</p>
            ) : (
              <div className="space-y-5">
                {user.deadlines.slice(0, 3).map((dl) => (
                  <div key={dl.id} className="flex items-center gap-4">
                    <div className="relative flex flex-col items-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                      <div className="w-px flex-1 bg-[#d4af37]/15 mt-1 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/80 font-medium truncate">{dl.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] font-mono text-white/25 uppercase font-bold">{dl.date}</span>
                        <span className={cn("text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded", dl.daysLeft <= 14 ? "text-red-400 bg-red-400/10" : "text-white/30 bg-white/5")}>
                          {dl.daysLeft}d left
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Manager latest update */}
          {user.managerUpdates[0] && (
            <div className="bg-[#0A0F0D] border border-white/5 rounded-[2rem] p-7">
              <div className="flex items-center gap-3 mb-5">
                <img src={user.manager.photo} className="w-9 h-9 rounded-full object-cover grayscale" alt="" />
                <div>
                  <p className="text-xs font-semibold text-white">{user.manager.name}</p>
                  <p className="text-[9px] font-mono text-[#d4af37]/60 uppercase tracking-widest">{user.managerUpdates[0].date}</p>
                </div>
              </div>
              <p className="text-[13px] text-white/60 font-light leading-relaxed line-clamp-3">"{user.managerUpdates[0].message}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MY SERVICES TAB ────────────────────────────────────────────────────────
function ServicesTab() {
  const { user } = useAuth();
  if (!user) return null;
  const active = user.services.filter((s) => s.status === "Active");
  const pending = user.services.filter((s) => s.status === "Pending");
  const locked = user.services.filter((s) => s.status === "Locked");

  const ServiceCard = ({ svc }: { svc: typeof user.services[0] }) => {
    const Icon = CATEGORY_ICONS[svc.category] || Shield;
    return (
      <div className={cn(
        "p-6 rounded-2xl border transition-all",
        svc.status === "Active" ? "bg-[#0A0F0D] border-white/8 hover:border-[#d4af37]/25" :
        svc.status === "Pending" ? "bg-[#0A0F0D] border-white/5 opacity-70" :
        "bg-white/[0.01] border-white/[0.04] opacity-40"
      )}>
        <div className="flex items-start gap-4">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border",
            svc.status === "Active" ? "bg-[#d4af37]/10 border-[#d4af37]/20" :
            svc.status === "Pending" ? "bg-white/5 border-white/10" :
            "bg-white/[0.02] border-white/5"
          )}>
            {svc.status === "Locked" ? <Lock className="w-4 h-4 text-white/20" /> : <Icon className={cn("w-4 h-4", svc.status === "Active" ? "text-[#d4af37]" : "text-white/30")} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className={cn("text-sm font-semibold", svc.status === "Locked" ? "text-white/25" : "text-white")}>{svc.name}</h4>
              {svc.status === "Active" && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />}
            </div>
            <p className={cn("text-[11px] font-light leading-relaxed", svc.status === "Locked" ? "text-white/20" : "text-white/45")}>{svc.detail}</p>
            {svc.nextAction && (
              <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#d4af37]/8 border border-[#d4af37]/15">
                <Clock className="w-2.5 h-2.5 text-[#d4af37]" />
                <span className="text-[10px] font-mono text-[#d4af37] font-bold">{svc.nextAction}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Plan header */}
      <div className="p-6 rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/5 flex items-center justify-between">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]/60 font-bold mb-1">Current Plan</div>
          <h2 className="text-xl font-serif text-white">{user.tier}</h2>
          <p className="text-[11px] text-white/40 font-light mt-0.5">Managed since {user.managedSince} · Parents in {user.parentsLocation}</p>
        </div>
        <a href="/pricing" className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#d4af37]/30 text-[11px] font-mono uppercase tracking-widest text-[#d4af37] hover:bg-[#d4af37]/10 transition-all">
          <TrendingUp className="w-3.5 h-3.5" />
          Upgrade Plan
        </a>
      </div>

      {active.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">Active Services ({active.length})</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">{active.map((s) => <ServiceCard key={s.id} svc={s} />)}</div>
        </div>
      )}

      {pending.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] font-bold">Pending Activation ({pending.length})</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">{pending.map((s) => <ServiceCard key={s.id} svc={s} />)}</div>
        </div>
      )}

      {locked.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-3 h-3 text-white/20" />
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-white/20 font-bold">Not in Your Plan ({locked.length})</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">{locked.map((s) => <ServiceCard key={s.id} svc={s} />)}</div>
        </div>
      )}
    </div>
  );
}

// ─── DOCUMENT VAULT TAB ─────────────────────────────────────────────────────
function VaultTab() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [docs, setDocs] = useState(user?.documents || []);
  const fileRef = useRef<HTMLInputElement>(null);
  if (!user) return null;

  const categories = ["All", "Insurance", "Banking", "Property", "Legal"] as const;
  const filtered = docs.filter((d) => {
    const matchCat = activeCategory === "All" || d.category === activeCategory;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const newDoc = {
      id: `doc_new_${Date.now()}`,
      name: file.name,
      category: activeCategory === "All" ? "Legal" : activeCategory as any,
      date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      size: `${(file.size / 1024).toFixed(0)} KB`,
    };
    setDocs((prev) => [newDoc, ...prev]);
    e.target.value = "";
  };

  return (
    <div className="space-y-6">
      {/* Header actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 bg-[#0A0F0D] border border-white/5 rounded-xl pl-11 pr-5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37]/30 transition-all"
          />
        </div>
        <input type="file" ref={fileRef} className="hidden" onChange={handleUpload} />
        <button
          onClick={() => fileRef.current?.click()}
          className="flex items-center gap-2 h-11 px-5 rounded-xl bg-[#d4af37] text-black text-[11px] font-mono uppercase tracking-widest font-bold hover:bg-[#e8c94a] transition-all shrink-0"
        >
          <Upload className="w-3.5 h-3.5" />
          Upload Document
        </button>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest font-bold transition-all border",
              activeCategory === cat
                ? "bg-[#d4af37]/15 border-[#d4af37]/30 text-[#d4af37]"
                : "bg-transparent border-white/5 text-white/30 hover:border-white/15 hover:text-white/60"
            )}
          >
            {cat} {cat !== "All" && `(${docs.filter((d) => d.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Documents grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-white/25">
          <FolderLock className="w-10 h-10 mx-auto mb-4 opacity-20" />
          <p className="text-sm font-light">No documents found.</p>
          <p className="text-[11px] mt-1 text-white/15">Upload your first document to get started.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((doc, i) => {
            const Icon = CATEGORY_ICONS[doc.category] || FileText;
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-center justify-between p-5 bg-[#0A0F0D] border border-white/5 rounded-2xl hover:border-[#d4af37]/20 hover:bg-[#d4af37]/[0.03] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center border shrink-0", CATEGORY_COLORS[doc.category])}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] text-white/85 font-medium truncate group-hover:text-white transition-colors">{doc.name}</p>
                    <p className="text-[9px] font-mono text-white/20 uppercase font-bold mt-0.5">{doc.date} · {doc.size}</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-white/10 group-hover:text-[#d4af37] transition-colors shrink-0 ml-3" />
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── DEADLINES TAB ──────────────────────────────────────────────────────────
function DeadlinesTab() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <div className="space-y-4">
      {user.deadlines.length === 0 ? (
        <div className="text-center py-20 text-white/25">
          <Bell className="w-10 h-10 mx-auto mb-4 opacity-20" />
          <p className="text-sm font-light">No upcoming deadlines.</p>
          <p className="text-[11px] mt-1 text-white/15">We'll populate these after your initial audit.</p>
        </div>
      ) : (
        user.deadlines.map((dl, i) => {
          const Icon = CATEGORY_ICONS[dl.category] || Clock;
          const isUrgent = dl.daysLeft <= 14;
          return (
            <motion.div
              key={dl.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className={cn(
                "p-6 rounded-2xl border transition-all",
                isUrgent ? "bg-red-500/[0.04] border-red-500/20" : "bg-[#0A0F0D] border-white/5"
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className={cn("w-12 h-12 rounded-2xl flex flex-col items-center justify-center border shrink-0", isUrgent ? "bg-red-500/10 border-red-500/25" : "bg-[#d4af37]/8 border-[#d4af37]/15")}>
                    <span className={cn("text-xl font-black leading-none", isUrgent ? "text-red-400" : "text-[#d4af37]")}>{dl.daysLeft}</span>
                    <span className={cn("text-[8px] font-mono uppercase font-bold", isUrgent ? "text-red-400/60" : "text-[#d4af37]/50")}>days</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{dl.title}</h4>
                    <div className="flex items-center gap-2.5">
                      <CategoryBadge cat={dl.category} />
                      <span className="text-[9px] font-mono text-white/25 uppercase font-bold">Due {dl.date}</span>
                    </div>
                  </div>
                </div>
                <span className={cn("px-3 py-1.5 rounded-xl text-[9px] font-mono uppercase tracking-wider font-bold shrink-0", STATUS_COLORS[dl.status])}>
                  {dl.status}
                </span>
              </div>
            </motion.div>
          );
        })
      )}
    </div>
  );
}

// ─── MY MANAGER TAB ─────────────────────────────────────────────────────────
function ManagerTab() {
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  if (!user) return null;

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-6">
      {/* Manager profile */}
      <div className="lg:col-span-4 space-y-5">
        <div className="bg-[#0A0F0D] border border-white/5 rounded-[2rem] overflow-hidden">
          <div className="p-8 text-center border-b border-white/5">
            <div className="relative w-20 h-20 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#d4af37]/30 animate-[spin_12s_linear_infinite]" />
              <img src={user.manager.photo} className="w-full h-full rounded-full object-cover p-1.5 grayscale" alt="" />
              <div className="absolute bottom-0.5 right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0A0F0D]" />
            </div>
            <h3 className="text-lg font-serif text-white">{user.manager.name}</h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]/60 font-bold mt-1">{user.manager.title}</p>
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-emerald-400/70">Available · {user.manager.lastActive}</span>
            </div>
          </div>
          <div className="p-5 space-y-2.5">
            <a
              href={`https://wa.me/${user.manager.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono uppercase tracking-widest text-emerald-400 hover:bg-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp: {user.manager.phone}
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-white/[0.03] border border-white/8 text-[11px] font-mono uppercase tracking-widest text-white/40 hover:text-white hover:border-white/15 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Message input */}
        <div className="bg-[#0A0F0D] border border-white/5 rounded-[2rem] p-6">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/30 font-bold mb-4">Send a Message</h4>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message to your manager..."
            rows={4}
            className="w-full bg-white/[0.03] border border-white/8 rounded-xl p-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37]/30 transition-all resize-none"
          />
          <AnimatePresence>
            {sent && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[11px] text-emerald-400 font-mono mt-2">
                ✓ Message sent to {user.manager.name}
              </motion.p>
            )}
          </AnimatePresence>
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="mt-3 w-full h-11 bg-[#d4af37] text-black rounded-xl text-[11px] font-mono uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-[#e8c94a] transition-all disabled:opacity-30"
          >
            <Send className="w-3.5 h-3.5" />
            Send Message
          </button>
        </div>
      </div>

      {/* Update feed */}
      <div className="lg:col-span-8">
        <div className="bg-[#0A0F0D] border border-white/5 rounded-[2rem] overflow-hidden">
          <div className="px-7 py-5 border-b border-white/5 flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <h3 className="text-sm font-semibold text-white">Manager Updates</h3>
          </div>
          {user.managerUpdates.length === 0 ? (
            <div className="p-10 text-center text-white/25 text-sm font-light">No updates yet.</div>
          ) : (
            <div className="divide-y divide-white/[0.04]">
              {user.managerUpdates.map((update, i) => {
                const Icon = CATEGORY_ICONS[update.category] || Shield;
                return (
                  <motion.div
                    key={update.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="px-7 py-6"
                  >
                    <div className="flex items-start gap-5">
                      <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 mt-0.5", CATEGORY_COLORS[update.category])}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CategoryBadge cat={update.category} />
                          <span className="text-[9px] font-mono text-white/25 uppercase font-bold">{update.date}</span>
                        </div>
                        <p className="text-[13px] text-white/70 font-light leading-relaxed">"{update.message}"</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD ──────────────────────────────────────────────────────────
export default function PortalDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  if (!user) return null;

  const navItems: { id: Tab; label: string; icon: any }[] = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard },
    { id: "services", label: "My Services", icon: Shield },
    { id: "vault", label: "Document Vault", icon: FolderLock },
    { id: "deadlines", label: "Upcoming Deadlines", icon: Bell },
    { id: "manager", label: "My Manager", icon: MessageSquare },
  ];

  const TAB_TITLES: Record<Tab, string> = {
    overview: "Dashboard",
    services: "My Services",
    vault: "Document Vault",
    deadlines: "Upcoming Deadlines",
    manager: "My Manager",
  };

  const Sidebar = () => (
    <aside className="w-full lg:w-68 bg-[#0A0F0D] border-r border-white/5 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-7 border-b border-white/5">
        <div className="flex items-center gap-3 mb-1.5">
          <div className="w-8 h-8 rounded-lg bg-[#d4af37] flex items-center justify-center">
            <Shield className="w-4.5 h-4.5 text-black" />
          </div>
          <span className="text-[17px] font-sans font-black tracking-tight text-white">NRI TRUST</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#d4af37]/50 font-bold">Client Portal</span>
      </div>

      {/* User pill */}
      <div className="px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
          <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0">
            <span className="text-xs font-black text-[#d4af37]">{user.name.split(" ").map((n) => n[0]).join("")}</span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-white truncate">{user.name}</p>
            <p className="text-[9px] font-mono text-white/30 uppercase tracking-wider truncate">{user.tier}</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
            className={cn(
              "w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all text-left",
              activeTab === item.id
                ? "bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/20"
                : "text-white/35 hover:text-white hover:bg-white/5 border border-transparent"
            )}
          >
            <item.icon className="w-4 h-4 shrink-0" />
            <span className="text-[13px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Emergency */}
      <div className="p-4 border-t border-white/5">
        <button className="w-full p-4 rounded-xl bg-red-500/5 border border-red-500/15 hover:bg-red-500/10 transition-all text-left group">
          <div className="flex items-center gap-2.5 mb-1.5">
            <Zap className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-red-500 font-bold">Emergency</span>
          </div>
          <p className="text-[11px] text-red-500/60 font-light group-hover:text-red-500/80 transition-colors">Activate emergency response</p>
        </button>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-2 w-full flex items-center gap-2.5 px-4 py-3 rounded-xl text-white/25 hover:text-white/60 hover:bg-white/5 transition-all"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="text-[12px] font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-[#050914] text-white flex">
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-68 shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-72 z-50 lg:hidden"
            >
              <Sidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="border-b border-white/5 px-6 lg:px-10 py-5 flex items-center justify-between gap-4 sticky top-0 bg-[#050914]/95 backdrop-blur-sm z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white/40 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base font-semibold text-white">{TAB_TITLES[activeTab]}</h1>
              <p className="text-[10px] font-mono text-white/25 uppercase tracking-widest hidden sm:block">
                Portfolio {user.portfolioId} · {user.parentsLocation}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#d4af37]/8 border border-[#d4af37]/15">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest font-bold">{user.tier}</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/25 flex items-center justify-center">
              <span className="text-xs font-black text-[#d4af37]">{user.name.split(" ").map((n) => n[0]).join("")}</span>
            </div>
          </div>
        </header>

        {/* Tab content */}
        <div className="flex-1 p-6 lg:p-10 max-w-6xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "services" && <ServicesTab />}
              {activeTab === "vault" && <VaultTab />}
              {activeTab === "deadlines" && <DeadlinesTab />}
              {activeTab === "manager" && <ManagerTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
