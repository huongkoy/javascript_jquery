function search() {
  // children   Lấy thành phần con trực tiếp của thành phần cha #country
  var index = $("#country").children().text();
  console.log(index);
  $(".only").text(index);
}
