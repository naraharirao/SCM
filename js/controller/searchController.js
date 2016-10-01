
var w;app.controller("searchController",function($scope,$http,searchService,$state,$uibModal,$log){
	
	$scope.search={
			
			name:"",
			category:""
			
	}
	
	$scope.doSearch=function(){
		
		var postObj={};
		
	searchService.doSearch($scope.search).then(function(response){
			
			console.log(response);
			
			
			w=$scope.searchResult=response.hits.hits;
			
		
			//$state.go("cardLayout");
		})
		
	}
	
	
	$scope.optionList=["Audits","Components","Desktop","Help Desk","Hubs","Internet Services","Main Frame","Mid range end server ","Modification",
		"Operating systems","pabx systems","PCB","printers","programming","radio services","router","satellite equipments","semiconductors",
		"smart cards","storage devices","swtiches","system softwares","wireless communication device-data","wireless communication device-voice"
		];
		
	
	
	
	$scope.oneAtATime = true;

	  $scope.status = {
	    isCustomHeaderOpen: false,
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };
	


	
	  $scope.items = ['item1', 'item2', 'item3'];

	  $scope.animationsEnabled = true;

	  $scope.open = function (obj) {
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      ariaLabelledBy: 'modal-title',
	      ariaDescribedBy: 'modal-body',
	      templateUrl: 'html/viewProfile.html',
	      controller: 'ModalInstanceCtrl',
	      controllerAs: '$ctrl',
	      size: 'lg',
	      resolve: {
	        items: function () {
	          return obj;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	    	$scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  $scope.toggleAnimation = function () {
		  $scope.animationsEnabled = !$scope.animationsEnabled;
	  };
	});

	// Please note that $uibModalInstance represents a modal window (instance) dependency.
	// It is not the same as the $uibModal service used above.

	angular.module('myApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items,$scope) {
	  
		$scope.items = items;
		
		$scope.ok = function () {
	    $uibModalInstance.close();
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
	});







