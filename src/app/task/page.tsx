"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Image from "next/image";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Page: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");

    sections.forEach((section) => {
      gsap.to(section, {
        xPercent: -100, // scrolls horizontally
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          scrub: true,
          pin: true,
          end: "+=3000",
          onUpdate: (self) => {
            setShowScrollTop(self.scroll() > 100);
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 } });
  };

  return (
    <div className="absolute top-0 left-0 w-full mt-[50px]">
      <h1 className="text-7xl font-extrabold text-center mt-10 text-green-600">
        Гүйцэтгэсэн ажлууд
      </h1>

      <div
        className="max-w-6xl mx-auto mt-16 p-8 space-y-12"
        ref={containerRef}
      >
        <div className="w-[70%] h-fit bg-gray-800 p-6 rounded-lg shadow-lg scroll-section">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">Тохируулах</h2>
          <ul className="list-disc list-inside text-gray-300  flex flex-col justify-around gap-[70px]">
            <div className="flex justify-around">
              <li className="flex flex-col gap-[20px] items-center">
                SOS medica - Fortigate
                <Image
                  src="/sos.jpeg"
                  width={300}
                  height={100}
                  alt="SOS Medica"
                  className=" w-48 h-32 border-4 border-gray-400"
                />
              </li>
              <li className="flex flex-col gap-[20px] items-center mb-[20px]">
                Монгол шуудан - Fortigate
                <Image
                  src="/mongol.png"
                  width={100}
                  height={100}
                  alt="Монгол Шуудан"
                  className=" w-48 h-48 border-4 border-gray-400"
                />
              </li>
            </div>
            <div>
              <li className="flex flex-col gap-[20px] items-center mb-[20px]">
                Сонгуулийн ерөнхий хороо - FortiExtender
                <Image
                  src="/images.jpeg"
                  width={300}
                  height={100}
                  alt="Монгол Шуудан"
                  className=" w-48 h-48 border-4 border-gray-400"
                />
              </li>
            </div>
          </ul>
        </div>

        <div className="w-fit h-fit bg-gray-800 p-6 rounded-lg shadow-lg scroll-section">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">Эвент</h2>
          <ul className="list-disc list-inside text-gray-300 flex ">
            <li className="flex gap-[20px] items-start">
              <div>
                {" "}
                <div className="mb-[30px]">
                  {" "}
                  Fortinet Accelerate Mongolia 2024
                </div>
                <Image
                  src={"/forti.jpeg"}
                  width={400}
                  height={100}
                  alt={"Fortinet Accelerate Mongolia 2024"}
                />
              </div>

              <div>
                {" "}
                <Image
                  src={"/dorj.jpg"}
                  width={400}
                  height={100}
                  alt={"Fortinet Accelerate Mongolia 2024"}
                />
              </div>
            </li>
          </ul>
        </div>

        <div className="w-fit h-fit bg-gray-800 p-6 rounded-lg shadow-lg scroll-section">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">
            Proof of concept
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="list-disc flex  gap-[20px] ">
              <div className="">
                {" "}
                <div className="mb-[20px]"> Transbank FortiSIEM</div>
                <div>
                  <Image
                    src={"/Screenshot 2024-09-15 at 19.49.03.png"}
                    width={400}
                    height={100}
                    alt={"Fortinet Accelerate Mongolia 2024"}
                  />
                </div>
              </div>{" "}
              <div>
                <Image
                  src={"/fortisiem.png"}
                  width={600}
                  height={100}
                  alt={"Fortinet Accelerate Mongolia 2024"}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="h-fit bg-gray-800 p-6 rounded-lg shadow-lg scroll-section">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">Migration</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li className="list-disc flex gap-[20px] flex-col">
              <div className="flex">
                {" "}
                <div className="flex flex-col gap-[20px] items-center">
                  International school of Ulaanbaatar - Core Switch migration
                  <Image
                    src={"/isue.png"}
                    width={200}
                    height={100}
                    alt={"Fortinet Accelerate Mongolia 2024"}
                    className="bg-[#fff] p-5 rounded-full "
                  />
                </div>
                <div>
                  <Image
                    src={"/isu3.png"}
                    width={600}
                    height={100}
                    alt={"Fortinet Accelerate Mongolia 2024"}
                    className="bg-[#fff]  "
                  />
                </div>
              </div>
              <div className="flex   items-center relative justify-center">
                <div className="flex flex-col items-center -ml-[30px]">
                  {" "}
                  <Image
                    src={"/C9500.png"}
                    width={250}
                    height={0}
                    alt={"Fortinet Accelerate Mongolia 2024"}
                  />
                  <div className="absolute bottom-[31px]">
                    C9500 - Core Switch
                  </div>
                </div>
                <div className="flex  flex-col items-center relative">
                  {" "}
                  <Image
                    src={"/C9200.png"}
                    width={200}
                    height={0}
                    alt={"Fortinet Accelerate Mongolia 2024"}
                  />
                  <div className="absolute -bottom-[43px]">C9200 X 2</div>
                </div>
                <div className="flex  flex-col items-center relative">
                  {" "}
                  <Image
                    src={"/C1000.png"}
                    width={200}
                    height={0}
                    alt={"Fortinet Accelerate Mongolia 2024"}
                  />
                  <div className="absolute bottom-[5px]">C1000 X 1</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 p-4 bg-teal-500 text-white rounded-full shadow-lg"
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default Page;
