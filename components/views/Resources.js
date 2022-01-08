import html from "html-literal";

export default () => html`
  <head>
    <div class="reshead"><h1><strong>Resources</strong></h1></div>
    <div class="flex-container">
      <div id="res1">
        WatchDog Offender Search

        <p><h6>
          <strong>
          This is where you can take a closer look into the person you are
          allowing in your home and potentially around your children.</strong>
          <br>
          <a href="https://www.familywatchdog.us/">Offender Search!</a>
          </h6>
        </p>
      </div>
      <div id="res2">Horror Stories
        <p><h6><strong>
          Learn what to watch out for and hopefully avoid by reading some of these stories from customers who had bad experiences with the contractor that they hired.</strong>
        </h6>
        </p>

      </div>
      <div id="res3">Red Flags
        <p><h6><strong>
          Here you can read about "red flags", or things to watch out for when hiring a contractor.
          </strong>
        </h6></p>
      </div>
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
