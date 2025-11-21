import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import TransitionBand from './components/TransitionBand'
import Features from './components/Features'
import Industries from './components/Industries'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import './index.css'

function App() {
  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Minimal navbar */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif tracking-wide">STOAİX</div>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-[#1A1A1A]">Features</a>
            <a href="#" className="hover:text-[#1A1A1A]">Use Cases</a>
            <a href="#cta" className="hover:text-[#1A1A1A]">Book Demo</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <TransitionBand />
        <Features />
        <Industries />
        <SocialProof />
        <FinalCTA />
      </main>
    </div>
  )
}

export default App
