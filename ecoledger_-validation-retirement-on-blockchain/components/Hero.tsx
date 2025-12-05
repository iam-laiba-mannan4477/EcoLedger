import React, { useState, useEffect } from "react";
import { ShieldIcon } from './icons/ShieldIcon';

const heroImages = [
    '/images/hero/verra.png',
    '/images/hero/gold.png',
    '/images/hero/cdm.png',
    '/images/hero/gcc.png',
];


const cards = [
  { title: "Verified by Verra", text: "VCS Standard", img: '/images/hero/verra.png' },
  { title: "Gold Standard", text: "Certified Projects", img: '/images/hero/gold.png' },
  { title: "Clean Development Mechanism", text: "UNFCCC Standard", img: '/images/hero/cdm.png' },
  { title: "Global Carbon Council", text: "GCC Standard", img: '/images/hero/gcc.png' },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % cards.length);
        setFlipping(false);
      }, 1000); 
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const CurrentCard = cards[current];

  return (
    <section id="home" className="py-16 lg:py-24 bg-gradient-to-br from-eco-light to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="hero-content text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Transform Carbon Credit Management with{" "}
            <span className="text-eco-primary">Blockchain</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            EcoLedger brings trust, transparency, and traceability to the carbon
            credit lifecycle through blockchain-powered validation and
            retirement.
          </p>
          <div className="hero-buttons mt-8">
            <a href="#contact" className="cta-button primary bg-eco-primary text-white px-8 py-4 rounded-lg shadow-lg font-bold hover:bg-eco-dark transition-transform hover:scale-105">
              Explore Demo
            </a>
          </div>
        </div>

        <div className="hero-visual relative flex justify-center items-center h-96">
            <img
                key={current}
                src={heroImages[current]}
                alt={cards[current].title}
                className="rounded-2xl shadow-2xl w-full max-w-md h-auto object-contain animate-fade-in"
            />
          
          <div className="absolute -bottom-10 -left-6 perspective">
            <div
              className={`w-72 bg-white rounded-xl shadow-lg p-6 [transform-style:preserve-3d] transition-transform duration-1000 ${
                flipping ? "[transform:rotateY(180deg)]" : ""
              }`}
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-eco-light p-2 rounded-lg flex-shrink-0">
                   <img src={CurrentCard.img} alt={CurrentCard.title} className="w-8 h-8 object-contain"/>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{CurrentCard.title}</div>
                  <div className="text-sm text-gray-600">{CurrentCard.text}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-lg p-2 shadow-md flex items-center space-x-2">
            <ShieldIcon className="w-5 h-5 text-eco-primary" />
            <div className="text-xs text-gray-700 font-medium">Secure & Transparent</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;