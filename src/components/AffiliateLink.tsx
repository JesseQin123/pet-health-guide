"use client";

interface AffiliateLinkProps {
  href: string;
  affiliate: string;
  className?: string;
  children: React.ReactNode;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AffiliateLink({ href, affiliate, className, children }: AffiliateLinkProps) {
  function handleClick() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "affiliate_click", {
        affiliate,
        page: window.location.pathname,
      });
    }
  }

  return (
    <a
      href={href}
      data-affiliate={affiliate}
      rel="nofollow noopener noreferrer"
      target="_blank"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
