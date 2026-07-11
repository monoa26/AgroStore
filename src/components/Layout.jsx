import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GumiCorner from "./GumiCorner";
import { useCartContext } from "@/context/CartContext";

const Layout = () => {
  const { cart, removeFromCart } = useCartContext();

  return (
    <div className="min-h-screen bg-background">
      <Navbar cart={cart} onRemoveFromCart={removeFromCart} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <GumiCorner />
    </div>
  );
};

export default Layout;
