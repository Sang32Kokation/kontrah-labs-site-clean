import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, LineChart, ShieldCheck, Sparkles, Zap, Rocket, CheckCircle2, MessageSquare, Trophy, Layers, Gauge, Phone, Mail, MapPin } from "lucide-react";

// Kontrah Labs — One‑Pager
// Single-file React component styled with Tailwind. Ready for Next.js/Vercel.
// Replace placeholder copy, logos, and links as needed.

export default function KontrahLabsLanding() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const features = [
    {
      icon: <LineChart className="h-6 w-6" />, 
      title: "Performance First",
      desc: "Full‑funnel media with ruthless clarity on ROI — Meta, Google, and more."
    },
    {
      icon: <Layers className="h-6 w-6" />, 
      title: "Creative Intelligence",
      desc: "UGC, statics, and video tested methodically. Hooks, hold‑rates, and story beats."
    },
    {
      icon: <Gauge className="h-6 w-6" />, 
      title: "Signal Building",
      desc: "Cold‑start playbooks that compound pixel learnings and cut CAC."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />, 
      title: "Ownership Culture",
      desc: "Senior‑level thinking, zero fluff. We treat your brand like our own."
    }
  ];

  const steps = [
    { num: "01", title: "Audit & Hypotheses", desc: "GA4 + ad account teardown. Identify constraints, quick wins, and test backlog." },
    { num: "02", title: "Signals & Structure", desc: "Account architecture, budgets, targeting, and creative system wired for learning." },
    { num: "03", title: "Scale With Control", desc: "Iterate on winners, guard rails for spend, and crystal‑clear weekly reporting." }
  ];

  const logos = ["/kontrah-placeholder-1.svg","/kontrah-placeholder-2.svg","/kontrah-placeholder-3.svg","/kontrah-placeholder-4.svg","/kontrah-placeholder-5.svg"]; // swap with real client marks

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 ring-1 ring-white/20" />
            <span className="font-semibold tracking-wide">Kontrah Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
            Let’s Talk <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-48 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-48 left-0 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.12),transparent_40%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-bold tracking-tight">
                Performance marketing <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">with ownership</span>
              </motion.h1>
              <p className="mt-5 max-w-xl text-neutral-300">
                We help ambitious brands scale profitably through creative‑led experimentation and signal‑driven media on Meta & Google. No jargon. No fluff. Just results you can feel.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-medium text-neutral-900 shadow-lg shadow-blue-500/20">
                  Book a 30‑min audit <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://wa.me/919999999999" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium hover:bg-white/10">
                  WhatsApp us <MessageSquare className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-neutral-400">
                <Sparkles className="h-4 w-4" /> Trusted by D2C, luxury, and B2B brands across India
              </div>
            </div>
            <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur" />
              <div className="relative rounded-3xl border border-white/10 bg-neutral-900/60 p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <StatCard icon={<Zap className="h-4 w-4" />} label="Faster Learnings" value="x2" sub="time‑to‑signal" />
                  <StatCard icon={<Rocket className="h-4 w-4" />} label="Lower CAC" value="‑28%" sub="over 8 weeks" />
                  <StatCard icon={<Trophy className="h-4 w-4" />} label="ROAS Lift" value="+42%" sub="incremental" />
                  <StatCard icon={<ShieldCheck className="h-4 w-4" />} label="Accuracy" value=">95%" sub="tracking hygiene" />
                </div>
                <div className="mt-6 rounded-xl border border-white/10 bg-neutral-950 p-4 text-sm text-neutral-300">
                  <p className="font-medium">What you get</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" /> Weekly creative & media experiments</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" /> Clean data: GA4, pixels, events, UTM discipline</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" /> Reporting that tells a story — not just numbers</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 text-center text-sm uppercase tracking-widest text-neutral-400">Brands & Categories</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
            {logos.map((src, i) => (
              <div key={i} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="h-6 w-24 bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-y border-white/10 bg-gradient-to-b from-neutral-950 to-neutral-900/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-2xl md:text-4xl font-bold">What we do</h2>
            <span className="text-sm text-neutral-400">Simple retainers • Senior attention • Fast iterations</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard icon={<LineChart className="h-5 w-5" />} title="Meta & Google Growth" points={["ABO/ASC architecture","Budget pacing & guardrails","PMax + Search synergy"]} />
            <ServiceCard icon={<Sparkles className="h-5 w-5" />} title="Creative Systems" points={["Hook & angle matrices","UGC pipelines","Motion & statics testing"]} />
            <ServiceCard icon={<ShieldCheck className="h-5 w-5" />} title="Analytics Hygiene" points={["GA4 & server‑side setup","Event & UTM discipline","Story‑led reports"]} />
          </div>
        </div>
      </section>

      {/* Work (Case cards) */}
      <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-2xl md:text-4xl font-bold">Selected outcomes</h2>
            <span className="text-sm text-neutral-400">Real impact, not vanity metrics</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <CaseCard tag="D2C Apparel" title="Pre‑buzz drop" stat="₹5 Cr" sub="18‑day launch revenue" />
            <CaseCard tag="Luxury Furniture" title="Frequency reset" stat="‑36%" sub="CAC in 6 weeks" />
            <CaseCard tag="B2B (PPF)" title="Pipeline clarity" stat="300+" sub="qualified leads / mo" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 border-y border-white/10 bg-neutral-950/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">How we work</h2>
            <p className="mt-3 text-neutral-300">Tight feedback loops. Hypothesis‑driven tests. Clear decisions.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="text-sm tracking-widest text-neutral-400">{s.num}</span>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="shrink-0 h-20 w-20 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 ring-1 ring-white/20" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold">Forward‑thinking marketers. Relentless ownership.</h3>
                <p className="mt-3 text-neutral-300 max-w-3xl">
                  Kontrah Labs is a new‑age performance partner for brands that want speed without chaos. We blend creative craft with analytical discipline to scale profitably while protecting the brand.
                </p>
                <ul className="mt-4 grid gap-2 text-neutral-300 md:grid-cols-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Based in Karnataka, serving India & beyond</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Hands‑on founders, not account pass‑offs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Clear pricing, no lock‑ins</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Weekly sprints and reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold">Start a conversation</h3>
              <p className="mt-2 text-neutral-300">Tell us about your brand and goals. We’ll reply within 24 hours.</p>
              <div className="mt-6 grid gap-3 text-sm text-neutral-300">
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-400" /> +91‑XXXXXXXXXX</div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-400" /> hello@kontrahlabs.com</div>
                <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-cyan-400" /> Hubli, Karnataka</div>
              </div>
            </div>
            <form className="md:col-span-3 rounded-3xl border border-white/10 bg-neutral-950 p-8" onSubmit={(e)=>{e.preventDefault(); alert('Form submitted. Replace alert with your form handler.');}}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-neutral-300">Name</label>
                  <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-neutral-300">Email</label>
                  <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@brand.com" />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-neutral-300">Message</label>
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="What are you trying to achieve this quarter?" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-medium text-neutral-900">
                Send Enquiry <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs text-neutral-400">By submitting, you agree to our friendly privacy policy.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 ring-1 ring-white/20" />
            <span className="font-semibold tracking-wide">Kontrah Labs</span>
          </div>
          <p className="text-xs text-neutral-400">© {new Date().getFullYear()} Kontrah Labs. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-neutral-300">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, label, value, sub }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950 p-4">
      <div className="flex items-center justify-between text-sm text-neutral-300">
        <span className="flex items-center gap-2">{icon}{label}</span>
        <span className="font-semibold text-white">{value}</span>
      </div>
      <p className="mt-2 text-xs text-neutral-400">{sub}</p>
    </div>
  );
}

function ServiceCard({ icon, title, points }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
      <div className="flex items-center gap-2 text-cyan-300">{icon}<span className="text-sm">{title}</span></div>
      <ul className="mt-4 space-y-2 text-neutral-300">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-400" /> {p}</li>
        ))}
      </ul>
    </div>
  );
}

function CaseCard({ tag, title, stat, sub }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6">
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-blue-500/10 blur-2xl" />
      <span className="text-xs uppercase tracking-widest text-neutral-400">{tag}</span>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <div className="mt-6 text-3xl font-bold">{stat}</div>
      <p className="text-sm text-neutral-400">{sub}</p>
    </div>
  );
}
