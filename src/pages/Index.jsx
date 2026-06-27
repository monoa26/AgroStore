import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Supplements from "@/components/Supplements";
import FarmerStory from "@/components/FarmerStory";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GumiCorner from "@/components/GumiCorner";
import useCart from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
const Index = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const handleAddToCart = (item) => {
    addToCart(item);
    toast({
      title: "Añadido a la cesta",
      description: `${item.title} agregado por $${item.price} / ${item.unit}`
    });
  };
  return <div className="min-h-screen bg-background">
      <Navbar cart={cart} onRemoveFromCart={removeFromCart} />
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
        <Supplements onAddToCart={handleAddToCart} />
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
