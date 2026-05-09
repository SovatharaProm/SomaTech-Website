import Image from "next/image";
import { GitFork, Share2, Link2, Rss } from "lucide-react";

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61572607197768" },
  { icon: GitFork, label: "GitHub", href: "#" },
  { icon: Share2, label: "Twitter / X", href: "#" },
  { icon: Link2, label: "LinkedIn", href: "#" },
  { icon: Rss, label: "YouTube", href: "#" },
];

const links: Record<string, string[]> = {
  Company: ["About", "What We Do", "Mission", "Contact"],
  Products: ["Mobile Apps", "Web Platforms", "Developer Tools", "AI Solutions"],
  Resources: ["Blog", "Documentation", "Community", "Careers"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "rgba(255,255,255,0.07)", background: "#0d1420" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 overflow-hidden rounded-full">
                <Image
                  src="/somatech-logo.jpg"
                  alt="SomaTech"
                  fill
                  className="object-cover scale-[1.8] translate-x-[-18%]"
                />
              </div>
              <span className="text-white font-semibold tracking-widest uppercase text-sm">
                Soma<span className="text-[#60a5fa]">Tech</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-[210px]">
              Smart solutions for Modern Businesses — one product at a time.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#60a5fa] hover:border-[rgba(96,165,250,0.3)] transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <span>© {year} SomaTech. All rights reserved.</span>
          <span>Built with precision in Phnom Penh, Cambodia.</span>
        </div>
      </div>
    </footer>
  );
}
