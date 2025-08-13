import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Welcome to 56-East",
    subtitle: "Experience luxury like never before.",
    buttonText: "Explore Services",
    link: "/Categories",
    bg: "bg-blue-600",
    text: "text-white",
  },
  {
    title: "Connecting Service with Technology",
    subtitle: "Book your stay with ease.",
    buttonText: "Book Now",
    link: "/Categories",
    bg: "bg-green-600",
    text: "text-white",
  },
  {
    title: "Special Offers",
    subtitle: "Enjoy exclusive discounts on your next booking.",
    buttonText: "View Offers",
    link: "/Categories",
    bg: "bg-yellow-400",
    text: "text-gray-900",
  },
];

function Homepage() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${slide.bg} ${slide.text}`}
        >
          <h1 className="text-5xl font-bold mb-4 text-center px-4">{slide.title}</h1>
          <p className="text-xl mb-6 text-center px-4">{slide.subtitle}</p>
          <Link
            to={slide.link}
            className={`px-6 py-3 rounded text-lg font-semibold ${
              slide.text === "text-white"
                ? "bg-white text-blue-600"
                : "bg-gray-900 text-white"
            } hover:opacity-90 transition`}
          >
            {slide.buttonText}
          </Link>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-50"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-50"
      >
        ›
      </button>
    </div>
  );
}

export default Homepage;
