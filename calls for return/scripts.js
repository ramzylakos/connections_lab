// Creates map, centered over a lil below London
let map = L.map('map').setView([10, 0], 2);

// map source
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// selects for the info panel
let panel = document.getElementById('info-panel');

// normal line and selected line
let normalStyle = { color: 'brown', weight: 1 };
let selectedStyle = { color: '#9e2f2f', weight: 2 };

// which lines are selected and labelling cities
let selectedLine = null;
let selectedMarker = null;   // the destination dot whose label is currently showing
let labelledCities = [];

// calls for request pings (one per route) and how long one trip takes, in milliseconds
let pings = [];
let tripTime = 3000;

// Moves ping along the line
function animate(time) {
    pings.forEach(p => {
        // Progress tracks where we are along the route 0 = at the city, 1 = at London
        let progress = ((time + p.delay) % tripTime) / tripTime;

        // Ask the curve for the map position at that point
        let position = p.line.trace([1 - progress])[0];
        p.dot.setLatLng(position);
        p.ring.setLatLng(position);

        // ring animation
        let pulse = (progress * 3) % 1;
        p.ring.setRadius(5 + pulse * 15);
        p.ring.setStyle({ opacity: 1 - pulse });
    });
    requestAnimationFrame(animate);
}

// Add a dot and a text label for a city.
// alwaysShow = true means label is visible all the time (the British Museum)
// alwaysShow = false means label starts hidden and is opened when its line is clicked
function addCity(name, latlng, alwaysShow) {
    if (alwaysShow) {
        if (labelledCities.includes(name)) return null; // only draw London once
        labelledCities.push(name);
    }

    let marker = L.circleMarker(latlng, { radius: 2, color: 'brown', fillColor: 'brown', fillOpacity: 1, interactive: false })
        .addTo(map)
        .bindTooltip(name, { permanent: true, direction: 'right', offset: [8, 0], className: 'city-label' });

    if (!alwaysShow) marker.closeTooltip();
    return marker;
}

// info panel
function showObject(obj) {
    panel.innerHTML = `
        <div class="panel-top">
            <div>
                <h2>${obj['object title']}</h2>
                <p>${obj['description']}</p>
            </div>
            <img src="${obj['image']}" alt="${obj['object title']}">
        </div>
        <h3>When have they been called for return?</h3>
        <p>${obj['requested for return']}</p>
         <h3>Reasons the British Museum has refused:</h3>
        <p>${obj["reasons they haven't"]}</p>
        <p class="more"><a href="${obj['museum link']}" target="_blank">Read the British Museum's page</a></p>
    `;
}

/* Load the JSON file, then draw a curved line. Huge shoutout to Ryan Catalani for providing
excellent documentation on how to create curved lines using leaflet.js 
https://ryancatalani.medium.com/creating-consistently-curved-lines-on-leaflet-b59bc03fa9dc
*/
fetch('contested-objects.json')
    .then(res => res.json())
    .then(objects => {

        objects.forEach((obj, index) => {

            // Start point (London) and end point (where the object is from)
            let start = obj.from;
            let end = obj.to;

            // Work out the middle "control point" that bends the line
            let offsetX = end[1] - start[1];
            let offsetY = end[0] - start[0];
            let distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
            let angle = Math.atan2(offsetY, offsetX);

            let bend = 3.14 / 10;
            let controlDistance = (distance / 2) / Math.cos(bend);
            let controlAngle = angle + bend;

            let control = [
                controlDistance * Math.sin(controlAngle) + start[0],
                controlDistance * Math.cos(controlAngle) + start[1]
            ];

            let path = ['M', start, 'Q', control, end];

            // The visible line (it ignores the mouse)
            let line = L.curve(path, { ...normalStyle, interactive: false }).addTo(map);

            // A wider, invisible copy on top so its easier to click
            let hitArea = L.curve(path, { color: 'brown', weight: 16, opacity: 0 }).addTo(map);

            // Dots and labels at both ends: only London is labelled up front
            addCity(obj['from name'], start, true);
            let cityMarker = addCity(obj['to name'], end, false);

            // On a click, un-highlight the old line, highlight this one, show its info and city label
            hitArea.on('click', () => {
                if (selectedLine) selectedLine.setStyle(normalStyle);
                if (selectedMarker) selectedMarker.closeTooltip();
                selectedLine = line;
                selectedMarker = cityMarker;
                line.setStyle(selectedStyle);
                cityMarker.openTooltip();
                showObject(obj);
            });

            // Thicken the line when you hover over it, unless it is the selected one
            hitArea.on('mouseover', () => { if (line !== selectedLine) line.setStyle({ color: 'brown', weight: 2 }); });
            hitArea.on('mouseout', () => { if (line !== selectedLine) line.setStyle(normalStyle); });

            // Ping things, solid dot plus an expanding ring, both starting at the city
            let dot = L.circleMarker(end, { radius: 2, color: '#8b0000', fillColor: '#8b0000', fillOpacity: 1, interactive: false }).addTo(map);
            let ring = L.circleMarker(end, { radius: 2, color: '#8b0000', weight: 2, fill: false, interactive: false }).addTo(map);

            // Stagger the start times so the three pings don't all move together
            pings.push({ line: line, dot: dot, ring: ring, delay: index * 1600 });
        });

        // Start the animation
        requestAnimationFrame(animate);
    });
