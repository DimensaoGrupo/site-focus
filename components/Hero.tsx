import { Fragment } from "react";
import Image from "next/image";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/ssr";
import { hero, images } from "@/lib/site";
import { Cta } from "./Cta";

export function Hero() {
  const words = hero.title.split(" ");

  return (
    <section
      id="topo"
      className="mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-12 px-4 pb-12 pt-24 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
    >
      <div>
        <p className="flex animate-rise items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
          <span className="h-px w-8 bg-accent" aria-hidden />
          {hero.eyebrow}
        </p>

        {/* Cada palavra sobe de dentro de uma máscara, uma depois da outra. */}
        <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tighter md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="-my-[0.14em] inline-block overflow-hidden py-[0.14em] align-bottom">
                <span
                  className="inline-block animate-word"
                  style={{ animationDelay: `${120 + i * 70}ms` }}
                >
                  {word}
                </span>
              </span>{" "}
            </Fragment>
          ))}
        </h1>

        <p className="mt-6 max-w-[48ch] animate-rise text-lg leading-relaxed text-muted [animation-delay:450ms] md:text-xl">
          {hero.text}
        </p>

        <div className="mt-8 flex animate-rise flex-wrap gap-3 [animation-delay:570ms]">
          <Cta />
          <a
            href="#servicos"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-fg px-6 py-3 font-medium transition duration-300 ease-out-expo hover:bg-fg hover:text-bg active:scale-[0.98]"
          >
            Ver serviços
            <ArrowDownIcon
              size={18}
              aria-hidden
              className="transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="relative animate-rise [animation-delay:200ms]">
        <div className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-2xl bg-tint" aria-hidden />
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:h-[min(72dvh,680px)]">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            preload
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="parallax object-cover"
          />
        </div>
      </div>
    </section>
  );
}
