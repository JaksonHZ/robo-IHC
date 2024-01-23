/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(40);

  useEffect(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
      setFontSize(Number(savedFontSize));
    }
  }, []);

  const changeFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  }

  return (
    <FontSizeContext.Provider value={{ fontSize, changeFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
