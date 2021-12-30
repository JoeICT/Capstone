// export default () => `
//   <nav>
//     <div class="navbar">
//       <a href="#practicehome.html" style="color:black">Home /</a>
//       <a
//         href="#practice
// resources.html"
//         style="color:black"
//         >Resources /</a
//       >
//       <a href="#practice.findcont.html" style="color:black">Price your job</a>
//       <a href="#practice.findcont.html" style="color:black">Find a Contractor</a>
//     </div>
//   </nav>
// `;
import html from "html-literal";
export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        el =>
          `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
`;
