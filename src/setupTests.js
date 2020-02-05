// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

function setupTests() {
  console.log("test");
}

const testFunction = () => {
  let anObject = { key: "words" };
  return anObject.key;
};

export default setupTests;
