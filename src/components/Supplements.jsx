import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import items from "@/data/supplements";

const Supplements = ({ onAddToCart }) => {
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
          {items.map(({ id, img, icon: Icon, tag, title, desc, price, unit }) => <Link to={`/producto/${id}`} key={id}>
            <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-leaf">
              <div className="relative overflow-hidden">
                <img
    src={img}
    alt={title}
    width={800}
    height={800}
    loading="lazy"
    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-harvest px-3 py-1 text-xs font-bold text-harvest-foreground shadow-soft">
                  <Icon className="h-3.5 w-3.5" /> {tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="font-display text-base leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-display text-xl font-bold text-primary">${price.toLocaleString("es-CO")}</p>
                  <Button variant="leaf" size="sm" onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToCart?.({ id, title, price, unit }); }}>
                    Añadir
                  </Button>
                </div>
              </div>
            </article>
          </Link>)}
        </div>
      </div>
    </section>;
};

export default Supplements;
