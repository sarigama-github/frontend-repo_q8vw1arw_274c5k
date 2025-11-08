import { useState } from 'react'
import { ChevronDown, ArrowDownUp, Info } from 'lucide-react'
import { motion } from 'framer-motion'

const tokens = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'DAI', name: 'Dai' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin' },
]

export default function SwapWidget() {
  const [fromToken, setFromToken] = useState(tokens[0])
  const [toToken, setToToken] = useState(tokens[1])
  const [amount, setAmount] = useState('')

  const switchTokens = () => {
    setFromToken(toToken)
    setToToken(fromToken)
  }

  return (
    <section id="swap" className="relative bg-neutral-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg font-semibold">Swap</h3>
            <button className="text-white/70 hover:text-white text-sm flex items-center gap-1">
              <Info className="h-4 w-4" />
              How it works
            </button>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-3 py-2">
                  <span className="font-semibold">{fromToken.symbol}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.0"
                  className="bg-transparent text-right text-2xl text-white placeholder-white/30 outline-none w-1/2"
                />
              </div>
              <p className="text-xs text-white/50 mt-2">{fromToken.name}</p>
            </div>

            <div className="flex justify-center -my-2">
              <button onClick={switchTokens} className="rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 p-2 text-white shadow-lg">
                <ArrowDownUp className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="flex items-center justify-between">
                <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-3 py-2">
                  <span className="font-semibold">{toToken.symbol}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="text-right">
                  <p className="text-2xl text-white">~0.0</p>
                </div>
              </div>
              <p className="text-xs text-white/50 mt-2">{toToken.name}</p>
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-indigo-600 py-3 text-white font-semibold shadow-xl shadow-fuchsia-500/20">
              Connect Wallet
            </button>

            <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="flex items-center justify-between"><span>Price</span> <span>—</span></p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="flex items-center justify-between"><span>Slippage</span> <span>0.5%</span></p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-4">Market Overview</h3>
          <div className="space-y-4">
            {["ETH/USDC", "BTC/USDC", "SOL/USDC"].map((pair) => (
              <div key={pair} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-white">{pair}</p>
                <p className="text-emerald-400">+1.2%</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/60">Live data integration coming soon. This UI is designed for high-end clarity and minimal noise.</p>
        </motion.div>
      </div>
    </section>
  )
}
