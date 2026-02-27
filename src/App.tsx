import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SocialProof />
      <Features />
      <ProductShowcase />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}