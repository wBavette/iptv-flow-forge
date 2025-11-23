import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Award, Globe, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { icon: Users, value: "50 000+", label: "Clients Satisfaits" },
    { icon: Award, value: "5 ans", label: "D'Expérience" },
    { icon: Globe, value: "150+", label: "Pays Couverts" },
    { icon: Headphones, value: "24/7", label: "Support Client" },
  ];

  const values = [
    {
      title: "Qualité Premium",
      description:
        "Nous nous engageons à fournir la meilleure qualité de streaming possible avec une technologie de pointe.",
    },
    {
      title: "Satisfaction Client",
      description:
        "Votre satisfaction est notre priorité. Notre équipe est disponible 24/7 pour vous accompagner.",
    },
    {
      title: "Innovation Continue",
      description:
        "Nous améliorons constamment nos services pour vous offrir la meilleure expérience de streaming.",
    },
    {
      title: "Transparence",
      description:
        "Des prix clairs, sans frais cachés. Ce que vous voyez est ce que vous payez.",
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
              À Propos de <span className="text-gradient">StreamPro</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leader européen de l'IPTV premium, nous révolutionnons la manière dont vous consommez le contenu audiovisuel.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-muted border-primary/20">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2019, StreamPro est née de la volonté de rendre le streaming accessible à tous, partout dans le monde. Notre mission est simple : offrir le meilleur service IPTV avec la plus haute qualité et fiabilité possible.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de servir plus de 50 000 clients dans plus de 150 pays. Notre infrastructure technologique de pointe garantit une expérience de streaming fluide, sans interruption, que vous soyez à Paris, New York ou Tokyo.
                </p>
                <p>
                  Notre équipe d'experts travaille sans relâche pour maintenir et améliorer nos services. Nous investissons constamment dans les dernières technologies pour vous offrir la meilleure expérience possible.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Values */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-heading font-bold text-center mb-12"
            >
              Nos <span className="text-gradient">Valeurs</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
                    <h3 className="text-xl font-heading font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
