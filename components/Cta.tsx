import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

const variants = {
  accent: "bg-accent text-paper hover:bg-accent-hover hover:text-ink",
  paper: "bg-paper text-ink hover:bg-tint",
};

// Compartilhado com o botão de envio do formulário.
export const ctaClass =
  "group/cta inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 font-medium transition duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0 active:scale-[0.98]";

export function CtaIcon() {
  return (
    <WhatsappLogoIcon
      size={20}
      aria-hidden
      className="transition-transform duration-300 ease-out-expo group-hover/cta:-rotate-12 group-hover/cta:scale-110"
    />
  );
}

export function Cta({
  variant = "accent",
  className = "",
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${ctaClass} ${variants[variant]} ${className}`}
    >
      <CtaIcon />
      {site.cta}
    </a>
  );
}
