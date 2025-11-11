import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import OmOss from "./pages/OmOss";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import Kladdkaka from "./pages/Kladdkaka"; // ✅ FIX HERE

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/omoss" element={<OmOss />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/support" element={<Support />} />
          <Route path="/kladdkaka-recept" element={<Kladdkaka />} /> {/* ✅ */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;