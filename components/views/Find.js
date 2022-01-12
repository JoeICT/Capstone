import html from "html-literal";

export default () => html`
  <div id="findpage">
    <div class="findcontractor"><h1>Find A Contractor In Your Area</h1></div>
    <!-- city and state find menu -->
    <form name="form1" id="form1" action="/action_page.php">
     City & State:
      <select name="location" id="location">
      <option value="NY"selected="selected">New York City	New York</option>
<option value="CA"selected="selected">Los Angeles	California</option>
<option value="IL"selected="selected">Chicago	Illinois</option>
<option value="TX"selected="selected">Houston	Texas</option>
<option value="AZ"selected="selected">Phoenix	Arizona</option>
<option value="PA"selected="selected">Philadelphia Pennsylvania</option>
<option value="TX"selected="selected">San Antonio	Texas</option>
<option value="CA"selected="selected">San Diego	California</option>
<option value="TX"selected="selected">Dallas Texas</option>
<option value="TX"selected="selected">Austin Texas</option>
<option value="CA"selected="selected">San Jose California</option>
<option value="TX"selected="selected">Fort Worth Texas</option>
<option value="FL"selected="selected">Jacksonville Florida</option>
<option value="OH"selected="selected">Columbus Ohio</option>
<option value="NC"selected="selected">Charlotte	North Carolina</option>
<option value="IN"selected="selected">Indianapolis Indiana</option>
<option value="CA"selected="selected">San Francisco	California</option>
<option value="WA"selected="selected">Seattle	Washington</option>
<option value="CO"selected="selected">Denver Colorado</option>
<option value="DC"selected="selected">Washington District of Columbia</option>
<option value="MA"selected="selected">Boston Massachusetts</option>
<option value="TX"selected="selected">El Paso	Texas</option>
<option value="TN"selected="selected">Nashville	Tennessee</option>
<option value="OK"selected="selected">Oklahoma City	Oklahoma</option>
<option value="NV"selected="selected">Las Vegas	Nevada</option>
<option value="MI"selected="selected">Detroit	Michigan</option>
<option value="OR"selected="selected">Portland Oregon</option>
<option value="TN"selected="selected">Memphis	Tennessee</option>
<option value="KY"selected="selected">Louisville Kentucky</option>
<option value="WI"selected="selected">Milwaukee	Wisconsin</option>
<option value="MD"selected="selected">Baltimore	Maryland</option>
<option value="NM"selected="selected">Albuquerque	New Mexico</option>
<option value="AZ"selected="selected">Tucson Arizona</option>
<option value="AZ"selected="selected">Mesa Arizona</option>
<option value="CA"selected="selected">Fresno California</option>
<option value="CA"selected="selected">Sacramento California</option>
<option value="GA"selected="selected">Atlanta	Georgia</option>
<option value="MO"selected="selected">Kansas City	Missouri</selected=>
<option value="CO"selected="selected">Colorado Springs	Colorado</option>
<option value="NC"selected="selected">Raleigh	North Carolina</option>
<option value="NE"selected="selected">Omaha	Nebraska</option>
<option value="FL"selected="selected">Miami	Florida</option>
<option value="CA"selected="selected">Long Beach California</option>
<option value="VA"selected="selected">Virginia Beach Virginia</option>
<option value="CA"selected="selected">Oakland	California</option>
<option value="MN"selected="selected">Minneapolis	Minnesota</option>
<option value="FL"selected="selected">Tampa	Florida</option>
<option value="OK"selected="selected">Tulsa	Oklahoma</option>
<option value="TX"selected="selected">Arlington	Texas</option>
<option value="KS"selected="selected">Wichita	Kansas</option>
<option value="CA"selected="selected">Bakersfield	California</option>
<option value="CO"selected="selected">Aurora Colorado</option>
<option value="LA"selected="selected">New Orleans	Louisiana</option>
<option value="OH"selected="selected">Cleveland	Ohio</option>
<option value="CA"selected="selected">Anaheim	California</option>
<option value="NV"selected="selected">Henderson	Nevada</option>
<option value="HI"selected="selected">Honolulu Hawaii</option>
<option value="CA"selected="selected">Riverside	California</option>
<option value="CA"selected="selected">Santa Ana	California</option>
<option value="TX"selected="selected">Corpus Christi Texas</option>
<option value="KY"selected="selected">Lexington	Kentucky</option>
<option value="PR"selected="selected">San Juan Puerto Rico</option>
<option value="CA"selected="selected">Stockton California</option>
<option value="MN"selected="selected">St. Paul Minnesota</option>
<option value="OH"selected="selected">Cincinnati Ohio</option>
<option value="NC"selected="selected">Greensboro North Carolina</option>
<option value="PA"selected="selected">Pittsburgh Pennsylvania</option>
<option value="CA"selected="selected">Irvine California</option>
<option value="MO"selected="selected">St. Louis Missouri</option>
<option value="NE"selected="selected">Lincoln	Nebraska</option>
<option value="FL"selected="selected">Orlando	Florida</option>
<option value="NC"selected="selected">Durham North Carolina</option>
<option value="TX"selected="selected">Plano Texas</option>
<option value="AK"selected="selected">Anchorage Alaska</option>
<option value="NJ"selected="selected">Newark New Jersey</option>
<option value="CA"selected="selected">Chula Vista California</option>
<option value="IN"selected="selected">Fort Wayne Indiana</option>
<option value="AZ"selected="selected">Chandler Arizona</option>
<option value="OH"selected="selected">Toledo Ohio</option>
<option value="FL"selected="selected">St. Petersburg Florida</option>
<option value="NV"selected="selected">Reno Nevada</option>
<option value="TX"selected="selected">Laredo Texas</option>
<option value="AZ"selected="selected">Scottsdale Arizona</option>
<option value="NV"selected="selected">North Las Vegas	Nevada</option>
<option value="TX"selected="selected">Lubbock	Texas</option>
<option value="WI"selected="selected">Madison	Wisconsin</option>
<option value="AZ"selected="selected">Gilbert	Arizona</option>
<option value="NJ"selected="selected">Jersey City New Jersey</option>
<option value="AZ"selected="selected">Glendale Arizona</option>
<option value="NY"selected="selected">Buffalo	New York</option>
<option value="NC"selected="selected">Winston-Salem North Carolina</option>
<option value="VA"selected="selected">Chesapeake Virginia</option>
<option value="CA"selected="selected">Fremont	California</option>
<option value="VA"selected="selected">Norfolk	Virginia</option>
<option value="TX"selected="selected">Irving	Texas</option>
<option value="TX"selected="selected">Garland	Texas</option>
<option value="NV"selected="selected">Paradise Nevada</option>
<option value="VA"selected="selected">Arlington Virginia</option>
<option value="VA"selected="selected">Richmond Virginia</option>
<option value="FL"selected="selected">Hialeah	Florida</option>
<option value="ID"selected="selected">Boise Idaho</option>
<option value="WA"selected="selected">Spokane	Washington</option>
<option value="TX"selected="selected">Frisco Texas</option>
<option value="CA"selected="selected">Moreno Valley California</option>
<option value="WA"selected="selected">Tacoma Washington</option>
<option value="CA"selected="selected">Fontana	California</option>
<option value="CA"selected="selected">Modesto	California</option>
<option value="LA"selected="selected">Baton Rouge Louisiana</option>
<option value="FL"selected="selected">Port St. Lucie Florida</option>
<option value="CA"selected="selected">San Bernardino California</option>
<option value="TX"selected="selected">McKinney Texas</option>
<option value="NC"selected="selected">Fayetteville North Carolina</option>
<option value="CA"selected="selected">Santa Clarita California</option>
<option value="IA"selected="selected">Des Moines Iowa</option>
<option value="CA"selected="selected">Oxnard	California</option>
<option value="AL"selected="selected">Birmingham Alabama</option>
<option value="NV"selected="selected">Spring Valley Nevada</option>
<option value="AL"selected="selected">Huntsville Alabama</option>
<option value="NY"selected="selected">Rochester New York</option>
<option value="FL"selected="selected">Cape Coral Florida</option>
<option value="AZ"selected="selected">Tempe Arizona</option>
<option value="MI"selected="selected">Grand Rapids Michigan</option>
<option value="NY"selected="selected">Yonkers	New York</option>
<option value="KS"selected="selected">Overland Park Kansas</option>
<option value="UT"selected="selected">Salt Lake City Utah</option>
<option value="TX"selected="selected">Amarillo Texas</option>
<option value="GA"selected="selected">Augusta	Georgia</option>
<option value="GA"selected="selected">Columbus Georgia</option>
<option value="FL"selected="selected">Tallahassee Florida</option>
<option value="AL"selected="selected">Montgomery Alabama</option>
<option value="CA"selected="selected">Huntington Beach California</option>
<option value="OH"selected="selected">Akron Ohio</option>
<option value="AR"selected="selected">Little Rock Arkansas</option>
<option value="CA"selected="selected">Glendale California</option>
<option value="TX"selected="selected">Grand Prairie Texas</option>
<option value="IL"selected="selected">Aurora Illinois</option>
<option value="NV"selected="selected">Sunrise Manor Nevada</option>
<option value="CA"selected="selected">Ontario	California</option>
<option value="SD"selected="selected">Sioux Falls South Dakota</option>
<option value="TN"selected="selected">Knoxville Tennessee</option>
<option value="WA"selected="selected">Vancouver Washington</option>
<option value="AL"selected="selected">Mobile	Alabama</option>
<option value="MA"selected="selected">Worcester Massachusetts</option>
<option value="TN"selected="selected">Chattanooga Tennessee</option>
<option value="TX"selected="selected">Brownsville Texas</option>
<option value="AZ"selected="selected">Peoria	Arizona</option>
<option value="FL"selected="selected">Fort Lauderdale	Florida</option>
<option value="LA"selected="selected">Shreveport Louisiana</option>
<option value="VA"selected="selected">Newport News Virginia</option>
<option value="RI"selected="selected">Providence Rhode Island</option>
<option value="CA"selected="selected">Elk Grove California</option>
<option value="CA"selected="selected">Rancho Cucamonga California</option>
<option value="OR"selected="selected">Salem Oregon</option>
<option value="FL"selected="selected">Pembroke Pines Florida</option>
<option value="CA"selected="selected">Santa Rosa California</option>
<option value="OR"selected="selected">Eugene	Oregon</option>
<option value="CA"selected="selected">Oceanside	California</option>
<option value="NC"selected="selected">Cary	North Carolina</option>
<option value="CO"selected="selected">Fort Collins	Colorado</option>
<option value="CA"selected="selected">Corona	California</option>
<option value="NV"selected="selected">Enterprise	Nevada</option>
<option value="CA"selected="selected">Garden Grove	California</option>
<option value="MO"selected="selected">Springfield	Missouri</option>
<option value="TN"selected="selected">Clarksville	Tennessee</option>
<option value="PR"selected="selected">Bayamon	Puerto Rico</option>
<option value="CO"selected="selected">Lakewood	Colorado</option>
<option value="VA"selected="selected">Alexandria	Virginia</option>
<option value="CA"selected="selected">Hayward	California</option>
<option value="TN"selected="selected">Murfreesboro	Tennessee</option>
<option value="TX"selected="selected">Killeen	Texas</option>
<option value="FL"selected="selected">Hollywood	Florida</option>
<option value="CA"selected="selected">Lancaster	California</option>
<option value="CA"selected="selected">Salinas	California</option>
<option value="MS"selected="selected">Jackson	Mississippi</option>
<option value="TX"selected="selected">Midland	Texas</option>
<option value="GA"selected="selected">Macon County	Georgia</option>
<option value="KS"selected="selected">Kansas City	Kansas</option>
<option value="CA"selected="selected">Palmdale	California</option>
<option value="CA"selected="selected">Sunnyvale	California</option>
<option value="MA"selected="selected">Springfield	Massachusetts</option>
<option value="CA"selected="selected">Escondido	California</option>
<option value="CA"selected="selected">Pomona	California</option>
<option value="WA"selected="selected">Bellevue	Washington</option>
<option value="AZ"selected="selected">Surprise	Arizona</option>
<option value="IL"selected="selected">Naperville	Illinois</option>
<option value="TX"selected="selected">Pasadena	Texas</option>
<option value="TX"selected="selected">Denton	Texas</option>
<option value="CA"selected="selected">Roseville	California</option>
<option value="IL"selected="selected">Joliet	Illinois</option>
<option value="CO"selected="selected">Thornton	Colorado</option>
<option value="TX"selected="selected">McAllen	Texas</option>
<option value="NJ"selected="selected">Paterson	New Jersey</option>
<option value="IL"selected="selected">Rockford	Illinois</option>
<option value="TX"selected="selected">Carrollton Texas</option>
<option value="CT"selected="selected">Bridgeport	Connecticut</option>
<option value="FL"selected="selected">Miramar	Florida</option>
<option value="TX"selected="selected">Round Rock Texas</option>
<option value="LA"selected="selected">Metairie Louisiana</option>
<option value="KS"selected="selected">Olathe Kansas</option>
<option value="TX"selected="selected">Waco Texas</option>
<option value="DE"selected="selected">Wilmington Delaware</option>
<option value="ME"selected="selected">Portland Maine</option>
<option value="MD"selected="selected">Baltimore Maryland</option>
<option value="MT"selected="selected">Billings Montana</option>
<option value="NE"selected="selected">Bellevue Nebraska</option>
<option value="NH"selected="selected">Manchester New Hampshire</option>
<option value="ND"selected="selected">Fargo North Dakota</option>
<option value="RI"selected="selected">New Shoreham Rhode Island</option>
<option value="SC"selected="selected">Charleston South Carolina</option>
<option value="SD"selected="selected">Sioux Falls South Dakota</option>
<option value="VT"selected="selected">Burlington Vermont</option>
<option value="WV"selected="selected">Charleston West Virginia</option>
<option value="WY"selected="selected">Cheyenne Wyoming</option>
</select>
      <br /><br />
      <div class="trade-find">
      Trade:
      <select name="trade" id="trade">
        <option value="Painter" selected="selected">Painter</option>
        <option value="Drywall" selected="selected">Drywall</option>
        <option value="HVAC" selected="selected">HVAC</option>
        <option value="Electrician" selected="selected">Electrician</option>
        <option value="Plumber" selected="selected">Plumber</option>
        <option value="Concrete" selected="selected">Concrete</option>
        <option value="Roofer" selected="selected">Roofer</option>
      </select>
      </div>
      <br /><br />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
        rel="stylesheet"
        type="text/css"
      />
      <link
        rel="stylesheet"
        href="http://fontawesome.io/assets/font-awesome/css/font-awesome.css"
      />

      <br /><br />

      <br /><br />
      <div class="submit-find">
      <input type="submit" value="Submit" />
</div>
</div>
    </form>


  <!-- </div> -->
`;

