import {
  BinocularsIcon,
  ClipboardTextIcon,
  HandshakeIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { steps } from "@/lib/site";
import { Reveal } from "./Reveal";

const icons = [BinocularsIcon, ClipboardTextIcon, HandshakeIcon, UsersThreeIcon];

export function Process() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <Reveal className="rounded-2xl bg-tint px-6 py-12 text-ink md:px-14 md:py-16">
        <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
          Como trabalhamos
        </h2>

        <div className="relative mt-12">
          {/* Linha que liga as etapas no desktop; vai do centro do 1º ao centro do 4º círculo. */}
          <span
            aria-hidden
            className="draw-line absolute left-7 right-[calc(25%-3.625rem)] top-7 hidden h-px origin-left bg-ink lg:block"
          />

          {/* Mobile: trilho horizontal com scroll-snap. Desktop: 4 colunas. */}
          <ol className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:gap-10 lg:overflow-visible lg:pb-0">
            {steps.map((step, i) => {
              const IconEl = icons[i];
              return (
                <li
                  key={step.title}
                  className="group min-w-[72%] snap-start sm:min-w-[42%] lg:min-w-0"
                >
                  <span className="relative grid size-14 place-items-center rounded-full bg-accent text-paper transition-transform duration-500 ease-out-expo group-hover:scale-110">
                    <IconEl size={28} aria-hidden />
                  </span>
                  <p aria-hidden className="mt-6 text-sm font-semibold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
