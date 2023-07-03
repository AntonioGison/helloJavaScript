import React from "react";

export default function Tile(props){
  console.log(props.name);
  console.log(props.description);
  return (

    //Render a <p> element with the name prop. Give this element a className of "tile-title"
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>

        {Object.values(props.description).map((value, index) => {
          return <p className="tile" key={index}>{value}</p>
        })}
    </div>
  );
};
