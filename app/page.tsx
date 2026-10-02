import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Cta } from "@/components/Cta";
import { CtaFooter } from "@/components/CtaFooter";
import { Differentials } from "@/components/Differentials";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Process } from "@/components/Process";
import { Segments } from "@/components/Segments";
import { Services } from "@/components/Services";
import { banners, images } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Banner image={images.bannerCondominio} {...banners.solucoes}>
          <a
            href="#sobre"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-paper px-6 py-3 font-medium transition duration-300 ease-out-expo hover:bg-paper hover:text-ink active:scale-[0.98]"
          >
            Conheça a Focus
            <ArrowRightIcon
              size={18}
              aria-hidden
              className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
            />
          </a>
        </Banner>
        <About />
        <Differentials />
        <Process />
        <Segments />
        <Banner image={images.bannerEquipe} {...banners.equipe}>
          <Cta variant="paper" />
        </Banner>
        <Faq />
      </main>
      <CtaFooter />
    </>
  );
}
