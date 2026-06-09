import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/cd.jpg";
const Hero = () => {
  return <section id="inicio" className="relative isolate overflow-hidden">
      <img
    src={heroImg}
    alt="Campo verde al amanecer con cosecha de campesinos"
    width={1920}
    height={1080}
    className="absolute inset-0 -z-10 h-full w-full object-cover"
  />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />

      <div className="container flex min-h-[88vh] flex-col items-start justify-center py-24 text-primary-foreground">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
          <Sprout className="h-4 w-4" />
          Del campo a tu mesa
        </span>
        <h1 className="max-w-3xl font-display text-5xl font-black leading-[1.05] sm:text-6xl md:text-7xl">
          Compra <em className="not-italic text-harvest">directo</em> al campesino que cultiva tu comida.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-primary-foreground/90 md:text-xl">
          AgroStore conecta familias campesinas con miles de hogares. Productos frescos, precios justos, y todo lo que el campo necesita en un solo lugar.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild variant="harvest" size="xl" className="group">
            <a href="#productos">
              Ver productos <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href="#contacto">Soy campesino, quiero vender</a>
          </Button>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-8 text-primary-foreground">
          <div>
            <dt className="text-xs uppercase tracking-wider opacity-80">Familias</dt>
            <dd className="font-display text-3xl font-bold md:text-4xl">+2.400</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider opacity-80">Productos</dt>
            <dd className="font-display text-3xl font-bold md:text-4xl">180</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider opacity-80">Sin intermediarios</dt>
            <dd className="font-display text-3xl font-bold md:text-4xl">100%</dd>
          </div>
        </dl>
      </div>
    </section>;
};
var stdin_default = Hero;
export {
  stdin_default as default
};
