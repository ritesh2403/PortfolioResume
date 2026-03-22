import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const sections = ["about", "skills", "experience", "projects", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 120) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 transition-all duration-300 ${
          scrolled || mobileOpen ? "bg-background/80 backdrop-blur-md border-b border-line" : ""
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => handleClick(e, "#")}
            className="font-display font-bold text-lg tracking-tight"
          >
            R<span className="text-amber">.</span>G
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-8">
            {links.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-amber font-medium"
                      : "text-text-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/Ritesh_Ghorui_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase px-4 py-2 bg-amber text-primary-foreground rounded-sm hover:bg-amber-hover transition-colors duration-200 active:scale-[0.97]"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-2 -mr-2 text-text-secondary hover:text-foreground transition-colors duration-200 active:scale-[0.95]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/90 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`relative flex flex-col items-center justify-center h-full gap-6 transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          {links.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`font-display text-2xl font-semibold tracking-tight transition-all duration-300 ${
                  isActive ? "text-amber" : "text-text-secondary hover:text-foreground"
                }`}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="/Ritesh_Ghorui_Resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold tracking-wide uppercase px-6 py-3 bg-amber text-primary-foreground rounded-sm hover:bg-amber-hover transition-colors duration-200 active:scale-[0.97]"
            style={{ transitionDelay: mobileOpen ? `${links.length * 60}ms` : "0ms" }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
