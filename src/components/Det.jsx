import React from "react";
import Heading from "./Heading";

const Det = ({userData,extra,children}) => {
    console.log(userData)
  return (
    <div>
      <p>
        <Heading
          fontSize="26px"
          color="rgba(123, 123, 123, 1)"
          fontWeight="700"
        >
          {children}
        </Heading>
        <Heading fontSize="36px" color="var(--text-color)" fontWeight="700">
          {userData}
          {extra}
        </Heading>
      </p>
    </div>
  );
};

export default Det;
