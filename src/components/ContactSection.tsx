import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-[1600px] mx-auto section-grid">
        <div className={`section-label ${isVisible ? 'reveal' : 'opacity-0'}`}>
          <p className="label-uppercase text-amber mb-3">06</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Get In<br />Touch
          </h2>
        </div>

        <div className={`section-content ${isVisible ? 'reveal reveal-delay-2' : 'opacity-0'}`}>
          <p className="text-text-secondary text-lg mb-12 max-w-xl">
            Open to discussing engineering leadership roles, solution architecture positions, 
            and high-impact technical challenges.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:ghorairitesh@gmail.com"
              className="block font-display text-2xl md:text-3xl font-semibold hover:text-amber transition-colors duration-200"
            >
              ghorairitesh@gmail.com
            </a>

            <div className="flex flex-col sm:flex-row gap-6 text-text-secondary">
              <a href="tel:+917276029168" className="hover:text-foreground transition-colors duration-200">
                +91-7276029168
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a href="tel:+919920038816" className="hover:text-foreground transition-colors duration-200">
                +91-9920038816
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <a
                href="https://linkedin.com/in/ritesh-ghorui"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber transition-colors duration-200"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="flex gap-4 pt-4 text-sm text-text-secondary">
              <span>Mumbai, India</span>
              <span className="text-border">·</span>
              <span>English · Hindi · Marathi · Bengali</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
