import html from "html-literal";

export default () => html`

</div>

<div class="width_wrapper">
  <h3>Width</h3>

  <input type="text" id="width_feet" name="width_feet" >
  <label for="width_feet">feet</label>


</div>
<div class="total_wrapper">
  <h3>Total</h3>
  <input type="text" id="total" name="total" >
  <label for="total">sq ft</label>
</div>

<button type="button" id="calculate" name="button">Calculate</button>


</div>

`;
