import { useEffect, useRef, useState } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

import Slide1 from "../components/Slide1";
import Slide2 from "../components/Slide2";

const SLIDES = [
  {
    id: 1,
    image: hero1,
    SlideComponent: Slide1,
  },
  {
    id: 2,
    image: hero2,
    SlideComponent: Slide2,
  },
  {
    id: 3,
    image: hero3,
    SlideComponent: Slide1,
  },
];

export default function Hero({ interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = SLIDES.length;
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) mountedRef.current = true;
    if (isPaused) return;

    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % slidesCount);
    }, interval);

    return () => clearTimeout(t);
  }, [index, isPaused, interval, slidesCount]);

  const goTo = (i) => setIndex(((i % slidesCount) + slidesCount) % slidesCount);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div id="home" className="relative h-[400px] md:h-[600px] overflow-hidden">
        {SLIDES.map((s, i) => {
          const ActiveSlide = s.SlideComponent;

          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === index
                  ? "opacity-100 z-20"
                  : "opacity-0 z-10 pointer-events-none"
              }`}
            >
              {/* Imagem de fundo */}
              <img
                src={s.image}
                alt={s.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay para melhorar contraste do texto */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Conteúdo do Slide */}
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <ActiveSlide />
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicadores */}
      <div className="absolute z-40 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index ? "true" : "false"}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              i === index
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={() => {
          prev();
          setIsPaused(true);
        }}
        className="hidden md:flex absolute top-0 left-0 z-40 items-center justify-center h-full px-4 focus:outline-none"
        aria-label="Previous slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 text-white">
          ❮
        </span>
      </button>

      <button
        onClick={() => {
          next();
          setIsPaused(true);
        }}
        className="hidden md:flex absolute top-0 right-0 z-40 items-center justify-center h-full px-4 focus:outline-none"
        aria-label="Next slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 text-white">
          ❯
        </span>
      </button>
    </div>
  );
}
