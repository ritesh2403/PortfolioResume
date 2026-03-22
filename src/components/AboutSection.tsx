import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import avatarImg from "@/assets/avatar-placeholder.jpg";

const philosophies = [
  {
    title: "Architecture First",
    description: "Every system begins with a clear architecture. I design for scale before writing the first line of code.",
  },
  {
    title: "Ownership Mentality",
    description: "From infrastructure costs to customer impact — I treat every system as if the business depends on it. Because it does.",
  },
  {
    title: "Ship, Measure, Iterate",
    description: "Speed matters, but so does quality. I balance rapid delivery with robust monitoring and data-driven refinement.",
  },
];

const highlights = [
  { label: "Location", value: "Navi Mumbai, India" },
  { label: "Current Role", value: "Head of Products & Projects" },
  { label: "Focus", value: "Fintech · Enterprise SaaS · Payments" },
  { label: "Education", value: "B.E. Computer Engineering" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      id="about"
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className={`section-grid ${isVisible ? "reveal" : "opacity-0"}`}>
          {/* Left column — avatar + quick facts */}
          <div className="section-label flex flex-col items-start gap-8">
            <div className="relative group">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-sm overflow-hidden surface-card shadow-lg shadow-black/20">
                <img
                  src={avatarImg}
                  alt="Ritesh Ghorui"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-amber opacity-40" />
            </div>

            <div className="space-y-3 w-full">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="label-uppercase text-[10px]">{item.label}</span>
                  <span className="text-sm text-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — about narrative */}
          <div className="section-content space-y-10">
            <div>
              <p className="label-uppercase mb-4 text-amber">About</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
                Building 0-to-1 products that solve<br className="hidden md:block" /> real problems on the factory floor
              </h2>
            </div>

            <div className="space-y-5 text-text-secondary leading-relaxed text-[15px]">
              <p>
                I'm a Solution Architect and Technical Lead with 6.7+ years of experience 
                engineering high-throughput, mission-critical platforms across fintech and 
                enterprise SaaS. My work sits at the intersection of product thinking and 
                deep technical execution — I don't just write code, I design the systems 
                that businesses run on.
              </p>
              <p>
                At CCAvenue, I architected and led payment gateway systems processing 
                ₹7 Trillion in annual transaction volume, serving 200+ enterprise 
                merchants with 99.9% uptime SLA. I've built everything from real-time 
                settlement engines and fraud detection pipelines to multitenant SaaS 
                platforms that scale effortlessly.
              </p>
              <p>
                Currently at Wrxflo, I lead a 20-member engineering team building 
                next-generation workflow automation — transforming how enterprises handle 
                operations through intelligent process orchestration. I own the full 
                spectrum: architecture, team leadership, delivery, and stakeholder alignment.
              </p>
            </div>

            {/* Engineering philosophy */}
            <div className="pt-4">
              <p className="label-uppercase mb-6 text-xs">Engineering Philosophy</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {philosophies.map((p, i) => (
                  <div
                    key={p.title}
                    className={`surface-card rounded-sm p-5 hover:border-amber/30 transition-colors duration-300 ${
                      isVisible ? `reveal reveal-delay-${i + 1}` : "opacity-0"
                    }`}
                  >
                    <h4 className="font-display text-sm font-semibold mb-2">{p.title}</h4>
                    <p className="text-text-secondary text-xs leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
