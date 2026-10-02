import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { faq } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section
      id="duvidas"
      className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 pt-10 md:px-8 md:pb-28 md:pt-18 lg:grid-cols-[1fr_1.5fr] lg:gap-16"
    >
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl lg:sticky lg:top-28">
          Perguntas frequentes
        </h2>
      </Reveal>

      <Reveal className="divide-y divide-line">
        {faq.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex list-none items-center justify-between gap-6 py-6 text-xl font-medium transition-colors duration-300 hover:text-accent-text [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-accent-text transition duration-300 ease-out-expo group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-paper">
                <PlusIcon size={20} aria-hidden />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-6 text-lg leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
