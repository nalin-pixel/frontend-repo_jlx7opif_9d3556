import { motion } from 'framer-motion'
import React from 'react'

const logos = ['AURELIA', 'MONOLITH', 'NEONET', 'LYRA', 'ORION']

export default function SocialProof() {
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10">
          <div className="flex items-center justify-center gap-10 flex-wrap opacity-70">
            {logos.map((l) => (
              <div key={l} className="text-slate-400 tracking-[0.2em] text-xs">{l}</div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[0,1,2].map((i)=> (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-[0_8px_30px_rgba(26,26,26,0.05)]"
              >
                <p className="font-serif text-slate-800 mb-3">“Precision-built automations delivered real ROI within weeks.”</p>
                <footer className="text-xs text-slate-500 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4D9FFF] to-transparent" />
                  Fortune 100 Client
                </footer>
              </motion.blockquote>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full border border-slate-200">
              powered by STOAİX automation engine
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
