window.onload = init;
function init(){
	const map = new ol.Map({
		view: new ol.View({
			center:ol.proj.transform([-78.5,-0.25],'EPSG:4326','EPSG:3857'),
			zoom: 6
			
		}),
		layers:[
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})	
		],
		
		target:'js-map'
	})
	
	const WMS = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url: 'http://geoserver.idesinde.com:8080/geoserver/ows?',
			params:{
				LAYERS: 'Quezada:nxprovinciasEcuador,Quezada:rio_torrente,Quezada:poblados',
				FORMAT: 'image/png',
				TRANSPARENT: true
			},
			attributions:'<a href="http://geoserver.idesinde.com:8080/geoserver/ows?">idesinde</a>'
		
		
		})
		
	})
	
	map.addLayer(WMS);
}