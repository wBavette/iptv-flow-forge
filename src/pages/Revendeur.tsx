import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Users, Zap, Globe, Video, Headphones, Monitor, Settings } from "lucide-react";

const Revendeur = () => {
  const pricingTiers = [
    { credits: 120, price: 240 },
    { credits: 240, price: 400 },
    { credits: 360, price: 580 },
    { credits: 480, price: 740 },
    { credits: 600, price: 915 },
    { credits: 720, price: 1060 },
    { credits: 840, price: 1230 },
    { credits: 960, price: 1400 },
    { credits: 1080, price: 1570 },
    { credits: 1200, price: 1740 },
  ];

  const [selectedTierIndex, setSelectedTierIndex] = useState(0);
  const selectedTier = pricingTiers[selectedTierIndex];

  const benefits = [
    {
      icon: Monitor,
      title: "Panel Professionnel",
      description: "Accédez à une plateforme de gestion complète et intuitive pour vos clients",
    },
    {
      icon: DollarSign,
      title: "Remises en Volume",
      description: "Profitez de marges importantes grâce à nos tarifs dégressifs sur les crédits",
    },
    {
      icon: Zap,
      title: "Configuration Instantanée",
      description: "Démarrez immédiatement avec une configuration et livraison instantanées",
    },
    {
      icon: Globe,
      title: "Contenu Étendu",
      description: "+20 000 chaînes, +30 000 films et séries pour satisfaire tous vos clients",
    },
    {
      icon: Video,
      title: "Multi-Appareil",
      description: "Compatible avec Smart TV, smartphones, tablettes, Box Android et plus encore",
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Assistance dédiée sur WhatsApp pour vous et vos clients à tout moment",
    },
    {
      icon: Users,
      title: "Gestion Simplifiée",
      description: "Créez, gérez et suivez les abonnements de vos clients en quelques clics",
    },
    {
      icon: Settings,
      title: "Personnalisable",
      description: "Définissez vos propres tarifs et créez des offres sur mesure pour vos clients",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Devenez revendeur meru'IPTV
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Lancez votre activité dès aujourd'hui !
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Pour ceux qui souhaitent revendre des IPTV, nous proposons des tarifs avantageux ainsi qu'un panel administrateur incluant la gestion complète de vos abonnés.
          </p>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Tarifs Revendeur</CardTitle>
              <CardDescription className="text-center text-base">
                Sélectionnez le nombre de crédits souhaité
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Price Display */}
              <div className="text-center space-y-2">
                <div className="text-6xl font-bold text-primary">
                  {selectedTier.credits}
                </div>
                <div className="text-2xl text-muted-foreground">crédits</div>
                <div className="text-5xl font-bold mt-4">
                  {selectedTier.price}€
                </div>
                <div className="text-sm text-muted-foreground">
                  Soit {(selectedTier.price / selectedTier.credits).toFixed(2)}€ par crédit
                </div>
              </div>

              {/* Slider */}
              <div className="px-4">
                <Slider
                  value={[selectedTierIndex]}
                  onValueChange={(value) => setSelectedTierIndex(value[0])}
                  max={pricingTiers.length - 1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>{pricingTiers[0].credits}</span>
                  <span>{pricingTiers[pricingTiers.length - 1].credits}</span>
                </div>
              </div>

              {/* All Pricing Tiers */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8">
                {pricingTiers.map((tier, index) => (
                  <button
                    key={tier.credits}
                    onClick={() => setSelectedTierIndex(index)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedTierIndex === index
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold">{tier.credits}</div>
                    <div className="text-sm text-muted-foreground">{tier.price}€</div>
                  </button>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  size="lg"
                  variant="hero"
                  onClick={() => window.open("https://wa.me/c/33751028057", "_blank")}
                >
                  Commander sur WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Pour plus de renseignements, contactez-nous sur WhatsApp
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir revendeur chez meru'IPTV
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Questions Fréquentes
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Où pourrais-je gérer les abonnements de mes clients ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Vous recevrez un lien vers une plateforme dédiée, vous permettant de créer, gérer et suivre les abonnements de vos clients en toute simplicité.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Comment fonctionne le système de crédits ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Le fonctionnement de notre système de crédits est simple et transparent : 1 crédit correspond à 1 mois d'abonnement. Ainsi, pour un abonnement de 6 mois, 6 crédits seront automatiquement déduits de votre compte. Le montant minimum d'achat est de 120 crédits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/50 rounded-lg px-6 bg-card/30 backdrop-blur-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Pourquoi choisir revendeur chez meru'IPTV ?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                meru'IPTV offre des tarifs compétitifs, un panel de gestion complet, un contenu riche et varié, une compatibilité multi-appareils, et un support client disponible 24/7. Vous bénéficiez également de remises importantes sur les achats en volume et d'une totale flexibilité pour définir vos propres tarifs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Revendeur;
