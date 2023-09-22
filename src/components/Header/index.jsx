import React, { useState, useEffect } from "react";

function Header({ theme, onChangeTheme }) {
  useEffect(() => {
    // No es necesario manipular el DOM directamente aquí
    // Solo cambia el estado del tema
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="header">
      <p>THE BLOG</p>
      
      <ul className="menu">
        <li>
          <a href="#">Blog</a>
        </li>
        <li>  
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Newsletter</a>
        </li>
        <label className="switch">
        <input type="checkbox" onClick={onChangeTheme} />
        <span className="slider round"></span>
      </label>
      </ul>

    
    </header>
  );
}

export default Header;
