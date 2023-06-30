import React from "react";

export default function Tile(props){
  console.log(props.name);
  console.log(props.description);
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      
        {Object.values(props.description).map((value, index) => {
          return <p className="tile" key={index}>{value}</p>
        })}
    </div>
  );
};
