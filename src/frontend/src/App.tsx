import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Article, Song, Writing } from "./backend";
import {
  useListAllArticles,
  useListAllSongs,
  useListAllWritings,
  useSeedContent,
} from "./hooks/useQueries";

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Articles", href: "#articles" },
    { label: "Writings", href: "#writings" },
    { label: "Songs", href: "#songs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/96 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-[60px] flex items-center justify-between">
        <a
          href="#home"
          data-ocid="nav.link"
          className="font-display text-lg font-light tracking-widest text-foreground hover:text-accent transition-colors uppercase"
        >
          Real Truth
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

        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/98 border-b border-border overflow-hidden"
          >
            <ul className="px-8 py-6 flex flex-col gap-5">
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
      className="grain relative min-h-screen flex flex-col justify-end overflow-hidden bg-background px-8 md:px-16 pb-20 pt-28"
    >
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-[55%] font-display font-black select-none leading-[0.8] text-foreground opacity-[0.06] text-[55vw] pointer-events-none"
      >
        R
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="masthead-rule mb-6"
        />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <p className="section-label mb-5">Vol. I &nbsp;·&nbsp; Est. 2026</p>
            <h1 className="font-display leading-[0.88] tracking-tight text-foreground">
              <span className="block text-[14vw] md:text-[11vw] font-light">
                Real
              </span>
              <span className="block text-[14vw] md:text-[11vw] font-light italic text-accent">
                Truth.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:max-w-xs md:pb-3"
          >
            <p className="font-body text-xl leading-relaxed text-muted-foreground mb-6">
              A literary space for authentic voices — and for all the stories
              that were too heavy to carry alone.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-accent" />
              <span className="section-label">
                Hridiman Dutta &nbsp;&amp;&nbsp; Ayushman Bhattacharya
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-px bg-border mt-10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="w-px h-10 bg-gradient-to-b from-muted-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ─── Section Ornament ─────────────────────────────────────────────────────────
function SectionOrnament() {
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className="flex-1 h-px bg-border" />
      <span className="section-label text-[10px] tracking-[0.35em]">· · ·</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      <p className="section-label mb-3">{label}</p>
      <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      <div className="mt-5 flex items-center gap-4">
        <div className="w-10 h-[2px] bg-accent" />
        <div className="flex-1 h-px bg-border" />
      </div>
    </motion.div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  const founders = [
    {
      name: "Hridiman Dutta",
      role: "Founder",
      photo: "/assets/generated/hridiman-dutta.dim_400x400.jpg",
      bio: "Hridiman is a writer and founder of Real Truth. He authors long-form articles, essays, and literary fiction that illuminate the hidden lives of ordinary people. His books explore the emotional landscapes children traverse alone — the fears they can't name, the questions they dare not ask. Hridiman's work is dedicated to becoming the voice for those who haven't yet found their own.",
      initials: "HD",
      ocid: "about.card.1",
    },
    {
      name: "Ayushman Bhattacharya",
      role: "Founder",
      photo: "/assets/uploads/ayushmab-1.jpeg",
      bio: "Ayushman is a writer, lyricist, and founder of Real Truth. Through articles, song, and books, he crafts honest narratives about self-discovery and the quiet courage it takes to live truthfully. He is deeply committed to helping children navigate life's uncharted territories — the problems they carry in silence, searching for a trusted hand to hold.",
      initials: "AB",
      ocid: "about.card.2",
    },
  ];

  return (
    <section id="about" className="py-28 px-8 md:px-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="The Founders"
          title="Two friends,\none mission."
        />
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              data-ocid={f.ocid}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="flex items-end gap-6 mb-6 pb-6 border-b border-border">
                <div className="relative w-24 h-28 shrink-0 overflow-hidden bg-secondary">
                  <img
                    src={f.photo}
                    alt={f.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-secondary flex items-center justify-center font-display text-3xl font-light text-muted-foreground -z-10">
                    {f.initials}
                  </div>
                </div>
                <div className="pb-1">
                  <h3 className="font-display text-3xl font-light text-foreground leading-tight">
                    {f.name}
                  </h3>
                  <p className="section-label mt-2">{f.role}</p>
                </div>
              </div>
              <p className="font-body text-xl leading-relaxed text-muted-foreground">
                {f.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Article / Writing Cards ──────────────────────────────────────────────────
function LeadCard({
  item,
  type,
}: { item: Article | Writing; type: "article" | "writing" }) {
  const date = new Date(Number(item.published) / 1_000_000).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric" },
  );
  const ocidBase = type === "article" ? "articles" : "writings";

  return (
    <motion.article
      data-ocid={`${ocidBase}.item.1`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="group col-span-full grid md:grid-cols-[1fr_1.2fr] gap-10 border-b border-border pb-12 mb-4 cursor-default"
    >
      <div className="flex flex-col justify-between">
        <div>
          <p className="section-label mb-4">
            {type === "article" ? "Lead Article" : "Lead Piece"} · {item.author}
          </p>
          <h3 className="font-display text-4xl md:text-5xl font-light text-foreground leading-[1.05] group-hover:text-accent transition-colors duration-400">
            {item.title}
          </h3>
        </div>
        <p className="section-label mt-6 hidden md:block">{date}</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-8 h-[2px] bg-accent mb-5" />
        <p className="font-body text-xl md:text-2xl leading-relaxed text-muted-foreground">
          {item.content.slice(0, 260)}
          {item.content.length > 260 ? "…" : ""}
        </p>
        <p className="section-label mt-5 md:hidden">{date}</p>
      </div>
    </motion.article>
  );
}

function SecondaryCard({
  item,
  index,
  type,
}: { item: Article | Writing; index: number; type: "article" | "writing" }) {
  const date = new Date(Number(item.published) / 1_000_000).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "short", day: "numeric" },
  );
  const ocidBase = type === "article" ? "articles" : "writings";

  return (
    <motion.article
      data-ocid={`${ocidBase}.item.${index + 2}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-border pt-8 cursor-default"
    >
      <p className="section-label mb-3">
        {item.author} · {date}
      </p>
      <h3 className="font-display text-2xl font-light text-foreground leading-snug mb-4 group-hover:text-accent transition-colors duration-300">
        {item.title}
      </h3>
      <p className="font-body text-lg leading-relaxed text-muted-foreground">
        {item.content.slice(0, 130)}
        {item.content.length > 130 ? "…" : ""}
      </p>
    </motion.article>
  );
}

// ─── Song Card ────────────────────────────────────────────────────────────────
function SongCard({ song, index }: { song: Song; index: number }) {
  const lines = song.lyrics.split("\n").slice(0, 4);
  const isLead = index === 0;

  if (isLead) {
    return (
      <motion.article
        data-ocid="songs.item.1"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="group col-span-full grid md:grid-cols-2 gap-10 border-b border-border pb-12 mb-4 cursor-default"
      >
        <div>
          <p className="section-label mb-4">Lead Song · {song.author}</p>
          <h3 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
            {song.title}
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <div className="w-8 h-[2px] bg-accent mb-5" />
          <div className="font-body text-2xl leading-loose text-muted-foreground italic">
            {lines.map((line, i) => (
              <p key={`lead-line-${line.trim() || i}`}>{line || "\u00A0"}</p>
            ))}
          </div>
          {song.lyrics.split("\n").length > 4 && (
            <p className="section-label mt-4 not-italic">— continues</p>
          )}
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      data-ocid={`songs.item.${index + 1}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-border pt-8 cursor-default"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="section-label mb-2">{song.author}</p>
          <h3 className="font-display text-2xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
            {song.title}
          </h3>
        </div>
        <Badge
          variant="secondary"
          className="font-sans text-[10px] tracking-widest shrink-0 ml-4 mt-1 uppercase"
        >
          Song
        </Badge>
      </div>
      <div className="font-body text-lg leading-loose text-muted-foreground italic">
        {lines.slice(0, 2).map((line, i) => (
          <p key={`line-${line.trim() || i}`}>{line || "\u00A0"}</p>
        ))}
        {song.lyrics.split("\n").length > 2 && (
          <p className="not-italic section-label mt-2">— continues</p>
        )}
      </div>
    </motion.article>
  );
}

// ─── Content Section ─────────────────────────────────────────────────────────
function ContentSection({
  id,
  label,
  title,
  isLoading,
  tinted,
  children,
}: {
  id: string;
  label: string;
  title: string;
  isLoading: boolean;
  tinted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-28 px-8 md:px-16 ${tinted ? "bg-secondary/30" : "bg-background"}`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader label={label} title={title} />
        {isLoading ? (
          <div className="space-y-8" data-ocid={`${id}.loading_state`}>
            <div className="grid md:grid-cols-2 gap-10 pb-12 border-b border-border">
              <div className="space-y-4">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-3/4" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-[2px] w-8" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-3 pt-8 border-t border-border">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-7 w-4/5" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

// ─── Seeder ───────────────────────────────────────────────────────────────────
function useAutoSeed(
  articlesCount: number | undefined,
  writingsCount: number | undefined,
  songsCount: number | undefined,
) {
  const { mutate: seed } = useSeedContent();
  const seeded = useRef(false);

  useEffect(() => {
    if (seeded.current) return;
    if (
      articlesCount === undefined ||
      writingsCount === undefined ||
      songsCount === undefined
    )
      return;
    if (articlesCount === 0 && writingsCount === 0 && songsCount === 0) {
      seeded.current = true;
      seed();
    }
  }, [articlesCount, writingsCount, songsCount, seed]);
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer id="contact" className="border-t-2 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <h3 className="font-display text-4xl font-light text-foreground leading-tight mb-4">
              Real Truth
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Authentic voices, honest stories — a literary home for every word
              that has been waiting to be spoken.
            </p>
          </div>

          <div>
            <p className="section-label mb-5">Get in touch</p>
            <a
              href="mailto:thesilentvoiceofrealtruth@gmail.com"
              className="font-body text-xl text-foreground hover:text-accent transition-colors"
            >
              thesilentvoiceofrealtruth@gmail.com
            </a>
          </div>
        </div>

        <div className="masthead-rule" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <p className="section-label">
            © {year} Real Truth. All rights reserved.
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
  const { data: articles, isLoading: articlesLoading } = useListAllArticles();
  const { data: writings, isLoading: writingsLoading } = useListAllWritings();
  const { data: songs, isLoading: songsLoading } = useListAllSongs();

  useAutoSeed(articles?.length, writings?.length, songs?.length);

  const [leadArticle, ...restArticles] = articles ?? [];
  const [leadWriting, ...restWritings] = writings ?? [];
  const [leadSong, ...restSongs] = songs ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />

        <About />

        <SectionOrnament />

        <ContentSection
          id="articles"
          label="Featured Articles"
          title={"Words that\nilluminate."}
          isLoading={articlesLoading}
        >
          {articles && articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
              {leadArticle && <LeadCard item={leadArticle} type="article" />}
              {restArticles.map((a, i) => (
                <SecondaryCard
                  key={String(a.id)}
                  item={a}
                  index={i}
                  type="article"
                />
              ))}
            </div>
          ) : (
            <div
              className="py-16 text-muted-foreground"
              data-ocid="articles.empty_state"
            >
              <p className="font-body text-lg">No articles yet.</p>
            </div>
          )}
        </ContentSection>

        <SectionOrnament />

        <ContentSection
          id="writings"
          label="Literary Pieces"
          title={"Prose that\nlingers."}
          isLoading={writingsLoading}
          tinted
        >
          {writings && writings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
              {leadWriting && <LeadCard item={leadWriting} type="writing" />}
              {restWritings.map((w, i) => (
                <SecondaryCard
                  key={String(w.id)}
                  item={w}
                  index={i}
                  type="writing"
                />
              ))}
            </div>
          ) : (
            <div
              className="py-16 text-muted-foreground"
              data-ocid="writings.empty_state"
            >
              <p className="font-body text-lg">No writings yet.</p>
            </div>
          )}
        </ContentSection>

        <SectionOrnament />

        <ContentSection
          id="songs"
          label="Original Songs"
          title={"Melodies\nwith meaning."}
          isLoading={songsLoading}
        >
          {songs && songs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
              {leadSong && <SongCard song={leadSong} index={0} />}
              {restSongs.map((s, i) => (
                <SongCard key={String(s.id)} song={s} index={i + 1} />
              ))}
            </div>
          ) : (
            <div
              className="py-16 text-muted-foreground"
              data-ocid="songs.empty_state"
            >
              <p className="font-body text-lg">No songs yet.</p>
            </div>
          )}
        </ContentSection>
      </main>

      <Footer />
    </div>
  );
}
