import shortUUID from "short-uuid";
import startCase from "lodash/startCase";
import  lowerCase  from "lodash/lowerCase";

export function titleCase(str) {
  return startCase(lowerCase(str));
  // return str
  //   .trim()
  //   .split(" ")
  //   .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
  //   .join(" ");
}

export function randomID() {
  return shortUUID.generate();
}
