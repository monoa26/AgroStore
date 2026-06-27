import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>;

export default App;
