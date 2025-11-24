import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce que meru'IPTV ?",
      answer: (
        <>
          <p className="mb-3">
            <strong>meru'IPTV est né avec l'ambition de rendre l'accès à un contenu télévisuel de haute qualité plus accessible et à moindre coût.</strong>
          </p>
          <p className="mb-3">
            <strong>Notre objectif —</strong> proposer une expérience fluide, performante et intuitive, portée par une technologie fiable anti-freeze et un support client attentif.
          </p>
          <p>
            Nous avons conçu un service qui combine simplicité d'utilisation, large choix de contenus et accompagnement réactif pour offrir la meilleure expérience possible à nos utilisateurs.
          </p>
        </>
      ),
    },
    {
      question: "Comment souscrire à meru'IPTV ?",
      answer: (
        <>
          <p className="mb-3">
            <strong>Une fois votre paiement effectué, votre accès est activé immédiatement : vous pouvez profiter de nos services sans attendre.</strong>
          </p>
          <p className="mb-3">
            Le règlement se fait en un seul versement, sans renouvellement automatique, pour vous offrir une gestion simple, transparente et totalement sécurisée.
          </p>
          <p>
            Pour le moment, les paiements sont acceptés uniquement via <strong>PayPal.</strong>
          </p>
        </>
      ),
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: (
        <>
          <p className="mb-3">
            <strong>Bonne nouvelle — il n'y a aucun renouvellement automatique sur meru'IPTV.</strong>
          </p>
          <p className="mb-3">
            Pour votre sécurité, aucune information de paiement n'est enregistrée.
            À la fin de votre abonnement, tout s'arrête automatiquement : aucun prélèvement, aucun engagement.
          </p>
          <p className="mb-3">
            Vous êtes libre de renouveler manuellement si vous souhaitez continuer à profiter du service.
          </p>
          <p>
            <strong>Une expérience transparente, sans pression et sans mauvaise surprise.</strong>
          </p>
        </>
      ),
    },
    {
      question: "Puis-je regarder meru'IPTV sur plusieurs appareils ?",
      answer: (
        <>
          <p className="mb-3">
            Nos services sont accessibles sur l'ensemble de vos appareils connectés : smartphone, télévision, tablette ou ordinateur.
          </p>
          <p>
            Vous pouvez connecter ainsi qu'utiliser plusieurs appareils en même temps, mais nous vous déconseillons la multi-lecture lors des soirées à forte affluence, car cela peut entraîner des ralentissements ou des coupures.
          </p>
        </>
      ),
    },
    {
      question: "Quelle est la qualité de streaming disponible ?",
      answer: (
        <>
          <p className="mb-3">
            meru'IPTV propose des contenus en <strong>Full HD et 4K</strong>, selon la disponibilité des chaînes et votre connexion internet.
          </p>
          <p>
            Notre technologie anti-buffering garantit une lecture fluide et stable, même lors des pics d'audience.
          </p>
        </>
      ),
    },
    {
      question: "Ai-je besoin d'un VPN pour utiliser meru'IPTV ?",
      answer: (
        <>
          <p className="mb-3">
            L'utilisation d'un VPN n'est pas obligatoire pour utiliser meru'IPTV, mais elle est recommandée pour protéger votre confidentialité en ligne.
          </p>
          <p>
            Un VPN peut également améliorer votre expérience en évitant les restrictions géographiques et en sécurisant votre connexion.
          </p>
        </>
      ),
    },
    {
      question: "Que faire si je rencontre des problèmes techniques ?",
      answer: (
        <>
          <p className="mb-3">
            Notre équipe de support est disponible <strong>7 jours sur 7 via WhatsApp</strong> pour vous aider à résoudre tout problème technique.
          </p>
          <p className="mb-3">
            Nous proposons également un guide d'installation détaillé pour chaque type d'appareil sur notre page Guide.
          </p>
          <p>
            La plupart des problèmes peuvent être résolus rapidement en vérifiant votre connexion internet ou en redémarrant votre application.
          </p>
        </>
      ),
    },
    {
      question: "Puis-je essayer le service avant de m'abonner ?",
      answer: (
        <>
          <p className="mb-3">
            Oui ! Nous offrons un <strong>essai gratuit de 24 heures</strong> pour vous permettre de tester notre service sans engagement.
          </p>
          <p>
            Aucune carte bancaire n'est requise pour l'essai. Contactez-nous via WhatsApp pour activer votre période d'essai gratuite.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Questions <span className="text-gradient">Fréquentes</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur meru'IPTV
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-card border-border">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border/50 pb-4"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      <span className="font-heading font-semibold text-lg">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-muted-foreground pt-2 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-card border-primary/20">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Vous n'avez pas trouvé de réponse ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe support est disponible 7j/7 sur WhatsApp pour répondre à toutes vos questions
              </p>
              <a
                href="https://wa.me/c/33751028057"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Contactez-nous sur WhatsApp
              </a>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
