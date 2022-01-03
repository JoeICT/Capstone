/* eslint-disable prettier/prettier */
// import * as views from "./views";

// export default () => `
// ${views["Home"]()}, ${views["Find"]()}, ${views["Price"]()}, ${views[
//   "Resource"
// ]()}
// `;
import html from "html-literal";
import * as views from "./views";

export default st => html`
  ${views[st.view](st)}

  <nav>
  <div class="navbar">
  <a href="#Home." style="color:black">Home  /</a>
  <a href="#Resources." style="color:black">Resources  /</a>
  <a href="#Price." style="color:black">Price your job  /</a>
  <a href="#Find." style="color:black">Find a Contractor</a>
</div>

</nav>
`;
