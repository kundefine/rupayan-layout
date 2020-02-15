"use strict";


function gMapHome () {
	if ($('.google-map-home').length) {
		$('.google-map-home').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');


			var styles = [
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#cbf0ff"
						},
						{
							"visibility": "on"
						}
					]
				}
			];


			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 12;
			};
			// init map
			var map;
			map = new GMaps({
				div: '#'+mapName,
				scrollwheel: false,
				lat: mapLat,
				lng: mapLng,
				styles: styles,
				zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {

				map.addMarker({
					icon: 'assets/img/map/1.png',
					lat: 23.8750242,
					lng: 90.37124,
					title: 'Rupayan Uttara City 1',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
				map.addMarker({
					icon: 'assets/img/map/2.png',
					lat: 23.874985,
					lng: 90.3790073,
					title: 'Rupayan Uttara City 2',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
				map.addMarker({
					icon: 'assets/img/map/3.png',
					lat: 23.875034,
					lng: 90.3779773,
					title: 'Rupayan Uttara City 3',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
				map.addMarker({
					icon: 'assets/img/map/4.png',
					lat: 23.874229,
					lng: 90.3758103,
					title: 'Rupayan Uttara City 4',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
				map.addMarker({
					icon: 'assets/img/map/5.png',
					lat: 23.876417,
					lng: 90.3758853,
					title: 'Rupayan Uttara City 5',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
				map.addMarker({
					icon: 'assets/img/map/1.png',
					lat: 23.877143,
					lng: 90.3779555,
					title: 'Rupayan Uttara City 6',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});

				map.addMarker({
					icon: 'assets/img/map/2.png',
					lat: 23.875924,
					lng: 90.3737263,
					title: 'Rupayan Uttara City 7',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});

				map.addMarker({
					icon: 'assets/img/map/3.png',
					lat: 23.874789,
					lng: 90.3774488,
					title: 'Rupayan Uttara City 8',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
				map.addMarker({
					icon: 'assets/img/map/4.png',
					lat: 23.875873,
					lng: 90.3771487,
					title: 'Rupayan Uttara City 9',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
				map.addMarker({
					icon: 'assets/img/map/5.png',
					lat: 23.874862,
					lng: 90.3794978,
					title: 'Rupayan Uttara City 10',
					infoWindow: {
						content: '<h4>Rupayan Group</h4> <p>Uttara Dhaka</p>'
					}
				});
			}
		});
	};
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMapHome();
	})(jQuery);
});