import { Main, Header, Nav, Footer } from "./components";

//declare a function named render
function render() {
  document.getElementById("root").innerHTML = `
${Header()}
${Nav()}
${Main()}
`;

  render();
}
