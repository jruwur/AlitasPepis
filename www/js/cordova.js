document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Geolocation
    var geolocationInfo = document.getElementById('geolocation-info');
    var getLocationBtn = document.getElementById('get-location-btn');

    getLocationBtn.addEventListener('click', function () {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                geolocationInfo.innerHTML = 'Latitude: ' + latitude + '<br>Longitude: ' + longitude;
            },
            function (error) {
                geolocationInfo.innerHTML = 'Error getting location: ' + error.message;
            }
        );
    });
}