import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Database, Cloud, Layers, BarChart3, Users } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    skills: [
      { name: "Java 8/11/17/21", level: 100 },
      { name: "Spring Boot", level: 100 },
      { name: "Spring Security", level: 100 },
      { name: "Spring Cloud", level: 100 },
      { name: "React 19", level: 100 },
      { name: "Angular", level: 100 },
      { name: "TypeScript", level: 100 },
    ],
  },
  {
    icon: Layers,
    title: "Architecture & Patterns",
    skills: [
      { name: "Microservices", level: 100 },
      { name: "Event-Driven", level: 100 },
      { name: "Multitenant SaaS", level: 100 },
      { name: "REST API Design", level: 100 },
      { name: "Domain-Driven Design", level: 100 },
      { name: "CQRS", level: 100 },
    ],
  },
  {
    icon: Database,
    title: "Data & Messaging",
    skills: [
      { name: "MySQL", level: 100 },
      { name: "Azure SQL Hyperscale", level: 100 },
      { name: "SQL Server", level: 100 },
      { name: "Redis", level: 100 },
      { name: "Kafka", level: 100 },
      { name: "RabbitMQ", level: 100 },
      { name: "Elasticsearch", level: 100 },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 100 },
      { name: "Kubernetes", level: 100 },
      { name: "Azure", level: 100 },
      { name: "AWS", level: 100 },
      { name: "Jenkins CI/CD", level: 100 },
      { name: "IBM Code Engine", level: 100 },
    ],
  },
  {
    icon: BarChart3,
    title: "Observability & Security",
    skills: [
      { name: "Grafana", level: 100 },
      { name: "Prometheus", level: 100 },
      { name: "Loki", level: 100 },
      { name: "PCI-DSS Compliance", level: 100 },
      { name: "AES/RSA Encryption", level: 100 },
      { name: "WebSockets / SSE", level: 100 },
    ],
  },
  {
    icon: Users,
    title: "Leadership & Process",
    skills: [
      { name: "Agile / Scrum", level: 100 },
      { name: "Team Leadership (20+)", level: 100 },
      { name: "Stakeholder Mgmt", level: 100 },
      { name: "Product Roadmap", level: 100 },
      { name: "Technical Mentorship", level: 100 },
      { name: "Client Discovery", level: 100 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="skills" className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        <div className={`section-grid mb-14 ${isVisible ? "reveal" : "opacity-0"}`}>
          <div className="section-label">
            <p className="label-uppercase text-amber mb-3">02</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Core Skills &<br />Technologies
            </h2>
          </div>
          <div className="section-content">
            <p className="text-text-secondary text-lg max-w-xl">
              Deep expertise across the full stack — from JVM internals and distributed systems to cloud infrastructure and team leadership.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`surface-card rounded-sm p-6 hover:border-amber/30 transition-all duration-300 ${
                isVisible ? `reveal reveal-delay-${Math.min(ci + 1, 4)}` : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-sm bg-amber/10 flex items-center justify-center">
                  <cat.icon className="w-4.5 h-4.5 text-amber" />
                </div>
                <h3 className="font-display text-sm font-semibold tracking-tight">{cat.title}</h3>
              </div>

              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground group-hover:text-amber transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="font-mono-code text-[10px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          background: `linear-gradient(90deg, hsl(var(--amber)), hsl(var(--amber-hover)))`,
                          transitionDelay: isVisible ? `${ci * 100 + 200}ms` : "0ms",
                        }}
                      />
                    </div>
                  </div>
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
