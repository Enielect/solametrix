import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "outline" | "outlineYellow" | "red" | "yellow";
  width?: "full" | "auto" | "fit";
  shape?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  color = "blue",
  width = "auto",
  shape = "rounded-md",
  ...props
}) => {
  const sizeClassName = {
    sm: "px-3 md:px-5 py-2 sm:py-2.5 text-sm md:text-base font-medium",
    md: "px-3.5 md:px-5 py-3 text-lg font-medium",
    lg: "px-6 py-3 text-lg",
  }[size];

  const widthClassName = {
    full: "w-full",
    auto: "w-full max-w-[100px] md:max-w-[130px]",
    fit: "w-fit",
  }[width];

  const colorClassName = {
    blue: "bg-primary text-[#fdfdfd]", // bg of dark cyan-blue
    outline: "bg-transparent border border-subtext text-[#1E1E1E]", // bg of transparent
    red: "bg-red-500", // bg of red
    yellow: "bg-yellow-500", // bg of yellow
    outlineYellow: "bg-transparent text-yellow-500 border-2 border-yellow-500", // bg of yellow
  }[color];

  return (
    <button
      className={`flex items-center justify-center space-x-1 ${shape} font-roboto font-medium ${widthClassName} text-center ${sizeClassName} ${colorClassName} whitespace-nowrap disabled:text-[#F8F8F8D9] disabled:bg-[#1E1E1E4D] cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;