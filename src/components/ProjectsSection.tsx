import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

interface Project {
  title: string;
  client: string;
  type: string;
  impact: string;
  description: string;
  stack: string[];
  company: "wrxflo" | "ccavenue";
}

const projects: Project[] = [
  // Wrxflo Projects
  {
    title: "Supply Chain SaaS Platform",
    client: "Wrxflo",
    type: "0 → 1 Product Build",
    impact: "10 tenants · 99.9% SLA",
    description:
      "End-to-end multitenant SaaS with Auth, Digital Factory, Logistics, and Warehouse microservices. Redis sticky write routing, feature-flag RBAC, Azure SQL Hyperscale with Named Replicas for read/write separation.",
    stack: ["Java 21", "Spring Boot", "React 19", "Azure SQL", "Redis", "Kubernetes"],
    company: "wrxflo",
  },
  {
    title: "ATE — Armstrong Timber Engineering",
    client: "UK Manufacturer",
    type: "Digital Transformation",
    impact: "Paper → Digital",
    description:
      "Web and tablet application digitalising factory production tracking — real-time stage tracking from picking to sawing to final production. Integrated employee daily time log tracking for automated work bonus calculation.",
    stack: ["Java 21", "Spring Boot", "JPA", "JWT", "SQL Server"],
    company: "wrxflo",
  },
  {
    title: "PPI Adhesive — Shop Order System",
    client: "Gum Manufacturer",
    type: "Manufacturing MES",
    impact: "Full Lifecycle Mgmt",
    description:
      "Shop-order lifecycle management: setup start/end, job start, job end, hold, and completion. Advanced parameter capture — temperature, coating thickness — with real-time quality control via test case executions on production samples. KPI dashboard for operational visibility.",
    stack: ["Java 21", "Spring Boot", "JPA", "JWT", "SQL Server"],
    company: "wrxflo",
  },
  {
    title: "FrameSpace — Timber House Manufacturer",
    client: "Irish Manufacturer",
    type: "Production Planning",
    impact: "Capacity Optimisation",
    description:
      "Production planning and design tool for Ireland's prominent timber house manufacturer. Timber frame assignment to processing stations, operator work-hour logging for bonus calculation, and comprehensive capacity charts for throughput insights.",
    stack: ["Java 11", "Spring Boot", "JPA", "JWT", "SQL Server"],
    company: "wrxflo",
  },
  // CCAvenue / Infibeam Projects
  {
    title: "CCAvenue Payment Gateway",
    client: "Infibeam Avenues",
    type: "Enterprise Scale",
    impact: "₹7T/yr TPV",
    description:
      "High-availability payment infrastructure processing ₹40,000–60,000 crore/month. Multi-mode checkout (cards, UPI, net banking, wallets), AES+RSA encryption end-to-end, real-time monitoring via WebSockets and SSE.",
    stack: ["Java 11", "Spring Boot", "MySQL", "Kafka", "RabbitMQ"],
    company: "ccavenue",
  },
  {
    title: "Card Tokenisation System",
    client: "Infibeam / RBI Compliance",
    type: "Security Infrastructure",
    impact: "4,000+ partners",
    description:
      "Tokenised credit/debit card details into secure vault per RBI Card-on-File guidelines. Seamless repeat payment experience — OTP and non-OTP flows. Third-party merchant API with full profile and token lifecycle management.",
    stack: ["Java 11", "Spring Boot", "RSA", "JMS", "MySQL"],
    company: "ccavenue",
  },
  {
    title: "MARS — Merchant Accounting & Reporting",
    client: "Infibeam Avenues",
    type: "Merchant Portal",
    impact: "200+ Merchants",
    description:
      "Merchant-facing portal for real-time transaction monitoring, reporting, and lead-to-sale conversion via PayInvite — serving merchants processing part of ₹7T annual TPV.",
    stack: ["Java 11", "Spring Boot", "MySQL"],
    company: "ccavenue",
  },
  {
    title: "Direct Pay — QR Payment Gateway",
    client: "Infibeam Avenues",
    type: "Payment Innovation",
    impact: "Multi-mode QR",
    description:
      "QR-code-based payment solution supporting credit/debit cards, net banking, and UPI modes for seamless merchant checkout experiences.",
    stack: ["Java 11", "Spring Boot", "JMS", "MySQL"],
    company: "ccavenue",
  },
  {
    title: "Hotel Booking Engine",
    client: "Infibeam Avenues",
    type: "Vertical SaaS",
    impact: "4,000+ Hotels",
    description:
      "Hotel direct-sales engine onboarding 4,000+ hotel partners — converting hotel websites into direct booking channels with responsive, personalised guest experiences. Included package/enrichment engine for upselling amusement parks, spa, gym, and catering services.",
    stack: ["Java 11", "Spring Boot", "JPA", "JWT", "MySQL"],
    company: "ccavenue",
  },
  {
    title: "Google Hotel Center API Integration",
    client: "Infibeam Avenues",
    type: "SEO & Distribution",
    impact: "4,000+ Partners → Google",
    description:
      "Onboarded 4,000+ hotel partners to Google SEO — pushed real-time rates, inventory, and stopSell conditions to Google's API, maximising direct booking visibility and revenue.",
    stack: ["Java 11", "Spring Boot", "REST API", "MySQL"],
    company: "ccavenue",
  },
  {
    title: "WhatsApp Messenger Integration",
    client: "Infibeam Avenues",
    type: "Notification Service",
    impact: "Automated Comms",
    description:
      "Automated WhatsApp notifications for invoice delivery, payment collection dues, and settlement messages during transactions and bookings.",
    stack: ["Java 11", "Spring Boot", "REST API", "MySQL"],
    company: "ccavenue",
  },
  {
    title: "Traffic & Revenue Analytics",
    client: "Infibeam Avenues",
    type: "Business Intelligence",
    impact: "Data-Driven Insights",
    description:
      "Dynamic reporting dashboard tracking end-user activity on booking engines for merchant traffic and revenue analytics. Included Google Analytics runtime integration per merchant and geo-location IP logging.",
    stack: ["Java 11", "Spring MVC", "JPA", "MySQL"],
    company: "ccavenue",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState<"all" | "wrxflo" | "ccavenue">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.company === filter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);
  const hasMore = filtered.length > 6;

  return (
    <section ref={ref} id="projects" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-[1600px] mx-auto">
        <div className={`section-grid mb-12 ${isVisible ? "reveal" : "opacity-0"}`}>
          <div className="section-label">
            <p className="label-uppercase text-amber mb-3">04</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Key<br />Projects
            </h2>
          </div>
          <div className="section-content">
            <p className="text-text-secondary text-lg max-w-xl mb-6">
              {projects.length} systems engineered across payments, supply chain, and manufacturing — from 0-to-1 builds to enterprise-scale platforms.
            </p>

            {/* Filter tabs */}
            <div className="flex gap-2">
              {([
                { key: "all", label: `All (${projects.length})` },
                { key: "wrxflo", label: `Wrxflo (${projects.filter((p) => p.company === "wrxflo").length})` },
                { key: "ccavenue", label: `CCAvenue (${projects.filter((p) => p.company === "ccavenue").length})` },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => { setFilter(tab.key); setShowAll(false); }}
                  className={`text-xs font-semibold tracking-wide uppercase px-4 py-2 rounded-sm transition-all duration-200 active:scale-[0.97] ${
                    filter === tab.key
                      ? "bg-amber text-primary-foreground"
                      : "surface-card text-text-secondary hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((project, i) => (
            <div
              key={project.title}
              className={`surface-card rounded-sm p-7 group hover:border-amber/30 transition-all duration-300 flex flex-col ${
                isVisible ? `reveal reveal-delay-${Math.min(i + 1, 4)}` : "opacity-0"
              }`}
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="label-uppercase text-amber text-[10px]">{project.type}</span>
                <span className="font-display text-sm font-semibold text-amber">{project.impact}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-1 leading-snug">{project.title}</h3>
              <p className="text-text-secondary text-xs mb-3">{project.client}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-code text-[10px] px-2 py-0.5 rounded-sm bg-background text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className={`flex justify-center mt-8 ${isVisible ? "reveal reveal-delay-4" : "opacity-0"}`}>
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-semibold tracking-wide text-text-secondary hover:text-amber transition-colors duration-200 active:scale-[0.97] border border-line rounded-sm px-6 py-3 hover:border-amber/30"
            >
              Show all {filtered.length} projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
