import { Leaf, Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-leaf">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-lg font-bold text-primary">
                AgroStore
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Conectamos directamente al campesino con tu mesa. Productos frescos,
              precios honestos y familias campesinas que lo dan todo por cultivar
              lo mejor de nuestra tierra.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#productos" className="transition-colors hover:text-primary">
                  Productos
                </a>
              </li>
              <li>
                <a href="#suplementos" className="transition-colors hover:text-primary">
                  Suplementos
                </a>
              </li>
              <li>
                <a href="#campesinos" className="transition-colors hover:text-primary">
                  Nuestros campesinos
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition-colors hover:text-primary">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +57 324 321 0278
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                monosguardia@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Colombia
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground mb-4">
              Sobre nosotros
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#campesinos" className="transition-colors hover:text-primary">
                  Nuestra misión
                </a>
              </li>
              <li>
                <span className="cursor-default">Envíos a toda Colombia</span>
              </li>
              <li>
                <span className="cursor-default">Pago contra entrega</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AgroStore. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <Heart className="h-3 w-3 text-harvest" /> Hecho con amor para los
            campesinos de nuestra tierra.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
