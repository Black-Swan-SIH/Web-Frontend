import React from "react";
import "./Prof.css";
import Heading from "./Heading";

const Prof = ({
  imageSrc,
  name,
  unit,
  age,
  pronoun,
  experience,
  height,
  width,
  gap,
  borderRadius,
  nameFontSize,
  nameColor,
  FontSize1,
  FontSize2,
}) => {
  return (
    <div className="flex" style={{ gap: gap}}>
      <div
        className="image-pcontainer"
        style={{ height: height, width: width, borderRadius: borderRadius }}
      >
        <img src={imageSrc} alt="profile" className="pimage" />
      </div>
      <div>
        <Heading fontSize={nameFontSize} fontWeight="600" color={nameColor}>
          {name}
        </Heading>
        <div className="flex gap-8">
          <div className="flex  gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="600"
              color="var(--text-color23)"
            >
              Unit:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {unit}
            </Heading>
          </div>
          <div className="flex gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="600"
              color="var(--text-color23)"
            >
              Age:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {age}
            </Heading>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex  gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="600"
              color="var(--text-color23)"
            >
              Pronouns:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {pronoun}
            </Heading>
          </div>
          <div className="flex gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="600"
              color="var(--text-color23)"
            >
              Experience:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {experience}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prof;
