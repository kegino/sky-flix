export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o Sky Flix e como funciona?",
    a: "O Sky Flix é um serviço premium de streaming IPTV que transmite mais de 35.000 canais ao vivo, filmes, séries e esportes diretamente pela sua conexão de internet. Basta instalar um aplicativo compatível na sua Smart TV, TV Box, celular ou computador, inserir seus dados de login e assistir imediatamente em resolução até 4K.",
  },
  {
    q: "O Sky Flix trava durante os jogos de futebol?",
    a: "Não. A infraestrutura do Sky Flix utiliza servidores dedicados com tecnologia anti-buffering H.265 e CDN distribuída estrategicamente pelo Brasil. O sinal é balanceado dinamicamente para assegurar transmissão 100% lisa mesmo em finais de campeonatos com picos extremos de audiência.",
  },
  {
    q: "Em quais aparelhos posso usar o Sky Flix?",
    a: "O Sky Flix é compatível com praticamente todos os dispositivos: Smart TVs (Samsung, LG, TCL, Philco, Sony), TV Box Android, Amazon Fire TV Stick, Chromecast, smartphones Android e iPhones, tablets, computadores (Windows e Mac) e navegadores web.",
  },
  {
    q: "Como faço para solicitar um teste grátis?",
    a: "Basta clicar em qualquer botão de 'Solicitar Teste Grátis' nesta página para abrir uma conversa no nosso WhatsApp oficial. Nosso time envia suas credenciais e o tutorial de configuração em poucos minutos, sem cobrar nada e sem pedir cartão de crédito.",
  },
  {
    q: "Qual velocidade de internet é recomendada para o Sky Flix?",
    a: "Para canais em resolução HD recomendamos pelo menos 10 Mbps de velocidade estável. Para Full HD, 20 Mbps. E para conteúdos em 4K Ultra HD com som surround, recomendamos uma conexão a partir de 35 Mbps.",
  },
  {
    q: "Como recebo meu acesso após o pagamento?",
    a: "A ativação é praticamente imediata. Assim que o pagamento (Pix, cartão ou boleto) for confirmado, você recebe no WhatsApp o seu usuário, senha, URL do servidor (Xtream Codes) e o link da lista M3U, além de suporte humanizado passo a passo para configurar.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Posso usar a mesma assinatura do Sky Flix em mais de uma TV?",
    a: "Cada plano padrão contempla uma conexão simultânea, mas você pode instalar o aplicativo em quantos aparelhos desejar e assistir alternadamente. Caso queira assistir em duas ou mais telas ao mesmo tempo, solicite um ponto adicional no nosso suporte via WhatsApp com desconto especial.",
  },
  {
    q: "Quais aplicativos são recomendados para usar o Sky Flix?",
    a: "Recomendamos os players mais consagrados do mercado: IPTV Smarters Pro, XCIPTV, IBO Player, TiviMate, SmartOne IPTV, SS IPTV e Bob Player. Nossa equipe orienta qual é a melhor opção para o seu modelo de televisor.",
  },
  {
    q: "Os canais contam com Guia de Programação (EPG)?",
    a: "Sim, todos os planos do Sky Flix contam com EPG atualizado diariamente, permitindo que você confira os horários de filmes, séries, jornais e partidas de futebol com antecedência.",
  },
  {
    q: "O serviço possui fidelidade ou taxa de cancelamento?",
    a: "Não há qualquer tipo de contrato de fidelidade ou taxa oculta. Você escolhe o plano (mensal, trimestral, semestral ou anual) e só renova se estiver satisfeito com a qualidade.",
  },
];
