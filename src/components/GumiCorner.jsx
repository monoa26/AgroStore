import { Sprout } from "lucide-react";
import gumi from "@/assets/gumi.png";

const GumiCorner = () => {
  return <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="relative flex items-end gap-2">
        <div className="hidden sm:block animate-wave-in rounded-2xl bg-card/90 px-4 py-2 shadow-soft backdrop-blur-sm border border-border">
          <p className="flex items-center gap-1 text-sm font-semibold text-primary">
            <Sprout className="h-4 w-4 text-harvest" /> ¡Apoya al campo!
          </p>
        </div>
        <img
    src={gumi}
    alt="Gumi mascota saludando"
    width={140}
    height={140}
    loading="lazy"
    className="h-28 w-28 sm:h-36 sm:w-36 animate-float-gumi drop-shadow-2xl select-none"
  />
      </div>
    </div>;
};

export default GumiCorner;
