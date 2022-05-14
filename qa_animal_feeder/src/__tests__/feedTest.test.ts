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

describe("feeding animals", () => {
  test("Alex likes the food we expect", () => {});
  test("Marty likes the food we expect", () => {});
  test("Melman likes the food we expect", () => {});
  test("Gloria likes the food we expect", () => {});
});
