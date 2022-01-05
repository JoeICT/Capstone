import html from "html-literal";
// eslint-disable-next-line prettier/prettier
import logo from "../assets/image/new1.jpg";

export default () => html`
  <header>
    <!-- Top Navigation -->
    <!-- <div class="topnav">
      <a href="#home" class="active"></a> -->
    <!-- Navigation links -->

    <!-- <div id="myLinks">
      <a href="#resources">Resources</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#price.html">Price Your Job</a>
      <a href="#find.html">Find A Contractor</a>
    </div> -->

    <div class="headerBar">
      <div class="headerImage">
        <img src="${logo}" />
      </div>

      <div class="headline">
        <h1>The Honest Contractor</h1>
      </div>
    </div>
  </header>
`;
