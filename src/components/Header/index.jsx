import React, { useState } from "react";
import { Switch } from "antd";

function Header() {
  return (
    <header className="header">
     
        <p>Logo</p>
     
     
        
          <ul className="menu">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Proyecto</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
            <li>
              <a href="#">Boletín de noticias</a>
            </li>
            <li>
              <Switch
                className="switch"
                checkedChildren="🌙"
                unCheckedChildren="☀️"
                defaultChecked

              />
            </li>
          </ul>
        
     
    </header>
  );
}

export default Header;
