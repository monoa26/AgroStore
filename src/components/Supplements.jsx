import { Sprout, Wrench, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import fert from "@/assets/sup-fertilizante.jpg";
import sem from "@/assets/sup-semillas.jpg";
import herr from "@/assets/sup-herramientas.jpg";
const items = [
  { img: fert, icon: Package, tag: "Insumos", title: "Fertilizantes org\xE1nicos", desc: "Compost y abonos naturales para suelos vivos." },
  { img: sem, icon: Sprout, tag: "Semillas", title: "Semillas certificadas", desc: "Variedades nativas y comerciales de alta germinaci\xF3n." },
  { img: herr, icon: Wrench, tag: "Herramientas", title: "Herramientas de campo", desc: "Equipos resistentes para el trabajo diario." }
];
const Supplements = () => {
  return <section id="suplementos" className="py-24 bg-card">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-accent">También para el campo</span>
          <h2 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Suplementos agrícolas que rinden
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Todo lo que un campesino necesita para cultivar mejor, en un mismo lugar y a precios honestos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map(({ img, icon: Icon, tag, title, desc }) => <article key={title} className="group relative overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover:shadow-leaf">
              <img
    src={img}
    alt={title}
    width={800}
    height={800}
    loading="lazy"
    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-harvest px-3 py-1 text-xs font-bold text-harvest-foreground">
                  <Icon className="h-3.5 w-3.5" /> {tag}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/85">{desc}</p>
                <Button variant="harvest" size="sm" className="mt-4">Explorar</Button>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
};
var stdin_default = Supplements;
export {
  stdin_default as default
};
