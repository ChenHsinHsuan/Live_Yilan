angular.module('app.controllers', [])
  
.controller('launchPageCtrl',function ($scope, $stateParams, $ionicSlideBoxDelegate, $state) {
	$scope.options = {
	  loop: true,
	  speed: 1000,
	  autoplay:2000,
	  pagination:false
	}

	$scope.nextPage = function(){
		console.log('nextPage pressed...');
		$state.go('mainPage');
	}
})

.controller('mainPageCtrl', function ($scope, $stateParams, $ionicNavBarDelegate, $ionicSideMenuDelegate) {
	
	$scope.navigation_title = '漫遊宜蘭';
	$scope.toggleLeftSideMenu = function(){
		console.log('left menubar is opened...');
		$ionicSideMenuDelegate.toggleLeft();	

		$scope.menuList = [
			{title:'體驗類', link:'#', icon:'2'},
			{title:'住宿類', link:'#', icon:'3'},
			{title:'餐飲類', link:'#', icon:'4'},
			{title:'達人類', link:'#', icon:'4'}
		];
	}

})

// .controller('menuCtrl', function ($scope, $stateParams, $ionicNavBarDelegate) {
// 	$ionicNavBarDelegate.showBackButton(false);
// 	$scope.navigation_title = '主選單';
// 	$scope.subjectList = [
// 		{title:'宜蘭整體形象', link:'impression', icon:'1'},
// 		{title:'宜蘭旅遊特色', link:'feature', icon:'2'},
// 		{title:'農村社區特寫', link:'community', icon:'3'},
// 		{title:'主題旅遊路線', link:'travel-line', icon:'4'}
// 	];
// })
   
.controller('impressionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.navigation_title = '宜蘭整體形象';
	$scope.subjectList = [
		{title:'基本資訊', link:'basic', icon:''},
		{title:'交通方式', link:'traffic', icon:''},
		{title:'代表故事', link:'story', icon:''}
	];

}])
   
.controller('basicCtrl', function ($scope, $stateParams) {
	$scope.navigation_title = '旅遊資訊';
	$scope.detailList = [
		{title:'氣候溫度', context:'內文', album:[]},
		{title:'人口地形', context:'內文', album:[]},
		{title:'旅遊風情', context:'內文', album:[]}
	];

	$scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	};
})
   
.controller('trafficCtrl', ['$scope', '$stateParams', '$ionicSlideBoxDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.navigation_title = '交通方式';
	$scope.detailList = [
		{title:'大眾運輸', context:'內文', album:[]},
		{title:'其他方式', context:'內文', album:[]}
	];

	$scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	};

}])
   
.controller('storyCtrl',function ($scope, $stateParams) {
	$scope.navigation_title = '在地故事';
	$scope.detailList = [
		{title:'故事1', context:'內文1', album:[]},
		{title:'故事2', context:'內文2', album:[]},
		{title:'故事3', context:'內文3', album:[]},
		{title:'故事4', context:'內文4', album:[]},
		{title:'故事5', context:'內文5', album:[]}
	];

	$scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	};

})
   
.controller('featureCtrl',function ($scope, $stateParams) {
	$scope.navigation_title = '宜蘭旅遊特色';
	$scope.detailList = [
		{title:'社山親水', context:'內文1', album:[]},
		{title:'在地好味', context:'內文2', album:[]},
		{title:'溫泉鄉城', context:'內文3', album:[]},
		{title:'蔚藍海岸', context:'內文4', album:[]},
		{title:'風土民情', context:'內文5', album:[]}
	];

	$scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	};

})
   
.controller('communityCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.top_section = {title:'農村旅遊wiki', link:'travel-wiki'};
	$scope.communityList = [
		{title:'社區1', link:'community-detail'},
		{title:'社區2', link:'community-detail'},
		{title:'社區3', link:'community-detail'},
		{title:'社區4', link:'community-detail'},
		{title:'社區5', link:'community-detail'},
		{title:'社區6', link:'community-detail'},
		{title:'社區7', link:'community-detail'},
		{title:'社區8', link:'community-detail'},
		{title:'社區9', link:'community-detail'}
	];

}])
   

.controller('travelwikiCtrl', ['$scope', '$stateParams', '$ionicSlideBoxDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.navigation_title = '農村旅遊wiki';
	$scope.detailList = [
		{title:'目前景點', context:'內文1', album:[]},
		{title:'發展背景', context:'內文2', album:[]}
	];

	$scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	};
}])


.controller('communitydetailCtrl', ['$scope', '$stateParams', '$ionicSlideBoxDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.navigation_title = '農村旅遊wiki';
	$scope.detailList = [
		{title:'社區簡介', context:'', album:[]},
		{title:'景點介紹', context:'', album:[]},
		{title:'代表達人', context:'', album:[]}
	];

	$scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	};
}])

.controller('travellineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.navigation_title = '主題旅遊路線';
	$scope.subjectList = [
		{title:'主題一', link:'travel-line-detail', icon:''},
		{title:'主題二', link:'travel-line-detail', icon:''},
		{title:'主題三', link:'travel-line-detail', icon:''}
	];

}])

.controller('travelLineDetailCtrl', ['$scope', '$stateParams', '$ionicSlideBoxDelegate',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.navigation_title = '主題旅遊路線';
	$scope.detailList = [
		{title:'繪製地圖圖檔', context:'', album:[]},
		{title:'推薦行程', context:'', album:[]},
		{title:'交通方式', context:'', album:[]},
		{title:'其他資訊', context:'', album:[]}
	];

	$scope.slideChanged = function(index) {
	    $scope.slideIndex = index;
	};

}])
 