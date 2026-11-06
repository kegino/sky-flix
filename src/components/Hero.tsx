import { Star, ShieldCheck, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <img
        src={heroBg}
        alt="Sky Flix — Streaming IPTV premium em 4K com mais de 35.000 canais sem travar"
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      {/* Overlays escuros para legibilidade cristalina de textos e botões */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/70 to-background" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/80 via-transparent to-background/80" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-black/35" aria-hidden="true" />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-sm">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          Servidores 2026 Online — Teste Grátis do Sky Flix Liberado
        </div>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
          Sky Flix — <span className="gradient-text">IPTV sem travar</span>
          <span className="block text-foreground mt-1">+35.000 Canais em 4K</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl font-normal leading-relaxed">
          Assista a filmes de cinema, séries em alta resolução e todo o futebol ao vivo sem congelamento no{" "}
          <strong className="text-white font-semibold">Sky Flix</strong>. Compatível com Smart TV, TV Box, Fire Stick, celular e computador.
        </p>

        {/* Botões com destaque visual máximo e alto contraste */}
        <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:gap-4 w-full max-w-md justify-center">
          <WhatsAppButton
            keyword="Teste Grátis Sky Flix"
            label="Solicitar Teste Grátis"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto text-base font-extrabold"
          />
          <WhatsAppButton
            keyword="Assinatura Sky Flix"
            label="Ver Planos e Assinar"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto text-base font-extrabold"
          />
        </div>

        {/* Badges de credibilidade */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 font-medium">
            <Zap className="size-4 text-cyan-400" aria-hidden="true" />
            <span>Anti-travamento H.265</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="size-4 text-emerald-400" aria-hidden="true" />
            <span>Ativação Expressa via Pix</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <span>Nota 4.9 de satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
