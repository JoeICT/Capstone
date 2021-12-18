//js functions (hamburger)
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// sqft calculator
$(document).ready(function() {
  $("#calculate").on("click", function() {
    var v1 = $("#length_feet").val();
    var v2 = $("#width_feet").val();

    var totalVal = parseInt(v1) * parseInt(v2);

    var areaText = " total sq ft";
    //calculate value for total
    $("#total").val(totalVal);
    // set total
  });
});
