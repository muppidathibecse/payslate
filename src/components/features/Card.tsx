type CardProps = {
  title: string;
  description: string;
  dotColor: string;
  dotBgColor: string;
};

const Card = ({ title, description, dotColor, dotBgColor }: CardProps) => {
  return (
    <article className="flex flex-col gap-3 rounded-xl p-6">
      <span
        className='flex h-8 w-8 items-center justify-center rounded-full'
        style={{ backgroundColor: dotBgColor }}
      >
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: dotColor }}
        />
      </span>
      <h3 className="text-xl font-bold text-text">{title}</h3>
      <p className="text-base text-muted">{description}</p>
    </article>
  );
};

export default Card;