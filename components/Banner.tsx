import Image from "next/image";
import { Reveal } from "./Reveal";

// Banner de largura total: foto de fundo, véu escuro para o texto e uma única chamada (children).
export function Banner({
  image,
  title,
  text,
  children,
}: {
  image: { src: string; alt: string; position?: string };
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8">
      <Reveal className="relative isolate overflow-hidden rounded-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="parallax -z-20 object-cover"
          style={{ objectPosition: image.position }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-ink/75 md:bg-transparent md:bg-linear-to-r md:from-ink/90 md:via-ink/70 md:to-ink/10"
        />
        <div className="flex min-h-[22rem] flex-col items-start justify-end gap-4 p-8 text-paper md:min-h-[26rem] md:p-14">
          <h2 className="max-w-[18ch] text-4xl font-semibold tracking-tighter md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed">{text}</p>
          <div className="mt-2">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}
