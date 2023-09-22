// Layout.js
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
    <div className={`h-screen App ${theme === "dark" ? "dark-bg" : "light-bg"}`}>
        <Header theme={theme} onChangeTheme={handleChangeTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
