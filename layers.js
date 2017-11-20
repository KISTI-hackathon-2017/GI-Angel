var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_pm10buf_0 = new ol.format.GeoJSON();
var features_pm10buf_0 = format_pm10buf_0.readFeatures(json_pm10buf_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pm10buf_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pm10buf_0.addFeatures(features_pm10buf_0);var lyr_pm10buf_0 = new ol.layer.Vector({
                source:jsonSource_pm10buf_0, 
                style: style_pm10buf_0,
                title: '<img src="styles/legend/pm10buf_0.png" /> pm10buf'
            });var format_KI_1 = new ol.format.GeoJSON();
var features_KI_1 = format_KI_1.readFeatures(json_KI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KI_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KI_1.addFeatures(features_KI_1);var lyr_KI_1 = new ol.layer.Vector({
                source:jsonSource_KI_1, 
                style: style_KI_1,
                title: '<img src="styles/legend/KI_1.png" /> KI'
            });var format_pm10_2 = new ol.format.GeoJSON();
var features_pm10_2 = format_pm10_2.readFeatures(json_pm10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pm10_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pm10_2.addFeatures(features_pm10_2);var lyr_pm10_2 = new ol.layer.Vector({
                source:jsonSource_pm10_2, 
                style: style_pm10_2,
    title: 'pm10<br />\
    <img src="styles/legend/pm10_2_0.png" />  -9999 - 60 <br />\
    <img src="styles/legend/pm10_2_1.png" />  60 - 120 <br />\
    <img src="styles/legend/pm10_2_2.png" />  120 - 9999 <br />'
        });var format_home10_3 = new ol.format.GeoJSON();
var features_home10_3 = format_home10_3.readFeatures(json_home10_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_home10_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_home10_3.addFeatures(features_home10_3);var lyr_home10_3 = new ol.layer.Vector({
                source:jsonSource_home10_3, 
                style: style_home10_3,
                title: '<img src="styles/legend/home10_3.png" /> home10'
            });var format_home25_10_4 = new ol.format.GeoJSON();
var features_home25_10_4 = format_home25_10_4.readFeatures(json_home25_10_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_home25_10_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_home25_10_4.addFeatures(features_home25_10_4);var lyr_home25_10_4 = new ol.layer.Vector({
                source:jsonSource_home25_10_4, 
                style: style_home25_10_4,
                title: '<img src="styles/legend/home25_10_4.png" /> home25_10'
            });

lyr_pm10buf_0.setVisible(true);lyr_KI_1.setVisible(true);lyr_pm10_2.setVisible(true);lyr_home10_3.setVisible(true);lyr_home25_10_4.setVisible(true);
var layersList = [baseLayer,lyr_pm10buf_0,lyr_KI_1,lyr_pm10_2,lyr_home10_3,lyr_home25_10_4];
lyr_pm10buf_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'node_id': 'node_id', 'TIMESTAMP': 'TIMESTAMP', 'ts_unixtim': 'ts_unixtim', 'ts_date': 'ts_date', 'ts_time': 'ts_time', 'ts_hour': 'ts_hour', 'lat': 'lat', 'lng': 'lng', 'pm2_5_valu': 'pm2_5_valu', 'pm10_value': 'pm10_value', 'mcp_value': 'mcp_value', 'temp_value': 'temp_value', 'spd': 'spd', 'cv': 'cv', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_KI_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'home': 'home', 'home2_5': 'home2_5', });
lyr_pm10_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'node_id': 'node_id', 'TIMESTAMP': 'TIMESTAMP', 'ts_unixtim': 'ts_unixtim', 'ts_date': 'ts_date', 'ts_time': 'ts_time', 'ts_hour': 'ts_hour', 'lat': 'lat', 'lng': 'lng', 'pm2_5_valu': 'pm2_5_valu', 'pm10_value': 'pm10_value', 'mcp_value': 'mcp_value', 'temp_value': 'temp_value', 'spd': 'spd', 'cv': 'cv', });
lyr_home10_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'home': 'home', 'home2_5': 'home2_5', });
lyr_home25_10_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'home': 'home', 'home2_5': 'home2_5', 'x': 'x', });
lyr_pm10buf_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'node_id': 'TextEdit', 'TIMESTAMP': 'TextEdit', 'ts_unixtim': 'TextEdit', 'ts_date': 'TextEdit', 'ts_time': 'TextEdit', 'ts_hour': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'pm2_5_valu': 'TextEdit', 'pm10_value': 'TextEdit', 'mcp_value': 'TextEdit', 'temp_value': 'TextEdit', 'spd': 'TextEdit', 'cv': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_KI_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'home': 'TextEdit', 'home2_5': 'TextEdit', });
lyr_pm10_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'node_id': 'TextEdit', 'TIMESTAMP': 'TextEdit', 'ts_unixtim': 'TextEdit', 'ts_date': 'TextEdit', 'ts_time': 'TextEdit', 'ts_hour': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'pm2_5_valu': 'TextEdit', 'pm10_value': 'TextEdit', 'mcp_value': 'TextEdit', 'temp_value': 'TextEdit', 'spd': 'TextEdit', 'cv': 'TextEdit', });
lyr_home10_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'draworder': 'TextEdit', 'icon': 'TextEdit', 'home': 'TextEdit', 'home2_5': 'TextEdit', });
lyr_home25_10_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'draworder': 'TextEdit', 'icon': 'TextEdit', 'home': 'TextEdit', 'home2_5': 'TextEdit', 'x': 'TextEdit', });
lyr_pm10buf_0.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'node_id': 'no label', 'TIMESTAMP': 'no label', 'ts_unixtim': 'no label', 'ts_date': 'no label', 'ts_time': 'no label', 'ts_hour': 'no label', 'lat': 'no label', 'lng': 'no label', 'pm2_5_valu': 'no label', 'pm10_value': 'no label', 'mcp_value': 'no label', 'temp_value': 'no label', 'spd': 'no label', 'cv': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_KI_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'home': 'no label', 'home2_5': 'no label', });
lyr_pm10_2.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'node_id': 'no label', 'TIMESTAMP': 'no label', 'ts_unixtim': 'no label', 'ts_date': 'no label', 'ts_time': 'no label', 'ts_hour': 'no label', 'lat': 'no label', 'lng': 'no label', 'pm2_5_valu': 'no label', 'pm10_value': 'no label', 'mcp_value': 'no label', 'temp_value': 'no label', 'spd': 'no label', 'cv': 'no label', });
lyr_home10_3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', 'home': 'no label', 'home2_5': 'no label', });
lyr_home25_10_4.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', 'home': 'no label', 'home2_5': 'no label', 'x': 'no label', });
lyr_home25_10_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_home25_10_4.on("postcompose", update);

    var listenerKey = lyr_home25_10_4.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });