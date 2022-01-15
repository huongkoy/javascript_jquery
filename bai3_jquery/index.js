function search() {
  var checkedd = $("input");
  for (var i = 0; i < checkedd.length; i++) {
    console.log(i, $(checkedd[i]).prop("checked"));
  }
}
