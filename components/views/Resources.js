import html from "html-literal";

export default () => html`
  <head>
    <div class="reshead"><h1>Resources</h1></div>
    <div class="flex-container">
      <div id="res1">1</div>
      <div id="res2">2</div>
      <div id="res3">3</div>
    </div>
  </head>
  <div class="contact">
    <h4>Questions? Comments? Concerns? feel free to email</h4>
  </div>
  <div class="FORM">
    <form action="https://formspree.io/f/xrgjbanz" method="POST">
      <label>
        Your email:
        <input type="email" name="_replyto" />
      </label>
      <br />
      <div>
        <label>
          Your Message:
          <textarea name="message" rows="6px"></textarea>
        </label>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
`;
