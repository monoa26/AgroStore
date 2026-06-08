import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import tomates from "@/assets/tomate.jpg";
import maiz from "@/assets/maiz.jpg";
import cafe from "@/assets/prod-cafe.jpg";
import verduras from "@/assets/prod-verduras.jpg";
import Papas from "@/assets/papas-criollas.jpg";
import Cebollas from "@/assets/Cebollas.jpg";
import Zanahorias from "@/assets/zanahorias.jpg";
import Lechugas from "@/assets/lechugas.jpg";
import Pepinos from "@/assets/pepinos.jpg";
import Pimientos from "@/assets/pimientos.jpg";
import Frijoles from "@/assets/frijoles.jpg";
import Cacao from "@/assets/cacao.jpg";
import Aguacates from "@/assets/Aguacates.jpg";
import Platanos from "@/assets/platanos.jpg";
import Mango from "@/assets/mangos.jpg";
import Maracuya from "@/assets/maracuya.jpg";
import Sandia from "@/assets/sandias.jpg";
import Mandarinas from "@/assets/mandarinas.jpg";
import Moras from "@/assets/moras-silvestres.jpg";
import Guayabas from "@/assets/guayabas.jpg";
const products = [
  { img: tomates, name: "Tomates de rama", farmer: "Don Aurelio", region: "Boyac\xE1", price: "5.200", unit: "kg", rating: 4.9 },
  { img: maiz, name: "Ma\xEDz tierno criollo", farmer: "Familia Pulido", region: "Cundinamarca", price: "3.500", unit: "docena", rating: 4.8 },
  { img: cafe, name: "Caf\xE9 de altura", farmer: "Coop. La Esperanza", region: "Huila", price: "28.000", unit: "500g", rating: 5 },
  { img: verduras, name: "Verduras de hoja", farmer: "Do\xF1a Marta", region: "Nari\xF1o", region2: "", price: "7.200", unit: "canasta", rating: 4.7 } ,
  { img: Papas, name: "Papas criollas", farmer: "Don Ernesto", region: "Cundinamarca", price: "4.800", unit: "kg", rating: 4.6 } ,
  { img: Cebollas, name: "Cebollas cabezonas", farmer: "Familia R\xEDos", region: "Tolima", price: "4.200", unit: "kg", rating: 4.5 } ,
  { img: Zanahorias, name: "Zanahorias org\xE1nicas", farmer: "Do\xF1a Luisa", region: "Santander", price: "5.300", unit: "kg", rating: 4.8 } ,
  { img: Lechugas, name: "Lechugas frescas", farmer: "Don Pedro", region: "Caldas", price: "3.800", unit: "unidad", rating: 4.7 } ,
  {img: Pepinos, name: "Pepinos crocantes", farmer: "Familia Gómez", region: "Valle del Cauca", price: "4.200", unit: "kg", rating: 4.6 } ,
  {img: Pimientos, name: "Pimientos coloridos", farmer: "Do\xF1a Clara", region: "Meta", price: "6.500", unit: "kg", rating: 4.9 } ,
  {img: Frijoles, name: "Frijoles de la abuela", farmer: "Don Manuel", region: "Cauca", price: "8.200", unit: "kg", rating: 4.8 } ,
  {img: Cacao, name: "Cacao fino de aroma", farmer: "Coop. Cacao Puro", region: "Choc\xF3", price: "32.000", unit: "500g", rating: 5 }, 
  {img: Aguacates, name: "Aguacates mantequilla", farmer: "Familia Vargas", region: "Antioquia", price: "9.000", unit: "kg", rating: 4.7 } ,
  {img: Platanos, name: "Pl\xE1tanos maduros", farmer: "Do\xF1a Rosa", region: "Cesar", price: "3.200", unit: "kg", rating: 4.5 } ,
  {img: Mango, name: "Mang\xF3s jugosos", farmer: "Don Luis", region: "Sucre", price: "5.800", unit: "kg", rating: 4.8 } ,
  {img: Maracuya, name: "Maracuy\xE1s frescos", farmer: "Familia Herrera", region: "Arauca", price: "4.800", unit: "kg", rating: 4.6 } ,
  {img: Sandia, name: "Sand\xEDas dulces", farmer: "Do\xF1a Silvia", region: "Guajira", price: "3.500", unit: "kg", rating: 4.7 } ,
  {img: Mandarinas, name: "Mandarinas arom\xE1ticas", farmer: "Don Carlos", region: "Cundinamarca", price: "4.300", unit: "kg", rating: 4.5 } ,
  {img: Moras, name: "Moras silvestres", farmer: "Familia Martínez", region: "Nari\xF1o", price: "6.500", unit: "kg", rating: 4.9 } ,
  {img: Guayabas, name: "Guayabas dulces", farmer: "Do\xF1a Elena", region: "Tolima", price: "5.200", unit: "kg", rating: 4.6 } ,
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
