let webapp = angular.module("webapp", ['ngRoute', 'ngAnimate']);

//disable the cache
webapp.config(["$httpProvider", function($httpProvider) {
    if( !$httpProvider.defaults.headers.get ) {
        $httpProvider.defaults.headers.get = {};
    }
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

webapp.filter('to_trusted', ['$sce', function ($sce) {
	return function (text) {
	    return $sce.trustAsHtml(text);
	};
}]);

webapp.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
            templateUrl: 'blocklist.html',
            controller: 'BlockController'
        })
        .when('/accountlist', {
            templateUrl: 'accountlist.html',
            controller: 'AccountController'
        })
        .when('/blocklist', {
            templateUrl: 'blocklist.html',
            controller: 'BlockController'
        })
        .when('/namespacelist', {
            templateUrl: 'namespacelist.html',
            controller: 'NamespaceController'
        })
        .when('/nodelist', {
            templateUrl: 'nodelist.html',
            controller: 'NodeController'
        })
        .when('/txlist', {
            templateUrl: 'txlist.html',
            controller: 'TXController'
        })
        .when('/supernodepayout', {
            templateUrl: 'supernodepayout.html',
            controller: 'SupernodeController'
        })
        .when('/s_account', {
            templateUrl: 's_account.html',
            controller: 'SearchAccountController'
        })
        .when('/s_block', {
            templateUrl: 's_block.html',
            controller: 'SearchBlockController'
        })
        .when('/s_tx', {
            templateUrl: 's_tx.html',
            controller: 'SearchTXController'
        });
});