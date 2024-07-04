import Image from "next/image";
import React, { FC } from "react";

const AboutList = [
  {
    id: 1,
    icon: "/images/solar_map.png",
    title: "solar potential mapping",
    description:
      "SolarMetrix offers high resolution solar potential visualization across the country",
  },
  {
    id: 2,
    icon: "/images/globe.png",
    title: "Socio-Economic and Typographic analysis",
    description:
      "we  provide information on dominant land use type and analyze the terrain and geography",
  },
  {
    id: 3,
    icon: "/images/solar_irradiance.png",
    title: "Solar Irradiance Forecasts",
    description:
      "we  forecast solar irradiance to facilitate optimized grid operation and management",
  },
];

const About = () => {
  return (
    <div className="text-black">
      <div className="px-[100px] my-[40px] text-center">
        <h3>About Solametrix</h3>
        <p>
          SolarMetrix is a team of top experienced data scientists and experts
          who are out to help solar companies make well-informed decisions
          through:
        </p>
      </div>
      <div className="px-[80px] flex ">
        {AboutList.map((item) => (
          <Card
            icon={item.icon}
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default About;

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      {/* icon */}
      <Image src={icon} alt="icon" width={50} height={50} />
      {/* title */}
      <div className="font-bold text-sm text-center">{title}</div>
      {/* description */}
      <div className="text-center">{description}</div>
    </div>
  );
};
