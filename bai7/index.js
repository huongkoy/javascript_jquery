var tr = $("#table tr");
let tr1 = $(tr);
tr1.hover(
  function () {
    $(this).css("background-color", "yellow");
  },
  function () {
    $(this).css("background-color", "#fff");
  }
);

$("#img #button1").click(function () {
  var newImg = "./images/qua-noel-cho-moi-lua-tuoi.jpg";
  $("#img1").css("background-image", "url(" + newImg + ")");
  $("#img2").css(
    "background-image",
    "url(" + "./images/3643_loi-chuc-giang-sinh-cho-con-trai.jpg" + " )"
  );
  $(".line").css({ "background-color": "#000", height: "50px" });
  alert("Thông báo 1");
});
