import React from "react";
import Tile from '../tile/Tile';

export const TileList = (props) => {
  
  //tileData is used for contacts and appointment
  return (
    <div>
      {props.tileData.map((tileObj, index) => {
          const {name, ...description} = tileObj;
          return  <Tile key={index} name={name} description={description} />
      })}
    </div>
  );
};
