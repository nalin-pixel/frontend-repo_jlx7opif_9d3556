import { motion } from 'framer-motion'
import { Activity, Building2, Sparkles } from 'lucide-react'
import React from 'react'

const industries = [
  {
    icon: Activity,
    title: 'Healthcare',
    desc: 'AI-driven booking, reminders, lead qualification',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    desc: 'Lead qualification, CRM pipeline automation',
  },
  {
    icon: Sparkles,
    title: 'Beauty & Wellness',
    desc: 'WhatsApp AI booking and intelligent upsell flows',
  },
]

export default function Industries() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F5F5F5] to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] text-center mb-12"
        >
          Industry Use Cases
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(250,250,250,0.9))] p-6 shadow-[0_10px_30px_rgba(26,26,26,0.05)] hover:shadow-[0_20px_60px_rgba(77,159,255,0.15)] transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-[#4D9FFF]/10 text-[#4D9FFF]">
                  {React.createElement(it.icon, { className: 'w-6 h-6' })}
                </div>
                <h3 className="font-medium text-[#1A1A1A]">{it.title}</h3>
              </div>
              <p className="text-slate-600">{it.desc}</p>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#4D9FFF]/40 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
