import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(56,189,248,0.25),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]"
        >
          Trade crypto with elegance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto"
        >
          A futuristic, human-crafted DEX experience inspired by the finest design—fast, secure, and beautifully minimal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex justify-center gap-3"
        >
          <button className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-indigo-600 px-6 py-3 text-white font-semibold shadow-xl shadow-fuchsia-500/20">
            Launch App
          </button>
          <button className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-6 py-3">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  )
}
