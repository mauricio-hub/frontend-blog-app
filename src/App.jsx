/* import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Hero } from "./components/Hero";

// Importa tus archivos CSS específicos del tema
import "./dark.css";
import "./index.css";

function App() {
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
      <Hero theme={theme} />
    </div>
  );
}

export default App;
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Client";
import { Blog } from "./pages/Blog";

import "./dark.css";
import "./index.css";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Blog/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;