"use client";
import { useEffect, useState } from "react";

export default function useScrollDirection() {
  // down is true, up is false
  const [isScrollDirectionDown, setIsScrollDirectionDown] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const resetScrollDirection = () => {
    // setIsScrollDirectionDown(false);
    console.log("hello");
  };

  const handleScroll = () => {
    if (typeof window === "undefined") return;
    window.scrollY > prevScrollPosition
      ? setIsScrollDirectionDown(true)
      : setIsScrollDirectionDown(false);
    setPrevScrollPosition(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return (() => {
        window.removeEventListener("scroll", handleScroll);
      });
    }
  }, [prevScrollPosition]);

  return [isScrollDirectionDown, resetScrollDirection] as const;
}
