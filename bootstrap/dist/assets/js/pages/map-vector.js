'use strict';
(function () {
    var map = new jsVectorMap({
        selector: "#world-map-markers",
        map: "world",
        markersSelectable: true,
        markers: [{
                coords: [-14.2350, -51.9253]
            },
            {
                coords: [35.8617, 104.1954]
            },
            {
                coords: [61, 105]
            },
            {
                coords: [26.8206, 30.8025]
            }
        ],
        markerStyle: {
            initial: {
                fill: '#3f4d67',

            },
            hover: {
                fill: '#04a9f5',
            },
        },
        markerLabelStyle: {
            initial: {
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                fill: '#3f4d67',
            },
        },
    });

    var map = new jsVectorMap({
        selector: "#world-merc",
        map: "world_merc",
    });

    var map = new jsVectorMap({
        selector: "#canada",
        map: "canada",
    });

    var map = new jsVectorMap({
        selector: "#iraq",
        map: "iraq",
    });

    var map = new jsVectorMap({
        selector: "#italy",
        map: "italy",
    });

    var map = new jsVectorMap({
        selector: "#russia",
        map: "russia",
    });

    var map = new jsVectorMap({
        selector: "#spain",
        map: "spain",
    });

    var map = new jsVectorMap({
        selector: "#us-aea-en",
        map: "us_aea_en",
    });

    var map = new jsVectorMap({
        selector: "#us-lcc-en",
        map: "us_lcc_en",
    });

    var map = new jsVectorMap({
        selector: "#us-merc-en",
        map: "us_merc_en",
    });

    var map = new jsVectorMap({
        selector: "#us-mill-en",
        map: "us_mill_en",
    });

})();