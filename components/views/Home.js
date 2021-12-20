import html from "html-literal";
export default () => html`
  <div class="flexbox-item flexbox-item-3">
    <h3>Some paragraph about anything that will be in the body of my page.</h3>
  </div>
  <div class="flexbox-item flexbox-item-4">
    <h3>Some paragraph about anything that will be in the body of my page.</h3>
  </div>
`;
// // Add the Kelvin converter const kelvinToFahrenheit = kelvinTemp => const
//   kelvinToFahrenheit = kelvinTemp => Math.round((kelvinTemp - 273.15) * (9 / 5)
//   + 32);
//   export default st => html`
//   <h3>
//     Temperature in ${st.weather.city} is
//     ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
//     ${kelvinToFahrenheit(st.weather.feelsLike)}F.
//   </h3>
// `;
