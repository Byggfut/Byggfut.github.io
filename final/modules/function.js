$(function(){
    console.log("run");
    $.getJSON( "/final/modules/blogjson.json", function( data ) {
        console.log(data);
        var items = [];
        console.log("anything");
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val + "</li>" );
        });

        $( "<ul/>", {
            "class": "mynewlist",
            html: items.join( "" )
        }).appendTo( "div.links" );
    });
});
