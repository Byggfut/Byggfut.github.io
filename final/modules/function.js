$(document).ready(function(){
    $.getJSON( "/final/modules/blog.json", function( data ) {
            console.log(data);
            $('.date').text(data.blog1.date);
            $('.topic').text(data.blog1.topic);
            $('.details').text(data.blog1.details);
            $('.summary').text(data.blog1.summary);
            $('.article').text(data.blog1.article);
            $('.date1').text(data.blog2.date);
            $('.topic1').text(data.blog2.topic);
            $('.details1').text(data.blog2.details);
            $('.summary1').text(data.blog2.summary)
            $('.article1').text(data.blog2.article);
        });
    });
