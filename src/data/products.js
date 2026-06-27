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
  { id: "tomate", img: tomates, name: "Tomates de rama", farmer: "Don Aurelio", region: "Boyacá", price: 5200, unit: "kg", rating: 4.9 },
  { id: "maiz", img: maiz, name: "Maíz tierno criollo", farmer: "Familia Pulido", region: "Cundinamarca", price: 3500, unit: "docena", rating: 4.8 },
  { id: "cafe", img: cafe, name: "Café de altura", farmer: "Coop. La Esperanza", region: "Huila", price: 28000, unit: "500g", rating: 5 },
  { id: "verduras", img: verduras, name: "Verduras de hoja", farmer: "Doña Marta", region: "Nariño", price: 7200, unit: "canasta", rating: 4.7 },
  { id: "papas", img: Papas, name: "Papas criollas", farmer: "Don Ernesto", region: "Cundinamarca", price: 4800, unit: "kg", rating: 4.6 },
  { id: "cebollas", img: Cebollas, name: "Cebollas cabezonas", farmer: "Familia Ríos", region: "Tolima", price: 4200, unit: "kg", rating: 4.5 },
  { id: "zanahorias", img: Zanahorias, name: "Zanahorias orgánicas", farmer: "Doña Luisa", region: "Santander", price: 5300, unit: "kg", rating: 4.8 },
  { id: "lechugas", img: Lechugas, name: "Lechugas frescas", farmer: "Don Pedro", region: "Caldas", price: 3800, unit: "unidad", rating: 4.7 },
  { id: "pepinos", img: Pepinos, name: "Pepinos crocantes", farmer: "Familia Gómez", region: "Valle del Cauca", price: 4200, unit: "kg", rating: 4.6 },
  { id: "pimientos", img: Pimientos, name: "Pimientos coloridos", farmer: "Doña Clara", region: "Meta", price: 6500, unit: "kg", rating: 4.9 },
  { id: "frijoles", img: Frijoles, name: "Frijoles de la abuela", farmer: "Don Manuel", region: "Cauca", price: 8200, unit: "kg", rating: 4.8 },
  { id: "cacao", img: Cacao, name: "Cacao fino de aroma", farmer: "Coop. Cacao Puro", region: "Chocó", price: 32000, unit: "500g", rating: 5 },
  { id: "aguacates", img: Aguacates, name: "Aguacates mantequilla", farmer: "Familia Vargas", region: "Antioquia", price: 9000, unit: "kg", rating: 4.7 },
  { id: "platanos", img: Platanos, name: "Plátanos maduros", farmer: "Doña Rosa", region: "Cesar", price: 3200, unit: "kg", rating: 4.5 },
  { id: "mangos", img: Mango, name: "Mangos jugosos", farmer: "Don Luis", region: "Sucre", price: 5800, unit: "kg", rating: 4.8 },
  { id: "maracuya", img: Maracuya, name: "Maracuyás frescos", farmer: "Familia Herrera", region: "Arauca", price: 4800, unit: "kg", rating: 4.6 },
  { id: "sandia", img: Sandia, name: "Sandías dulces", farmer: "Doña Silvia", region: "Guajira", price: 3500, unit: "kg", rating: 4.7 },
  { id: "mandarinas", img: Mandarinas, name: "Mandarinas aromáticas", farmer: "Don Carlos", region: "Cundinamarca", price: 4300, unit: "kg", rating: 4.5 },
  { id: "moras", img: Moras, name: "Moras silvestres", farmer: "Familia Martínez", region: "Nariño", price: 6500, unit: "kg", rating: 4.9 },
  { id: "guayabas", img: Guayabas, name: "Guayabas dulces", farmer: "Doña Elena", region: "Tolima", price: 5200, unit: "kg", rating: 4.6 },
];

export default products;
