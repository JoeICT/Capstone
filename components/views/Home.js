import html from "html-literal";

//  Add the Kelvin converter
// const kelvinToFahrenheit = kelvinTemp =>
//   Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

// export default st => html`
//   <h2>
//     Temperature in ${st.weather.city} is
//     ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
//     ${kelvinToFahrenheit(st.weather.feelsLike)}F.
//   </h2>
export default () => html`

  <div id="home-body">
  <div class="welcomegreeting"><h1>About This Site</h1></div><br>
  <div class="home-page-par1">
    <h2>
      <strong>
    Renovating your home is a big project, whether you're tackling just one room or embarking on a more extensive makeover. If you're only updating a few fixtures or surfaces, you might be able to do most of the work yourself or bring in specific pros for tasks like tiling or installing cabinetry. But if the project involves a complete overhaul of the room, hiring a general contractor might be worth the extra cost. As experts in building and remodeling projects, contractors can manage all the necessary permits, inspections, labor, equipment, and materials to ensure your remodel goes off without a hitch. The key is to find a reputable contractor that can correctly and efficiently meet the needs of your project. Make your remodel a success with these tips on how to find the right contractor.
    </strong>
  </div>
    </h2><br>

  <div class="home-page-par2">
    <h2><strong>
    Plan to gather at least three estimates from various contractors before you make a decision. More quotes (say five or six) will give you a clearer picture of how these companies stack up against each other. Not only will you get more perspective on appropriate costs, but also you'll get an idea of the caliber of work that each contractor will provide. For example, one contractor might offer a bargain rate and marginal work; another's high bid could indicate quality.
    </strong>
    </h2>
  </div>
</div>
`;
// // Add the Kelvin converter const kelvinToFahrenheit = kelvinTemp => const
