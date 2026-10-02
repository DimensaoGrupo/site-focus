import { differentials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Differentials() {
  return (
    <section id="diferenciais" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
          Nossos diferenciais
        </h2>
      </Reveal>

      <ul className="mt-10 divide-y divide-line">
        {differentials.map((item, i) => (
          <li key={item.title}>
            <Reveal className="group grid grid-cols-1 gap-3 py-8 md:grid-cols-[3rem_1fr_1fr] md:gap-12 md:py-10">
              <span
                aria-hidden
                className="text-sm font-semibold tabular-nums text-accent-text md:pt-3"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-medium tracking-tight transition-[translate,color] duration-300 ease-out-expo group-hover:translate-x-2 group-hover:text-accent-text md:text-4xl">
                {item.title}
              </h3>
              <p className="max-w-[48ch] text-lg leading-relaxed text-muted">{item.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
