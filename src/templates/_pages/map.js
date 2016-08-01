(function () {
     var map = new google.maps.Map(document.getElementById('gmap_canvas'),  // map id
      {
       zoom: 15,
       center: {lat: 50.406626, lng: 30.677891},                    // <<< coordinates
       scrollwheel: false,
       mapTypeControl: false,
       panControl: false,
       disableDefaultUI: false,
       mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.RIGHT_BOTTOM
       },
       zoomControl: true,
       zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER
       },
       scaleControl: true,
       streetViewControl: false
     });

    //  var image = 'label.jpg';                                        // marker pic here
    //  var beachMarker = new google.maps.Marker({
    //        position:{ lat: 50.406626, lng: 30.677891},               // <<< coordinates
    //        map: map,
    //        icon: image
    //        });
})();
