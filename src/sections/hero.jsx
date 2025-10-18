import { useEffect, useRef, useState } from "react";
import AOS from 'aos';


import Slide1 from "../components/Slide1";
import Slide2 from "../components/Slide2";
import Slide3 from "../components/Slide3";


const SLIDES = [
  {
    id: 1,
    SlideComponent: Slide1,
  },
  {
    id: 2,
    SlideComponent: Slide2,
  },
  {
    id: 3,
    SlideComponent: Slide3,
  },
];

export default function Hero({ interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = SLIDES.length;
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) mountedRef.current = true;

    const aosRefreshTimeout = setTimeout(() => {
      AOS.refresh();
    }, 800);

    if (isPaused){
      return () => clearTimeout(aosRefreshTimeout);
    } 
    
    const autoSlideTimeout = setTimeout(() => {
      setIndex((i) => (i + 1) % slidesCount);
    }, interval);

    return() => {
      clearTimeout(aosRefreshTimeout);
      clearTimeout(autoSlideTimeout);
    }; 
  },[index, isPaused, interval, slidesCount]);



  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div id="home" className="relative h-[60vh] md:h-[70vh] overflow-hidden">
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
              {/* Conteúdo do Slide */}
              <div className="absolute inset-0 z-30 flex items-center justify-center">
                <ActiveSlide />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
