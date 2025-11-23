import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Tv, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Tv,
      title: "15 000+ Chaînes",
      description: "Accédez à des milliers de chaînes internationales en HD et 4K",
    },
    {
      icon: Zap,
      title: "Streaming Ultra Rapide",
      description: "Technologie anti-buffering pour une expérience fluide",
    },
    {
      icon: Globe,
      title: "Multi-Dispositifs",
      description: "Regardez sur TV, smartphone, tablette ou ordinateur",
    },
    {
      icon: Shield,
      title: "Sécurisé & Fiable",
      description: "Service crypté avec support technique 24/7",
    },
  ];

  const benefits = [
    "VOD illimité avec plus de 50 000 films et séries",
    "EPG complet pour tous les programmes",
    "Mise à jour automatique des contenus",
    "Compatible avec tous les lecteurs IPTV",
    "Pas de contrat, résiliable à tout moment",
    "Essai gratuit de 24h disponible",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
                ✨ Service IPTV Premium
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Le Meilleur de la TV{" "}
              <span className="text-gradient">en Streaming</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Profitez de milliers de chaînes et contenus en haute qualité.
              Installation simple, support réactif, satisfaction garantie.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/forfaits">
                <Button variant="hero" size="xl" className="group">
                  Voir les Forfaits
                  <Zap className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="glassy" size="xl">
                  Essai Gratuit 24h
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20 animate-glow-pulse" />
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Pourquoi Choisir <span className="text-gradient">StreamPro</span> ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une expérience de streaming inégalée avec des fonctionnalités premium
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 card-shadow group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Une Offre <span className="text-gradient">Complète</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Découvrez tous les avantages de notre service IPTV premium
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="p-8 bg-gradient-to-br from-card to-muted border-primary/20 card-shadow">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                      <Tv className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">
                      Prêt à Commencer ?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Profitez de notre essai gratuit de 24h sans engagement
                    </p>
                    <Link to="/forfaits">
                      <Button variant="hero" size="lg" className="w-full">
                        Découvrir nos Forfaits
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
