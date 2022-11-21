function initMap() {
  var location = {lat: 41.342891300483366, lng: 69.26480680194942 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: location
  });
}
