// On initialise la latitude et la longitude de Paris (centre de la carte)
var lat = 48.852969,
    lon = 2.349903; // Paris
var map = null;

d3.json("cinemas-a-paris.json").then(
    function (data) {
        var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

        var grayscale = L.tileLayer(mbUrl, {
            id: 'mapbox.light',
            attribution: mbAttr
        });

        var streets = L.tileLayer(mbUrl, {
            id: 'mapbox.streets',
            attribution: mbAttr
        });

        var baseLayers = {
            "Grayscale": grayscale,
            "Streets": streets
        };
        var _art_essai = L.markerClusterGroup(),
            art_essai = L.layerGroup();

        var overlays = {
            "Art et essai": art_essai,
            "Classique": _art_essai
        };

        map = L.map('map', {
            center: [lat, lon],
            zoom: 10,
            layers: [grayscale]
        });

        art_essai.addTo(map);
        L.control.layers(baseLayers, overlays).addTo(map);
        var test = [];
        for (var i in data) {
            var fields = data[i].fields;
            var coordonnees = fields.coordonnees;
            if (typeof coordonnees !== 'undefined') {
                lat = coordonnees[0], lon = coordonnees[1];
                var marker = L.marker([lat, lon]).addTo(_art_essai);
                var marker = art_essai.addLayer(L.marker([lat, lon]));
                marker.bindPopup(fields.nom_etablissement);
                test.push(fields.nom_etablissement);
            }
        }
        console.log(test);
        let markers = document.querySelectorAll(".leaflet-marker-icon");
        for (i = 0; i < markers.length; ++i) {
            // then add a click listener to each one
            markers[i].addEventListener("click", e => {
                console.log(e,i,test[i]);
                ajout();
            });
        }
    }
);

function markerOnClick(e) {
    var attributes = e.layer.properties;
    console.log(attributes.name, attributes.desctiption, attributes.othervars);
    // do some stuff…
}
