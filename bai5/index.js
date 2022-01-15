function search() {
  var newImage = $("#menu img");
  var image = [];
  for (var i = 0; i < newImage.length; i++) {
    var image1 = $(newImage[i]).attr("src");
    image.push(image1);
    console.log(image);
    $("#only").text(image);
  }
}
