function drawMap (lat, lng, zoomLevel, pointsArr) {
  var mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: zoomLevel,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  pointsArr.forEach((item) => {
    insertPointsOnMap (map, item.lat, item.lng);
  });

  return map;
}