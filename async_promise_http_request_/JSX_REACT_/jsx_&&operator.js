



/**
 * If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered.
 * If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.
 */

//example 1
const tasty = (
    <ul>
      <li>Applesauce</li>
      { !baby && <li>Pizza</li> }
      { age > 15 && <li>Brussels Sprouts</li> }
      { age > 20 && <li>Oysters</li> }
      { age > 25 && <li>Grappa</li> }
    </ul>
  );



//example 2
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);