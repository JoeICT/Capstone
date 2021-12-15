import html from "html-literal";

export default () => html`
  <header>
    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <!-- Top Navigation Menu -->
    <div class="topnav">
      <a href="#home" class="active"></a>
      <!-- Navigation links (hidden by default) -->
      <div id="myLinks">
        <a href="#resources">Resources</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#price.html">Price Your Job</a>
        <a href="#findcont.html">Find A Contractor</a>
      </div>
      <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>

    <div class="flexbox-container">
      <div class="flexbox-item flexbox-item-0">
        <img src="new1.jpg" alt="logo" />
      </div>

      <div class="headline">
        <h1>The Honest Contractor</h1>
      </div>
    </div>
  </header>
`;
