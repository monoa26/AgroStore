import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  return <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-leaf">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-bold text-primary">AgroStore</span>
          </div>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-harvest" /> Hecho para los campesinos de nuestra tierra.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacidad</a>
            <a href="#" className="hover:text-primary">Términos</a>
            <a href="#" className="hover:text-primary">Soporte</a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
