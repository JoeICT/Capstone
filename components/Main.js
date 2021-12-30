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
`;
