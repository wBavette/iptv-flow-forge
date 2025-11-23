import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Forfaits = () => {
  const plans = [
    {
      name: "Essentiel",
      price: "9.99",
      duration: "mois",
      description: "Parfait pour découvrir nos services",
      features: [
        "5 000+ chaînes en direct",
        "10 000+ VOD",
        "Qualité HD",
        "1 connexion simultanée",
        "Support par email",
        "EPG 7 jours",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "14.99",
      duration: "mois",
      description: "Notre offre la plus populaire",
      features: [
        "15 000+ chaînes en direct",
        "50 000+ VOD",
        "Qualité 4K/HD/FHD",
        "3 connexions simultanées",
        "Support prioritaire 24/7",
        "EPG complet",
        "Anti-freeze garanti",
        "Mise à jour automatique",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "24.99",
      duration: "mois",
      description: "Pour une expérience ultime",
      features: [
        "20 000+ chaînes en direct",
        "80 000+ VOD",
        "Qualité 4K/HD/FHD",
        "5 connexions simultanées",
        "Support VIP dédié 24/7",
        "EPG complet + catch-up",
        "Anti-freeze premium",
        "Installation à distance",
        "Playlist personnalisée",
      ],
      popular: false,
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
              Choisissez Votre <span className="text-gradient">Forfait</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des offres flexibles adaptées à tous vos besoins. Aucun engagement, résiliable à tout moment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

                  <Link to="/contact" className="block">
                    <Button
                      variant={plan.popular ? "hero" : "glassy"}
                      size="lg"
                      className="w-full"
                    >
                      Choisir ce Forfait
                    </Button>
                  </Link>
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
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Démarrer l'Essai Gratuit
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Forfaits;
