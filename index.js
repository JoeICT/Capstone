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
//
//   });
// });

import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
//declare a function named render

const router = new Navigo(window.location.origin);

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

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
}
// router hooks
router
  .on({
    ":page": params => render(state[capitalize(params.page)]),
    "/": () => render(state.Home)
  })
  .resolve();
