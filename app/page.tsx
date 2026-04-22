export default function PersonalPortfolioPage() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Design Systems",
    "Accessibility",
    "Performance",
    "UX Engineering",
    "Frontend Architecture",
  ];

  const projects = [
    {
      title: "Landing pages that convert",
      description:
        "I design and build fast, visually polished landing pages focused on clarity, performance, and user engagement.",
    },
    {
      title: "Scalable web applications",
      description:
        "From idea to interface, I build responsive, production-ready web apps with clean architecture and strong UX foundations.",
    },
    {
      title: "Reusable UI systems",
      description:
        "When needed, I create component systems and UI foundations that keep products consistent and easy to scale.",
    },
  ];

  const experience = [
    {
      role: "Senior UX Engineer",
      company: "Product & Platform Work",
      detail:
        "Design systems, frontend architecture, and product UI—bridging design and engineering to ship scalable experiences.",
    },
    {
      role: "Frontend Engineer",
      company: "Web Products",
      detail:
        "Building fast, responsive, and maintainable interfaces using modern frameworks and best practices.",
    },
    {
      role: "Product Builder",
      company: "Personal Projects",
      detail:
        "Designing and developing structured, user-focused experiences from concept to production.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f1115] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(105,232,255,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_20%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:px-16 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#69E8FF]/30 bg-[#69E8FF]/10 px-4 py-1 text-sm text-[#69E8FF] shadow-lg shadow-cyan-500/10">
              UX Engineer • Design Systems • Frontend
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Braulio Romero
              <span className="mt-2 block text-[#69E8FF]">
                Building complete web experiences that scale.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/90 md:text-lg">
              I design and build complete web experiences—from high-converting
              landing pages to scalable product interfaces. As a UX Engineer, I
              bridge design and frontend development to deliver fast, clear, and
              visually polished solutions that work in production. My work
              combines product thinking, strong UI foundations, and frontend
              architecture to build experiences that not only look good—but
              scale.
            </p>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-[#69E8FF] md:text-lg">
              → Available for frontend, product, and web experience work.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#141821] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Current focus</p>
                    <p className="text-lg font-medium">
                      Web experiences + frontend architecture
                    </p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#69E8FF] shadow-[0_0_20px_rgba(105,232,255,0.8)]" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Specialty</p>
                    <p className="mt-1 text-base font-medium">
                      Building scalable interfaces and product-ready UI
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Approach</p>
                    <p className="mt-1 text-base font-medium">
                      Clean UX, strong foundations, accessible interfaces
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Goal</p>
                    <p className="mt-1 text-base font-medium">
                      Ship fast, scalable, and high-quality web products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#69E8FF]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Designing and building for real products
            </h2>
            <p className="mt-5 max-w-xl text-white/70 leading-7">
              I help teams build scalable, high-quality user interfaces through
              design systems and modern frontend architecture. As a UX Engineer,
              I specialize in turning complex products into clean, consistent,
              and accessible experiences—while improving developer efficiency
              and long-term maintainability. If you're building or scaling a
              product and need a strong UI foundation, I can help you design
              systems that actually work in production.
            </p>
            <p>
              Landing pages • Web apps • Design systems • Frontend architecture
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="h-fit rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16 lg:py-12"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#69E8FF]">
              How can i help
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              From idea to production-ready interface.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl border border-[#69E8FF]/30 bg-[#69E8FF]/10" />
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-[1.75rem] border border-white/10 bg-[#12161f] p-6"
            >
              <p className="text-sm text-[#69E8FF]">{item.company}</p>
              <h3 className="mt-2 text-xl font-medium">{item.role}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16"
      >
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[#69E8FF]">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Let’s build your next web experience.
          </h2>
          <p className="mt-4 max-w-2xl text-white/70 leading-7">
            I’m available to design and build complete web experiences—from
            landing pages to scalable product interfaces. Whether you need a
            high-performing frontend, a polished UI, or help bringing a product
            to life, I focus on delivering solutions that are fast, clear, and
            ready for real use. Let’s talk about your project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:terrbete@gmail.com?subject=Project Inquiry&body=Hi Braulio, I'd like to talk about..."
              className="rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black"
            >
              Let's talk
            </a>
            <a
              href="https://www.linkedin.com/in/braulio-romero/"
              target="_blank"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/TruenoElfico"
              target="_blank"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
