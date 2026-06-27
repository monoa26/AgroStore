import { Sprout, Wrench, Package } from "lucide-react";
import fert from "@/assets/sup-fertilizante.jpg";
import sem from "@/assets/sup-semillas.jpg";
import herr from "@/assets/herramientas.jpg";
import abono from "@/assets/sup-abono.jpg";
import insecticida from "@/assets/sup-insecticida.jpg";
import kitderiego from "@/assets/sup-kit-riego.jpg";
import mallasombra from "@/assets/sup-malla-sombra.jpg";
import sustratoorganico from "@/assets/sup-sustrato-organico.jpg";
import bolsasagricolas from "@/assets/sup-bolsas-agricolas.jpg";

const items = [
  { id: "fertilizantes", img: fert, icon: Package, tag: "Insumos", title: "Fertilizantes orgánicos", desc: "Compost y abonos naturales para suelos vivos.", price: 18900, unit: "bolsa" },
  { id: "semillas", img: sem, icon: Sprout, tag: "Semillas", title: "Semillas certificadas", desc: "Variedades nativas y comerciales de alta germinación.", price: 12500, unit: "paquete" },
  { id: "herramientas", img: herr, icon: Wrench, tag: "Herramientas", title: "Herramientas de campo", desc: "Equipos resistentes para el trabajo diario.", price: 34200, unit: "unidad" },
  { id: "abono", img: abono, icon: Package, tag: "Insumos", title: "Abonos foliares", desc: "Nutrientes para fortalecer tus cultivos.", price: 22000, unit: "litro" },
  { id: "insecticida", img: insecticida, icon: Package, tag: "Insumos", title: "Insecticidas naturales", desc: "Protege tus cultivos sin dañar el medio ambiente.", price: 25000, unit: "litro" },
  { id: "kit-riego", img: kitderiego, icon: Wrench, tag: "Herramientas", title: "Kit de riego por goteo", desc: "Sistema eficiente para ahorrar agua y nutrir tus plantas.", price: 45000, unit: "kit" },
  { id: "malla-sombra", img: mallasombra, icon: Wrench, tag: "Herramientas", title: "Malla sombra", desc: "Protege tus cultivos del sol intenso y reduce la evaporación.", price: 15000, unit: "rollo" },
  { id: "sustrato", img: sustratoorganico, icon: Package, tag: "Insumos", title: "Sustrato orgánico", desc: "Mejora la retención de agua y la aireación de tus suelos.", price: 20000, unit: "bolsa" },
  { id: "bolsas-agricolas", img: bolsasagricolas, icon: Wrench, tag: "Herramientas", title: "Bolsas agrícolas", desc: "Resistentes y reutilizables para transportar tus cosechas.", price: 8000, unit: "paquete" },
];

export default items;
