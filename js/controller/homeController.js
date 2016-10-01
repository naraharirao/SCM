var t,xx,w,markers;app.controller("homeController",function($scope,$http,searchService,$state,NgMap,$timeout){
	
	
	w=$scope.searchResult=searchService.getSearchData();
	
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 5 };
	var vm=this;
	t=vm;
	
	
	
	NgMap.getMap().then(function(map) {
		
    ///
		 vm.markers= $scope.searchResult.map(function(obj){
				if(obj._source.lat && obj._source.long){
					return {
								lat: obj._source.lat ,
								long:obj._source.long
								
						}
					}
				});
				
		    
		    xx=vm.neighborhoods = [/* new google.maps.LatLng(39.7475222, -101.5306683),
				new google.maps.LatLng(39.7265222, -101.5206683),
				new google.maps.LatLng(39.7495222, -101.6006683),
				new google.maps.LatLng(39.7575222, -101.5606683)*/];
			
		    
		    for(var i=0;i<vm.markers.length;i++){
				if(vm.markers[i] && vm.markers[i]){
					
					console.log(vm.markers[i].lat+" --- "+vm.markers[i].long)
					vm.neighborhoods.push(new google.maps.LatLng(vm.markers[i].lat,vm.markers[i].long));
					vm.neighborhoods.push(new google.maps.LatLng(vm.markers[i].lat-0.02, vm.markers[i].long-0.02));
					vm.neighborhoods.push(new google.maps.LatLng(vm.markers[i].lat-0.02, vm.markers[i].long-0.13));
					vm.neighborhoods.push(new google.maps.LatLng(vm.markers[i].lat-0.0023, vm.markers[i].long-0.16));
				}
			}
		    
			
		/*	
	*/
			//$scope.addMarker();
		
		
		//////
		
    var GMap = {
            markers: [],
            map: null,
            activeItem: null,
            activePin: null,
            setActiveItem: function($obj) {
                GMap.changePinColour();

                if (GMap.activeItem !== null) {
                    if (GMap.activeItem.data('id') !== $obj.data('id')) {
                        GMap.activeItem.find('.btn-container').slideUp();
                        GMap.activeItem.removeClass('active');
                    }
                }	

                $(".supplier-search-results").animate({scrollTop: $obj.position().top });

                $obj.addClass('active');
                $obj.find('.btn-container').slideDown();

                GMap.activeItem = $obj;
            },
            changePinColour: function() {
                if (GMap.activePin !== null) {
                    GMap.activePin.styleIcon.set('color', '502e84');
                }
            },
            highlightPin: function(i) {
                GMap.changePinColour();

                google.maps.event.trigger(GMap.markers[i], "click");
            },
            loadMap: function(lat, lng) {
                lat = lat || false;
                lng = lng || false;


                GMap.map = vm.map;

                  var bounds = new google.maps.LatLngBounds();
                     var allmarkers=vm.neighborhoods;
                          
                          for(var i=0;i<allmarkers.length;i++){
                        	  
                        	   var position = new google.maps.LatLng(allmarkers[i].lat(),allmarkers[i].lng());
                               bounds.extend(position);
                               var marker = new StyledMarker({
                                   styleIcon: new StyledIcon(
                                       StyledIconTypes.MARKER,
                                       {
                                           color: "502d84",
                                           fore: 'FFFFFF',
                                           text: "A"+i
                                       }
                                   ),
                                   map: GMap.map,
                                   position: position
                               });
                               GMap.markers.push(marker);
                               GMap.addMarkerListener(marker, i);                    
                               
                               
                          }
                                    
                                    
                     
                        
                        
                       /* var position = new google.maps.LatLng('-33.863007', '151.208994');
                        bounds.extend(position);
                        var marker = new StyledMarker({
                            styleIcon: new StyledIcon(
                                StyledIconTypes.MARKER,
                                {
                                    color: "502d84",
                                    fore: 'FFFFFF',
                                    text: "B"
                                }
                            ),
                            map: GMap.map,
                            position: position
                        });
                        GMap.markers.push(marker);
                        GMap.addMarkerListener(marker, 1);                      
                        
                        
                        
                        var position = new google.maps.LatLng('-27.467000', '153.029216');
                        bounds.extend(position);
                        var marker = new StyledMarker({
                            styleIcon: new StyledIcon(
                                StyledIconTypes.MARKER,
                                {
                                    color: "502d84",
                                    fore: 'FFFFFF',
                                    text: "C"
                                }
                            ),
                            map: GMap.map,
                            position: position
                        });
                        GMap.markers.push(marker);
                        GMap.addMarkerListener(marker, 2);        
                        
                        var position = new google.maps.LatLng('-33.839238', '151.207656');
                        bounds.extend(position);
                        var marker = new StyledMarker({
                            styleIcon: new StyledIcon(
                                StyledIconTypes.MARKER,
                                {
                                    color: "502d84",
                                    fore: 'FFFFFF',
                                    text: "D"
                                }
                            ),
                            map: GMap.map,
                            position: position
                        });
                        GMap.markers.push(marker);
                        GMap.addMarkerListener(marker, 3);             
                        
                        
                        var position = new google.maps.LatLng('-27.436066', '153.014820');
                        bounds.extend(position);
                        var marker = new StyledMarker({
                            styleIcon: new StyledIcon(
                                StyledIconTypes.MARKER,
                                {
                                    color: "502d84",
                                    fore: 'FFFFFF',
                                    text: "E"
                                }
                            ),
                            map: GMap.map,
                            position: position
                        });
                        GMap.markers.push(marker);
                        GMap.addMarkerListener(marker, 4);                

                        
                        var position = new google.maps.LatLng('-26.688056', '153.050821');
                        bounds.extend(position);
                        var marker = new StyledMarker({
                            styleIcon: new StyledIcon(
                                StyledIconTypes.MARKER,
                                {
                                    color: "502d84",
                                    fore: 'FFFFFF',
                                    text: "F"
                                }
                            ),
                            map: GMap.map,
                            position: position
                        });
                     
                        */
                                                
                        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
	                       // this.setZoom(14);
	                        google.maps.event.removeListener(boundsListener);
	                    });

                        
                  /*  // Don't zoom in too far on only one marker
                    if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                        var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
                        var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
                        bounds.extend(extendPoint1);
                        bounds.extend(extendPoint2);
                    }

                    // Automatically center the map fitting all markers on the screen
                    GMap.map.fitBounds(bounds);
*/
                
                GMap.onLoadComplete(GMap.map);
            },
            addMarkerListener: function(marker, i) {
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        marker.styleIcon.set('color', 'a31456');

                        GMap.map.panTo(this.getPosition());

                        var $target = $('.supplier-search-results ul li[data-id="' + i + '"]');
                        GMap.setActiveItem($target);

                        GMap.activePin = marker;
                    }
                })(marker, i));
            },
            init: function() {
                $('.supplier-search-results ul li').on('click', function() {
                    GMap.setActiveItem($(this));
                    GMap.highlightPin($(this).data('id'));
                });
            },
            onLoadComplete: function(map) {}
        };

    vm.map = map;
    GMap.map=map;
    GMap.loadMap();
    
    
    
	  });
	
	
    
  });
	
	
