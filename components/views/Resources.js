import html from "html-literal";

export default () => html`
  <head>
    <div class="reshead"><h1><strong>Resources</strong></h1></div>
    <div class="flex-container">
      <div id="res1">
      <br><br><br><br>
        <strong><span>Family WatchDog Offender Search</span></strong>
        <br><br><br>
        <p><h3>
          <strong><span>
          This is where you can take a closer look into the person you are
          allowing in your home and potentially around your children.</span></strong>
          <br><br>
          <a href="https://www.familywatchdog.us/"><span>Offender Search!</span></a>
          </h3>
        </p>
        <div class="resimg2"></div>
      </div>
      <div class="res2"><h4><strong>Horror Stories</strong></h4><p>
          Learn what to watch out for and hopefully avoid by reading some of these stories from customers who had bad experiences with the contractor that they hired.
        </p></div>
        <div class="resimg"></div>

      </div>
      <div id="res3"><h4><strong>Red Flags</strong></h4>
        <p>
          Here you can read about "red flags", or things to watch out for when hiring a contractor.

        </p>
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
