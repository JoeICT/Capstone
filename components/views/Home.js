import html from "html-literal";
//  Add the Kelvin converter
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

// export default st => html`

export default st => html`
  <!-- <h2> -->
    <div class="weatherapi"><Span>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
    </Span></div>
  <!-- </h2> -->
  <div id="home-body">
  <div class="welcomegreeting"><h1><span>About This Site</span></h1></div><br>
  <div class="home-page-par1"><br><br>
    <h2>
      <strong><span>
    Renovating your home is a big project, whether you're tackling just one room or embarking on a more extensive makeover. If you're only updating a few fixtures or surfaces, you might be able to do most of the work yourself or bring in specific pros for tasks like tiling or installing cabinetry. But if the project involves a complete overhaul of the room, hiring a general contractor might be worth the extra cost. As experts in building and remodeling projects, contractors can manage all the necessary permits, inspections, labor, equipment, and materials to ensure your remodel goes off without a hitch. The key is to find a reputable contractor that can correctly and efficiently meet the needs of your project. Make your remodel a success with these tips on how to find the right contractor.
    </span></strong>
  </div>
    </h2>
<br><br>
  <div class="home-page-par2">
    <h2><strong><span>
      This application was created to assist both customer and contractor by providing a resource that allows the interaction to be more smooth, easy and understanding for all parties involved. If used correctly a customer can effectively give themselves a rough estimate before ever making a phone call to a contractor. Then when you do make that call you will already have a rough estimate of what to expect as far as costs are concerned. Provided are also resources to help understand what to look for in a contractor and what to try and avoid as well.
    </span>
    </strong>
    </h2>
  </div>
</div>
`;
// // Add the Kelvin converter const kelvinToFahrenheit = kelvinTemp => const
