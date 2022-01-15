$(document).ready(function () {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      $("#only").append("<div class='addclass'></div>");
    }
  }
  var a = 0;
  $(".addclass").click(function () {
    if ($(this).html() == "") {
      a++;
      if (a % 2 == 0) {
        $(this).css("color", "#000");
        $(this).text("O");
      } else {
        $(this).css("color", "red");
        $(this).text("X");
      }
    } else alert("Nhập không hợp lệ");
  });

  $("#hide").click(function () {
    $("#only").hide();
  });
  $("#show").click(function () {
    $("#only").show();
  });
  $("#toggle").click(function () {
    $("#only").slideToggle();
  });
});
