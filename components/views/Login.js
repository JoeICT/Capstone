import html from "html-literal";

export default st => html`
<div class = "loginbody">
  <div class="logheader"><h1>
    Welcome to the honest contractor page. Your pre-requisite to hiring a
    contractor or seeking work.<br>
    please click below to be redirected to the
    homeowner side of the webpage or the contractor section.
    </h1>
  </div>
  <div class="flexbox-login">
    <a href="Home.js">
      <div class="button1"><button><h1>Homeowner</h1></button></div>

    <a href="Home.js">
    <div class="button2"><button><h1>Contractor</h1></button></div>
    </a>
  </div>
  </div>
`;
