import { AsteriskIcon } from "@phosphor-icons/react/dist/ssr";
import { segments } from "@/lib/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-8 pr-8 motion-reduce:flex-wrap ${hidden ? "motion-reduce:hidden" : ""}`}
    >
      {segments.map((segment) => (
        <li key={segment} className="flex items-center gap-8 whitespace-nowrap">
          {segment}
          <AsteriskIcon size={32} weight="bold" className="text-accent-text" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

// Único marquee da página: mostra a variedade de locais atendidos sem pedir leitura item a item.
// Pausa com o mouse em cima e some suavemente nas bordas.
export function Segments() {
  return (
    <section aria-labelledby="segmentos" className="overflow-hidden py-20 md:py-28">
      <h2 id="segmentos" className="mx-auto max-w-7xl px-4 text-lg text-muted md:px-8">
        Quem atendemos
      </h2>
      <div className="mt-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:[mask-image:none]">
        <div className="flex w-max animate-marquee text-4xl font-semibold tracking-tighter hover:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:px-4 md:text-6xl">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
