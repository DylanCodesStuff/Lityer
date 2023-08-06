import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Beverages from "./Pages/Beverages";
import Bakery from "./Pages/Bakery";
import Vegetables from "./Pages/Vegetables";
import Dairy from "./Pages/Dairy";
import Meats from "./Pages/Meats";
import FrozenFoods from "./Pages/FrozenFoods";
import CleaningSupplies from "./Pages/CleaningSupplies";
import PersonalCare from "./Pages/PersonalCare";
import BabyCare from "./Pages/BabyCare";
import Fruits from "./Pages/Fruits";
import "./index.css";
import "../dist/output.css";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { ShopContextProvider } from "./context/shop-context";
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <div>
      <ShopContextProvider>
        <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        <Routes>
          {!isMobileMenuOpen && <Route path="/" element={<Home />} />}
          {!isMobileMenuOpen && <Route path="/beverages" element={<Beverages />} />}
          {!isMobileMenuOpen && <Route path="/bread" element={<Bakery />} />}
          {!isMobileMenuOpen && <Route path="/vegetables" element={<Vegetables />} />}
          {!isMobileMenuOpen && <Route path="/fruits" element={<Fruits />} />}
          {!isMobileMenuOpen && <Route path="/dairy" element={<Dairy />} />}
          {!isMobileMenuOpen && <Route path="/meats" element={<Meats />} />}
          {!isMobileMenuOpen && <Route path="/frozen-foods" element={<FrozenFoods />} />}
          {!isMobileMenuOpen && <Route path="/cleaning-supplies" element={<CleaningSupplies />} />}
          {!isMobileMenuOpen && <Route path="/personal-care" element={<PersonalCare />} />}
          {!isMobileMenuOpen && <Route path="/baby-care" element={<BabyCare />} />}
          {!isMobileMenuOpen && <Route path="/checkout" element={<CheckoutPage />} />}
        </Routes>
      </ShopContextProvider>
    </div>
  );
}
