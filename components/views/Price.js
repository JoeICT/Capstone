import html from "html-literal";

export default () => html`
  <div class="calculate">
    <h1>Calculate your Square Footage</h1>

<body>
<div class="price-instructions">
  <p><strong>Most contractors bid their jobs based on square footage and linear footage. By calculating the square footage of the work that you want done you may be able to save yourself some time and possibly money by already having a rough estimate of what your job may cost before ever having to call a contractor. Besides with our busy lives it can sometimes be difficult to juggle schedules to meet with someone at our homes. Especially if you end up needing several estimates just to find the median cost. This simple sqft calculator can effectively help you to have an idea if you are getting an overpriced estimate. Remember that a low price is not always indicative of a good deal and can soemtimes be a red flag to look out for. </strong></p><br>
  <strong>
  Measuring squre footage is for the most part very simple. You just measure length and width of whatever it is that you are needing worked on. For example if you are wanting one wall painted in a living room you measure how tall the wall is. Dont forget to write it down. Then you measure how wide or long the wall is. If you are measuring a ceiling you do the same thing. Measure one direction and then the other. Where it can get tricky is measuring awkward shaped areas but anybody can do it. You would need to do this for each wall that you want to have painted.
</strong><p> <br><strong>
  After you have done this process for each wall that you want painted you will then take the each measurement and input them into the calculator one wall at a time. Then input the average cost per sqft per state to pain as provided in the dropdown menu below. After that click submit and reset when you want to check the cost of another wall. Just repeat the same process in the calculator for each wall and you will effectively have a rough estimate of labor cost to paint before ever having to call a contractor. This same process can be applied to anything that is measured in sqft. For example you could repeat this process for flooring, how much material you will need etc.</strong></p>
</div>


<div align="center">

<form name="myForm">
Length
<input type="text" name="length" size="5,5" />
ft&nbsp;&nbsp;&nbsp;&nbsp;
Width
<input type="text" name="width" size="5,5" />
ft&nbsp;&nbsp;&nbsp;&nbsp;
Cost (per square foot)
<input type="text" name="cost" size="10,10" />
<br /><br />
<input type="button" value="Calculate Costs" onclick="calculate_square_feet()" />
<input type="reset" />

</form>


<div class="costbystate">
<div> <h3> This is the average cost per square foot for painting by each state. </h3>
  <h4>Note that this is not a standard and other things can change the overall price such as lots of windows that require more time and tedious brushing and detail to work around or wall repairs and prep work as well as numerous coats. But this will give you a good idea of what your job should cost</h4>
</div>
<form name="form1" id="prices-by-state" action="/action_page.php">
      City & State:
      <select name="location" id="price-state">
        <option value="AL" selected="selected">Alabama</option>
        <option value="AK" selected="selected">Alaska</option>
        <option value="AZ" selected="selected">Arizona</option>
        <option value="AR" selected="selected">Arkansas</option>
        <option value="CA" selected="selected">California 3.00</option>
        <option value="CO" selected="selected">Colorado</option>
        <option value="CT" selected="selected">Connecticut</option>
        <option value="DE" selected="selected">Delaware</option>
        <option value="DC" selected="selected">District Of Columbia</option>
        <option value="FL" selected="selected">Florida</option>
        <option value="GA" selected="selected">Georgia</option>
        <option value="HI" selected="selected">Hawaii</option>
        <option value="ID" selected="selected">Idaho</option>
        <option value="IL" selected="selected">Illinois</option>
        <option value="IN" selected="selected">Indiana</option>
        <option value="IA" selected="selected">Iowa</option>
        <option value="KS" selected="selected">Kansas .50</option>
        <option value="KY" selected="selected">Kentucky</option>
        <option value="LA" selected="selected">Louisiana</option>
        <option value="ME" selected="selected">Maine</option>
        <option value="MD" selected="selected">Maryland</option>
        <option value="MA" selected="selected">Massachusetts</option>
        <option value="MI" selected="selected">Michigan</option>
        <option value="MN" selected="selected">Minnesota</option>
        <option value="MS" selected="selected">Mississippi</option>
        <option value="MO" selected="selected">Missouri</option>
        <option value="MT" selected="selected">Montana</option>
        <option value="NE" selected="selected">Nebraska</option>
        <option value="NV" selected="selected">Nevada</option>
        <option value="NH" selected="selected">New Hampshire</option>
        <option value="NJ" selected="selected">New Jersey</option>
        <option value="NM" selected="selected">New Mexico</option>
        <option value="NY" selected="selected">New York</option>
        <option value="NC" selected="selected">North Carolina</option>
        <option value="ND" selected="selected">North Dakota</option>
        <option value="OH" selected="selected">Ohio</option>
        <option value="OK" selected="selected">Oklahoma</option>
        <option value="OR" selected="selected">Oregon</option>
        <option value="PA" selected="selected">Pennsylvania</option>
        <option value="RI" selected="selected">Rhode Island</option>
        <option value="SC" selected="selected">South Carolina</option>
        <option value="SD" selected="selected">South Dakota</option>
        <option value="TN" selected="selected">Tennessee</option>
        <option value="TX" selected="selected">Texas</option>
        <option value="UT" selected="selected">Utah</option>
        <option value="VT" selected="selected">Vermont</option>
        <option value="VA" selected="selected">Virginia</option>
        <option value="WA" selected="selected">Washington</option>
        <option value="WV" selected="selected">West Virginia</option>
        <option value="WI" selected="selected">Wisconsin</option>
        <option value="WY" selected="selected">Wyoming</option>
      </select>
</div>

</body>
`;
//sqft calculator JS
function calculate_square_feet() {
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
}
