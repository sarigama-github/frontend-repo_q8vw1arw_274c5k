export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} NovaDEX — Built with taste and precision.</p>
        </div>
      </div>
    </footer>
  )
}
