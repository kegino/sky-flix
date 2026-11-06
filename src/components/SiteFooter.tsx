import { Link } from "@tanstack/react-router";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/15 bg-background/90 text-slate-400">
      <div className="container-page py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Coluna 1 */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white">
            <img
              src="/favicon.svg"
              alt="Sky Flix Logo"
              width={32}
              height={32}
              className="size-8 rounded-lg"
            />
            <span>Sky <span className="text-cyan-400">Flix</span></span>
          </Link>
          <p className="text-sm text-slate-300 leading-relaxed">
            Sky Flix é a plataforma líder em IPTV de alta performance. Mais de 35.000 canais ao vivo, filmes de cinema e séries completas em 4K sem travar.
          </p>
          <div className="pt-2">
            <WhatsAppButton keyword="Suporte Sky Flix" label="Falar no WhatsApp" variant="whatsapp" size="sm" />
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">Navegação</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/planos" className="hover:text-cyan-400 transition-colors">Planos e Preços</Link></li>
            <li><Link to="/beneficios" className="hover:text-cyan-400 transition-colors">Vantagens e Recursos</Link></li>
            <li><Link to="/como-funciona" className="hover:text-cyan-400 transition-colors">Como Funciona</Link></li>
            <li><Link to="/teste" className="hover:text-cyan-400 transition-colors">Teste Grátis 4K</Link></li>
            <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">Perguntas Frequentes</Link></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">Conteúdo</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog Sky Flix</Link></li>
            <li><Link to="/blog/como-assistir-futebol-ao-vivo-sem-travar" className="hover:text-cyan-400 transition-colors">Futebol sem Delay</Link></li>
            <li><Link to="/blog/melhores-aplicativos-iptv-smart-tv" className="hover:text-cyan-400 transition-colors">Melhores Apps</Link></li>
            <li><Link to="/blog/iptv-4k-qual-velocidade-de-internet-necessaria" className="hover:text-cyan-400 transition-colors">Velocidade para 4K</Link></li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div>
          <h3 className="font-display text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/politica-de-privacidade" className="hover:text-cyan-400 transition-colors">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="hover:text-cyan-400 transition-colors">Termos de Uso</Link></li>
            <li><Link to="/contato" className="hover:text-cyan-400 transition-colors">Central de Contato</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/30 py-6 text-center text-xs text-slate-400">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} Sky Flix (skyflix.website). Todos os direitos reservados.</p>
          <p>Servidores CDN de Alta Performance • Ultra HD 4K</p>
        </div>
      </div>
    </footer>
  );
}
