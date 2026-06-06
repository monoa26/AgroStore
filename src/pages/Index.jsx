import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Supplements from "@/components/Supplements";
import FarmerStory from "@/components/FarmerStory";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GumiCorner from "@/components/GumiCorner";
import { toast } from "@/hooks/use-toast";
const Index = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    toast({
      title: "Añadido a la cesta",
      description: `${item.title} agregado por $${item.price} / ${item.unit}`
    });
  };
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };
  return <div className="min-h-screen bg-background">
      <Navbar cart={cart} onRemoveFromCart={removeFromCart} />
      <main>
        <Hero />
        <ProductGrid onAddToCart={addToCart} />
        <Supplements onAddToCart={addToCart} />
        <FarmerStory />
        <CTASection />
      </main>
      <Footer />
      <GumiCorner />
    </div>;
};
var stdin_default = Index;
export {
  stdin_default as default
};
