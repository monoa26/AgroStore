import { Heart, Truck, Coins, Leaf } from "lucide-react";
const benefits = [
  { icon: Coins, title: "Precio justo", desc: "El campesino recibe hasta 3x m\xE1s que vendiendo a intermediarios." },
  { icon: Truck, title: "Entrega r\xE1pida", desc: "Cosechado hoy, en tu hogar ma\xF1ana. Cadena de fr\xEDo y empaque cuidado." },
  { icon: Leaf, title: "100% trazable", desc: "Sabes qui\xE9n, d\xF3nde y c\xF3mo se cultiv\xF3 cada producto que compras." },
  { icon: Heart, title: "Impacto real", desc: "Cada pedido sostiene una familia rural y conserva tradiciones del campo." }
];
const FarmerStory = () => {
  return <section id="campesinos" className="relative py-24 bg-gradient-leaf text-primary-foreground overflow-hidden">
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-harvest/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-harvest">Nuestra misión</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Cuando compras aquí, una familia campesina prospera.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Más del 70% de los alimentos que llegan a la ciudad pasan por largas cadenas que dejan al campesino con migajas. AgroStore rompe ese ciclo: tú pagas menos, ellos reciben más.
            </p>
            <blockquote className="mt-8 border-l-4 border-harvest pl-5 italic text-primary-foreground/90">
              "Antes vendía mi cosecha al primer comprador que llegaba. Hoy mis tomates llegan a 60 hogares cada semana."
              <footer className="mt-2 text-sm not-italic font-semibold text-harvest">— Don Aurelio, productor en Boyacá</footer>
            </blockquote>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, desc }) => <li key={title} className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm border border-primary-foreground/20 transition-all hover:bg-primary-foreground/15 hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-harvest text-harvest-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/80">{desc}</p>
              </li>)}
          </ul>
        </div>
      </div>
    </section>;
};
var stdin_default = FarmerStory;
export {
  stdin_default as default
};
