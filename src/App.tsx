import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AILanding from "./pages/AILanding";
import AIDashboard from "./pages/AIDashboard";
import AIRecommendationFlow from "./pages/AIRecommendationFlow";
import AIRecommendationDetails from "./pages/AIRecommendationDetails";
import { Navigate } from "react-router-dom";
import Signup from "@/pages/Signup";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/ai" replace />} />
            <Route path="/ai" element={<AILanding />} />
            <Route path="/ai/dashboard" element={<AIDashboard />} />
            <Route path="/ai/flow" element={<AIRecommendationFlow />} />
            <Route path="/ai/recommendation/:id" element={<AIRecommendationDetails />} />
            <Route path="/ai/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;