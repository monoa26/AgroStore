import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Supplements from "@/components/Supplements";
import FarmerStory from "@/components/FarmerStory";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GumiCorner from "@/components/GumiCorner";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Supplements />
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
