import { Leaf, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-leaf shadow-soft">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-xl font-bold text-primary">AgroStore</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#productos" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">Productos</a>
          <a href="#suplementos" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">Suplementos</a>
          <a href="#campesinos" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">Campesinos</a>
          <a href="#contacto" className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">Contacto</a>
        </nav>
        <Button variant="hero" size="sm" className="gap-2">
          <ShoppingBasket className="h-4 w-4" />
          <span className="hidden sm:inline">Mi cesta</span>
        </Button>
      </div>
    </header>;
};
var stdin_default = Navbar;
export {
  stdin_default as default
};
