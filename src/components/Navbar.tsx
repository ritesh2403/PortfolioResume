import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-line" : ""
    }`}>
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg tracking-tight">
          R<span className="text-amber">.</span>G
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-text-secondary hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
