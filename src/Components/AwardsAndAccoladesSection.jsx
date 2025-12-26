import React from "react";
import Marquee from "react-fast-marquee";

const accoladeImages = Object.values(
  import.meta.glob("../assets/accolades/*.png", { eager: true })
);
const awardImages = Object.values(
  import.meta.glob("../assets/awards/*.png", { eager: true })
);

const AwardsAccoladesSection = () => {
  return (
    <section className="py-24 space-y-20">
      <h2 className="text-white text-4xl font-bold text-center">
        Awards & Accolades
      </h2>

      {/* Awards */}
      <div>
        <h3 className="text-white text-2xl text-center mb-8">
          Our Awards
        </h3>
        <Marquee pauseOnHover speed={90} gradient={false} direction="right">
          {awardImages.map((img, i) => (
            <img
              key={i}
              src={img.default}
              alt={`Award ${i + 1}`}
              className="h-[280px] mx-8 object-contain"
            />
          ))}
        </Marquee>
      </div>

      {/* Accolades */}
      <div>
        <h3 className="text-white text-2xl text-center mb-8">
          Our Accolades
        </h3>
        <Marquee pauseOnHover speed={90} gradient={false}>
          {accoladeImages.map((img, i) => (
            <img
              key={i}
              src={img.default}
              alt={`Accolade ${i + 1}`}
              className="h-[320px] mx-8 object-contain"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AwardsAccoladesSection;
