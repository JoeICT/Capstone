import html from "html-literal";

export default () => html`
  <div class="flexbox-item flexbox-item-3">
    <h1>Calculate your Square Footage</h1>
    <div class="length_wrapper">
      <h3>Length</h3>

      <input type="text" id="length_feet" name="length_feet" />
      <label for="length_feet">feet</label>
    </div>

    <div class="width_wrapper">
      <h3>Width</h3>

      <input type="text" id="width_feet" name="width_feet" />
      <label for="width_feet">feet</label>
    </div>
    <div class="total_wrapper">
      <h3>Total</h3>
      <input type="text" id="total" name="total" />
      <label for="total">sq ft</label>
    </div>

    <button type="button" id="calculate" name="button">Calculate</button>
  </div>
`;
