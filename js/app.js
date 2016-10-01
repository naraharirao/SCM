var app = angular.module('myApp', ['ui.router','uiGmapgoogle-maps','ngMap','ngAnimate', 'ngSanitize', 'ui.bootstrap',
	'zingchart-angularjs'
	
	]).config(
	    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
	        GoogleMapApiProviders.configure({
	            china: true,
	            key      : 'AIzaSyA_pVWcgZqqe_RcPYMocNp0VexvWB4MzN0'
	        });
	    }]
	);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/search');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'html/home.html',
            controller:'homeController'
        })
        
        .state('search', {
        	 url: '/search',
             templateUrl: 'html/search.html',
             controller:'searchController'
         })
         
         
          .state('cardLayout', {
        	 url: '/cardLayout',
             templateUrl: 'html/cardLayout2.html',
             controller:'cardLayoutController'
         })
         
         
         .state('viewProfile', {
        	 url: '/viewProfile',
             templateUrl: 'html/viewProfile.html',
             controller:'viewProfileController'
         })
         
         
         .state('graph', {
        	 url: '/graph',
             templateUrl: 'html/wwe.html',
             controller:'graphController'
         })
         
         
        
});

