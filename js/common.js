var bindMenuBtn = function() {
  $(".menu-icon").on("click", function(e) {
    if ($("#nav-collapse").css("display") != "none") {
      $("#nav-collapse").hide();
    } else {
      $("#nav-collapse").show();
    }
  });
}

var bindMenuHide = function() {
  $(".nav-collapse.a").on("click", function(e) {
    $("#nav-collapse").hide();
  });
}

$(document).ready(function() {
  $("#nav-collapse").hide();
  bindMenuBtn();
  bindMenuHide();
});
