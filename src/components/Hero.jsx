import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'

const Particle = ({ delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: [0, 1, 0], y: [-10, 0, -10] }}
    transition={{ duration: 6, repeat: Infinity, delay }}
    className="w-1 h-1 rounded-full bg-[#4D9FFF] shadow-[0_0_8px_#4D9FFF]"
  />
)

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.4])

  return (
    <section className="relative overflow-hidden">
      {/* Background marble + holographic grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,rgba(77,159,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.9]" style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(250,250,250,0.9) 0%, rgba(245,245,245,0.9) 100%), url("data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'g\' x1=\'0\' y1=\'0\' x2=\'1\' y2=\'1\'%3E%3Cstop stop-color=\'%23ffffff\'/%3E%3Cstop offset=\'1\' stop-color=\'%23f3f3f3\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 120 C40 110 120 150 160 120 L160 160 L0 160 Z\' fill=\'%23ffffff\' opacity=\'0.35\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay'
        }} />
        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-60 pointer-events-none" style={{
          backgroundImage:
            'linear-gradient(to right, rgba(77,159,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(77,159,255,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 sm:pt-36 sm:pb-28">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-slate-200/60 shadow-[0_0_0_1px_rgba(255,255,255,0.6)_inset]">
            <Sparkles className="w-4 h-4 text-[#4D9FFF]" />
            <span className="text-slate-700 text-sm tracking-wide">STOAİX</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="font-serif text-4xl sm:text-6xl leading-[1.1] tracking-tight text-[#1A1A1A]">
            AI Automations That Scale Your Operations
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl text-slate-600 text-lg">
            CRM Setup • Automations • Voice AI • Chatbots • WhatsApp & Social Integrations
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="flex items-center gap-4">
            <a href="#cta" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/60 backdrop-blur-xl border border-white/70 shadow-[0_10px_40px_rgba(77,159,255,0.25)]">
              <span className="absolute inset-0 rounded-xl ring-1 ring-[#4D9FFF]/40" />
              <span className="text-[#1A1A1A] font-medium">Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-[#4D9FFF] transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300/70 text-slate-800 hover:border-[#4D9FFF] hover:text-[#1A1A1A] transition-colors">
              <span>See Use Cases</span>
            </a>
          </motion.div>

          {/* Centerpiece columns dissolving */}
          <div className="relative w-full mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl h-64 sm:h-80 relative"
            >
              {/* Columns */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center gap-10">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-16 sm:w-20 h-48 sm:h-64 bg-gradient-to-b from-white to-slate-100 rounded-t-2xl border border-slate-200 shadow-[inset_0_1px_0_#fff,0_10px_30px_rgba(0,0,0,0.05)]"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                  >
                    <div className="h-3 bg-slate-200/80 rounded-t-2xl" />
                    {/* Dissolve */}
                    <motion.div
                      className="absolute left-0 right-0 -bottom-4 flex justify-center gap-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                    >
                      {[...Array(18)].map((__, j) => (
                        <Particle key={j} delay={(i + j) * 0.05} />
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Subtle glow lines */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#4D9FFF] via-transparent to-transparent opacity-40" />
                <div className="absolute left-[35%] top-0 w-px h-full bg-gradient-to-b from-[#4D9FFF]/60 via-transparent to-transparent opacity-30" />
                <div className="absolute left-[65%] top-0 w-px h-full bg-gradient-to-b from-[#4D9FFF]/60 via-transparent to-transparent opacity-30" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
