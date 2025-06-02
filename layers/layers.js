var wms_layers = [];

var lyr_LULC_OPT_ZAMBIA_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LULC_OPT_ZAMBIA<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_0.png" /> 10 Tree cover<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_1.png" /> 20 Shrubland<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_2.png" /> 30 Grassland<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_3.png" /> 40 Cropland<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_4.png" /> 50 Build-up<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_5.png" /> 60 Bare / Sparse vegetation<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_6.png" /> 70 Snow and ice<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_7.png" /> 80 Premanent water bodies<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_8.png" /> 90 Hrebaceous wetland<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_9.png" /> 95 Mangroves<br />\
    <img src="styles/legend/LULC_OPT_ZAMBIA_0_10.png" /> 100 Moss and linchen<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LULC_OPT_ZAMBIA_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3468473.686300, -1431314.897100, 3581388.771400, -1317679.110800]
        })
    });

lyr_LULC_OPT_ZAMBIA_0.setVisible(true);
var layersList = [lyr_LULC_OPT_ZAMBIA_0];
