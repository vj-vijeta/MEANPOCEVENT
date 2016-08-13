var App = angular
	.module('app', [
		'ngResource',
		'ngSanitize',
		'ngStorage',
		'ui.router',
		'ui.bootstrap',
		'angular-loading-bar',
		'chart.js',
		'FactInterceptors',
		'FactAuth',
		'FactEvents',
	]);

App.run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar', '$localStorage', function ($rootScope, $state, $stateParams, cfpLoadingBar, $localStorage) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		cfpLoadingBar.start();

		var withOutLogin = ['auth.signin', 'auth.signout', 'auth.signup', 'auth.forgot', 'auth.reset', 'error.notFound'];
		
		if(withOutLogin.indexOf(toState.name) == -1 && !$localStorage.current) {
			console.log(toState.name)
			event.preventDefault();
			$state.transitionTo('auth.signin');
		}
	});
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		cfpLoadingBar.complete();
	});
} ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {

	// $urlRouterProvider.otherwise('/error/not-found');
	
	$urlRouterProvider.otherwise(function($injector) {
		var $state = $injector.get("$state");
		$state.transitionTo('error.notFound')
		console.log($state)
	});

	// Now set up the states
	$stateProvider
		.state('root', {
			url: '',
			controller: 'CtrlRoot'
		})
		.state('root1', {
			url: '/',
			controller: 'CtrlRoot'
		})
		.state('error', {
			url: '/error',
			templateUrl: '/views/states/error/template.html'
		})
		.state('error.notFound', {
			url: '/not-found',
			templateUrl: '/views/states/error/not-found.html',
			data: { title: 'Not Found', folded: true }
		})
		.state('auth', {
			url: '/auth',
			abstract: true,
			controller: 'CtrlAuth',
			templateUrl: '/views/states/auth/template.html'
		})
		.state('auth.signin', {
			url: '/signin',
			templateUrl: '/views/states/auth/signin.html',
			controller: 'CtrlSignin',
			data: { title: 'Login', folded: true }
		})
		.state('auth.signout', {
			url: '/signout'
		})
		.state('dashboard', {
			url: '/dashboard',
			abstract: true,
			views: {
				'': {
					templateUrl: '/views/states/dashboard/templates/layout.html'
				},
				'aside': {
					templateUrl: '/views/states/dashboard/templates/aside.html'
				},
				'content': {
					templateUrl: '/views/states/dashboard/templates/content.html'
				}
			}
		})
		.state('dashboard.index', {
			url: '/',
			templateUrl: '/views/states/dashboard/index.html',
			controller: 'CtrlIndex',
			data: { title: 'Dashboard', folded: true }
		})
		.state('dashboard.events', {
			url: '/events',
			templateUrl: '/views/states/dashboard/events.html',
			controller: 'CtrlEvents',
			data: { title: 'Events', folded: true }
		})
		.state('dashboard.event', {
			url: '/event/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/single-event.html',
			controller: 'CtrlSingleEvent',
			data: { title: 'Event', folded: true }
		})
	;

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
} ])