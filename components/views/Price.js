import html from "html-literal";

export default () => html`
  <div class="calculate">
    <h1>Calculate your Square Footage</h1>
 <!-- cost per sqft calculator 2 -->
  <!-- <script language="javascript" type="text/javascript"> -->
  <!-- function calculate_square_feet()
	{
	var length=window.document.myForm.length.value;
	var width=window.document.myForm.width.value;
        var cost=window.document.myForm.cost.value;
	var area=length*width;
	var totalCost=cost*area;
        alert("The specification is " + length*width + " square feet." + "\n The total cost is $" + totalCost);
	}
//   END HIDING -->
<!--</script> -->
</head>

<body>



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

Enter the length (in feet), width (in feet), and cost per square feet for the project.

</div>

<div class="costbystate">
<div> <h3> This is the average cost per square foot for painting by each state. </h3>
  <h4>Note that this is not a standard and other things can change the overall price such as lots of windows that require more time and tedious brushing and detail to work around or wall repairs and prep work. But this will give you a good idea of what your job should cost</h4>
</div>
<form name="form1" id="form1" action="/action_page.php">
      City & State:
      <select name="location" id="location">
        <option value="AL" selected="selected">Alabama</option>
        <option value="AK" selected="selected">Alaska</option>
        <option value="AZ" selected="selected">Arizona</option>
        <option value="AR" selected="selected">Arkansas</option>
        <option value="CA" selected="selected">California</option>
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
        <option value="KS" selected="selected">Kansas</option>
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
function calculate_square_feet() {
  var length = window.document.myForm.length.value;
  var width = window.document.myForm.width.value;
  var cost = window.document.myForm.cost.value;
  var area = length * width + 0.25;
  var totalCost = cost * area;
  alert(
    "The specification is " +
      length * width +
      " square feet." +
      "\n The total cost is $" +
      totalCost
  );
}
