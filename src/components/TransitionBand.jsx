import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export default function TransitionBand() {
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0.1, 0.35], ['8%', '28%'])
  const opacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1])

  return (
    <section aria-hidden className="relative">
      <motion.div style={{ height }} className="w-full" />
      <motion.div style={{ opacity }} className="absolute inset-x-0 -bottom-12 h-48">
        <div className="h-full bg-gradient-to-b from-white via-[#F5F5F5] to-[#F5F5F5]">
          <div className="h-full relative">
            {/* Glow lines expanding */}
            <div className="absolute inset-0" style={{
              backgroundImage:
                'linear-gradient(to right, rgba(77,159,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(77,159,255,0.12) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-[#F5F5F5]" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
