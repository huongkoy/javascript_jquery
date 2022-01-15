$(".button2").hide();
var tb = "Thông báo";
$("#only .button1").click(function () {
  if (
    ($(".input1").val() == "" && $(".input2").val() == "") ||
    ($(".input1").val() != "huong061020@gmail.com" && $(".input2").val() != "huong")
  ) {
    tb = "Sai thông tin đăng nhập";
    $(".input1").css("background-color", "#00FFFF");
    $(".input2").css("background-color", "#00FFFF");
  } else if (
    ($(".input1").val() == "" && $(".input2").val() != "") ||
    ($(".input1").val() != "huong061020@gmail.com")
  ) {
    tb = "Sai thông tin đăng nhập";
    $(".input1").css("background", "#00FFFF");
    $(".input2").css("background", "#unset");
  } else if (
    ($(".input2").val() == "" && $(".input1").val() != "") ||
    ($(".input2").val() != "huong")
  ) {
    tb = "Sai thông tin đăng nhập";
    $(".input1").css("background", "unset");
    $(".input2").css("background", "#00FFFF");
  } else {
    tb = "Chúc mừng, bạn đã đăng nhập thành công!";
    $(".button1").hide();
    $(".button2").show();
    $("input").hide();
    var text1 = $(".input1").val();
    var text2 = $(".input2").val();
    $(".div1").html(text1);
    $(".div2").html(text2);
  }
  $("#only .tb").html(tb);
});