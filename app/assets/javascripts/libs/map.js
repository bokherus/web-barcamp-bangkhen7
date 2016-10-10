var map = new GMaps({
  div: '#gmaps',
  lat: 13.846426,
  lng: 100.5692306
});

var locations = [
  {
    lat: 13.846387,
    lng: 100.569702,
    color: "#FFFFFF"
  },
  {
    lat: 13.842898,
    lng: 100.570699,
    label: "A"
  },
  {
    lat: 13.843533,
    lng: 100.569543,
    label: "B"
  },
  {
    lat: 13.851729,
    lng: 100.564527,
    label: "C"
  },
  {
    lat: 13.854054,
    lng: 100.570663,
    label: "D"
  },
  {
    lat: 13.846706,
    lng: 100.570685,
    label: "E"
  },
  {
    lat: 13.846030,
    lng: 100.567653,
    label: "F"
  },
  {
    lat: 13.849202,
    lng: 100.567631,
    label: "G"
  }
];

for(var location in locations) {
  map.addMarker(locations[location]);
}
