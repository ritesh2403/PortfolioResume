import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { number: "₹7T", label: "Annual TPV Processed", suffix: "/yr" },
  { number: "7", label: "Years of Engineering", suffix: "+" },
  { number: "20", label: "Engineers Led", suffix: "" },
  { number: "99.9", label: "Uptime SLA Delivered", suffix: "%" },
];

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--text-secondary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--text-secondary)) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />
      
      <div className={`relative z-10 max-w-[1600px] mx-auto w-full ${isVisible ? 'reveal' : 'opacity-0'}`}>
        <p className="label-uppercase mb-6 text-amber">Head of Products & Projects</p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
          Ritesh<br />
          <span className="text-gradient-amber">Ghorui</span>
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
          Head of Products & Projects building enterprise-scale systems. 
          From payment gateways processing trillions to multitenant SaaS platforms — 
          engineering that operates at India's infrastructure layer.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`${isVisible ? `reveal reveal-delay-${i + 1}` : 'opacity-0'}`}>
              <div className="stat-number text-5xl md:text-6xl lg:text-7xl">
                {stat.number}<span className="text-3xl md:text-4xl">{stat.suffix}</span>
              </div>
              <p className="label-uppercase mt-3 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-text-secondary/30 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
