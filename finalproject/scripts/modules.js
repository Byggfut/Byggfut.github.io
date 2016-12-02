// Include modules into the html file
// Pathes may need altered depending on site structure
$(function () {
    $("#pageheader").load("/finalproject/modules/header.html");
    $("#pagenav").load("/finalproject/modules/nav.html");
    $("#footercontent").load("/finalproject/modules/footer.html");
    $("#beginnervideos").load("/finalproject/modules/beginnervideos.html");
    $("#intermediatevideos").load("/finalproject/modules/intermediatevideos.html");
    $("#advancedvideos").load("/finalproject/modules/advancedvideos.html");
});

