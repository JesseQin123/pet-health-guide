import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl tracking-tight">Pet Health Guide</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-emerald-200 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-emerald-200 transition-colors">
            Blog
          </Link>
          <Link href="/privacy-policy" className="hover:text-emerald-200 transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
