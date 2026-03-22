import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "Supply Chain SaaS Platform",
    client: "Wrxflo",
    type: "0 → 1 Product Build",
    impact: "10 tenants · 99.9% SLA",
    description: "End-to-end multitenant SaaS with Auth, Digital Factory, Logistics, and Warehouse microservices. Redis sticky write routing, feature-flag RBAC, TomTom GPS tracking with custom shortest-path algorithm.",
    stack: ["Java 21", "Spring Boot", "React 19", "Azure SQL Hyperscale", "Redis", "Kubernetes"],
  },
  {
    title: "CCAvenue Payment Gateway",
    client: "Infibeam Avenues",
    type: "Enterprise Scale",
    impact: "₹7T/yr TPV",
    description: "High-availability payment infrastructure processing ₹40,000-60,000 crore/month. Multi-mode checkout (cards, UPI, net banking, wallets), AES+RSA encryption, real-time monitoring dashboards.",
    stack: ["Java 11", "Spring Boot", "MySQL", "Kafka", "RabbitMQ", "PCI-DSS"],
  },
  {
    title: "Armstrong Timber Engineering",
    client: "UK Manufacturer",
    type: "Digital Transformation",
    impact: "Paper → Digital",
    description: "Web and tablet application digitalising factory production tracking — real-time stage tracking from picking to sawing to final production. Automated time logging for work bonus calculation.",
    stack: ["Java 21", "Spring Boot", "JPA", "JWT", "SQL Server"],
  },
  {
    title: "Card Tokenisation System",
    client: "Infibeam / RBI Compliance",
    type: "Security Infrastructure",
    impact: "4,000+ partners",
    description: "Secure vault tokenising credit/debit cards per RBI Card-on-File guidelines. OTP and direct payment flows, full profile and token lifecycle management for third-party merchant integrations.",
    stack: ["Java 11", "Spring Boot", "RSA", "JMS", "MySQL"],
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className={`section-grid mb-16 ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <div className="section-label">
            <p className="label-uppercase text-amber mb-3">04</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Key<br />Projects
            </h2>
          </div>
          <div className="section-content">
            <p className="text-text-secondary text-lg max-w-xl">
              Systems engineered for scale, compliance, and real-world impact across payments, supply chain, and manufacturing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`surface-card rounded-sm p-8 group hover:border-amber/30 transition-all duration-300 ${
                isVisible ? `reveal reveal-delay-${i + 1}` : 'opacity-0'
              }`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="label-uppercase text-amber">{project.type}</span>
                <span className="font-display text-lg font-semibold text-amber">{project.impact}</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-text-secondary text-sm mb-4">{project.client}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono-code text-xs px-2 py-1 rounded-sm bg-background text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
