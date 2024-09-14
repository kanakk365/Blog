import React from "react";

function Button({
  children,
  textColor = "text-white",
  className = "",
  type = "button",
  bgColor = "bg-blue-600",
  ...props
}) {
  return (
    <button
      className={`px-4 y-2 rounded-lg ${className} ${textColor} ${bgColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