// this is the javascript for cascade drop down menus
// var subjectObject = {
//   "Front-end": {
//     HTML: ["Links", "Images", "Tables", "Lists"],
//     CSS: ["Borders", "Margins", "Backgrounds", "Float"],
//     JavaScript: ["Variables", "Operators", "Functions", "Conditions"]
//   },
//   "Back-end": {
//     PHP: ["Variables", "Strings", "Arrays"],
//     SQL: ["SELECT", "UPDATE", "DELETE"]
//   }
// };
// window.onload = function() {
//   var subjectSel = document.getElementById("subject");
//   var topicSel = document.getElementById("topic");
//   var chapterSel = document.getElementById("chapter");
//   for (var x in subjectObject) {
//     subjectSel.options[subjectSel.options.length] = new Option(x, x);
//   }
//   subjectSel.onchange = function() {
//     //empty Chapters- and Topics- dropdowns
//     chapterSel.length = 1;
//     topicSel.length = 1;
//     //display correct values
//     for (var y in subjectObject[this.value]) {
//       topicSel.options[topicSel.options.length] = new Option(y, y);
//     }
//   };
//   topicSel.onchange = function() {
//     //empty Chapters dropdown
//     chapterSel.length = 1;
//     //display correct values
//     var z = subjectObject[subjectSel.value][this.value];
//     for (var i = 0; i < z.length; i++) {
//       chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
//     }
//   };
// }
