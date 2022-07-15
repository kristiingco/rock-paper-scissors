import React from "react";

const Choice = ({ type }) => {
  const colors = {
    rock: "bg-rock-color",
    scissors: "bg-scissors-color",
    paper: "bg-paper-color",
  };

  const shades = {
    rock: "bg-rock-shade",
    scissors: "bg-scissors-shade",
    paper: "bg-paper-shade",
  };

  return (
    <div className="flex relative">
      <div
        className={`flex absolute w-32 h-32 ${colors[type]} rounded-full justify-center items-center z-20`}
      >
        <div className="bg-light-cream w-24 h-24 z-40 rounded-full flex justify-center items-center">
          <img
            src={`/static/icon-${type}.svg`}
            alt={`${type} icon`}
            className="w-10 h-10"
          />
        </div>
        <div className="absolute w-24 h-24 bg-mid-gray rounded-full z-30 top-3"></div>
      </div>
      <div
        className={`flex absolute w-32 h-32 ${shades[type]} rounded-full top-2`}
      ></div>
    </div>
  );
};

export default Choice;
