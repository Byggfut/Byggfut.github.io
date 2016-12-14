$.getJSON( "/final/modules/guitar1.json", function( data ) {
    console.log(data);
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<video class='lessonvideo' src='" + val + "' controls> </video>" );
    });


    $( "<div/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "div.videoselector" );
});
//document.getElementById("demo").innerHTML = fruits;
//    $.getJSON( "../final/modules/guitar.json", function( data ) {
//var fruits = [""];
//function myFunction() {
//    fruits.push("Kiwi");
//    document.getElementById("demo").innerHTML = fruits;
//    };
//    });
