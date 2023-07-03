// import the default export and the named export `useState` from the 'react' library
import React, {useState} from 'react';


export default function ColorPicker() {
  const [color, setColor] = useState();
  // color is the current state and setColor is the function that allows to set color

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={()=>setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={()=>setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={()=>setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={()=>setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}
