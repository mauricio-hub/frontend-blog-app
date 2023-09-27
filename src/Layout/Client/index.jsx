import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // No es necesario manipular el DOM directamente aquí
    // Solo cambia el estado del tema
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark-bg" : "light-bg"}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <Header theme={theme} onChangeTheme={handleChangeTheme} />
        <main>{children}</main>
     
      <Footer />
      </div>
    </div>
  );
};
