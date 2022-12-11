import React from "react";
import Part1 from "./Contents/Part1";
import Part2 from "./Contents/Part2";
import Part3 from "./Contents/Part3";

const Content = (props) => {
  return (
    <div>
        <Part1 part1={props.parts[0]} exercises1={props.exercises[0]}/>
        <Part2 part2={props.parts[1]} exercises2={props.exercises[1]}/>
        <Part3 part3={props.parts[2]} exercises3={props.exercises[2]}/>
    </div>
  );
};

export default Content;
