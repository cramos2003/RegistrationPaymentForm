import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormHome from "./pages/FormHome";
import PaymentSuccess from "./pages/PaymentSuccess";
import CarRegistrationForm from "./components/CarRegistrationForm";
import SponsorRegistrationForm from "./components/SponsorRegistrationForm";
import VendorRegistrationForm from "./components/VendorRegistrationForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/FormHome" element={<FormHome />} />
        <Route path="/CarRegistrationForm" element={<CarRegistrationForm />} />
        <Route path="/SponsorRegistrationForm" element={<SponsorRegistrationForm />} />
        <Route path="/VendorRegistrationForm" element={<VendorRegistrationForm />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}