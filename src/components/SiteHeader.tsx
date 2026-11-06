import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV_LINKS = [
  { to: "/planos", label: "Planos" },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/como-funciona", label: "Como Funciona" },
  { to: "/teste", label: "Teste Grátis" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-cyan-500/15 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight">
          <img
            src="/favicon.svg"
            alt="Sky Flix Logo"
            width={34}
            height={34}
            className="size-8.5 rounded-lg"
          />
          <span className="text-white">Sky <span className="text-cyan-400">Flix</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              activeProps={{ className: "text-cyan-400 font-semibold" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <WhatsAppButton
            keyword="Atendimento Sky Flix"
            label="Teste Grátis"
            variant="whatsapp"
            size="sm"
          />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-cyan-500/15 bg-background/95 px-4 py-6 backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <WhatsAppButton
                keyword="Atendimento Sky Flix"
                label="Solicitar Teste Grátis"
                variant="whatsapp"
                size="md"
                className="w-full"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
