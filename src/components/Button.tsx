import { ReactNode } from "react";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
};

const DEFAULT_BUTTON_CLASSES =
  "rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer inline-flex items-center gap-2";

export default function Button({
  label,
  onClick,
  type = "button",
  className = "",
  icon,
  iconPosition = "left",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${DEFAULT_BUTTON_CLASSES} ${className}`}
    >
      {icon && iconPosition === "left" && icon}
      {label}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
