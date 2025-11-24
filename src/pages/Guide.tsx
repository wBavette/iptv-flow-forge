import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Smartphone, Tv, Monitor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Guide = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  const devices = [
    {
      id: "smartphone",
      icon: Smartphone,
      title: "Smartphone & Tablette",
      steps: [
        "Téléchargez l'application IPTV Smarters Pro depuis le Play Store (Android) ou App Store (iOS)",
        "Ouvrez l'application et sélectionnez 'Login with Xtream Codes API'",
        "Entrez vos identifiants fournis par email (URL, nom d'utilisateur, mot de passe)",
        "Cliquez sur 'Add User' et profitez de vos chaînes !",
      ],
    },
    {
      id: "smarttv",
      icon: Tv,
      title: "Smart TV & Box Android",
      steps: [
        "Installez l'application IPTV Smarters Pro depuis le Google Play Store de votre TV/Box",
        "Lancez l'application et choisissez 'Login with Xtream Codes API'",
        "Saisissez vos identifiants (URL du serveur, nom d'utilisateur, mot de passe)",
        "Validez et profitez de vos contenus en haute qualité",
      ],
    },
    {
      id: "pc",
      icon: Monitor,
      title: "PC & Mac",
      steps: [
        "Téléchargez IPTV Smarters Pro depuis le site officiel pour Windows/Mac",
        "Installez et lancez l'application",
        "Sélectionnez 'Login with Xtream Codes API'",
        "Entrez vos identifiants et commencez à regarder",
      ],
    },
  ];

  const selectedDeviceData = devices.find((d) => d.id === selectedDevice);

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
              Guide d'<span className="text-gradient">Installation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Configurez votre abonnement IPTV en quelques minutes sur tous vos appareils
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Device Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-heading font-semibold mb-6 text-center">
                Choisissez votre appareil
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {devices.map((device, index) => (
                  <motion.button
                    key={device.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onClick={() => setSelectedDevice(device.id)}
                    className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                      selectedDevice === device.id
                        ? "border-primary bg-primary/10 scale-105"
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center transition-colors ${
                          selectedDevice === device.id
                            ? "bg-primary/20"
                            : "bg-primary/10"
                        }`}
                      >
                        <device.icon
                          className={`w-8 h-8 ${
                            selectedDevice === device.id
                              ? "text-primary"
                              : "text-primary/70"
                          }`}
                        />
                      </div>
                      <h3 className="font-heading font-semibold text-center">
                        {device.title}
                      </h3>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Tutorial Display */}
            {selectedDeviceData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 bg-card border-primary/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <selectedDeviceData.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">
                      IPTV Smarters Pro
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {selectedDeviceData.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex gap-4 items-start"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                          {index + 1}
                        </div>
                        <p className="text-foreground/90 leading-relaxed pt-1">
                          {step}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16"
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-card border-primary/20 text-center">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Besoin d'Aide ?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Notre équipe support est disponible 24/7 pour vous accompagner dans l'installation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/c/33751028057"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    Contacter le Support
                  </a>
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

export default Guide;
