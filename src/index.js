// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals, { useAnimals } from "./data";

console.log(animals);

const [cat, dog] = animals;
console.log("cat - " + cat);
console.log("dog - " + dog);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
console.log(makeSound());

console.log();

// const { sound, name } = cat;
// console.log(sound);
// console.log(name);

// here you're trying to read name from cat into catName, sound from cat into catSound;
// const { name: catName, sound: catSound } = cat;
// console.log("catName is " + catName);
// console.log("catSound is " + catSound);
// const { food: numFeeds } = cat.feedingRequirements;

// console.log("num feeds - " + numFeeds);
// const { name = "Fluffy", sound = "Purr" } = cat;

const {
  name,
  sound,
  feedingRequirements: { food, water }
} = cat;

console.log(food);

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
