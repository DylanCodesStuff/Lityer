import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav({ isMobileMenuOpen, setIsMobileMenuOpen, toggleMobileMenu }) {
  return (
    <div className="w-screen h-full min-h-screen z-50 p-6 bg-green-400">
      <div className="flex justify-between items-center mb-4">
        {/*Header of hamburger popout */}
        <img src="./logo-2.png" className="w-10 h-10" />
        <h2>Enter Address</h2>
        <img onClick={toggleMobileMenu} className="w-8 h-8 " src="/close.png" />
      </div>

      <div className="header-bottom-bar flex flex-col gap-4 border-b border-teal-500 py-2">
        {/* Need to subscribe to flaticon for the rights to use these. Or swap to font awesome. */}
        <Link to="/">
          <div onClick={toggleMobileMenu} className="home category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="house.png" />
            Home
          </div>
        </Link>
        <Link to="/vegetables">
          <div onClick={toggleMobileMenu} className="vegetables category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="vegetable.png" />
            Vegetables
          </div>
        </Link>
        <Link to="/fruits">
          <div onClick={toggleMobileMenu} className="fruits category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="harvest.png" />
            Fruits
          </div>
        </Link>
        <Link to="/dairy">
          <div onClick={toggleMobileMenu} className="dairy category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="dairy.png" />
            Dairy
          </div>
        </Link>
        <Link to="/meats">
          <div onClick={toggleMobileMenu} className="meat category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="meat.png" />
            Meats
          </div>
        </Link>
        <Link to="/bread">
          <div onClick={toggleMobileMenu} className="bread category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="bread.png" />
            Bakery
          </div>
        </Link>
        <Link to="/frozen-foods">
          <div onClick={toggleMobileMenu} className="frozen-foods category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="frozen-food.png" />
            Frozen Foods
          </div>
        </Link>
        <Link to="/beverages">
          <div onClick={toggleMobileMenu} className="beverages category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="/poinsettia.png" />
            Beverages
          </div>
        </Link>
        <Link to="/cleaning-supplies">
          <div onClick={toggleMobileMenu} className="cleaning-supplies category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="cleaning-products.png" />
            Cleaning Supplies
          </div>
        </Link>
        <Link to="/personal-care">
          <div onClick={toggleMobileMenu} className="personal-care category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="personal-hygiene.png" />
            Personal Care
          </div>
        </Link>
        <Link to="/baby-care">
          <div onClick={toggleMobileMenu} className="baby-care category-container flex items-center gap-3">
            <img className="category-img w-12 h-12" src="wipes.png" />
            Baby Care
          </div>
        </Link>
      </div>
      <Link to="">
        <div className="header-account w-14 h-14 mt-4 flex items-center gap-3">
          <img className="account-icon-img" src="/account-icon.png" />
          <p className="sign-in-text">Sign&nbsp;In</p>
        </div>
      </Link>
    </div>
  );
}
