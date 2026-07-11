import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Supplements from "@/components/Supplements";
import FarmerStory from "@/components/FarmerStory";
import CTASection from "@/components/CTASection";
import { useCartContext } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    const saved = sessionStorage.getItem(`scroll-${location.key}`);
    if (saved) window.scrollTo(0, parseInt(saved, 10));

    return () => {
      sessionStorage.setItem(`scroll-${location.key}`, String(window.scrollY));
    };
  }, [location.key, location.hash]);

  const { addToCart } = useCartContext();
  const handleAddToCart = (item) => {
    addToCart(item);
    toast({
      title: "Añadido a la cesta",
      description: `${item.title} agregado por $${item.price} / ${item.unit}`
    });
  };

  return <>
      <Hero />
      <ProductGrid onAddToCart={handleAddToCart} />
      <Supplements onAddToCart={handleAddToCart} />
      <FarmerStory />
      <CTASection />
    </>;
};

export default Index;
