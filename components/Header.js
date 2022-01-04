import html from "html-literal";
// eslint-disable-next-line prettier/prettier
import logo from "../assets/image/new1.jpg";

export default () => html`
  <header>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!-- Top Navigation -->
    <div class="topnav">
      <a href="#home" class="active"></a>
      <!-- Navigation links -->

      <div id="myLinks">
        <a href="#resources">Resources</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#price.html">Price Your Job</a>
        <a href="#find.html">Find A Contractor</a>

        <div class="flexbox-item flexbox-item-3"></div>
      </div>

      <!-- "Hamburger menu"-->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <!-- Top Navigation Menu -->

      <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <!-- "hamburger menu"-->
    <script language="javascript" type="text/javascript"></script>

    <!-- hamburger menu-->

    <div class="flexbox-container">
      <div class="flexbox-item flexbox-item-0">
        <img src="${logo}" />
      </div>

      <div class="headline">
        <h1>The Honest Contractor</h1>
      </div>
    </div>
  </header>
`;
