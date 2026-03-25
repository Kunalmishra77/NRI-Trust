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

// New Pages
import WhyNRITrust from "@/pages/why-nri-trust";
import HowItWorks from "@/pages/how-it-works";
import EmergencyResponse from "@/pages/emergency-response";
import SuccessStories from "@/pages/success-stories";
import Resources from "@/pages/resources";
import ClientPortal from "@/pages/portal";
import TermsOfEngagement from "@/pages/terms";
import PrivacyProtocol from "@/pages/privacy";
import CookiePolicy from "@/pages/cookies";

function Router() {
 return (
  <WouterRouter>
   <Switch>
    {/* Portal route - Independent of global layout */}
    <Route path="/portal" component={ClientPortal} />

    {/* Public routes - Within global layout */}
    <Route>
     <Layout>
      <Switch>
       <Route path="/" component={Home} />
       
       {/* The Firm */}
       <Route path="/about" component={About} />
       <Route path="/why-nri-trust" component={WhyNRITrust} />
       <Route path="/success-stories" component={SuccessStories} />
       
       {/* Practice Areas */}
       <Route path="/services" component={Services} />
       <Route path="/services/banking-kyc" component={BankingKyc} />
       <Route path="/services/legal-succession" component={LegalSuccession} />
       <Route path="/services/property-tenancy" component={PropertyTenancy} />
       <Route path="/services/insurance" component={Insurance} />
       <Route path="/services/income-tax" component={IncomeTax} />
       
       {/* Operational Model */}
       <Route path="/how-it-works" component={HowItWorks} />
       <Route path="/pricing" component={Pricing} />
       <Route path="/emergency-response" component={EmergencyResponse} />
       
       {/* Insights & Contact */}
       <Route path="/resources" component={Resources} />
       <Route path="/contact" component={Contact} />
       
       {/* Legal & Compliance */}
       <Route path="/terms" component={TermsOfEngagement} />
       <Route path="/privacy" component={PrivacyProtocol} />
       <Route path="/cookies" component={CookiePolicy} />
       
       <Route component={NotFound} />
      </Switch>
     </Layout>
    </Route>
   </Switch>
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
