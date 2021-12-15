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

//js functions (hamburger)
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
