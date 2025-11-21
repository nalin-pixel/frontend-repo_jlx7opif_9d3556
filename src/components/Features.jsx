import { motion } from 'framer-motion'
import { Workflow, Bot, Network, LayoutDashboard } from 'lucide-react'
import React from 'react'

const features = [
  {
    icon: Workflow,
    title: 'End-to-End Automations',
    desc: 'Triggers, workflows, integrations',
  },
  {
    icon: LayoutDashboard,
    title: 'Smart CRM Setup',
    desc: 'Pipelines, lead scoring, attribution',
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Voice Assistants',
    desc: 'WhatsApp, Instagram, Web, Phone',
  },
  {
    icon: Network,
    title: 'Cross-Platform Flows',
    desc: 'Email + Social + Lead routing',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] text-center mb-12"
        >
          What STOAİX Builds
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/60 bg-white/50 backdrop-blur-md p-6 shadow-[0_10px_40px_rgba(26,26,26,0.05)] hover:shadow-[0_12px_50px_rgba(77,159,255,0.15)] transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-xl bg-[#4D9FFF]/10 text-[#4D9FFF]">
                  {React.createElement(f.icon, { className: 'w-6 h-6' })}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#4D9FFF] text-xs">pulse</div>
              </div>
              <h3 className="font-medium text-[#1A1A1A] mb-1">{f.title}</h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#4D9FFF]/40 transition-[box-shadow,ring]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
