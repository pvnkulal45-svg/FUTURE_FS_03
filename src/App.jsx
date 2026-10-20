import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Specialties from './components/Specialties';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeMenuCategory, setActiveMenuCategory] = useState("all");
  const [selectedMenuItemForEnquiry, setSelectedMenuItemForEnquiry] = useState("");

  const handleSelectCategoryFromSpecialties = (categoryFilter) => {
    setActiveMenuCategory(categoryFilter);
  };

  const handleSelectMenuItemForEnquiry = (itemName) => {
    setSelectedMenuItemForEnquiry(itemName);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] flex flex-col font-sans selection:bg-[#D99B26] selection:text-[#2C1810]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#D99B26] text-[#2C1810] font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section */}
        <AboutUs />

        {/* 4. Our Specialties Section */}
        <Specialties
          onSelectCategory={handleSelectCategoryFromSpecialties}
        />

        {/* 5. Menu Section */}
        <MenuSection
          activeCategory={activeMenuCategory}
          onCategoryChange={setActiveMenuCategory}
          onSelectMenuItem={handleSelectMenuItemForEnquiry}
        />

        {/* 6. Location Section */}
        <LocationSection />

        {/* 7. Contact Section */}
        <ContactSection
          key={selectedMenuItemForEnquiry || 'default'}
          initialItem={selectedMenuItemForEnquiry}
        />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
