import { ClockIcon, MapPinIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";

function Info() {
  return (
    <address className="flex flex-col items-start gap-4 not-italic">
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-accent-text"
      >
        <WhatsappLogoIcon size={22} className="shrink-0" aria-hidden />
        {site.whatsapp}
      </a>
      <span className="inline-flex items-start gap-3">
        <MapPinIcon size={22} className="mt-0.5 shrink-0" aria-hidden />
        {site.address}
      </span>
      <span className="inline-flex items-start gap-3">
        <ClockIcon size={22} className="mt-0.5 shrink-0" aria-hidden />
        <span>
          {site.hours.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      </span>
    </address>
  );
}

export function CtaFooter() {
  return (
    <>
      <section id="contato" className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tighter md:text-5xl">
            Solicite um orçamento
          </h2>
          <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">
            Preencha o formulário e fale com a nossa equipe pelo WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="rounded-2xl border border-line p-6 md:p-8">
            <QuoteForm />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-8">
            <Info />
            <iframe
              src={site.mapUrl}
              title="Mapa com a localização da Focus Serviços"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-2xl border border-line lg:h-full lg:min-h-80"
            />
          </Reveal>
        </div>
      </section>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-line px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr_1.4fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[40ch] leading-relaxed text-muted">{site.description}</p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col items-start gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-[translate,color] duration-300 ease-out-expo hover:translate-x-1 hover:text-accent-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Info />
        </div>

        <p className="mt-12 text-sm text-muted">
          © {new Date().getFullYear()} {site.legalName} Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
