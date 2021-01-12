

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };



// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

	if ("IntersectionObserver" in window) {
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		// Possibly fall back to event handlers here
	}
});
// === // lazy load ==================================================================

$(document).ready(function () {
	document.body.classList.add('is-load');
	let video = document.querySelector('.promo__img video');
	if(video) {
		video.play();
	}
	@@include('_function.js');
	@@include('da.js');
	@@include('burger.js');
	@@include('forms.js');


	// === is webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

	// === // is webp ==================================================================

		// ==== ADD PADDING-TOP ================================
		{
			let wrapper = document.querySelector('.wrapper');
			if (wrapper) {
				let headerHeight = document.querySelector('.header').clientHeight;
				if (wrapper.classList.contains('_padding-top')) {
					wrapper.style.paddingTop = headerHeight + 'px';
				}
			}
		}
		// ==== AND ADD PADDING-TOP ================================

	// == puls effect ==========================================
	{
		let puls = document.querySelectorAll('._puls');
		if(puls.length>0) {
			puls.forEach(el => {
				el.style.position = 'relative';
				el.style.overflow = 'hidden';

				el.addEventListener('click', function(e) {
					let elWidth = this.clientWidth;
					let elHeight = this.clientHeight;
					let circleSize = Math.max(elWidth, elHeight);
					let rect = this.getBoundingClientRect();

					
					let pulsDecor = document.createElement('div');
					pulsDecor.classList.add('_puls-decor');
					pulsDecor.style.width = circleSize + 'px';
					pulsDecor.style.height = circleSize + 'px';
					pulsDecor.style.position = 'absolute';
					pulsDecor.style.left = (e.clientX - rect.left) - (circleSize / 2) + 'px';
					pulsDecor.style.top = (e.clientY - rect.top) - (circleSize / 2) + 'px';
					pulsDecor.style.zIndex = 5;

					this.append(pulsDecor);

					setTimeout(() => {
						pulsDecor.remove();
					},800)
					
				})
			})
		}
	}
	// == // puls effect ==========================================

	@@include('#header.js');
	@@include('##solution-slider.js');
	@@include('##testimonials-slider.js');
	@@include('##review-block.js');
	@@include('##vacatures-list.js');
	
	@@include('../blocks/action-block/action-block.js');

});


const createHTMLMapMarker = ({
	OverlayView = google.maps.OverlayView,
	...args
  }) => {
	class HTMLMapMarker extends OverlayView {
	  constructor() {
		super();
		this.latlng = args.latlng;
		this.html = args.html;
		this.setMap(args.map);
		this.imgSize = args.imgSize;
	  }
  
	  createDiv() {
		this.div = document.createElement("div");
		this.div.style.position = "absolute";
		if (this.html) {
		  this.div.innerHTML = this.html;
		}
		google.maps.event.addDomListener(this.div, "click", event => {
		  google.maps.event.trigger(this, "click");
		});
	  }
  
	  appendDivToOverlay() {
		const panes = this.getPanes();
		panes.overlayImage.appendChild(this.div);
	  }
  
	  positionDiv() {
		const point = this.getProjection().fromLatLngToDivPixel(this.latlng);
		let offset = 400;
	
		if (point) {
		  this.div.style.left = `${-(this.imgSize.width / 2)}px`;
		  this.div.style.top = `${-(this.imgSize.height)}px`;
		  this.div.style.width = `${this.imgSize.width}px`;
		  this.div.style.height = `${this.imgSize.height}px`;
		}
	  }
  
	  draw() {
		if (!this.div) {
		  this.createDiv();
		  this.appendDivToOverlay();
		}
		this.positionDiv();
	  }
  
	  remove() {
		if (this.div) {
		  this.div.parentNode.removeChild(this.div);
		  this.div = null;
		}
	  }
  
	  getPosition() {
		return this.latlng;
	  }
  
	  getDraggable() {
		return false;
	  }
	}
  
	return new HTMLMapMarker();
  };

{


	var isMap = document.getElementById("map");
	if(isMap) {
		var map;

		var center = {
			lat: 51.655529,
			lng: 5.657372,
		}

		var markerPosition = {
			lat: 51.655529,
			lng: 5.657372,
		}

		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: center.lat, lng: center.lng},

				zoom: 13,
				panControl: false,
				mapTypeControl: false,
				//center: locations[0][0],
				styles: [
					{
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#f5f5f5"
						}
					  ]
					},
					{
					  "elementType": "labels.icon",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "elementType": "labels.text.stroke",
					  "stylers": [
						{
						  "color": "#f5f5f5"
						}
					  ]
					},
					{
					  "featureType": "administrative",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "featureType": "administrative.land_parcel",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#bdbdbd"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#eeeeee"
						}
					  ]
					},
					{
					  "featureType": "poi",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#e5e5e5"
						}
					  ]
					},
					{
					  "featureType": "poi.park",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					},
					{
					  "featureType": "road",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#ffffff"
						}
					  ]
					},
					{
					  "featureType": "road",
					  "elementType": "labels.icon",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "featureType": "road.arterial",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#757575"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#dadada"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#ffffff"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "geometry.stroke",
					  "stylers": [
						{
						  "color": "#ededed"
						}
					  ]
					},
					{
					  "featureType": "road.highway",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#616161"
						}
					  ]
					},
					{
					  "featureType": "road.highway.controlled_access",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#fff"
						},
						{
						  "visibility": "on"
						},
						{
						  "weight": 0.5
						}
					  ]
					},
					{
					  "featureType": "road.highway.controlled_access",
					  "elementType": "geometry.stroke",
					  "stylers": [
						{
						  "visibility": "simplified"
						}
					  ]
					},
					{
					  "featureType": "road.local",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					},
					{
					  "featureType": "transit",
					  "stylers": [
						{
						  "visibility": "off"
						}
					  ]
					},
					{
					  "featureType": "transit.line",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#e5e5e5"
						}
					  ]
					},
					{
					  "featureType": "transit.station",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#eeeeee"
						}
					  ]
					},
					{
					  "featureType": "transit.station.rail",
					  "elementType": "geometry.fill",
					  "stylers": [
						{
						  "color": "#ffffff"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "geometry",
					  "stylers": [
						{
						  "color": "#c9c9c9"
						}
					  ]
					},
					{
					  "featureType": "water",
					  "elementType": "labels.text.fill",
					  "stylers": [
						{
						  "color": "#9e9e9e"
						}
					  ]
					}
				  ],
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			var latLng = new google.maps.LatLng(markerPosition.lat, markerPosition.lng);

			let marker = createHTMLMapMarker({
				latlng: latLng,
				map: map,
				html: `<img id="parrot" src="${isMap.dataset.imgurl}">`,
				imgSize: {
					width: isMap.dataset.imgsizewidth,
					height: isMap.dataset.imgsizeheight,
				}
			  });

			console.dir(marker)

			var options = {
				zoom: 10,

			};

		}
	}
}
