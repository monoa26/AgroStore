import { Button } from "@/components/ui/button";
import { Tractor, ShoppingBasket } from "lucide-react";
const CTASection = () => {
  return <section id="contacto" className="py-24">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gradient-soft p-10 shadow-soft border border-border">
            <Tractor className="h-10 w-10 text-primary" />
            <h3 className="mt-4 font-display text-3xl font-bold text-primary">¿Eres campesino?</h3>
            <p className="mt-3 text-muted-foreground">Súmate a la red y vende tu cosecha sin intermediarios. Te acompañamos paso a paso.</p>
            <Button asChild variant="hero" size="lg" className="mt-6">
              <a href="https://wa.me/573243210278?text=Hola%20AgroStore%2C%20quiero%20vender%20mis%20productos" target="_blank" rel="noreferrer">Quiero vender mis productos</a>
            </Button>
          </div>
          <div className="rounded-3xl bg-gradient-leaf p-10 shadow-leaf text-primary-foreground">
            <ShoppingBasket className="h-10 w-10 text-harvest" />
            <h3 className="mt-4 font-display text-3xl font-bold">¿Quieres comer fresco?</h3>
            <p className="mt-3 text-primary-foreground/90">Recibe la cosecha de la semana en la puerta de tu casa. Suscríbete y ahorra 15%.</p>
            <Button asChild variant="harvest" size="lg" className="mt-6">
              <a href="#productos">Empezar mi cesta semanal</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
var stdin_default = CTASection;
export {
  stdin_default as default
};
