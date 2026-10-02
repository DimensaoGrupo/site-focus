"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";
import { nav } from "@/lib/site";
import { Cta } from "./Cta";
import { Logo } from "./Logo";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-elevate fixed inset-x-0 top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <a href="#topo" className="shrink-0">
          <Logo preload />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-5 text-sm lg:flex xl:gap-8 xl:text-base">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative whitespace-nowrap py-2 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-300 after:ease-out-expo hover:text-accent-text hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Cta className="hidden sm:inline-flex" />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full transition-colors duration-300 hover:bg-tint active:scale-95 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <XIcon size={24} aria-hidden /> : <ListIcon size={24} aria-hidden />}
          </button>
        </div>
      </div>

      <MotionConfig reducedMotion="user">
        <AnimatePresence>
          {open && (
            <motion.nav
              id="menu-mobile"
              aria-label="Principal"
              className="flex flex-col gap-1 border-t border-line px-4 py-4 lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-3 text-lg transition-colors duration-300 hover:text-accent-text"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Cta className="mt-3 sm:hidden" />
            </motion.nav>
          )}
        </AnimatePresence>
      </MotionConfig>

      {/* Barra de progresso da leitura, presa à borda inferior do cabeçalho. */}
      <span
        aria-hidden
        className="scroll-progress absolute inset-x-0 -bottom-px h-0.5 origin-left bg-accent"
      />
    </header>
  );
}
