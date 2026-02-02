import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Forfaits = () => {
  const plans = [
    {
      name: "1 Mois",
      price: "10",
      duration: "mois",
      description: "Idéal pour découvrir notre service",
      features: [
        "Qualité 4K & Full HD",
        "+20.000 chaînes TV",
        "+30.000 films et séries",
        "Compatible avec tous vos appareils",
        "Mises à jour automatiques",
        "Support WhatsApp 7j/7",
        "Rapide et stable",
        "Technologie anti-buffering",
      ],
      popular: false,
    },
    {
      name: "3 Mois",
      price: "20",
      duration: "3 mois",
      description: "Parfait pour une utilisation régulière",
      features: [
        "Qualité 4K & Full HD",
        "+20.000 chaînes TV",
        "+30.000 films et séries",
        "Compatible avec tous vos appareils",
        "Mises à jour automatiques",
        "Support WhatsApp 7j/7",
        "Rapide et stable",
        "Technologie anti-buffering",
      ],
      popular: false,
    },
    {
      name: "6 Mois",
      price: "35",
      duration: "6 mois",
      description: "Meilleur rapport qualité-prix",
      features: [
        "Qualité 4K & Full HD",
        "+20.000 chaînes TV",
        "+30.000 films et séries",
        "Compatible avec tous vos appareils",
        "Mises à jour automatiques",
        "Support WhatsApp 7j/7",
        "Rapide et stable",
        "Technologie anti-buffering",
      ],
      popular: false,
    },
    {
      name: "12 Mois",
      price: "50",
      duration: "12 mois",
      description: "L'offre la plus économique",
      features: [
        "Qualité 4K & Full HD",
        "+20.000 chaînes TV",
        "+30.000 films et séries",
        "Compatible avec tous vos appareils",
        "Mises à jour automatiques",
        "Support WhatsApp 7j/7",
        "Rapide et stable",
        "Technologie anti-buffering",
      ],
      popular: true,
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
              Choisissez Votre <span className="text-gradient">Abonnement</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des offres flexibles adaptées à tous vos besoins. Aucun engagement, résiliable à tout moment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      🔥 Plus Populaire
                    </span>
                  </div>
                )}
                <Card
                  className={`p-8 h-full ${
                    plan.popular
                      ? "border-primary/50 bg-gradient-to-br from-card to-card/50 card-shadow scale-105"
                      : "border-border bg-card"
                  } hover:border-primary/70 transition-all duration-300`}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gradient">
                        {plan.price}€
                      </span>
                      <span className="text-muted-foreground">/ {plan.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/90 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a href="https://www.whatsapp.com/catalog/33751028057/?app_absent=0" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant={plan.popular ? "hero" : "glassy"}
                      size="lg"
                      className="w-full"
                    >
                      Choisir ce Forfait
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-card border-primary/20">
              <h3 className="text-2xl font-heading font-bold mb-4">
                🎁 Offre Spéciale
              </h3>
              <p className="text-muted-foreground mb-6">
                Essayez gratuitement pendant 24h avant de vous engager. Aucune carte bancaire requise !
              </p>
              <a href="https://wa.me/message/KEYQ6SKITE4SI1" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Démarrer l'Essai Gratuit
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Forfaits;
