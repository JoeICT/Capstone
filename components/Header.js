import html from "html-literal";
// eslint-disable-next-line prettier/prettier
import logo from "../assets/image/new1.jpg";

export default () => html`
  <header>
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
