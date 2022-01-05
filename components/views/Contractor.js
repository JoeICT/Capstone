import html from "html-literal";

export default () => html`
  <div class="cont-info">
    <h1>
      Input your info and availability into our database so customers can find
      you.
    </h1>
  </div>
  <div class="cont-body">
    <!-- phone number input -->
    <form action="/action_page.php">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" /><br /><br />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" /><br /><br />
    </form>
    <label for="phone">Enter your phone number: </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    />
    <form name="form1" id="form1" action="/action_page.php">
      <!--end of phone number input -->
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
      <br /><br />
      Trade:
      <select name="trade" id="trade">
        <option value="" selected="selected">Painter</option>
        <option value="" selected="selected">Drywall</option>
        <option value="" selected="selected">HVAC</option>
        <option value="" selected="selected">Electrician</option>
        <option value="" selected="selected">Plumber</option>
        <option value="" selected="selected">Concrete</option>
        <option value="" selected="selected">Roofer</option>
      </select>
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
      <dropdown>
        <input id="toggle1" type="checkbox" checked />
        <label for="toggle1" class="animate"
          >Select Dates<i class="fa fa-bars float-right"></i
        ></label>
        <ul class="animate">
          <!-- calendar  -->
          <h1 class="center"></h1>
          <div class="calendar">
            <div class="group">
              <p class="left pointer minusmonth">&laquo;</p>
              <p class="left monthname center pointer"></p>
              <p class="right pointer addmonth">&raquo;</p>
            </div>
            <ul class="group">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>
          </div>
        </ul>
      </dropdown>

      <!-- Requested Dates:
      <select name="topic" id="topic">
        <option value="" selected="selected"
          >Please select subject first</option
        >
      </select> -->
      <br /><br />

      <br /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
`;
