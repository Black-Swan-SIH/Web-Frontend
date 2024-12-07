import React from "react";
import Prof from "./Prof";

const Panel = ({
  imageSrc,
  name,
  unit,
  age,
  pronoun,
  experience,
  profileScore,
  reviews,
  interview,
}) => {
  return (
    <div className="mb-10">
      <Prof
        imageSrc={imageSrc}
        name={name}
        unit={unit}
        age={age}
        pronoun={pronoun}
        experience={experience}
        height="12vh"
        width="13vh"
        gap="4em"
        borderRadius="16%"
        nameFontSize="28px"
        nameColor="var(--text-color9)"
        FontSize1="13px"
        FontSize2="14px"
      />
    </div>
  );
};

export default Panel;
