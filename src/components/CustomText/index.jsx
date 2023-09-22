import React from "react";

function CustomText({ element, theme, children, className, ...rest }) {
  // Determina las clases de Tailwind CSS basadas en el tema
  const textClasses = `text-base ${theme === "dark" ? "text-white" : ""} ${className}`;

  // Determina el tipo de elemento (etiqueta) a utilizar
  const Element = element || "p";

  return <Element className={textClasses} {...rest}>{children}</Element>;
}

export default CustomText;
