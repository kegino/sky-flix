import { Check, Sparkles } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaKeyword: string;
}

export const PLANS: Plan[] = [
  {
    id: "mensal",
    name: "Mensal",
    duration: "30 dias de acesso",
    price: "R$ 35",
    period: "/mês",
    description: "Ideal para testar e conhecer a estabilidade e o catálogo do Sky Flix sem compromisso.",
    popular: false,
    ctaKeyword: "Plano Mensal Sky Flix",
    features: [
      "+35.000 canais ao vivo em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo e pay-per-view liberados",
      "Suporte humanizado todos os dias",
      "Guia de programação EPG completo",
    ],
  },
  {
    id: "trimestral",
    name: "Trimestral",
    duration: "90 dias de acesso",
    price: "R$ 90",
    period: "/trimestre",
    description: "Excelente custo-benefício para garantir 3 meses de entretenimento sem interrupções.",
    popular: false,
    ctaKeyword: "Plano Trimestral Sky Flix",
    features: [
      "+35.000 canais ao vivo em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo e pay-per-view liberados",
      "Suporte humanizado prioritário",
      "Guia de programação EPG completo",
      "Economia garantida sobre a mensalidade",
    ],
  },
  {
    id: "semestral",
    name: "Semestral",
    duration: "180 dias de acesso",
    price: "R$ 170",
    period: "/semestre",
    description: "O plano mais vendido! 6 meses de streaming com desconto exclusivo e suporte VIP.",
    popular: true,
    ctaKeyword: "Plano Semestral Sky Flix",
    features: [
      "+35.000 canais ao vivo em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo e pay-per-view liberados",
      "Suporte humanizado VIP via WhatsApp",
      "Guia de programação EPG completo",
      "Máxima estabilidade anti-congelamento",
    ],
  },
  {
    id: "anual",
    name: "Anual",
    duration: "365 dias de acesso",
    price: "R$ 280",
    period: "/ano",
    description: "Maior economia! 1 ano inteiro de acesso ilimitado por apenas R$ 23,33 por mês.",
    popular: false,
    ctaKeyword: "Plano Anual Sky Flix",
    features: [
      "+35.000 canais ao vivo em 4K e Full HD",
      "Filmes e séries on-demand atualizados",
      "Futebol ao vivo e pay-per-view liberados",
      "Suporte VIP dedicado o ano todo",
      "Guia de programação EPG completo",
      "Prioridade máxima nos servidores CDN",
    ],
  },
];

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative glass-card rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        plan.popular ? "border-cyan-400/50 shadow-cyan-950/40 ring-1 ring-cyan-400/40" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
          <Sparkles className="size-3.5" aria-hidden="true" />
          MAIS ESCOLHIDO
        </div>
      )}

      <div>
        <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-1 text-xs text-slate-300">{plan.duration}</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">{plan.price}</span>
          <span className="text-xs text-slate-300">{plan.period}</span>
        </div>
        <p className="mt-3 text-xs text-slate-300 leading-relaxed">{plan.description}</p>
      </div>

      <ul className="mt-6 space-y-2.5 text-xs text-slate-200 flex-1 border-t border-white/10 pt-5">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2">
            <Check className="size-4 shrink-0 text-cyan-400 mt-0.5" aria-hidden="true" />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-2">
        <WhatsAppButton
          keyword={plan.ctaKeyword}
          label="Contratar Plano"
          variant={plan.popular ? "primary" : "whatsapp"}
          size="md"
          className="w-full"
        />
      </div>
    </div>
  );
}
