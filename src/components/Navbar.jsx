import { Leaf, ShoppingBasket, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const Navbar = ({ cart, onRemoveFromCart }) => {
  const { theme, setTheme } = useTheme();
  const total = cart.reduce((sum, item) => sum + Number(item.price.replace(/\./g, "")), 0);
  const formattedTotal = total.toLocaleString("es-CO");
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
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Dialog>
          <DialogTrigger asChild>
            <Button variant="hero" size="sm" className="gap-2">
              <ShoppingBasket className="h-4 w-4" />
              <span className="hidden sm:inline">Mi cesta</span>
              {cart.length > 0 && <span className="rounded-full bg-harvest px-2 py-0.5 text-xs font-bold text-harvest-foreground">{cart.length}</span>}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogTitle>Mi cesta</DialogTitle>
            <DialogDescription>Revisa los productos que has agregado.</DialogDescription>
            <div className="mt-4 max-h-[65vh] overflow-y-auto pr-2">
              {cart.length === 0 ? <p className="mt-4 text-sm text-muted-foreground">Tu cesta está vacía.</p> : <div className="space-y-4">
                  {cart.map((item, index) => <div key={`${item.title}-${index}`} className="rounded-3xl border border-border bg-card p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-muted-foreground">/ {item.unit}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-bold">${item.price}</span>
                            <Button variant="outline" size="sm" onClick={() => onRemoveFromCart?.(index)}>
                              Eliminar
                            </Button>
                          </div>
                        </div>
                      </div>)}
                  <div className="rounded-3xl border border-border bg-card p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold">${formattedTotal}</span>
                    </div>
                  </div>
                </div>}
            </div>
          </DialogContent>
        </Dialog>
        </div>
      </div>
    </header>;
};
var stdin_default = Navbar;
export {
  stdin_default as default
};
