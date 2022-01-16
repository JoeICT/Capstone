import html from "html-literal";

export default () => html`
  <div class="calculate">
    <h1><span>Calculate your Square Footage</span></h1>
    <br><br>

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
<input id="calculatorButton" type="button" value="Calculate Costs"  />
<input type="reset" />

</form>


<div class="costbystate">
<div> <h3> This is the average cost per square foot for painting by each state. </h3>
  <h4>Note that this is not a standard and other things can change the overall price such as lots of windows that require more time and tedious brushing and detail to work around or wall repairs and prep work as well as numerous coats. But this will give you a good idea of what your job should cost. Costs also vary from location sometimes drastically. For example the labor cost to paint a home in California ranges from $2 to $4 per sqft. Where as in Kansas the average cost ranges from around .50 to $1.30 per sqft. Often times contractors will charge per linear ft as well for things such as trim boards. Calculating the cost per linear foot is very straight forward. You simply add the linear feet to the cost per linear foot.</h4>
</div>
<form name="form1" id="prices-by-state" action="/action_page.php">
      City & State:
      <select name="location" id="price-state">
        <option value="AL" selected="selected">Alabama $1.20 - $2.63</option>
        <option value="AK" selected="selected">Alaska $0.85 - $1.55</option>
        <option value="AZ" selected="selected">Arizona $0.98 - $1.86</option>
        <option value="AR" selected="selected">Arkansas $0.96 - $3.16</option>
        <option value="CA" selected="selected">California $1.30 - $2.28</option>
        <option value="CO" selected="selected">Colorado $1.89 - $2.94</option>
        <option value="CT" selected="selected">Connecticut $2.27 - $4.08</option>
        <option value="DE" selected="selected">Delaware $2.38 - $3.63</option>
        <option value="DC" selected="selected">District Of Columbia $0.75 - $1.95</option>
        <option value="FL" selected="selected">Florida $1.40 to $2.80</option>
        <option value="GA" selected="selected">Georgia $1.42 - $2.65</option>
        <option value="HI" selected="selected">Hawaii $1.45 - $2.25</option>
        <option value="ID" selected="selected">Idaho $2.02 - $5.25</option>
        <option value="IL" selected="selected">Illinois $1.66 - $3.73</option>
        <option value="IN" selected="selected">Indiana $2.29 - $3.33</option>
        <option value="IA" selected="selected">Iowa  $0.99 - $3.00</option>
        <option value="KS" selected="selected">Kansas $0.80 - $2.30</option>
        <option value="KY" selected="selected">Kentucky $1.31 - $2.61</option>
        <option value="LA" selected="selected">Louisiana $1.48 - $2.83</option>
        <option value="ME" selected="selected">Maine $0.75 - $1.50</option>
        <option value="MD" selected="selected">Maryland $1.25 - $1.90</option>
        <option value="MA" selected="selected">Massachusetts $2.00 - $5.05</option>
        <option value="MI" selected="selected">Michigan  $2.10 - $3.17</option>
        <option value="MN" selected="selected">Minnesota $1.10 - $1.89</option>
        <option value="MS" selected="selected">Mississippi $1.55 - $3.05</option>
        <option value="MO" selected="selected">Missouri  $1.86 - $5.22</option>
        <option value="MT" selected="selected">Montana $1.25 - $3.25</option>
        <option value="NE" selected="selected">Nebraska $1.33 - $1.78</option>
        <option value="NV" selected="selected">Nevada $1.08 - $1.85</option>
        <option value="NH" selected="selected">New Hampshire $1.65 - $2.55</option>
        <option value="NJ" selected="selected">New Jersey $1.76 - $3.04</option>
        <option value="NM" selected="selected">New Mexico $1.00 - $2.25</option>
        <option value="NY" selected="selected">New York $2.27 - $4.08</option>
        <option value="NC" selected="selected">North Carolina $1.48 - $2.32</option>
        <option value="ND" selected="selected">North Dakota $1.25 - $1.75</option>
        <option value="OH" selected="selected">Ohio $1.14 - $2.36</option>
        <option value="OK" selected="selected">Oklahoma  $2.52 - $4.52</option>
        <option value="OR" selected="selected">Oregon $1.41 - $2.01</option>
        <option value="PA" selected="selected">Pennsylvania $1.02 - $2.03</option>
        <option value="RI" selected="selected">Rhode Island $2.47 - $4.93</option>
        <option value="SC" selected="selected">South Carolina $1.55 - $3.86</option>
        <option value="SD" selected="selected">South Dakota $1.88 - $3.76</option>
        <option value="TN" selected="selected">Tennessee $2.03 - $4.03</option>
        <option value="TX" selected="selected">Texas $1.62 - $3.50</option>
        <option value="UT" selected="selected">Utah $2.00 to $4.00</option>
        <option value="VT" selected="selected">Vermont $4.10 - $5.75</option>
        <option value="VA" selected="selected">Virginia $1.43 - $2.78</option>
        <option value="WA" selected="selected">Washington $1.56 - $2.86</option>
        <option value="WV" selected="selected">West Virginia $1.50 - $3.50</option>
        <option value="WI" selected="selected">Wisconsin $2.12 - $3.08</option>
        <option value="WY" selected="selected">Wyoming $1.98 - $3.95</option>
      </select>
</div>

</body>
`;
