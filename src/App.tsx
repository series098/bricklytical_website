export default function BricklyticalWebsite() {
  const services = [
    {
      title: "Design and Planning",
      desc: "Thoughtful layouts, concept development, site understanding, and practical planning that turn your ideas into a build-ready vision.",
    },
    {
      title: "Build and Fit Out",
      desc: "From structural work to finishing touches, we deliver complete construction and fit-out solutions with quality, timelines, and care.",
    },
    {
      title: "Renovations and Extensions",
      desc: "Upgrade, expand, and transform existing spaces with smart layouts, premium materials, and elegant execution.",
    },
  ];

  const gallery = [
    {
      title: "Luxury Exterior",
      subtitle: "Bold architecture with elegant visual balance",
    },
    {
      title: "Refined Living Room",
      subtitle: "Warm interiors designed for comfort and style",
    },
    {
      title: "Premium Renovation",
      subtitle: "Clean detailing and modern upgraded finishes",
    },
    {
      title: "Complete Home Build",
      subtitle: "From concept to handover under one team",
    },
  ];

  const highlights = [
    "Premium design language",
    "Transparent project execution",
    "Tailored home solutions",
    "Trusted local service in Gwalior",
  ];

  const testimonials = [
    {
      name: "Agarwal Family",
      text: "Bricklytical made our home project feel organized, premium, and stress-free. The attention to detail really stood out.",
    },
    {
      name: "Sharma Residence",
      text: "From planning to final finish, the team was responsive, transparent, and highly professional throughout the process.",
    },
    {
      name: "Gupta Home Renovation",
      text: "They transformed our existing space beautifully. The final result felt modern, practical, and far better than we imagined.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#07101f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07101f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Bricklytical Logo"
              className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/10"
            />
            <div>
              <p className="text-xl font-semibold tracking-wide text-[#e9d9b0]">
                Bricklytical
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                Gwalior
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-[#e9d9b0]">
              About
            </a>
            <a href="#services" className="transition hover:text-[#e9d9b0]">
              Services
            </a>
            <a href="#gallery" className="transition hover:text-[#e9d9b0]">
              Gallery
            </a>
            <a href="#contact" className="transition hover:text-[#e9d9b0]">
              Contact
            </a>
          </nav>

          <a
            href="https://wa.me/919752284291"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#e9d9b0]/30 bg-[#e9d9b0] px-4 py-2 text-sm font-semibold text-[#07101f] shadow-lg shadow-[#e9d9b0]/10 transition hover:scale-105"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,217,176,0.18),transparent_38%)]" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#e9d9b0]/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-[#e9d9b0]/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#e9d9b0]">
              Premium Construction & Home Design
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-tight md:text-7xl">
              Home is an art,
              <span className="block text-[#e9d9b0]">We take it seriously</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Whatever your dream, we’ll build it for you. Bricklytical creates
              premium homes in Gwalior with thoughtful design, trusted
              execution, and elegant finishing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-[#e9d9b0] px-6 py-3 font-semibold text-[#07101f] shadow-xl shadow-[#e9d9b0]/10 transition hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="#gallery"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Gallery
              </a>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#e9d9b0]/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[28px] bg-[linear-gradient(135deg,#1a2538,#0d1728,#d8c499)] p-6">
                <div className="flex min-h-[520px] flex-col justify-between rounded-[24px] border border-white/10 bg-[#091425]/80 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-[#e9d9b0]/80">
                        Featured Brand
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold text-white">
                        Bricklytical
                      </h2>
                      <p className="mt-3 max-w-sm text-white/60">
                        Smart construction, elegant spaces, and premium home
                        experiences designed around your vision.
                      </p>
                    </div>
                    <img
                      src="/logo.jpg"
                      alt="Bricklytical"
                      className="h-20 w-20 rounded-2xl object-cover ring-1 ring-white/10"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/50">Brand Tagline</p>
                      <p className="mt-3 text-xl font-semibold text-[#e9d9b0]">
                        Whatever your dream, we’ll build for you
                      </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/50">Contact</p>
                      <p className="mt-3 text-xl font-semibold">
                        +91 97522 84291
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                      Luxury Home Specialists
                    </p>
                    <div className="mt-4 h-56 rounded-[24px] bg-[linear-gradient(135deg,#f8f1de,#d8c499,#ffffff)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#e9d9b0]">
              About Us
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              A premium home-building brand with detail at its core
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Bricklytical is based in Gwalior and focused on building homes
              that feel refined, practical, and personal. Every space is
              approached with planning, precision, and a commitment to quality
              that clients can trust.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              From design and planning to fit-out, renovations, and extensions,
              we handle projects with a premium mindset and a smooth client
              experience from start to finish.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-white/50">City</p>
              <p className="mt-3 text-2xl font-semibold text-[#e9d9b0]">
                Gwalior
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-white/50">Contact</p>
              <p className="mt-3 text-2xl font-semibold text-[#e9d9b0]">
                +91 97522 84291
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-white/50">Brand Promise</p>
              <p className="mt-3 text-2xl font-semibold text-[#e9d9b0]">
                Quality with Trust
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-white/50">Approach</p>
              <p className="mt-3 text-2xl font-semibold text-[#e9d9b0]">
                Elegant Execution
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#e9d9b0]">
              Services
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Luxury-minded solutions for modern homes
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Thoughtful service offerings designed for people who want a
              beautiful result and a smooth project journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[30px] border border-white/10 bg-[#0b1627] p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#e9d9b0]/30 hover:bg-[#0e1a2d]"
              >
                <div className="mb-6 h-12 w-12 rounded-2xl bg-[#e9d9b0]/15 ring-1 ring-[#e9d9b0]/20" />
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-8 text-white/65">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#e9d9b0]">
              Gallery
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              A glimpse of premium spaces
            </h2>
          </div>
          <a
            href="https://wa.me/919752284291"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Ask for More Projects
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-xl"
            >
              <div
                className={`h-72 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(135deg,#f5e9c9,#c8ab6b,#ffffff)]"
                    : "bg-[linear-gradient(135deg,#dfe7ef,#f7f1df,#ccb27a)]"
                }`}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#e9d9b0]">
              Testimonials
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Why clients trust Bricklytical
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[30px] border border-white/10 bg-[#0b1627] p-8 shadow-xl"
              >
                <p className="text-lg leading-8 text-white/75">“{item.text}”</p>
                <div className="mt-6 h-px w-full bg-white/10" />
                <p className="mt-5 text-base font-semibold text-[#e9d9b0]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(233,217,176,0.14),rgba(255,255,255,0.04))] p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-[#e9d9b0]">
              Contact Us
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Let’s build your dream home
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Tell us what you want to create. We’ll help you shape the vision,
              plan the details, and build it with care.
            </p>

            <div className="mt-8 space-y-4 text-white/80">
              <p>
                <span className="text-white/50">Phone:</span> +91 97522 84291
              </p>
              <p>
                <span className="text-white/50">WhatsApp:</span> +91 97522 84291
              </p>
              <p>
                <span className="text-white/50">City:</span> Gwalior
              </p>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[#0b1627] p-8 shadow-2xl">
            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-white/35"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-white/35"
                placeholder="Phone / WhatsApp"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-white/35"
                placeholder="Project location"
              />
              <textarea
                className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none placeholder:text-white/35"
                placeholder="Tell us about your dream home or renovation project"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <button className="rounded-2xl bg-[#e9d9b0] px-6 py-4 font-semibold text-[#07101f] transition hover:scale-[1.02]">
                  Request a Callback
                </button>
                <a
                  href="https://wa.me/919752284291"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/919752284291"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#e9d9b0] px-5 py-4 font-semibold text-[#07101f] shadow-2xl shadow-[#e9d9b0]/20 transition hover:scale-105"
      >
        WhatsApp
      </a>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © 2026 Bricklytical. All rights reserved.
      </footer>
    </div>
  );
}
