import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const sections = ["about", "skills", "experience", "projects", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-line" : ""
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
      </div>
    </nav>
  );
};

export default Navbar;
