import { motion } from "framer-motion";
import { ConfettiBackground } from "@/components/ConfettiBackground";
import { CodeCard } from "@/components/CodeCard";
import { BenefitCard } from "@/components/BenefitCard";
import { CountdownBadge } from "@/components/CountdownBadge";
import { Mail, ExternalLink, AlertTriangle, CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ConfettiBackground />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 md:py-16">
        {/* Hero */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-4">🏠💰</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Transfere o teu <span className="text-gradient">Crédito Habitação</span> e ganha{" "}
            <span className="text-gradient">300 €</span>!
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Usa o meu código de referência no Banco Montepio e ganhamos os dois! 🎉
          </p>
        </motion.div>

        <CountdownBadge />
        <CodeCard />

        {/* Benefits Section */}
        <div className="mt-12 space-y-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-foreground"
          >
            O que ganhas ao usar o meu código? 🤑
          </motion.h2>

          <div className="grid gap-5">
            <BenefitCard icon="💳" title="300 € em Cartão Pré-Pago" delay={0.1}>
              <p>
                Recebes <strong className="text-foreground">300 € num cartão pré-pago</strong> só
                por transferires o teu crédito habitação!
              </p>
            </BenefitCard>

            <BenefitCard icon="🏷️" title="Spread Mínimo de Campanha" delay={0.2}>
              <p>
                Acesso a condições especiais com o{" "}
                <strong className="text-foreground">spread mínimo de campanha</strong> nas Soluções
                Habitação.
              </p>
            </BenefitCard>

            <BenefitCard icon="🛒" title="1% em Cartão Worten" delay={0.3}>
              <p>
                Recebe{" "}
                <strong className="text-foreground">
                  1% do valor financiado em crédito hipotecário
                </strong>{" "}
                num cartão para usar nas lojas Worten (físicas e online)!
              </p>
            </BenefitCard>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Reserva a tua vaga! 🚀
          </h2>
          <p className="text-muted-foreground mb-6">
            Só tenho <strong className="text-foreground">5 vagas disponíveis</strong>. Envia-me um
            email para garantir a tua!
          </p>

          <a
            href="mailto:pedrogustavocosta@gmail.com?subject=Quero%20usar%20o%20c%C3%B3digo%20902CCM480!&body=Ol%C3%A1!%20Quero%20reservar%20a%20minha%20vaga%20para%20transfer%C3%AAncia%20de%20cr%C3%A9dito%20habita%C3%A7%C3%A3o%20com%20o%20c%C3%B3digo%20902CCM480."
            className="inline-flex items-center gap-2 bg-hero-gradient text-primary-foreground font-bold px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Enviar Email Agora
          </a>

          <a
            href="https://www.bancomontepio.pt/credito-habitacao-worten"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Ver condições das Soluções Habitação
          </a>
        </motion.div>

        {/* Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted/50 rounded-2xl p-6 space-y-4 text-sm text-muted-foreground"
        >
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Informações Importantes
          </h3>
          <div className="space-y-3 leading-relaxed">
            <p className="flex items-start gap-2">
              <CreditCard className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                O cartão pré-pago MGM tem validade de 4 anos e pode ser utilizado em compras
                presenciais ou online. Sujeito às condições gerais de utilização.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <CreditCard className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                O cartão pré-pago Worten tem validade de 4 anos. A liquidação total e antecipada
                do empréstimo, nos primeiros 5 anos do contrato, implica a devolução do valor
                atribuído no cartão. Sujeito às condições da campanha.
              </span>
            </p>
          </div>
        </motion.div>

        <footer className="mt-12 text-center text-xs text-muted-foreground pb-8">
          Campanha Banco Montepio · Máximo 5 amigos · 300 € por cada referência
        </footer>
      </div>
    </div>
  );
};

export default Index;
