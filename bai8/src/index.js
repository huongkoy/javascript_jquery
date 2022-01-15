var arrPro = [
  {
    img: "https://camnang24h.net/wp-content/uploads/2018/12/hinh-nen-hoat-hinh-ong-gia-noel-vui-nhon-trong-ngay-le-giang-sinh.jpg",
    name: "Product 1",
    price: 70,
  },
  {
    img: "http://www.elleman.vn/wp-content/uploads/2015/12/15/qu%C3%A0-t%E1%BA%B7ng-gi%C3%A1ng-sinh-cho-n%C3%A0ng-heading-image-elleman.jpg",
    name: "Product 2",
    price: 60,
  },
  {
    img: "https://img.lovepik.com/original_origin_pic/18/11/09/55e18565f0eaf6491d642cebc7957dba.png_wh860.png",
    name: "Product 3",
    price: 90,
  },
  {
    img: "https://baoquangbinh.vn/dataimages/202012/original/images687117_Giang_Sinh_Noel_Ngap_02.jpg",
    name: "Product 4",
    price: 80,
  },
];

var addInner = [];
arrPro.forEach((value, index) => {
  addInner +=
    "<div class='col-lg-3 col-md-6 mb-4'>" +
    "<div class='card'>" +
    "<img class='card-img-top' src=" +
    value.img +
    ">" +
    "<div class='card-body'>" +
    "<h4 class='card-title'>" +
    value.name +
    "</h4>" +
    "<p class='card-text'> Price: $" +
    value.price +
    "<p>" +
    "</div>" +
    "<input type='submit' data-id='" +
    index +
    "' class='btn btn-success' value='Add to Cart' />" +
    "</div>" +
    "</div>";
});

$(".inner").append(addInner);
$(".card-img-top").css("height", "200px");

var arrCart = [];
$("input[type='submit']").click(function () {
  let a = $(this).attr("data-id");
  // ép từ kiểu json string sang một kiểu dữ liệu của javascript(object,array...)
  arrCart = JSON.parse(localStorage.getItem("data")) || [];
  arrCart.push(arrPro[a]);
  // json.stringify biến thành chuỗi string & lưu dữ liệu lên localStorage
  localStorage.setItem("data", JSON.stringify(arrCart));
  // JSON.stringify()  biến thành thành chuỗi(string).
  if (arrCart.length >= 1) {
    let only = $(".item");
    only.css({ "display": "block", "position": "absolute", "top": "-3px", "right": "1px", "font-size": "12px" });
    let c = arrCart.length;
    only[0].innerHTML = c;
  }
});































