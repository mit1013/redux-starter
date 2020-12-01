//use lodash to chain functions.
// can use currying to send second parameter
import { compose, pipe } from "lodash/fp";

let input = "   JavaScript   ";

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(wrapInDiv, toLowerCase, trim);

const result = transform(input);
