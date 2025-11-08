import { Wallet, Rocket, BarChart3, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-600 shadow-lg shadow-cyan-500/30">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white text-lg">
              NovaDEX
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#swap" className="hover:text-white transition-colors">Swap</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#analytics" className="hover:text-white transition-colors flex items-center gap-1">
              <BarChart3 className="h-4 w-4" /> Analytics
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 transition-colors">
              <Settings className="h-4 w-4" />
              Settings
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-white shadow-lg shadow-fuchsia-500/30">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
