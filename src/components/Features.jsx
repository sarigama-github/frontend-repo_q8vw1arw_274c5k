import { Shield, Zap, Globe2 } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: 'Audited Security',
    desc: 'Built with rigorous best practices to keep your assets safe.'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    desc: 'Lightning-quick swaps and silky-smooth interactions.'
  },
  {
    icon: Globe2,
    title: 'Cross-Chain Ready',
    desc: 'Designed to extend seamlessly across modern chains.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-neutral-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_40%,rgba(236,72,153,0.25),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white text-center">
          Crafted for pros. Friendly for everyone.
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 grid place-items-center text-white shadow-lg shadow-cyan-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
