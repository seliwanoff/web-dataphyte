// PreloaderContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const PreloaderContext = createContext();

export const PreloaderProvider = ({ children, images }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to preload images
    const preloadImages = () => {
      return Promise.all(
        images.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // resolve even if there's an error
          });
        })
      );
    };

    // Preload all images and then update loading state
    preloadImages().then(() => setLoading(false));
  }, [images]);

  return (
    <PreloaderContext.Provider value={{ loading }}>
      {children}
    </PreloaderContext.Provider>
  );
};
