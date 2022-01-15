function tab(obj) {
    $("#tabs ul li").removeClass("active");
    $(obj).addClass("active");
    var id = $(obj).find("a").attr("href");
    $(".tab_item").hide();
    $(id).show();
}
$("#tabs ul li").click(function () {
    tab(this);
    return false;
});
$("#tabs-2").hide();
$(".add-dialog").hide();
function newUser() {
    $(".add-dialog").dialog();
}

var Arr = JSON.parse(localStorage.getItem("data")) || [];
// console.log(Arr);
if (Arr != null) {
    addTable(Arr);
    Table(Arr);
}
function addTable(Arr) {
    let addInner = "";
    Arr.forEach((value, index) => {
        addInner +=
            "<tr>" +
            "<td>" +
            "<input type='radio' name='user'>" +
            "</input>" +
            "<td>" +
            value.firstName +
            "</td>" +
            "<td>" +
            value.lastName +
            "</td>" +
            "<td>" +
            value.Phone +
            "</td>" +
            "<td>" +
            value.Email +
            "</td>" +
            "</tr>";
    });
    $("#main").empty();
    $("#main").append(addInner);
    localStorage.setItem("data", JSON.stringify(Arr));
}
$(".save").click(function () {
    var a = $("#firstname");
    var b = $("#lastname");
    var c = $("#phone");
    var d = $("#email");
    let Obj = {
        firstName: a.val(),
        lastName: b.val(),
        Phone: c.val(),
        Email: d.val(),
    }
    Arr.push(Obj);
    addTable(Arr);
    Table(Arr);
    $(".add-dialog").dialog("close");
    a.val("");
    b.val("");
    c.val("");
    d.val("");
});

function Table() {
    let addInner = "";
    Arr.forEach((value, index) => {
        addInner +=
            "<tr>" +
            "<td>" +
            "<input type='radio' name='user'>" +
            "</input>" +
            "<td>" +
            value.firstName +
            "</td>" +
            "<td>" +
            value.lastName +
            "</td>" +
            "<td>" +
            value.Phone +
            "</td>" +
            "<td>" +
            value.Email +
            "</td>" +
            "</tr>";
    });
    $("#myTable").empty();
    $("#myTable").append(addInner);
}

$(".edit-dialog").hide();
function tim() {
    let checkedd = $("#main input");
    let location = -1;
    for (index = 0; index < checkedd.length; index++) {
        if ($(checkedd[index]).prop("checked")) {
            location = index;
        }
    }
    return location;
}
$("#Edit").click(function () {
    let loca = tim();
    if (loca != -1) {
        $("#editfirstname").val(Arr[loca].firstName);
        $("#editlastname").val(Arr[loca].lastName);
        $("#editphone").val(Arr[loca].Phone);
        $("#editemail").val(Arr[loca].Email);
        $(".edit-dialog").dialog();
    }
});
$(".saveEdit").click(function () {
    let loca = tim();
    if (loca != -1) {
        var a = $("#editfirstname");
        var b = $("#editlastname");
        var c = $("#editphone");
        var d = $("#editemail");
        let Objedit = {
            firstName: a.val(),
            lastName: b.val(),
            Phone: c.val(),
            Email: d.val(),
        };
        Arr.splice(loca, 1, Objedit);
    };
    addTable(Arr);
    Table(Arr);
    $(".edit-dialog").dialog("close");
})

$(".removeUser").hide();
function destroyUser() {
    let loca = tim();
    if (loca != -1) {
        $(".removeUser").dialog();
        $("#ok").click(function () {
            Arr.splice(loca, 1);
            addTable(Arr);
            Table(Arr);
            $(".removeUser").dialog("close");
        })
    } $("#close").click(function () {
        $("#removeUser").dialog("close");
    })
}

$("#myTable").css("margin-top", "10px")
$("#myInput").on("keyup", function () {
    var value = $(this).val();
    $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > 0);
    });
});