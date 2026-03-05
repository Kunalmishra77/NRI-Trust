import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/layouts/Layout";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import BankingKyc from "@/pages/services/banking-kyc";
import LegalSuccession from "@/pages/services/legal-succession";
import PropertyTenancy from "@/pages/services/property-tenancy";
import Insurance from "@/pages/services/insurance";
import IncomeTax from "@/pages/services/income-tax";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <WouterRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/banking-kyc" component={BankingKyc} />
          <Route path="/services/legal-succession" component={LegalSuccession} />
          <Route path="/services/property-tenancy" component={PropertyTenancy} />
          <Route path="/services/insurance" component={Insurance} />
          <Route path="/services/income-tax" component={IncomeTax} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
