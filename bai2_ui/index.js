
$("#dialog").hide();
$("#check").click(function () {
  if ($("#nhap").val() !== "huong") {
    $("#dialog").dialog();
  } else {
    $("#dialog").hide();
  }
});


$(".login-window").click(function () {
  //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
  var loginBox = $(this).attr("href"); //
  //cho hiện hộp đăng nhập trong 500ms
  $(loginBox).fadeIn(500);
  // thêm phần tử id="over" vào sau body
  $("body").append('<div id="over">');
  $("#over").fadeIn(500);
  // return false;
});

// khi click đóng hộp thoại
$(document).on("click", ".close, #over", function () {
  $("#over, .login").fadeOut(500, function () {
    // $("#over").remove();
  });
  // return false;
});


var $dialog = $('<div id="myDialog"></div>')
  .html(
    '<form> <span>Sender Email</span> <input id="senderemailAddresss" type="text" class="w3-input w3-border" placeholder="abc@example.com" size="25"><br> <span>Receiver Email</span> <input id="receiveremailAddresss" class="w3-input w3-border" type="text" placeholder="bcd@example.com" size="25"><br><span>Title</span><input id="title" class="w3-input w3-border" type="text"> <br><span>Messgae</span> <textarea id="message" class="w3-input w3-border"  style="height:60px type="text" rows="4" cols="20">'
  )
  .dialog({
    autoOpen: false,
    modal: true,
    height: 700,
    width: 500,
    draggable: false,
    title: "Send Mail",
    buttons: {
      "Send":
        function () { $(this).dialog("close"); },
      "Cancel":
        function () { $(this).dialog("close"); }

    },
    open: function (event, ui) {
      $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
      $(this).find("#title");
      $(this)
        .find(text)
        .val(
          "Message is :" +
          test1 +
          " \n " +
          "\n new line :" +
          test2 +
          "\n again new line " +
          test3
        );

      $(this).css("overflow", "auto");
    },
  });
$(".w3-border").css("margin-top", "15px");
$("#title").val('');
$dialog.dialog('open');


