import React from "react";
import { PressStoryData } from "../utils/data";

function PressStory() {
  return (
    <>
      {PressStoryData.map((data) => (
        <div className="PressStory">
          <h3>{data.title}</h3>
          <span>{data.date}</span>
          <p>{data.text}</p>
        </div>
      ))}
    </>
  );
}

export default PressStory;
