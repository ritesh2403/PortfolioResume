import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    role: "Head of Products & Projects",
    company: "Wrxflo",
    period: "Sep 2023 — Present",
    duration: "2 yrs 6 mos",
    location: "Mumbai, India",
    highlights: [
      "Architected 0-to-1 multitenant Supply Chain SaaS — 10 enterprise tenants, 99.9% uptime SLA",
      "Led 20 engineers across Agile/Scrum, owning product roadmap from discovery to delivery",
      "Built event-driven microservices on Azure SQL Hyperscale with Named Replica read/write routing",
      "Drove 50% infrastructure cost reduction through cloud-native architectural optimization",
      "Established full observability: Prometheus, Loki, Grafana Tempo, Micrometer distributed tracing",
    ],
    stack: "Java 21 · Spring Boot · React 19 · Azure · Kafka · Redis · Docker · K8s",
  },
  {
    role: "Java Technical Lead",
    company: "Infibeam Avenues (CCAvenue)",
    period: "Sep 2019 — Sep 2023",
    duration: "4 yrs",
    location: "Mumbai, India",
    highlights: [
      "Built & scaled CCAvenue payment gateway processing ₹7 trillion/year TPV with PCI-DSS compliance",
      "Engineered card tokenisation (AES + RSA) for 4,000+ hotel partners, reducing PCI scope",
      "Built event-driven async pipelines (Kafka + RabbitMQ) handling millions of payment events",
      "Real-time transaction monitoring via WebSockets & SSE for live payment flow visibility",
      "Automated reconciliation with Quartz/Spring Scheduler, eliminating manual settlement delays",
    ],
    stack: "Java 11 · Spring Boot · MySQL · Kafka · RabbitMQ · REST API",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="experience" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-[1600px] mx-auto section-grid">
        <div className={`section-label ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <p className="label-uppercase text-amber mb-3">03</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Professional<br />Experience
          </h2>
        </div>

        <div className="section-content space-y-16">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`${isVisible ? `reveal reveal-delay-${i + 1}` : 'opacity-0'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="font-display text-xl md:text-2xl font-semibold">{exp.role}</h3>
                <span className="text-text-secondary text-sm">{exp.period}</span>
              </div>
              <p className="text-amber font-medium mb-1">{exp.company}</p>
              <p className="text-text-secondary text-sm mb-6">{exp.location} · {exp.duration}</p>

              <ul className="space-y-3 mb-6">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                    <span className="text-amber mt-1.5 flex-shrink-0">▪</span>
                    {h}
                  </li>
                ))}
              </ul>

              <p className="font-mono-code text-xs text-text-secondary/70">{exp.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
