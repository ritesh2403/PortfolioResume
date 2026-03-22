import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EducationSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="education" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-[1600px] mx-auto section-grid">
        <div className={`section-label ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <p className="label-uppercase text-amber mb-3">05</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Education &<br />Research
          </h2>
        </div>

        <div className={`section-content space-y-8 ${isVisible ? 'reveal reveal-delay-2' : 'opacity-0'}`}>
          <div>
            <h3 className="font-display text-xl font-semibold">Bachelor of Engineering</h3>
            <p className="text-amber text-sm">Computer Engineering</p>
            <p className="text-text-secondary text-sm">Mumbai University · 2019</p>
          </div>

          <div className="border-t border-line pt-8">
            <p className="label-uppercase mb-4">Research Publication</p>
            <h3 className="font-display text-lg font-medium mb-2">
              "Data Mining Algorithm In Distributed Database"
            </h3>
            <div className="space-y-1 text-sm text-text-secondary">
              <p>International Journal of Research and Analytical Reviews (IRJET)</p>
              <p>Journal of Emerging Technologies and Innovative Research (JETIR) — UGC Approved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
