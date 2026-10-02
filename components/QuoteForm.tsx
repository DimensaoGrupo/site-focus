"use client";

import { services, site, whatsappLink } from "@/lib/site";
import { CtaIcon, ctaClass } from "./Cta";

const field =
  "w-full rounded-2xl border border-ink bg-bg px-4 py-3 transition-colors duration-200 hover:border-accent focus:border-accent";

function Required() {
  return (
    <span aria-hidden className="text-accent-text">
      {" "}
      *
    </span>
  );
}

// Sem backend: ao enviar, abre o WhatsApp da Focus com os dados já escritos.
export function QuoteForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Olá! Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${data.get("nome")}`,
      `Telefone: ${data.get("telefone")}`,
      `Serviço: ${data.get("servico")}`,
      `Mensagem: ${data.get("mensagem") || "-"}`,
    ].join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="font-medium">
          Nome
          <Required />
        </label>
        <input id="nome" name="nome" type="text" required autoComplete="name" className={field} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="telefone" className="font-medium">
          Telefone
          <Required />
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          className={field}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="servico" className="font-medium">
          Serviço
          <Required />
        </label>
        <select id="servico" name="servico" required defaultValue="" className={field}>
          <option value="" disabled>
            Selecione
          </option>
          {Object.values(services).map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
          <option>Mais de um serviço</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensagem" className="font-medium">
          Mensagem
        </label>
        <textarea id="mensagem" name="mensagem" rows={4} className={field} />
      </div>

      <button
        type="submit"
        className={`${ctaClass} self-start bg-accent text-paper hover:bg-accent-hover hover:text-ink`}
      >
        <CtaIcon />
        {site.cta}
      </button>
      <p className="text-sm text-muted">Ao enviar, o WhatsApp abre com os seus dados preenchidos.</p>
    </form>
  );
}
