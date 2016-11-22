// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
          $.ajax({
              url : "http://api.wunderground.com/api/d82a3553533fd3b3/geolookup/conditions/q/" + lat + ',' + long + ".json",
              dataType : "jsonp",
              success : function(parsed_json) {
                  var location = parsed_json['location']['city'];
                  var temp_f = parsed_json['current_observation']['temp_f'];
                  var city = parsed_json['location']['city'];
                  var state = parsed_json['location']['state'];
                  var summary = parsed_json['current_observation']['weather'];
                  var zip = parsed_json['location']['zip'];
                  var wind = parsed_json['current_observation']['wind_mph'];

            $("#cityDisplay").html(city + ", " + state + summary );
            $("title").html(city + ", " + state );
            $("#currentTemp").html(Math.round(temp_f) + "&#176");
            $("#summary").html(summary);
            $("#add1").html("Zip code:" + " " + zip);
            $('#add2').html("Elevation is" + " " + elevation);

              }
          });

      $("#cover").fadeOut(250);
  }
        });

  // A function for changincityg a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
