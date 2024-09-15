"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TransitionLink from "./TransitionLink";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;

    if (nav) {
      gsap.set(nav, { y: -50, opacity: 0 });

      const parent = nav.parentElement;
      if (parent) {
        parent.addEventListener("mouseenter", () => {
          gsap.to(nav, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
        });

        parent.addEventListener("mouseleave", () => {
          gsap.to(nav, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          });
        });
      }
    }
  }, []);

  return (
    <div className="group relative">
      <div className="fixed top-0 left-0  h-10 z-50"></div>{" "}
      <nav
        ref={navRef}
        className="absolute top-0 left-[200px] w-full  p-8 shadow-lg z-50 bg-[#121212]"
      >
        <div className="flex justify-center">
          <div className="flex flex-col gap-5 w-[70%] font-mono items-center">
            {" "}
            <TransitionLink href="/" label="Нүүр" />
            <TransitionLink href="/introduction" label="Танилцуулга" />
            <TransitionLink href="/work" label="Компаний тухай" />
            <TransitionLink href="/duty" label="Ажлийн байрны үндсэн үүрэг" />
            <TransitionLink
              href="/plan"
              label="Дадлагажих хугацааний төлөвлөгөө"
            />
            <TransitionLink href="/task" label="Гүйцэтгэсэн ажлууд" />
            <TransitionLink
              href="/about"
              label="Цаашдийн зорилго, төлөвлөгөө"
            />
            <TransitionLink
              href="/about"
              label="Амжилтанд хүрэх гал эрмэлзэл"
            />
            <TransitionLink href="/summary" label="Дүгнэлт" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
