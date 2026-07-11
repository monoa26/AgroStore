import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import products from "@/data/products";
import supplements from "@/data/supplements";
import { useCartContext } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const allItems = [
  ...products.map((p) => ({ ...p, type: "product" })),
  ...supplements.map((s) => ({ ...s, type: "supplement", name: s.title })),
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const item = allItems.find((i) => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-primary mb-4">
            Producto no encontrado
          </h1>
          <p className="text-muted-foreground mb-6">
            El producto que buscas no existe o fue removido.
          </p>
          <Button asChild variant="leaf">
            <Link to="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      title: item.name,
      price: item.price,
      unit: item.unit,
      quantity,
    });
    toast({
      title: "Añadido a la cesta",
      description: `${quantity} ${item.name} agregado${
        quantity > 1 ? "s" : ""
      } por $${(item.price * quantity).toLocaleString("es-CO")}`,
    });
    setQuantity(1);
  };

  const subtotal = item.price * quantity;

  const suggested = useMemo(() => {
    return allItems
      .filter((i) => i.id !== id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [id]);

  return (
    <div className="container py-8">
      <Link
        to="/#productos"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al catálogo
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <img
            src={item.img}
            alt={item.name}
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
          {item.rating && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-card/95 px-3 py-1.5 text-sm font-bold text-primary shadow-soft">
              <Star className="h-4 w-4 fill-harvest text-harvest" />
              {item.rating}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          {item.tag && (
            <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
              {item.tag}
            </span>
          )}

          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            {item.name}
          </h1>

          {(item.farmer || item.region) && (
            <p className="mt-3 text-muted-foreground">
              {item.farmer}
              {item.farmer && item.region && " · "}
              {item.region}
            </p>
          )}

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {item.desc}
          </p>

          <div className="mt-8">
            <p className="font-display">
              <span className="text-4xl font-black text-primary">
                ${item.price.toLocaleString("es-CO")}
              </span>
              <span className="ml-2 text-base text-muted-foreground">
                / {item.unit}
              </span>
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-medium text-foreground">
              Cantidad:
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center text-lg font-bold text-foreground">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Subtotal:{" "}
            <span className="font-bold text-foreground">
              ${subtotal.toLocaleString("es-CO")}
            </span>
          </p>

          <Button
            variant="leaf"
            size="lg"
            className="mt-8 gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            Añadir al carrito
          </Button>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold text-primary mb-6">
          Te puede interesar
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {suggested.map((s) => (
            <Link to={`/producto/${s.id}`} key={s.id}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-leaf">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {s.rating && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-primary shadow-soft">
                      <Star className="h-3 w-3 fill-harvest text-harvest" /> {s.rating}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 font-display text-xl font-black text-primary">
                    ${s.price.toLocaleString("es-CO")}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">/ {s.unit}</span>
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
