import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Smartphone, Tv, Monitor, Tablet } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Guide = () => {
  const devices = [
    {
      icon: Smartphone,
      title: "Smartphone & Tablette",
      apps: [
        {
          name: "IPTV Smarters Pro",
          steps: [
            "Téléchargez l'application depuis le Play Store ou App Store",
            "Ouvrez l'application et sélectionnez 'Login with Xtream Codes API'",
            "Entrez vos identifiants fournis par email",
            "Cliquez sur 'Add User' et profitez !",
          ],
        },
        {
          name: "TiviMate",
          steps: [
            "Téléchargez TiviMate depuis le Play Store",
            "Ouvrez l'app et ajoutez une playlist",
            "Sélectionnez 'Xtream Codes' comme type",
            "Entrez vos identifiants et commencez à regarder",
          ],
        },
      ],
    },
    {
      icon: Tv,
      title: "Smart TV & Box Android",
      apps: [
        {
          name: "IPTV Smarters Pro",
          steps: [
            "Installez l'application depuis le Google Play Store",
            "Lancez l'app et choisissez 'Login with Xtream Codes API'",
            "Saisissez vos identifiants (URL, nom d'utilisateur, mot de passe)",
            "Validez et profitez de vos chaînes",
          ],
        },
        {
          name: "TiviMate (Recommandé)",
          steps: [
            "Installez TiviMate depuis le Play Store",
            "Ajoutez une playlist via 'Xtream Codes'",
            "Entrez l'URL du serveur et vos identifiants",
            "Configurez l'EPG et commencez à regarder",
          ],
        },
      ],
    },
    {
      icon: Monitor,
      title: "PC & Mac",
      apps: [
        {
          name: "VLC Media Player",
          steps: [
            "Téléchargez et installez VLC depuis videolan.org",
            "Ouvrez VLC et allez dans 'Media' > 'Open Network Stream'",
            "Collez l'URL M3U fournie dans vos identifiants",
            "Cliquez sur 'Play' pour accéder aux chaînes",
          ],
        },
        {
          name: "IPTV Smarters Pro (Windows)",
          steps: [
            "Téléchargez la version Windows depuis le site officiel",
            "Installez et lancez l'application",
            "Sélectionnez 'Login with Xtream Codes API'",
            "Entrez vos identifiants et profitez",
          ],
        },
      ],
    },
    {
      icon: Tablet,
      title: "MAG Box & Autres",
      apps: [
        {
          name: "Configuration MAG",
          steps: [
            "Allumez votre MAG Box",
            "Allez dans 'Paramètres' > 'Serveurs' > 'Portail'",
            "Entrez l'URL du portail fournie dans vos identifiants",
            "Redémarrez et accédez à vos contenus",
          ],
        },
        {
          name: "Enigma2 (Dreambox)",
          steps: [
            "Connectez-vous à votre box via FTP",
            "Uploadez le fichier de playlist dans /etc/enigma2/",
            "Redémarrez votre décodeur",
            "Les chaînes apparaîtront dans votre liste",
          ],
        },
      ],
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
              Guide d'<span className="text-gradient">Installation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Configurez votre abonnement IPTV en quelques minutes sur tous vos appareils
            </p>
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {devices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <device.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold">
                      {device.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {device.apps.map((app, appIndex) => (
                      <div
                        key={appIndex}
                        className="bg-muted/30 rounded-lg p-6 border border-border/50"
                      >
                        <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                          {app.name}
                        </h3>
                        <ol className="space-y-3">
                          {app.steps.map((step, stepIndex) => (
                            <li
                              key={stepIndex}
                              className="flex gap-3 text-foreground/80"
                            >
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold">
                                {stepIndex + 1}
                              </span>
                              <span className="text-sm leading-relaxed">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Card className="p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-card border-primary/20 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Besoin d'Aide ?
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre équipe support est disponible 24/7 pour vous accompagner dans l'installation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Contacter le Support
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guide;
