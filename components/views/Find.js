import html from "html-literal";

export default () => html`
  <div class="flexbox-item flexbox-item-3">
    <!-- city and state find menu -->
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

// <!-- javascript for calendar -->

//   var themonth = 1; renderCal(themonth); $('.minusmonth').click(function(){
//   themonth += -1; renderCal(themonth); }); $('.addmonth').click(function(){
//   themonth += 1; renderCal(themonth); }); function renderCal(themonth){
//   $('.calendar li').remove(); $('.calendar ul').append('
//   <li>Mo</li>
//   <li>Tu</li>
//   <li>We</li>
//   <li>Th</li>
//   <li>Fr</li>
//   <li>Sa</li>
//   <li>Su</li>
//   '); var d = new Date(), currentMonth = d.getMonth()+themonth, // get this
//   month days = numDays(currentMonth,d.getYear()), // get number of days in the
//   month fDay = firstDay(currentMonth,d.getYear())-1, // find what day of the
//   week the 1st lands on months =
//   ['January','February','March','April','May','June','July','August','September','October','November','December'];
//   // month names $('.calendar p.monthname').text(months[currentMonth-1]); // add
//   month name to calendar for (var i=0;i<fDay-1;i++) { // place the first day of
//   the month in the correct position $('
//   <li>&nbsp;</li>
//   ').appendTo('.calendar ul'); } for (var i = 1;i<=days;i++) { // write out the
//   days $('
//   <li>'+i+'</li>
//   ').appendTo('.calendar ul'); } function firstDay(month,year) { return new
//   Date(year,month,1).getDay(); } function numDays(month,year) { return new
//   Date(year,month,0).getDate(); } var clicker = 0; var min = 0; var max = 0;
//   $('.calendar li').click(function(){ // toggle selected dates if(clicker==0){
//   clicker=1; $('.calendar li').removeClass('red'); $(this).addClass('red'); min
//   = $(this).text(); } else { clicker=0; $(this).addClass('red'); $('.calendar
//   li.red').each(function(){ max = $(this).text(); });
//   for(i=parseInt(min);i<parseInt(max);i++){ $('.calendar
//   li:nth-of-type('+(i+7+fDay-1)+')').addClass('red'); } } }); }

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
