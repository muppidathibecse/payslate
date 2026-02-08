import { details, featuresData, KEY_FEATUURES_CARD_STYLE } from "../home/data";
import Card from "./Card";

const Features = () => (
  <section
    className="flex justify-center w-full p-6 md:p-12 2xl:px-0 2xl:w-360"
    id="features"
  >
    <div className="w-full flex flex-col justify-center items-center">
    <span className="text-sm md:text-base text-secondary font-semibold uppercase w-full">
      {details.label}
    </span>
    <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-6 mt-4">
      <p className="font-bold text-text text-4xl w-full md:w-1/2">
        {details.title}
      </p>
      <p className="text-base text-muted w-full md:w-1/2 mt-2 md:mt-0">
        {details.description}
      </p>
    </div>

    <ul className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 rounded-2xl mt-6 md:mt-10 bg-[url('/assets/imageBg.png')] bg-cover bg-center bg-no-repeat">
      {featuresData.map((feature, index) => (
        <li key={index} className={KEY_FEATUURES_CARD_STYLE}>
          <Card
            title={feature.title}
            description={feature.description}
            dotColor={feature.color}
            dotBgColor={feature.bgColor}
          />
        </li>
      ))}
    </ul>
    </div>
  </section>
);

export default Features;
