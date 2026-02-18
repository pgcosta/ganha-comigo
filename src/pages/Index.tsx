import { motion } from "framer-motion";
import { useState } from "react";
import { ConfettiBackground } from "@/components/ConfettiBackground";
import { CodeCard } from "@/components/CodeCard";
import { BenefitCard } from "@/components/BenefitCard";
import { CountdownBadge } from "@/components/CountdownBadge";
import { SlotsAvailability } from "@/components/SlotsAvailability";
import { ExternalLink, AlertTriangle, CreditCard, ShieldCheck } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = `mailto:pedrogustavocosta@gmail.com?subject=Quero%20usar%20o%20c%C3%B3digo%20902CCM480!&body=Ol%C3%A1!%20Quero%20reservar%20a%20minha%20vaga%20para%20transfer%C3%AAncia%20de%20cr%C3%A9dito%20habita%C3%A7%C3%A3o%20com%20o%20c%C3%B3digo%20902CCM480.%0A%0AO%20meu%20email%20de%20contacto%3A%20${encodeURIComponent(email)}`;
    setSubmitted(true);
  };

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
            <span className="text-gradient">€300</span>!
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Campanha Member Get Member do{" "}
            <a
              href="https://www.bancomontepio.pt/particulares/credito/credito-habitacao/transferencia-credito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Banco Montepio
            </a>
            .
          </p>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mt-4">
             Fala com o teu gestor e ganhamos os dois! 🎉
          </p>
          <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-primary" />
            Sou cliente Montepio e esta é uma campanha oficial do banco.
          </p>
        </motion.div>

        <CountdownBadge />
        <CodeCard />

        <SlotsAvailability availableSlots={5} totalSlots={5}/>

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
              <div className="mt-3 bg-primary/10 rounded-xl p-3 text-sm">
                <p className="font-semibold text-foreground">💡 Exemplo prático:</p>
                <p>
                  Crédito de <strong className="text-foreground">150.000 €</strong> → recebes{" "}
                  <strong className="text-foreground">1.500 € em cartão Worten</strong>
                </p>
                <p>
                  Crédito de <strong className="text-foreground">300.000 €</strong> → recebes{" "}
                  <strong className="text-foreground">3.000 € em cartão Worten</strong> 🤯
                </p>
              </div>
            </BenefitCard>
          </div>
        </div>

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
