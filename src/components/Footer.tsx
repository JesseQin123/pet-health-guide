import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold text-white text-lg mb-2">🐾 Pet Health Guide</p>
            <p className="text-sm">
              Honest, research-backed reviews of holistic pet health products so
              your furry family can thrive naturally.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Quick Links</p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Disclosure</p>
            <p className="text-xs leading-relaxed">
              This site contains affiliate links. We may earn a commission when
              you purchase through our links at no extra cost to you. We only
              recommend products we believe in.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-xs">
          <p>© {year} Pet Health Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
