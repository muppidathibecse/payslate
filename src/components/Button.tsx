

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  label,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-full 
        bg-[#804FB0] 
        px-5 
        py-2 
        text-sm 
        font-medium 
        text-white
        transition
        hover:bg-[#6A4BEF]
        focus:outline-none
        focus:ring-2
        focus:ring-[#7B5CFF]
        focus:ring-offset-2
        cursor-pointer
        ${className}
      `}
    >
      {label}
    </button>
  );
}
