import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Tv, Film, TvMinimal, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ViewLevel = "tab" | "countries" | "categories" | "content";

const Catalogue = () => {
  const [selectedTab, setSelectedTab] = useState<"channels" | "movies" | "series">("channels");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewLevel, setViewLevel] = useState<ViewLevel>("countries");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Pays pour chaque type
  const countries = [
    { name: "France", code: "FR", count: 520 },
    { name: "Belgique", code: "BE", count: 180 },
    { name: "Suisse", code: "CH", count: 120 },
    { name: "Canada", code: "CA", count: 95 },
    { name: "Afrique", code: "AF", count: 340 },
    { name: "Arabes", code: "AR", count: 780 },
    { name: "UK", code: "UK", count: 450 },
    { name: "USA", code: "US", count: 920 },
    { name: "Espagne", code: "ES", count: 310 },
    { name: "Portugal", code: "PT", count: 150 },
    { name: "Italie", code: "IT", count: 280 },
    { name: "Allemagne", code: "DE", count: 360 },
    { name: "Turquie", code: "TR", count: 420 },
    { name: "Inde", code: "IN", count: 680 },
    { name: "Asie", code: "AS", count: 890 },
    { name: "Amérique Latine", code: "LA", count: 540 },
    { name: "Pays-Bas", code: "NL", count: 110 },
  ];

  // Catégories par type de contenu
  const channelCategories = [
    { name: "Sport", count: 850 },
    { name: "Cinéma", count: 3550 },
    { name: "Documentaires", count: 420 },
    { name: "Actualités", count: 380 },
    { name: "Divertissement", count: 1200 },
    { name: "Enfants", count: 650 },
    { name: "Musique", count: 290 },
  ];

  const movieCategories = [
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
    { name: "Films Classiques", count: 1120 },
    { name: "Films 4K", count: 890 },
  ];

  const seriesCategories = [
    { name: "Action", count: 1840 },
    { name: "Comédie", count: 2120 },
    { name: "Drame", count: 2850 },
    { name: "Crime", count: 1680 },
    { name: "Sci-Fi", count: 920 },
    { name: "Thriller", count: 1450 },
    { name: "Romance", count: 980 },
    { name: "Animation", count: 650 },
    { name: "Aventure", count: 1340 },
    { name: "Documentaires", count: 540 },
    { name: "Classiques", count: 620 },
    { name: "Mini-Séries", count: 480 },
  ];

  // Contenus fictifs (sera affiché au niveau 3)
  const getContentList = () => {
    const items = [];
    for (let i = 1; i <= 24; i++) {
      items.push({
        id: i,
        title: `${selectedCountry} - ${selectedCategory} ${i}`,
        seasons: `Seasons: ${Math.floor(Math.random() * 7) + 1}`,
      });
    }
    return items;
  };

  const getCurrentCategories = () => {
    if (selectedTab === "channels") return channelCategories;
    else if (selectedTab === "movies") return movieCategories;
    else return seriesCategories;
  };

  const getCurrentData = () => {
    if (viewLevel === "countries") return countries;
    if (viewLevel === "categories") return getCurrentCategories();
    if (viewLevel === "content") return getContentList();
    return [];
  };

  const filteredData = getCurrentData().filter((item: any) =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTabChange = (tab: "channels" | "movies" | "series") => {
    setSelectedTab(tab);
    setViewLevel("countries");
    setSelectedCountry("");
    setSelectedCategory("");
    setSearchQuery("");
  };

  const handleCountryClick = (countryName: string) => {
    setSelectedCountry(countryName);
    setViewLevel("categories");
    setSearchQuery("");
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setViewLevel("content");
    setSearchQuery("");
  };

  const handleBack = () => {
    if (viewLevel === "content") {
      setViewLevel("categories");
      setSelectedCategory("");
    } else if (viewLevel === "categories") {
      setViewLevel("countries");
      setSelectedCountry("");
    }
    setSearchQuery("");
  };

  const getTitle = () => {
    if (viewLevel === "countries") return "Sélectionnez un pays";
    if (viewLevel === "categories") return `${selectedCountry} - Catégories`;
    if (viewLevel === "content") return `${selectedCountry} - ${selectedCategory}`;
    return "";
  };

  const getTabName = () => {
    if (selectedTab === "channels") return "les chaînes";
    if (selectedTab === "movies") return "les films";
    return "les séries";
  };

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
                onClick={() => handleTabChange("channels")}
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
                onClick={() => handleTabChange("movies")}
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
                onClick={() => handleTabChange("series")}
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

            {/* Back Button */}
            {viewLevel !== "countries" && (
              <div className="flex justify-start max-w-2xl mx-auto mb-4">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
              </div>
            )}

            {/* Title */}
            <h2 className="text-2xl font-heading font-semibold mb-6">
              {getTitle()}
            </h2>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={`Rechercher dans ${getTabName()}...`}
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
            className={
              viewLevel === "content"
                ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            }
          >
            {filteredData.length > 0 ? (
              filteredData.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.4 }}
                >
                  {viewLevel === "content" ? (
                    // Vue grille pour les contenus
                    <Card className="bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                      <div className="aspect-[2/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="text-center p-4">
                          <TvMinimal className="w-12 h-12 mx-auto mb-2 text-primary/60" />
                          <p className="text-xs text-muted-foreground">Image non disponible</p>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{item.seasons}</p>
                      </div>
                    </Card>
                  ) : (
                    // Vue liste pour pays et catégories
                    <Card
                      onClick={() => {
                        if (viewLevel === "countries") handleCountryClick(item.name);
                        else if (viewLevel === "categories") handleCategoryClick(item.name);
                      }}
                      className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 card-shadow group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-muted-foreground text-sm font-medium bg-muted px-3 py-1 rounded-full">
                          {item.count}
                        </span>
                      </div>
                    </Card>
                  )}
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
