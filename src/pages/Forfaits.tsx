import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Forfaits = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

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

  const reviews = [
    {
      name: "Mohamed A.",
      initials: "MA",
      rating: 5,
      comment: "Service excellent ! La qualité d'image est incroyable et aucun buffering. Je recommande à 100%.",
      date: "Il y a 2 semaines",
    },
    {
      name: "Sarah L.",
      initials: "SL",
      rating: 5,
      comment: "Enfin un service IPTV fiable ! Le support WhatsApp répond très rapidement. Très satisfaite.",
      date: "Il y a 1 mois",
    },
    {
      name: "Karim B.",
      initials: "KB",
      rating: 5,
      comment: "J'ai testé plusieurs services avant, celui-ci est de loin le meilleur. Rapport qualité-prix imbattable.",
      date: "Il y a 3 semaines",
    },
    {
      name: "Julie M.",
      initials: "JM",
      rating: 5,
      comment: "Installation facile grâce au guide, et la qualité 4K est vraiment au rendez-vous !",
      date: "Il y a 1 semaine",
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

          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ce que disent nos <span className="text-gradient">clients</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Découvrez les témoignages de nos clients satisfaits
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplayPlugin.current]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className="p-6 h-full bg-card border-border hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="h-10 w-10 bg-primary/20">
                          <AvatarFallback className="bg-primary/20 text-primary font-semibold text-sm">
                            {review.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>

                      <div className="relative">
                        <Quote className="w-6 h-6 text-primary/20 absolute -top-1 -left-1" />
                        <p className="text-foreground/80 text-sm pl-4">
                          {review.comment}
                        </p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Forfaits;
