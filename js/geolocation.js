// Replace YOUR_API_KEY with your actual API key
const apiKey = '3ac469ab60msh003bf23be77e1fcp1fcdd6jsne87491c7514a';

// The latitude and longitude coordinates
const latlng = { lat: 40.714224, lng: -73.96145 };

// Create a function to initialize the map
function initMap() {
  // Create a new map centered at the specified coordinates
  const map = new google.maps.Map(document.getElementById('map'), {
    center: latlng,
    zoom: 15 // You can adjust the zoom level as needed
  });

  // Create a marker for the specified coordinates
  const marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title: 'Marker Title' // You can set a title for the marker
  });
}

// Load the Google Maps API with your API key
function loadMapScript() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  document.body.appendChild(script);
}

// Call the loadMapScript function to load the Google Maps API
loadMapScript();
