  "use client"
import { useRef, useEffect, useState } from 'react';

const Presentation = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleScroll = (e) => {
    const slides = containerRef.current.children;
    const totalSlides = slides.length;

    if (e.deltaY > 0 && currentSlide < totalSlides - 1) {

      setCurrentSlide((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentSlide > 0) {
   
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', handleScroll);

   
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [currentSlide]);

  useEffect(() => {
    const slides = containerRef.current.children;
    slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
  }, [currentSlide]);

  return (
    <div className="h-screen overflow-hidden" ref={containerRef}>
      <section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500">
        <h1 className="text-5xl text-white mb-4">Presentation</h1>
        <p className="text-xl text-white"> </p>
      </section>
      <section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
        <h1 className="text-5xl text-white mb-4">e</h1>
        <p className="text-xl text-white">.</p>
      </section>
      <section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#09203F] to-[#537895]">
        <h1 className="text-5xl text-white mb-4">.</h1>
        <p className="text-xl text-white"></p>
      </section>
      <section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-500 to-red-500">
        <h1 className="text-5xl text-white mb-4">a</h1>
        <p className="text-xl text-white"></p>
      </section>
      <section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-violet-500">
        <h1 className="text-5xl text-white mb-4">a</h1>
        <p className="text-xl text-white"></p>
      </section>
      <section className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-yellow-500">
        <h1 className="text-5xl text-white mb-4">a</h1>
        <p className="text-xl text-white"></p>
      </section>
    </div>
  );
};

export default Presentation;
