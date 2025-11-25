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

  // Catégories par type de contenu et par pays
  const channelCategoriesByCountry: { [key: string]: Array<{ name: string; count: number }> } = {
    "France": [
      { name: "Sport", count: 124 },
      { name: "Cinéma", count: 450 },
      { name: "Documentaires", count: 85 },
      { name: "Actualités", count: 95 },
      { name: "Divertissement", count: 180 },
      { name: "Enfants", count: 65 },
      { name: "Musique", count: 45 },
    ],
    "Belgique": [
      { name: "Sport", count: 42 },
      { name: "Cinéma", count: 95 },
      { name: "Actualités", count: 28 },
      { name: "Divertissement", count: 45 },
    ],
    "Suisse": [
      { name: "Sport", count: 32 },
      { name: "Cinéma", count: 58 },
      { name: "Actualités", count: 22 },
      { name: "Divertissement", count: 38 },
    ],
    "UK": [
      { name: "Sport", count: 125 },
      { name: "Cinéma", count: 180 },
      { name: "Documentaires", count: 95 },
      { name: "Actualités", count: 75 },
      { name: "Divertissement", count: 140 },
      { name: "Enfants", count: 55 },
    ],
    "USA": [
      { name: "Sport", count: 185 },
      { name: "Cinéma", count: 280 },
      { name: "Documentaires", count: 125 },
      { name: "Actualités", count: 145 },
      { name: "Divertissement", count: 240 },
      { name: "Enfants", count: 95 },
      { name: "Musique", count: 65 },
    ],
    "Arabes": [
      { name: "Cinéma", count: 245 },
      { name: "Sport", count: 155 },
      { name: "Actualités", count: 125 },
      { name: "Divertissement", count: 185 },
      { name: "Enfants", count: 85 },
      { name: "Musique", count: 48 },
    ],
    "Afrique": [
      { name: "Cinéma", count: 125 },
      { name: "Sport", count: 85 },
      { name: "Actualités", count: 65 },
      { name: "Divertissement", count: 95 },
      { name: "Musique", count: 42 },
    ],
    "Espagne": [
      { name: "Sport", count: 95 },
      { name: "Cinéma", count: 125 },
      { name: "Actualités", count: 55 },
      { name: "Divertissement", count: 85 },
    ],
    "Portugal": [
      { name: "Sport", count: 48 },
      { name: "Cinéma", count: 65 },
      { name: "Actualités", count: 32 },
      { name: "Divertissement", count: 42 },
    ],
    "Italie": [
      { name: "Sport", count: 85 },
      { name: "Cinéma", count: 110 },
      { name: "Actualités", count: 48 },
      { name: "Divertissement", count: 75 },
    ],
    "Allemagne": [
      { name: "Sport", count: 105 },
      { name: "Cinéma", count: 135 },
      { name: "Documentaires", count: 65 },
      { name: "Actualités", count: 68 },
      { name: "Divertissement", count: 95 },
    ],
    "Turquie": [
      { name: "Cinéma", count: 155 },
      { name: "Sport", count: 95 },
      { name: "Actualités", count: 75 },
      { name: "Divertissement", count: 125 },
    ],
    "Inde": [
      { name: "Cinéma", count: 245 },
      { name: "Sport", count: 125 },
      { name: "Divertissement", count: 185 },
      { name: "Actualités", count: 95 },
      { name: "Musique", count: 65 },
    ],
    "Asie": [
      { name: "Cinéma", count: 285 },
      { name: "Sport", count: 165 },
      { name: "Divertissement", count: 245 },
      { name: "Actualités", count: 125 },
      { name: "Enfants", count: 95 },
    ],
    "Canada": [
      { name: "Sport", count: 32 },
      { name: "Cinéma", count: 42 },
      { name: "Actualités", count: 25 },
      { name: "Divertissement", count: 35 },
    ],
    "Amérique Latine": [
      { name: "Sport", count: 145 },
      { name: "Cinéma", count: 185 },
      { name: "Divertissement", count: 155 },
      { name: "Actualités", count: 85 },
      { name: "Musique", count: 48 },
    ],
    "Pays-Bas": [
      { name: "Sport", count: 35 },
      { name: "Cinéma", count: 48 },
      { name: "Actualités", count: 22 },
      { name: "Divertissement", count: 32 },
    ],
  };

  const movieCategoriesByCountry: { [key: string]: Array<{ name: string; count: number }> } = {
    "France": [
      { name: "Action & Aventure", count: 485 },
      { name: "Comédie", count: 625 },
      { name: "Drame", count: 548 },
      { name: "Thriller", count: 385 },
      { name: "Romance", count: 342 },
      { name: "Science-Fiction", count: 285 },
      { name: "Films Classiques", count: 245 },
      { name: "Documentaires", count: 185 },
    ],
    "Belgique": [
      { name: "Drame", count: 125 },
      { name: "Comédie", count: 95 },
      { name: "Thriller", count: 68 },
      { name: "Romance", count: 48 },
    ],
    "Suisse": [
      { name: "Drame", count: 85 },
      { name: "Comédie", count: 65 },
      { name: "Documentaires", count: 42 },
    ],
    "UK": [
      { name: "Action & Aventure", count: 285 },
      { name: "Comédie", count: 345 },
      { name: "Drame", count: 385 },
      { name: "Thriller", count: 245 },
      { name: "Science-Fiction", count: 185 },
      { name: "Horreur", count: 165 },
      { name: "Films Classiques", count: 195 },
    ],
    "USA": [
      { name: "Action & Aventure", count: 1245 },
      { name: "Comédie", count: 985 },
      { name: "Drame", count: 845 },
      { name: "Science-Fiction", count: 685 },
      { name: "Horreur", count: 545 },
      { name: "Thriller", count: 685 },
      { name: "Romance", count: 485 },
      { name: "Animation", count: 345 },
      { name: "Films 4K", count: 485 },
    ],
    "Arabes": [
      { name: "Films Arabes 2024", count: 685 },
      { name: "Films Arabes Classiques", count: 845 },
      { name: "Films Égyptiens", count: 485 },
      { name: "Films Marocains", count: 245 },
      { name: "Films Algériens", count: 185 },
      { name: "Films Tunisiens", count: 165 },
      { name: "Comédie Arabe", count: 285 },
      { name: "Drame Arabe", count: 385 },
      { name: "Films pour Enfants", count: 245 },
    ],
    "Afrique": [
      { name: "Films Africains", count: 485 },
      { name: "Afrique du Sud", count: 245 },
      { name: "Nollywood", count: 385 },
      { name: "Documentaires", count: 165 },
    ],
    "Turquie": [
      { name: "Films Turcs", count: 385 },
      { name: "Drame Turc", count: 285 },
      { name: "Comédie Turque", count: 185 },
      { name: "Romance Turque", count: 145 },
    ],
    "Inde": [
      { name: "Bollywood", count: 1245 },
      { name: "Action Indienne", count: 485 },
      { name: "Romance Indienne", count: 545 },
      { name: "Comédie Indienne", count: 385 },
      { name: "Drame Indien", count: 445 },
    ],
    "Espagne": [
      { name: "Films Espagnols", count: 285 },
      { name: "Drame Espagnol", count: 185 },
      { name: "Comédie Espagnole", count: 145 },
      { name: "Thriller Espagnol", count: 95 },
    ],
    "Portugal": [
      { name: "Films Portugais", count: 125 },
      { name: "Drame Portugais", count: 85 },
      { name: "Comédie Portugaise", count: 48 },
    ],
    "Italie": [
      { name: "Films Italiens", count: 345 },
      { name: "Drame Italien", count: 185 },
      { name: "Comédie Italienne", count: 145 },
      { name: "Films Classiques", count: 125 },
    ],
    "Allemagne": [
      { name: "Films Allemands", count: 285 },
      { name: "Thriller Allemand", count: 145 },
      { name: "Drame Allemand", count: 165 },
      { name: "Action", count: 95 },
    ],
    "Asie": [
      { name: "Films Coréens", count: 485 },
      { name: "Films Japonais", count: 385 },
      { name: "Films Chinois", count: 445 },
      { name: "Films Thaïlandais", count: 245 },
      { name: "Action Asiatique", count: 385 },
      { name: "Drame Asiatique", count: 445 },
    ],
    "Canada": [
      { name: "Films Canadiens", count: 125 },
      { name: "Drame", count: 68 },
      { name: "Comédie", count: 48 },
    ],
    "Amérique Latine": [
      { name: "Films Mexicains", count: 285 },
      { name: "Films Brésiliens", count: 245 },
      { name: "Films Argentins", count: 185 },
      { name: "Drame Latino", count: 245 },
      { name: "Comédie Latino", count: 185 },
    ],
    "Pays-Bas": [
      { name: "Films Néerlandais", count: 95 },
      { name: "Drame", count: 48 },
      { name: "Comédie", count: 35 },
    ],
  };

  const seriesCategoriesByCountry: { [key: string]: Array<{ name: string; count: number }> } = {
    "France": [
      { name: "Séries Françaises", count: 485 },
      { name: "Crime & Thriller", count: 285 },
      { name: "Drame", count: 385 },
      { name: "Comédie", count: 245 },
      { name: "Action", count: 185 },
    ],
    "Belgique": [
      { name: "Séries Belges", count: 125 },
      { name: "Crime", count: 68 },
      { name: "Drame", count: 85 },
    ],
    "Suisse": [
      { name: "Séries Suisses", count: 85 },
      { name: "Drame", count: 48 },
      { name: "Crime", count: 35 },
    ],
    "UK": [
      { name: "Séries Britanniques", count: 685 },
      { name: "Crime & Thriller", count: 385 },
      { name: "Drame", count: 445 },
      { name: "Comédie", count: 285 },
      { name: "Science-Fiction", count: 185 },
    ],
    "USA": [
      { name: "Séries Américaines", count: 1485 },
      { name: "Action", count: 585 },
      { name: "Crime", count: 685 },
      { name: "Drame", count: 845 },
      { name: "Comédie", count: 645 },
      { name: "Science-Fiction", count: 385 },
      { name: "Thriller", count: 485 },
      { name: "Animation", count: 285 },
    ],
    "Arabes": [
      { name: "Séries Arabes 2024", count: 1052 },
      { name: "Séries Arabes 2025", count: 928 },
      { name: "Séries Égyptiennes", count: 685 },
      { name: "Séries Marocaines", count: 385 },
      { name: "Séries Syriennes", count: 445 },
      { name: "Séries du Golfe", count: 985 },
      { name: "Ramadan 2024", count: 845 },
      { name: "Ramadan 2025", count: 685 },
    ],
    "Afrique": [
      { name: "Séries Africaines", count: 1485 },
      { name: "Afrique du Sud", count: 685 },
      { name: "Nollywood Series", count: 845 },
    ],
    "Turquie": [
      { name: "Séries Turques", count: 985 },
      { name: "Drame Turc", count: 685 },
      { name: "Romance Turque", count: 485 },
      { name: "Séries 4K", count: 245 },
    ],
    "Inde": [
      { name: "Séries Indiennes", count: 745 },
      { name: "Drame Indien", count: 485 },
      { name: "Romance Indienne", count: 385 },
    ],
    "Espagne": [
      { name: "Séries Espagnoles", count: 485 },
      { name: "Drame Espagnol", count: 285 },
      { name: "Crime Espagnol", count: 185 },
    ],
    "Portugal": [
      { name: "Séries Portugaises", count: 145 },
      { name: "Drame", count: 85 },
    ],
    "Italie": [
      { name: "Séries Italiennes", count: 285 },
      { name: "Crime Italien", count: 145 },
      { name: "Drame Italien", count: 185 },
    ],
    "Allemagne": [
      { name: "Séries Allemandes", count: 345 },
      { name: "Crime Allemand", count: 185 },
      { name: "Thriller", count: 145 },
    ],
    "Asie": [
      { name: "Séries Coréennes", count: 685 },
      { name: "Séries Japonaises", count: 485 },
      { name: "Séries Chinoises", count: 545 },
      { name: "Séries Thaïlandaises", count: 285 },
      { name: "Drames Asiatiques", count: 745 },
    ],
    "Canada": [
      { name: "Séries Canadiennes", count: 95 },
      { name: "Drame", count: 55 },
    ],
    "Amérique Latine": [
      { name: "Telenovelas", count: 485 },
      { name: "Séries Mexicaines", count: 345 },
      { name: "Séries Brésiliennes", count: 285 },
      { name: "Séries Argentines", count: 185 },
    ],
    "Pays-Bas": [
      { name: "Séries Néerlandaises", count: 85 },
      { name: "Crime", count: 48 },
    ],
  };

  const getCurrentCategories = () => {
    if (!selectedCountry) return [];
    
    if (selectedTab === "channels") return channelCategoriesByCountry[selectedCountry] || [];
    else if (selectedTab === "movies") return movieCategoriesByCountry[selectedCountry] || [];
    else return seriesCategoriesByCountry[selectedCountry] || [];
  };

  // Contenus réels avec noms et images
  const getContentList = () => {
    // Données d'exemple basées sur le contenu réel des liens
    const contentData: { [key: string]: Array<{ title: string; image: string; info?: string }> } = {
      // Channels examples
      "24/7 CINEMA VIP": [
        { title: "24/7 Action Movies", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "24/7 Comedy Central", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "24/7 Drama Channel", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "24/7 Horror Movies", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "24/7 Romance Films", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "24/7 Sci-Fi Channel", image: "https://trexiptvpanel.net/imagenotfound.webp" },
      ],
      // Movies examples
      "AFRICAN MOVIES": [
        { title: "A QUI LA FAUTE (2021)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - #Clout (2022)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - 2HRS AFTER MY WEDDING (2021)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - 3 Way (2021)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - 3 Working Days (2024)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - 30 Days in Atlanta (2014)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - 40 Acres (2025)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - A Country Called Ghana (2024)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - A Danfo Christmas (2024)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - A Father's Love (2024)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - A Lagos Love Story (2025)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
        { title: "AF - A Naija Christmas (2021)", image: "https://trexiptvpanel.net/imagenotfound.webp" },
      ],
      // Series examples
      "AFRICAN SERIES": [
        { title: "AF - 7ÈME POINT DU RIRE", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01" },
        { title: "AF - A L'HOTEL", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01" },
        { title: "AF - Accidental Siblings", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01" },
        { title: "AF - Accusé A La Barre", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01" },
        { title: "AF - ADAMS APPLE", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01,02" },
        { title: "AF - Adja", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01" },
        { title: "AF - Aiyetoro Town", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01" },
        { title: "AF - Anikulapo: Rise of the", image: "https://trexiptvpanel.net/imagenotfound.webp", info: "Seasons: 01,02,03" },
      ],
    };

    // Utiliser la clé de catégorie pour trouver les données correspondantes
    const categoryKey = Object.keys(contentData).find(key => 
      selectedCategory.toUpperCase().includes(key.toUpperCase()) ||
      key.toUpperCase().includes(selectedCategory.toUpperCase())
    );

    if (categoryKey && contentData[categoryKey]) {
      return contentData[categoryKey].map((item, index) => ({
        id: index + 1,
        title: item.title,
        image: item.image,
        seasons: item.info || "",
      }));
    }

    // Génération de contenus génériques si pas de correspondance
    const items = [];
    for (let i = 1; i <= 24; i++) {
      items.push({
        id: i,
        title: `${selectedCategory} ${i}`,
        image: "https://trexiptvpanel.net/imagenotfound.webp",
        seasons: selectedTab === "series" ? `Seasons: ${Math.floor(Math.random() * 3) + 1}` : "",
      });
    }
    return items;
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
                      <div className="aspect-[2/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.parentElement!.innerHTML = '<div class="text-center p-4"><div class="w-12 h-12 mx-auto mb-2 text-primary/60"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 11 3 3 3-3"/><path d="M9 17h6"/></svg></div><p class="text-xs text-muted-foreground">Image non disponible</p></div>';
                            }}
                          />
                        ) : (
                          <div className="text-center p-4">
                            <TvMinimal className="w-12 h-12 mx-auto mb-2 text-primary/60" />
                            <p className="text-xs text-muted-foreground">Image non disponible</p>
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        {item.seasons && (
                          <p className="text-xs text-muted-foreground">{item.seasons}</p>
                        )}
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
