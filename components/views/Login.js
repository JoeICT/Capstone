import html from "html-literal";

export default () => html`
  <div class="loginbody">
    <div class="logheader">
      <h1>
        Welcome to the honest contractor page. Your pre-requisite to hiring a
        contractor or seeking work.
      </h1>
      <br />
    </div>

    <div class="whatareyou"><h1>Are you a Homeowner or a Contractor?</h1></div>


      <div class="flexbox-login">
    <a href="Home">
      <div class="./button1"><button><h3>Homeowner</h3></button></div>
    <a href="Contractor">
    <div class="./button2"><button><h3>Contractor</h3></button></div>
    </a>
  </div></div>
`;
//          <a href="Contractor" data-navigo>
//         <div class="button2">
//           <button>
//             <a id="contractor" href="/Contractor" data-navigo>
//               <h1>Contractor</h1></a
//             >
//           </button>
//         </div>
//       </a>
//     </div>
//   </div>
// `;
