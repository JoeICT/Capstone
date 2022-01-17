import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
dotenv.config();
//declare a function named render

const router = new Navigo(window.location.origin);
// function render(st = state.Home) {

function render(st) {
  document.getElementById("root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer()}
`;

  router.updatePageLinks();

  addEventListeners(st);

  // login Home and Contractor button
  // loginButtonClick();
}

// function loginButtonClick(st) {
//   document.getElementById("contractor").addEventListener("click", event => {
//     event.preventDefault();
//     render(state.Contractor);
//   });
// }

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

  // contractor / find api info

  // if (st.view === "Contracotor") {
  //   document.querySelector("form").addEventListener("submit", event => {
  //     event.preventDefault();

  //     const inputList = event.target.elements;
  //     console.log("Input Element List", inputList);

  // // const toppings = [];
  // // // Interate over the toppings input group elements
  // // for (let input of inputList.toppings) {
  // //   // If the value of the checked attribute is true then add the value to the toppings array
  // //   if (input.checked) {
  // //     toppings.push(input.value);
  // //   }
  // // }

  // const requestData = {
  //   customer: inputList.customer.value,
  //   crust: inputList.crust.value,
  //   cheese: inputList.cheese.value,
  //   sauce: inputList.sauce.value,
  //   toppings: toppings
  // };
  // console.log("request Body", requestData);

  // axios
  //   .post(`${process.env.FIND_CONTRACTOR_API_URL}`, requestData)
  //   .then(response => {
  // // Push the new find onto the Find state finds attribute, so it can be displayed in the find list
  //           state.Findcont.findconts.push(response.data);
  //           router.navigate("/Find");
  //         })
  //         .catch(error => {
  //           console.log("It puked", error);
  //         });
  //     });
  //   }
  // }
  // end contractor / find api

  document.getElementById("calculatorButton").addEventListener("click", () => {
    var length = window.document.myForm.length.value;
    var width = window.document.myForm.width.value;
    var cost = window.document.myForm.cost.value;
    var area = length * width;
    var totalCost = cost * area;
    alert(
      "The specification is " +
        length * width +
        " square feet." +
        "\n The total cost is $" +
        totalCost
    );
  });
}
// router hooks

// router
//   .on({
//     ":page": params => render(state[capitalize(params.page)]),
//     "/": () => render(state.Home)
//   })
//   .resolve();
router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=wichita`
        )
        // st.%20louis`
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
    }
  }
});
// find contractor api
//   if (page === "Find") {
//     axios
//       .get(`${process.env.FIND_CONTRACTOR_API_URL}`)
//       .then(response => {
//         state.Findcont.findconts = response.data;
//         done();
//       })
//       .catch(error => {
//         console.log("It puked", error);
//       });
// }
// end find contractor api

//ADD ROUTER HERE ...
router
  .on({
    "/": () => render(state.Login),
    ":view": params => render(state[capitalize(params.view)])
  })
  .resolve();
