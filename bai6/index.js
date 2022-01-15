function search() {
  var inp = $("input");
  for (var i = 0; i < inp.length; i++) {
    if ($(inp[i]).val() == 0) {
      $(inp[i]).addClass("error");
    } else {
      $(inp[i]).removeClass("error");
    }
  }
}
