import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import tomates from "@/assets/tomate.jpg";
import maiz from "@/assets/maiz.jpg";
import cafe from "@/assets/prod-cafe.jpg";
import verduras from "@/assets/prod-verduras.jpg";
const products = [
  { img: tomates, name: "Tomates de rama", farmer: "Don Aurelio", region: "Boyac\xE1", price: "4.500", unit: "kg", rating: 4.9 },
  { img: maiz, name: "Ma\xEDz tierno criollo", farmer: "Familia Pulido", region: "Cundinamarca", price: "3.200", unit: "docena", rating: 4.8 },
  { img: cafe, name: "Caf\xE9 de altura", farmer: "Coop. La Esperanza", region: "Huila", price: "28.000", unit: "500g", rating: 5 },
  { img: verduras, name: "Verduras de hoja", farmer: "Do\xF1a Marta", region: "Nari\xF1o", region2: "", price: "6.900", unit: "canasta", rating: 4.7 }
];
const ProductGrid = ({ onAddToCart }) => {
  return <section id="productos" className="py-24 bg-gradient-soft">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-accent">Cosecha de la semana</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
              Productos frescos cultivados con amor
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cada compra apoya directamente a una familia campesina. Sin intermediarios, sin sobreprecios.
            </p>
          </div>
          <Button variant="link" className="text-primary text-base">Ver todo el catálogo →</Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <article
    key={p.name}
    className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-leaf"
  >
              <div className="relative aspect-square overflow-hidden">
                <img
    src={p.img}
    alt={p.name}
    width={800}
    height={800}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
  />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-primary shadow-soft">
                  <Star className="h-3 w-3 fill-harvest text-harvest" /> {p.rating}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {p.farmer} · {p.region}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-display">
                    <span className="text-2xl font-black text-primary">${p.price}</span>
                    <span className="ml-1 text-sm text-muted-foreground">/ {p.unit}</span>
                  </p>
                  <Button variant="leaf" size="sm" onClick={() => onAddToCart?.({ title: p.name, price: p.price, unit: p.unit })}>
                    Añadir
                  </Button>
                </div>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
};
var stdin_default = ProductGrid;
export {
  stdin_default as default
};
