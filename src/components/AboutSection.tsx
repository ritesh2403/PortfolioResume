import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import avatarImg from "@/assets/avatar-placeholder.jpg";
import { Briefcase, Users, Server, Shield } from "lucide-react";

const impactMetrics = [
  {
    icon: Server,
    value: "₹7T",
    suffix: "/yr",
    label: "Transaction Volume",
    context: "CCAvenue payment gateway",
  },
  {
    icon: Users,
    value: "20",
    suffix: "+",
    label: "Engineers Led",
    context: "Cross-functional Agile teams",
  },
  {
    icon: Briefcase,
    value: "10",
    suffix: "",
    label: "Enterprise Tenants",
    context: "Multitenant SaaS platform",
  },
  {
    icon: Shield,
    value: "99.9",
    suffix: "%",
    label: "Uptime SLA",
    context: "Production systems",
  },
];

const whatIBring = [
  {
    title: "0-to-1 Product Builder",
    description:
      "I don't inherit codebases — I create them. Built a complete multitenant Supply Chain SaaS from scratch: architecture, microservices, deployment, team, and client delivery.",
  },
  {
    title: "Enterprise-Grade Architect",
    description:
      "Event-driven microservices, read/write DB routing, Redis caching layers, feature-flag RBAC — systems designed to handle real production pressure, not demos.",
  },
  {
    title: "Team & Stakeholder Leader",
    description:
      "Led 20 engineers across sprints, facilitated client discovery, translated business needs into sprint-ready specs, and drove 50% infrastructure cost reduction.",
  },
];

const highlights = [
  { label: "Location", value: "Mumbai, India" },
  { label: "Current Role", value: "Head of Products & Projects" },
  { label: "Domains", value: "Supply Chain · Fintech · Manufacturing · Payments" },
  { label: "Languages", value: "English · Hindi · Marathi · Bengali" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} id="about" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        {/* Top: Photo + Headline + Narrative */}
        <div className={`${isVisible ? "reveal" : "opacity-0"}`}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
            {/* Left — Photo + Quick facts */}
            <div className="flex flex-col items-start gap-8 lg:w-[320px] shrink-0">
              <div className="relative group">
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-sm overflow-hidden surface-card shadow-xl shadow-black/30">
                  <img
                    src={avatarImg}
                    alt="Ritesh Ghorui"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-amber opacity-30" />
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-amber opacity-20" />
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

            {/* Right — Narrative */}
            <div className="flex-1 space-y-8">
              <div>
                <p className="label-uppercase mb-4 text-amber">About Me</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-2">
                  I build products from zero —
                </h2>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-text-secondary">
                  and scale them to millions.
                </h2>
              </div>

              <div className="space-y-5 text-text-secondary leading-relaxed text-[15px] max-w-2xl">
                <p>
                  Most engineers optimise existing systems. <span className="text-foreground font-medium">I create the systems
                  that don't exist yet.</span> From a blank repo to a production platform serving
                  enterprise clients — I've done it end-to-end, multiple times.
                </p>
                <p>
                  At <span className="text-foreground font-medium">Wrxflo</span>, I built a complete multitenant Supply Chain
                  SaaS from scratch — 10 enterprise tenants onboarded, 4 microservices, event-driven
                  architecture, real-time GPS logistics tracking, and factory floor digitisation.
                  I own everything: architecture decisions, team of 20 engineers, client relationships,
                  and production deployments.
                </p>
                <p>
                  Before that, at <span className="text-foreground font-medium">CCAvenue (Infibeam Avenues)</span>, I
                  architected payment gateway infrastructure processing ₹7 Trillion annually —
                  card tokenisation for 4,000+ hotel partners, real-time settlement engines,
                  and PCI-DSS compliant systems that India's top merchants depend on daily.
                </p>
                <p className="text-amber/90 font-medium text-sm border-l-2 border-amber/40 pl-4">
                  I don't just write code. I build the product, lead the team, talk to the client,
                  and make sure it ships — on time, at scale, without excuses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact metrics strip */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20 ${isVisible ? "reveal reveal-delay-1" : "opacity-0"}`}>
          {impactMetrics.map((m) => (
            <div
              key={m.label}
              className="surface-card rounded-sm p-6 group hover:border-amber/30 transition-all duration-300"
            >
              <m.icon className="w-5 h-5 text-amber mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-amber leading-none mb-1">
                {m.value}
                <span className="text-xl md:text-2xl">{m.suffix}</span>
              </div>
              <p className="text-sm text-foreground font-medium mb-0.5">{m.label}</p>
              <p className="text-xs text-text-secondary">{m.context}</p>
            </div>
          ))}
        </div>

        {/* What I Bring — recruiter-focused value props */}
        <div className={`${isVisible ? "reveal reveal-delay-2" : "opacity-0"}`}>
          <p className="label-uppercase mb-8 text-xs text-amber">Why Hire Me</p>
          <div className="grid gap-4 md:grid-cols-3">
            {whatIBring.map((item, i) => (
              <div
                key={item.title}
                className={`surface-card-alt rounded-sm p-7 hover:border-amber/20 transition-all duration-300 ${
                  isVisible ? `reveal reveal-delay-${i + 2}` : "opacity-0"
                }`}
              >
                <div className="w-8 h-8 rounded-sm bg-amber/10 flex items-center justify-center mb-4">
                  <span className="font-display text-amber font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold mb-3">{item.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
