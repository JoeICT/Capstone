import html from "html-literal";

export default () => html`
  <div class="flexbox-item flexbox-item-3">
    <h1>Calculate your Square Footage</h1>
  <!-- cost per sqft calculator 2 -->
  <script language="javascript" type="text/javascript">
  function calculate_square_feet()
	{
	var length=window.document.myForm.length.value;
	var width=window.document.myForm.width.value;
        var cost=window.document.myForm.cost.value;
	var area=length*width + 0.25;
	var totalCost=cost*area;
        alert("The specification is " + length*width + " square feet." + "\n The total cost is $" + totalCost);
	}
//   END HIDING -->
</script>
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
  <h3> This is the average cost per square foot for painting by each state. </h3>
  <h6>Note that this is not a standard and other things can change the overall price such as lots of windows that require more time and tedious brushing and detail to work around or wall repairs and prep work. But this will give you a good idea of what your job should cost</h6>
  Alabama, Alaska, Arizona, Arkansas, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Main, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming
</div>

</body>
`;
