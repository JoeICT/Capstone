import * as views from "./views";

export default () => `
${views["Home"]()}, ${views["Find"]()}, ${views["Price"]()}, ${views[
  "Resource"
]()}
`;
