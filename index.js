// import { Main, Header, Nav, Footer } from "./components";

// //declare a function named render
// function render() {
//   document.getElementById("root").innerHTML = `
// ${Header(st)}
// ${Nav(state.links)}
// ${Main(st)}
// `;

//   render();
// }

// //js functions (hamburger)
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// // sqft calculator
// $(document).ready(function() {
//   $("#calculate").on("click", function() {
//     var v1 = $("#length_feet").val();
//     var v2 = $("#width_feet").val();

//     var totalVal = parseInt(v1) * parseInt(v2);

//     var areaText = " total sq ft";
//     //calculate value for total
//     $("#total").val(totalVal);
//     // set total
//   });
// });

import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
//declare a function named render

const router = new Navigo(window.location.origin);

router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();

function render(st = state.Home) {
  document.getElementById("root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer()}
`;

  router.updatePageLinks();

  addEventListeners(st);
}
render(state.Home);

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );
}
