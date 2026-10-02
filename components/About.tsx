import { QuotesIcon } from "@phosphor-icons/react/dist/ssr";
import { about } from "@/lib/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16"
    >
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">Sobre a Focus</h2>
        <div className="mt-6 flex max-w-[60ch] flex-col gap-4 text-lg leading-relaxed text-muted">
          {about.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08} className="group rounded-2xl bg-tint p-8 text-ink md:p-10">
        <QuotesIcon
          size={44}
          weight="fill"
          aria-hidden
          className="text-accent transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110"
        />
        <h3 className="mt-6 text-lg font-semibold">Nossa missão</h3>
        <p className="mt-4 text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          {about.mission}
        </p>
      </Reveal>
    </section>
  );
}
