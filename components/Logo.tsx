import Image from "next/image";

// O PNG tem fundo branco; mix-blend-multiply faz o fundo assumir a cor da página.
export function Logo({ preload = false }: { preload?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="Focus Serviços"
      width={132}
      height={44}
      preload={preload}
      className="h-11 w-auto mix-blend-multiply"
    />
  );
}
