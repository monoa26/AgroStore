import { useState, useEffect } from "react";
import { Leaf, ShoppingBasket, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const navLinks = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#productos", label: "Productos" },
  { href: "/#suplementos", label: "Suplementos" },
  { href: "/#campesinos", label: "Campesinos" },
  { href: "/#contacto", label: "Contacto" },
];

const Navbar = ({ cart, onRemoveFromCart }) => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.split("#")[1]).filter(Boolean);
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const total = cart.reduce((sum, item) => sum + Number(item.price) * (item.quantity || 1), 0);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const formattedTotal = total.toLocaleString("es-CO");

  const whatsappMessage = cart.length > 0
    ? "Hola AgroStore, quiero hacer un pedido:\n" +
      cart.map((item) => `- ${item.quantity || 1}× ${item.title} $${(item.price * (item.quantity || 1)).toLocaleString("es-CO")}`).join("\n") +
      `\nTotal: $${formattedTotal}`
    : "";
  return <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <a href="/#inicio" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-leaf shadow-soft">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-xl font-bold text-primary">AgroStore</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`text-sm font-semibold transition-colors ${
                active === link.href.split("#")[1]
                  ? "text-primary border-b-2 border-primary pb-0.5"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
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
          <Dialog open={cartOpen} onOpenChange={setCartOpen}>
          <DialogTrigger asChild>
            <Button variant="hero" size="sm" className="gap-2">
              <ShoppingBasket className="h-4 w-4" />
              <span className="hidden sm:inline">Mi cesta</span>
              {totalItems > 0 && <span className="rounded-full bg-harvest px-2 py-0.5 text-xs font-bold text-harvest-foreground">{totalItems}</span>}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogTitle>Mi cesta</DialogTitle>
            <DialogDescription>Revisa los productos que has agregado.</DialogDescription>
            <div className="mt-4 max-h-[65vh] overflow-y-auto pr-2">
              {cart.length === 0 ? <p className="mt-4 text-sm text-muted-foreground">Tu cesta está vacía.</p> : <div className="space-y-4">
                  {cart.map((item) => <div key={item.cartItemId} className="rounded-3xl border border-border bg-card p-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.quantity || 1} × ${item.price.toLocaleString("es-CO")} / {item.unit}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-bold">${(item.price * (item.quantity || 1)).toLocaleString("es-CO")}</span>
                            <Button variant="outline" size="sm" onClick={() => onRemoveFromCart?.(item.cartItemId)}>
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
                  <a
                    href={`https://wa.me/573243210278?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <Button variant="leaf" size="lg" className="w-full gap-2">
                      Hacer pedido
                    </Button>
                  </a>
                </div>}
            </div>
          </DialogContent>
        </Dialog>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display text-lg font-bold text-primary">Menú</SheetTitle>
              <SheetDescription className="sr-only">Navegación del sitio</SheetDescription>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
              onClick={() => setActive(link.href.split("#")[1])}
                    className={`text-base font-semibold transition-colors ${
                      active === link.href.split("#")[1]
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-4">
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  Modo oscuro
                </Button>
                <Button
                  variant="hero"
                  className="justify-start gap-2"
                  onClick={() => { setSheetOpen(false); setCartOpen(true); }}
                >
                    <ShoppingBasket className="h-4 w-4" />
                    Mi cesta
                    {totalItems > 0 && <span className="rounded-full bg-harvest px-2 py-0.5 text-xs font-bold text-harvest-foreground">{totalItems}</span>}
                  </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};

export default Navbar;
