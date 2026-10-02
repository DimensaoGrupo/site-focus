import Image from "next/image";
import {
  BroomIcon,
  DoorOpenIcon,
  FingerprintIcon,
  PlantIcon,
  ToolboxIcon,
} from "@phosphor-icons/react/dist/ssr";
import { images, services, servicesCta } from "@/lib/site";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const cards = [
  { key: "portaria", icon: DoorOpenIcon },
  { key: "acesso", icon: FingerprintIcon },
  { key: "limpeza", icon: BroomIcon },
  { key: "zeladoria", icon: ToolboxIcon },
  { key: "jardinagem", icon: PlantIcon },
] as const;

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
          Nossos serviços
        </h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
          Soluções em portaria, limpeza e conservação para condomínios e empresas.
        </p>
      </Reveal>

      {/* Cinco serviços mais um cartão de orçamento, para a grade fechar:
          3 por linha no desktop, 2 no tablet, 1 no celular. */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ key, icon: IconEl }, i) => {
          const image: { src: string; alt: string; position?: string } = images[key];
          return (
            // Só translate e sombra: opacidade e transform ficam com a animação de entrada do Reveal.
            <Reveal
              key={key}
              delay={(i % 3) * 0.08}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-bg transition-[translate,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[3/2] shrink-0 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  style={{ objectPosition: image.position }}
                />
              </div>
              {/* O ícone sobe sobre a foto para o texto ficar logo abaixo, sem vão no meio do cartão. */}
              <div className="relative flex flex-1 flex-col px-7 pb-8">
                <span className="-mt-7 grid size-14 place-items-center rounded-full border border-line bg-bg text-accent-text transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110">
                  <IconEl size={28} aria-hidden />
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{services[key].title}</h3>
                <p className="mt-2 max-w-[42ch] leading-relaxed">{services[key].text}</p>
              </div>
            </Reveal>
          );
        })}
        <Reveal
          delay={0.16}
          className="flex flex-col justify-between gap-10 rounded-2xl bg-accent p-8 text-paper"
        >
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">{servicesCta.title}</h3>
            <p className="mt-3 max-w-[36ch] text-lg leading-relaxed">{servicesCta.text}</p>
          </div>
          <Cta variant="paper" className="self-start" />
        </Reveal>
      </div>
    </section>
  );
}
