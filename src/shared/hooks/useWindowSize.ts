"use client";

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Define no carregamento

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
