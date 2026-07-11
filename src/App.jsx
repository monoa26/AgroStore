import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/context/CartContext";
import Layout from "./components/Layout.jsx";
import Index from "./pages/Index.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => <BrowserRouter>
    <CartProvider>
      <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  </BrowserRouter>;

export default App;
