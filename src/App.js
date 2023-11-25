import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
