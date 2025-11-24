import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Tv, Film, TvMinimal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Catalogue = () => {
  const [selectedTab, setSelectedTab] = useState<"channels" | "movies" | "series">("channels");
  const [searchQuery, setSearchQuery] = useState("");

  const channels = [
    { name: "Sport", count: 850 },
    { name: "Cinéma", count: 3550 },
    { name: "Documentaires", count: 420 },
    { name: "Actualités", count: 380 },
    { name: "Divertissement", count: 1200 },
    { name: "Enfants", count: 650 },
    { name: "Musique", count: 290 },
    { name: "France", count: 520 },
    { name: "Belgique", count: 180 },
    { name: "Suisse", count: 120 },
    { name: "Canada", count: 95 },
    { name: "Afrique", count: 340 },
    { name: "Arabes", count: 780 },
    { name: "UK", count: 450 },
    { name: "USA", count: 920 },
    { name: "Espagne", count: 310 },
    { name: "Portugal", count: 150 },
    { name: "Italie", count: 280 },
    { name: "Allemagne", count: 360 },
    { name: "Turquie", count: 420 },
    { name: "Inde", count: 680 },
    { name: "Asie", count: 890 },
    { name: "Amérique Latine", count: 540 },
    { name: "Pays-Bas", count: 110 },
  ];

  const movies = [
    { name: "Action & Aventure", count: 2840 },
    { name: "Comédie", count: 3120 },
    { name: "Drame", count: 2650 },
    { name: "Science-Fiction", count: 1580 },
    { name: "Horreur", count: 1420 },
    { name: "Thriller", count: 1890 },
    { name: "Romance", count: 1650 },
    { name: "Animation", count: 980 },
    { name: "Films Famille", count: 1240 },
    { name: "Documentaires", count: 850 },
    { name: "Films Français", count: 2100 },
    { name: "Films Américains", count: 5200 },
    { name: "Films Britanniques", count: 890 },
    { name: "Films Espagnols", count: 620 },
    { name: "Films Italiens", count: 540 },
    { name: "Films Arabes", count: 1380 },
    { name: "Bollywood", count: 2450 },
    { name: "Films Africains", count: 846 },
    { name: "Films Classiques", count: 1120 },
    { name: "Films 4K", count: 890 },
  ];

  const series = [
    { name: "Séries Action", count: 1840 },
    { name: "Séries Comédie", count: 2120 },
    { name: "Séries Drame", count: 2850 },
    { name: "Séries Crime", count: 1680 },
    { name: "Séries Sci-Fi", count: 920 },
    { name: "Séries Thriller", count: 1450 },
    { name: "Séries Romance", count: 980 },
    { name: "Séries Animation", count: 650 },
    { name: "Séries Documentaires", count: 540 },
    { name: "Séries Françaises", count: 1580 },
    { name: "Séries Américaines", count: 3890 },
    { name: "Séries Britanniques", count: 1120 },
    { name: "Séries Espagnoles", count: 780 },
    { name: "Séries Turques", count: 1650 },
    { name: "Séries Arabes", count: 2204 },
    { name: "Séries Coréennes", count: 890 },
    { name: "Séries Indiennes", count: 1240 },
    { name: "Séries Africaines", count: 3093 },
    { name: "Séries Classiques", count: 620 },
    { name: "Mini-Séries", count: 480 },
  ];

  const getCurrentData = () => {
    let data = [];
    if (selectedTab === "channels") data = channels;
    else if (selectedTab === "movies") data = movies;
    else data = series;

    if (searchQuery.trim() === "") return data;
    
    return data.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredData = getCurrentData();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Notre <span className="text-gradient">Catalogue</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Découvrez l'ensemble de nos contenus disponibles
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedTab("channels")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedTab === "channels"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                <Tv className="w-5 h-5" />
                Chaînes
              </button>
              <button
                onClick={() => setSelectedTab("movies")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedTab === "movies"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                <Film className="w-5 h-5" />
                Films
              </button>
              <button
                onClick={() => setSelectedTab("series")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedTab === "series"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                <TvMinimal className="w-5 h-5" />
                Séries
              </button>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={`Rechercher dans ${
                  selectedTab === "channels" ? "les chaînes" : selectedTab === "movies" ? "les films" : "les séries"
                }...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card border-border"
              />
            </div>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Card className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 card-shadow group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-muted-foreground text-sm font-medium bg-muted px-3 py-1 rounded-full">
                        {item.count}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Aucun résultat trouvé pour "{searchQuery}"
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalogue;
