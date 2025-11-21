import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative">
      <div className="grid md:grid-cols-2">
        {/* Left: marble */}
        <div className="relative">
          <div className="aspect-[4/3] md:aspect-auto md:min-h-[420px] w-full bg-[linear-gradient(135deg,#FAFAFA, #F5F5F5)]" />
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage:
              'radial-gradient(circle at 30% 20%, rgba(77,159,255,0.15), transparent 40%), radial-gradient(circle at 70% 80%, rgba(77,159,255,0.15), transparent 40%)'
          }} />
        </div>
        {/* Right: holographic grid */}
        <div className="relative bg-white">
          <div className="absolute inset-0 opacity-80" style={{
            backgroundImage:
              'linear-gradient(to right, rgba(77,159,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(77,159,255,0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }} />
          <div className="relative max-w-xl mx-auto px-6 py-16">
            <h3 className="font-serif text-3xl text-[#1A1A1A] mb-4">Ready to Automate Your Business?</h3>
            <p className="text-slate-600 mb-8">Book your 20‑minute demo and see how we combine stoic precision with cutting‑edge AI.</p>
            <a href="#" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1A1A1A] text-white shadow-[0_10px_30px_rgba(26,26,26,0.2)]">
              <span>Book Your 20‑Minute Demo</span>
              <ArrowRight className="w-4 h-4 text-[#4D9FFF] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center text-slate-500 text-sm py-10">© {new Date().getFullYear()} STOAİX</footer>
    </section>
  )
}
