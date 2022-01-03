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

</body>
`;
