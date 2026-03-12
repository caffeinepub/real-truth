import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#home"
          data-ocid="nav.link"
          className="font-display text-lg font-semibold tracking-wide text-foreground hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Cormorant Garant', Georgia, serif" }}
        >
          The Silent Voice
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="section-label hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-ocid="nav.primary_button"
          className="hidden md:inline-flex section-label border border-foreground/40 px-5 py-2 hover:border-foreground hover:text-foreground transition-all duration-200"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="masthead-rule" />
            <ul className="px-8 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="section-label hover:text-foreground transition-colors"
                    onClick={() => setMenuOpen(false)}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-border">
                <a
                  href="#contact"
                  data-ocid="nav.primary_button"
                  className="section-label border border-foreground px-5 py-2.5 inline-block"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="grain relative min-h-screen flex flex-col justify-between overflow-hidden bg-background px-6 md:px-12 pt-28 pb-12"
    >
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="masthead-rule mb-6"
        />
        <div className="flex items-start justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="section-label"
          >
            Web Solutions for Small Businesses
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="section-label hidden md:block"
          >
            Est. 2024
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center py-10 md:py-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-foreground leading-[0.92] tracking-tight"
          style={{
            fontFamily: "'Cormorant Garant', Georgia, serif",
            fontSize: "clamp(4rem, 14vw, 13rem)",
          }}
        >
          <span className="block">Your Business</span>
          <span className="block">Deserves a</span>
          <span
            className="block italic"
            style={{ color: "oklch(var(--accent))" }}
          >
            Voice.
          </span>
        </motion.h1>
      </div>

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="masthead-rule mb-6"
        />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="font-body text-sm text-muted-foreground leading-relaxed max-w-md"
          >
            The Silent Voice helps small vendors and shop owners step into the
            digital world — Hridiman and Ayushman handle everything, so you
            focus on what you do best.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="section-label"
            >
              ↓
            </motion.span>
            <span className="section-label">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({
  label,
  title,
  accent,
}: {
  label: string;
  title: string;
  accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16"
    >
      <div className="masthead-rule mb-5" />
      <p className="section-label">{label}</p>
      <h2
        className="font-display font-light text-foreground leading-tight mt-6"
        style={{
          fontFamily: "'Cormorant Garant', Georgia, serif",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
        }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <em style={{ color: "oklch(var(--accent))" }}>{accent}</em>
          </>
        )}
      </h2>
    </motion.div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Our Mission"
          title="Two friends,"
          accent="one digital mission."
        />
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-base text-muted-foreground leading-[1.9] mb-6">
              Hridiman Dutta and Ayushman Bhattacharya started The Silent Voice
              with a simple belief: every small business deserves a presence in
              the digital world, regardless of technical knowledge or budget.
            </p>
            <p className="font-body text-base text-muted-foreground leading-[1.9]">
              They saw local vendors, shop owners, and neighbourhood businesses
              struggling to be found online — and decided to do something about
              it. The Silent Voice is their answer: a studio dedicated entirely
              to giving small businesses the voice they deserve.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center"
          >
            <blockquote
              className="font-display font-light leading-snug border-l-2 pl-8"
              style={{
                fontFamily: "'Cormorant Garant', Georgia, serif",
                borderColor: "oklch(var(--accent))",
                fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
              }}
            >
              “Your shop, your story — told beautifully online.”
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Why a Website ────────────────────────────────────────────────────────────
function WhySection() {
  const benefits = [
    {
      num: "01",
      title: "Reach More Customers",
      desc: "Your shop becomes visible to the entire city — and beyond. People find you through Google, not just word of mouth.",
    },
    {
      num: "02",
      title: "Build Trust & Credibility",
      desc: "A professional website tells customers you're serious. It builds confidence before they even walk through your door.",
    },
    {
      num: "03",
      title: "Available 24 / 7",
      desc: "Your website works while you sleep. Customers can browse your products, services, and reach you at any hour.",
    },
    {
      num: "04",
      title: "Grow Your Sales",
      desc: "More visibility leads to more enquiries, more footfall, more orders. A website is the single best investment for any small business.",
    },
  ];

  return (
    <section
      id="services"
      className="grain relative py-28 px-6 md:px-12"
      style={{ background: "oklch(0.13 0.009 60)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          label="Why Go Digital"
          title="Why every shop needs"
          accent="a website."
        />
        <div className="divide-y divide-border">
          {benefits.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[6rem_1fr_2fr] items-start gap-6 md:gap-12 py-8 md:py-10"
            >
              <span
                className="section-label pt-1"
                style={{ color: "oklch(var(--accent))" }}
              >
                {b.num}
              </span>
              <h3
                className="font-display font-light text-foreground leading-tight"
                style={{
                  fontFamily: "'Cormorant Garant', Georgia, serif",
                  fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                }}
              >
                {b.title}
              </h3>
              <p className="hidden md:block font-body text-sm text-muted-foreground leading-relaxed">
                {b.desc}
              </p>
              <p className="col-span-2 md:hidden font-body text-sm text-muted-foreground leading-relaxed -mt-2">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowSection() {
  const steps = [
    {
      num: "01",
      title: "We Listen",
      desc: "We start by understanding your business — what you sell, who your customers are, and what makes you special. No jargon, no pressure. Just a conversation.",
    },
    {
      num: "02",
      title: "We Build",
      desc: "Our team takes care of everything — design, content, development, and setup. You don't need to know anything about technology. We handle every detail.",
    },
    {
      num: "03",
      title: "You Shine",
      desc: "Your website goes live and starts bringing in customers. We stay by your side to support, update, and help your business grow online.",
    },
  ];

  return (
    <section id="how" className="py-28 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Simple Process"
          title="Three steps to"
          accent="your own website."
        />
        <div className="divide-y divide-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid md:grid-cols-[6rem_1fr_2fr] gap-6 md:gap-12 py-10 md:py-14"
            >
              <span
                className="section-label pt-1"
                style={{ color: "oklch(var(--accent))" }}
              >
                {step.num}
              </span>
              <h3
                className="font-display font-light text-foreground leading-tight"
                style={{
                  fontFamily: "'Cormorant Garant', Georgia, serif",
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                }}
              >
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-[1.9] max-w-md">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────
function TeamSection() {
  const founders = [
    {
      name: "Hridiman Dutta",
      role: "Founder",
      photo: "/assets/uploads/WhatsApp-Image-2026-03-11-at-6.14.23-PM-1.jpeg",
      bio: "Hridiman is passionate about empowering small businesses and vendors who deserve a digital presence but don't know where to start. With a background in storytelling and community building, he founded The Silent Voice to give every local business the voice they deserve online.",
      initials: "HD",
      ocid: "team.card.1",
    },
    {
      name: "Ayushman Bhattacharya",
      role: "Co-founder",
      photo: "/assets/uploads/ayushmab-1.jpeg",
      bio: "Ayushman believes that technology should work for everyone — not just those who understand it. He co-founded The Silent Voice to bridge the gap between small businesses and the digital world, ensuring that shop owners get a beautiful, effective web presence they're proud of.",
      initials: "AB",
      ocid: "team.card.2",
    },
  ];

  return (
    <section
      id="team"
      className="grain relative py-28 px-6 md:px-12"
      style={{ background: "oklch(0.13 0.009 60)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader
          label="Meet the Founders"
          title="The people behind"
          accent="your website."
        />
        <div className="divide-y divide-border">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              data-ocid={f.ocid}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid md:grid-cols-[6rem_260px_1fr] gap-8 md:gap-12 py-12 md:py-16 items-start"
            >
              <span
                className="section-label pt-2"
                style={{ color: "oklch(var(--accent))" }}
              >
                0{i + 1}
              </span>
              <div className="relative w-full max-w-[260px] aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src={f.photo}
                  alt={f.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center font-display text-5xl font-light text-muted-foreground/20 -z-10"
                  style={{ fontFamily: "'Cormorant Garant', Georgia, serif" }}
                >
                  {f.initials}
                </div>
              </div>
              <div className="flex flex-col justify-start pt-0 md:pt-2">
                <p
                  className="section-label mb-4"
                  style={{ color: "oklch(var(--accent))" }}
                >
                  {f.role}
                </p>
                <h3
                  className="font-display font-light text-foreground leading-tight mb-6"
                  style={{
                    fontFamily: "'Cormorant Garant', Georgia, serif",
                    fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  }}
                >
                  {f.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-[1.9] max-w-md">
                  {f.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section
      id="contact"
      className="grain relative py-28 px-6 md:px-12 overflow-hidden bg-background"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="masthead-rule mb-5" />
        <p className="section-label mb-12">Get In Touch</p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-24 items-end"
        >
          <div>
            <h2
              className="font-display font-light text-foreground leading-tight mb-10"
              style={{
                fontFamily: "'Cormorant Garant', Georgia, serif",
                fontSize: "clamp(3rem, 7vw, 7rem)",
              }}
            >
              Ready to get
              <br />
              <em style={{ color: "oklch(var(--accent))" }}>your website?</em>
            </h2>
            <a
              href="mailto:thesilentvoiceofrealtruth@gmail.com"
              data-ocid="contact.primary_button"
              className="group inline-flex items-center gap-3 border border-foreground/40 font-body text-sm px-8 py-4 hover:border-foreground hover:text-foreground transition-all duration-200 text-muted-foreground"
            >
              <span>thesilentvoiceofrealtruth@gmail.com</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-0 divide-y divide-border">
            {[
              { label: "Response Time", value: "Within 24 hours" },
              { label: "First Consultation", value: "Always free" },
              { label: "Pricing", value: "No hidden charges" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-5"
              >
                <span className="section-label">{item.label}</span>
                <span
                  className="font-display font-light text-foreground"
                  style={{
                    fontFamily: "'Cormorant Garant', Georgia, serif",
                    fontSize: "1.25rem",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="px-6 md:px-12 py-12"
      style={{ background: "oklch(0.10 0.008 60)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="masthead-rule mb-8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="font-display text-xl font-light text-foreground mb-1"
              style={{ fontFamily: "'Cormorant Garant', Georgia, serif" }}
            >
              The Silent Voice
            </p>
            <p className="section-label">
              We build websites so you can focus on your business.
            </p>
          </div>
          <a
            href="mailto:thesilentvoiceofrealtruth@gmail.com"
            data-ocid="footer.link"
            className="section-label hover:text-foreground transition-colors"
          >
            thesilentvoiceofrealtruth@gmail.com
          </a>
        </div>
        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="section-label">
            © {year} The Silent Voice. All rights reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="section-label hover:text-foreground transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <WhySection />
        <HowSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
