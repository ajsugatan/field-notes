import Link from "next/link";
import essays from "@/lib/essays";
import { site, social } from "@/lib/site";
import { experience } from "@/lib/experience";
import Crosshair from "@/components/Crosshair";
import HeroAbout from "@/components/HeroAbout";
import Experience from "@/components/Experience";

// FIELD NOTES™ — an archive of attention.
// Editorial homepage: a typographic statement, an index, an archive —
// not a portfolio. Editorial New (Ultralight) carries the big moments;
// Helvetica carries the metadata and controls.
export default function HomePage() {
  // The email banner drifts ONE address at a time with a generous gap —
  // intentionally timed and spaced, not a back-to-back loop. The two groups
  // are identical so the -50% translate loops seamlessly.
  const emailUnit = (
    <span className="fn-email-grp">
      <span>
        <span>{site.email}</span>
        <span aria-hidden>✳</span>
      </span>
    </span>
  );

  return (
    <>
      {/* ===================== HERO / ABOUT ===================== */}
      <section
        className="relative flex min-h-[88vh] flex-col"
        style={{ padding: "clamp(96px,15vh,168px) var(--pm) clamp(34px,6vh,56px)" }}
      >
        {/* paragraph + top metadata strip + hover-logo overlay */}
        <HeroAbout />

        {/* hero foot — email banner over social pills + scroll cue */}
        <div className="mt-auto flex flex-wrap items-end justify-between gap-8 pt-[clamp(30px,5vh,56px)]">
          <div className="flex w-full max-w-[520px] flex-col gap-3.5">
            {/* email — pill banner, address drifts in, intentionally spaced */}
            <a
              className="fn-email-pill"
              href={`mailto:${site.email}`}
              aria-label={`Email — ${site.email}`}
            >
              <span className="fn-email-track" aria-hidden>
                {emailUnit}
                {emailUnit}
              </span>
            </a>
            {/* LinkedIn + Instagram — consistent pills */}
            <div className="flex flex-wrap items-center gap-3.5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fn-pill"
                >
                  {s.label}
                  <span className="ar" aria-hidden>
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
          <a
            href="#experience"
            aria-label="scroll to experience"
            className="self-end text-[clamp(40px,5vw,74px)] leading-[0.7] transition-transform hover:translate-y-2"
          >
            ↓
          </a>
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section id="experience" style={{ padding: "clamp(64px,11vh,140px) var(--pm) 0" }}>
        <div className="mb-[clamp(34px,5vh,60px)] flex flex-wrap items-center gap-4">
          <span className="fn-pill lowercase" style={{ cursor: "default" }}>
            experience
            <span className="text-[0.62em]">
              {String(experience.length).padStart(2, "0")}
            </span>
          </span>
          <span className="mono normal-case tracking-[0.04em]">
            — where the work happened
          </span>
        </div>
        <Experience />
      </section>

      {/* ===================== FIELD NOTES — entry point to the archive ===================== */}
      {/* The full index lives at /notes; the hero/home stays uncrowded. */}
      <section id="field-notes" style={{ padding: "clamp(64px,11vh,140px) var(--pm) 0" }}>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/notes" className="fn-pill lowercase">
            field notes
            <span className="text-[0.62em]">
              {String(essays.length).padStart(2, "0")}
            </span>
            <span className="ar" aria-hidden>
              ↗
            </span>
          </Link>
          <span className="mono normal-case tracking-[0.04em]">— {site.indexIntro}</span>
        </div>
      </section>

      {/* ===================== PROJECTS ENTRY ===================== */}
      <section
        className="flex flex-wrap items-center gap-[clamp(20px,3vw,46px)]"
        style={{ padding: "clamp(70px,12vh,150px) var(--pm) clamp(80px,12vh,150px)" }}
      >
        <p
          className="display m-0 max-w-[16ch]"
          style={{
            fontWeight: 200,
            fontSize: "clamp(34px, 6.4vw, 104px)",
            lineHeight: 0.94,
            letterSpacing: "-0.03em",
          }}
        >
          Selected field notes, indexed by attention.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/studies" className="fn-pill fn-pill--filled lowercase">
            projects
            <span className="ar" aria-hidden>
              ↗
            </span>
          </Link>
          <Crosshair size={44} strokeWidth={1.1} />
        </div>
      </section>
    </>
  );
}
