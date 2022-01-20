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
      <div class="res2"><span><h4><strong>Red Flags</strong></h4><p>
          Learn what to watch out for and hopefully avoid by reading some of these stories from customers who had bad experiences with the contractor that they hired.
        </p></span></div>
        <div class="resimg"></div>

      <div id="res3"><h2><strong><span>What to look for in a contractor</span></strong></h2>
        <p>
          One of the first things to ask for is if they are licensed and if they have general liability and workers comp insurance. Its also a good idea to ask for photos of previous work they have done. If the job is your looking to have them do is no small task you may want to ask if they can provide any references. References can put your mind a little more at ease as you will have spoken to some of there previous customers and you will have a good idea of the type of person they are and the type of work they produce.
          <br><br>
          You may also have access to reviews of the specific contractor or company. Be aware that while all perfect reviews may be a great thing, it could also indicate that the ones leaving the review are not actual customers. Another thing to keep in mind is the time frame that the contractor says they can complete the job. If you get several estimates and one of them says that they will get the job done in a substantially shorter time than all the others that could be a red flag and indicate that they either dont know the actual time that the job will take or that they are just hoping to get the job knowing that it will take longer than they say it will.
          <br><br>
          Communication is another very important trait and this is where you can use some common sense to get a feel for how knowledgeable the contractor is and how there communication skills are. The last thing that you want is to be deep into a job with this contractor and find out the hard way that they dont show up and dont respond to your calls. Plan to gather at least three estimates from various contractors before you make a decision. More quotes (say five or six) will give you a clearer picture of how these companies stack up against each other. Not only will you get more perspective on appropriate costs, but also you'll get an idea of the caliber of work that each contractor will provide. For example, one contractor might offer a bargain rate and marginal work; another's high bid could indicate quality.

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
</div>
`;
