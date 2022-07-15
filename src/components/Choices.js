import React from "react";
import Choice from "./Choice";

const Choices = () => {
  return (
    <div>
      <div className="flex justify-center my-24">
        <img src="/static/bg-triangle.svg" alt="Triangle background" />
        <div className="relative right-56 top-36">
          <Choice type="rock" />
        </div>
        <div className="relative right-32 -top-8">
          <Choice type="scissors" />
        </div>
        <div className="relative right-80 -top-8">
          <Choice type="paper" />
        </div>
      </div>
    </div>
  );
};

export default Choices;
