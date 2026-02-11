type ListProps = {
  items: string[];
  type: "ul" | "ol";
};

export const Heading: React.FC<{ label: string }> = ({ label }) => {
  return (
    <h1 className="text-[#804FB0] text-base font-semibold mt-6">{label}</h1>
  );
};

export const Paragraph: React.FC<{ label: string; className?: string }> = ({
  label,
  className,
}) => {
  const parts = label.split(/(support@dotmite.com)/gi);

  return (
    <p className={`${className} text-[#0D0D0D] text-base font-normal`}>
      {parts.map((part, index) =>
        part.toLowerCase() === "support@dotmite.com" ? (
          <span key={index} className="text-[#804FB0] font-medium underline cursor-pointer">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  );
};

export const List: React.FC<ListProps> = ({ items, type }) => {
  const ListTag = type;
  return (
    <ListTag className={`pl-6 ${type === "ul" ? "list-disc" : "list-decimal"}`}>
      {items.map((item, index) => (
        <li key={index} className="text-base text-[#0D0D0D]">
          {item}
        </li>
      ))}
    </ListTag>
  );
};
