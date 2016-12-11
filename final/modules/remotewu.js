//$(document).ready(function(){
//$.getJSON( "../final/modules/z.json", function (data){
//   console.log(data);
//    $(".Date1").text(data.lesson2.Date);
//});
//});
//
$.getJSON( "../final/modules/guitar.json", function( data ) {
//    console.log(data)
//    var items = [];
//    $.each( data, function( key, val ) {
//        items.push( '<source + src= ' + key + type + "type=video/mp4" + key + "'src'" + val + "/>" );
//    });
//
//    $( "<div/>", {
//        "class": "my-new-list",
//        html: items.join( "" )
//    }).appendTo( "source" );
//});
document.getElementById("demo").innerHTML = fruits;
    $.getJSON( "../final/modules/guitar.json", function( data ) {
var fruits = [""];
function myFunction() {
    fruits.push("Kiwi");
    document.getElementById("demo").innerHTML = fruits;
    };
    });
