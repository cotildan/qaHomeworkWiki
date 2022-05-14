import { Animal } from "../animal";
import { getAnimal } from "../zoo";
 
const alex: Animal = getAnimal("Alex");
const marty: Animal = getAnimal("Marty");
const melman: Animal = getAnimal("Melman");
const gloria: Animal = getAnimal("Gloria");
 
const lionFood = ["meat"];
const zebraFood = ["grass", "leaves", "shrubs", "bark"];
const giraffeFood = ["leaves", "hay", "carrots"];
const hippoFood = ["grass", "reeds", "shoots"];
 
const badFood = ["shrimp", "potatoes", "pizza", "icecream"];
 
/*
FYI
 new Animal("Alex", "Lion", ["meat"]),
 new Animal("Marty", "Zebra", ["grass", "leaves", "shrubs", "bark"]),
 new Animal("Melman", "Giraffe", ["leaves", "hay", "carrots"]),
 new Animal("Gloria", "Hippopotamus", ["grass", "reeds", "shoots"]),
*/
 
describe("feeding animals", () => {
 test("Alex likes the food we expect", () => {
     // Alex is a lion
 
     //accessing lionFood array
     lionFood.forEach((nom) =>{
     //testing feed() from animal.ts file for the food Alex will eat
     expect(alex.feed(nom)).toBe(`Alex the Lion likes ${nom}!`)
     });
 
     // testing for the food Alex will NOT eat
     badFood.forEach((yuck) => {
       expect(alex.feed(yuck)).toBe(`Alex the Lion does not like ${yuck}!`)
     });
 
 });
 test("Marty likes the food we expect", () => {
     //Marty is a Zebra
 
      //accessing zebraFood array
     zebraFood.forEach((nom) =>{
     //testing feed() from animal.ts file for the food Marty will eat
     expect(marty.feed(nom)).toBe(`Marty the Zebra likes ${nom}!`)
       });
 
     // testing for the food Marty will NOT eat
     badFood.forEach((yuck) => {
       expect(marty.feed(yuck)).toBe(`Marty the Zebra does not like ${yuck}!`)
     });
 
 });
 test("Melman likes the food we expect", () => {
     //Melman is a Giraffe
 
      //accessing giraffeFood array
     giraffeFood.forEach((nom) =>{
     //testing feed() from animal.ts file for the food Melman will eat
     expect(melman.feed(nom)).toBe(`Melman the Giraffe likes ${nom}!`)
     });
 
     // testing for the food Melman will NOT eat
     badFood.forEach((yuck) => {
       expect(melman.feed(yuck)).toBe(`Melman the Giraffe does not like ${yuck}!`)
     });
 
 });
 test("Gloria likes the food we expect", () => {
     //Gloria is a hippo
 
      //accessing hippoFood array
     hippoFood.forEach((nom) =>{
     //testing feed() from animal.ts file for the food Gloria will eat
     expect(gloria.feed(nom)).toBe(`Gloria the Hippopotamus likes ${nom}!`)
     });
 
     // testing for the food Gloria will NOT eat
     badFood.forEach((yuck) => {
       expect(gloria.feed(yuck)).toBe(`Gloria the Hippopotamus does not like ${yuck}!`)
     });
 
 }); 
 
});

