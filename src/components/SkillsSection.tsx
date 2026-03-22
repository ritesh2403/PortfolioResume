import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skills = {
  Expert: [
    "Java 21", "Spring Boot", "Spring Security", "Microservices", "REST API",
    "Kafka", "RabbitMQ", "Redis", "MySQL", "Docker", "Kubernetes",
    "React 19", "CI/CD", "Event-Driven Architecture", "Multitenant SaaS"
  ],
  Proficient: [
    "Angular", "Python", "PostgreSQL", "Elasticsearch", "AWS", "Azure",
    "Jenkins", "Grafana", "Prometheus", "WebSockets", "Agile/Scrum",
    "Product Roadmap", "Stakeholder Management"
  ],
  Tools: [
    "Azure Key Vault", "IBM Cloud", "TomTom API", "Google Hotel Center API",
    "WhatsApp Business API", "Google Analytics", "Zoho"
  ],
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="skills" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto section-grid">
        <div className={`section-label ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <p className="label-uppercase text-amber mb-3">02</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Core Skills &<br />Technologies
          </h2>
        </div>

        <div className={`section-content space-y-10 ${isVisible ? 'reveal reveal-delay-2' : 'opacity-0'}`}>
          {Object.entries(skills).map(([level, items]) => (
            <div key={level}>
              <p className="label-uppercase mb-4">{level}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-sm border border-line transition-colors duration-200 hover:border-amber hover:text-amber ${
                      level === "Expert" ? "surface-card-alt text-foreground" : "text-text-secondary"
                    }`}
                  >
                    {skill}
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

export default SkillsSection;
