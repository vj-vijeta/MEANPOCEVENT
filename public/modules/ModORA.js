var App = angular
	.module('app', [
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngSanitize',
		// 'ngTouch',
		'ngMaterial',
		'ngStorage',
		'ngStore',
		'textAngular',
		'ui.router',
		'ui.utils',
		'ui.bootstrap',
		'ui.calendar',
		'ui.select',
		'ui.load',
		'ui.jp',
		'naif.base64',
		'pascalprecht.translate',
		'oc.lazyLoad',
		'angular-loading-bar',
		'checklist-model',
		'FactInterceptors',
		'FactAuth',
		'FactMaster',
		'FactUser',
		'FactVenue',
		'FactCustomer',
		'FactOpening',
		'FactJobApplication',
		'FactFaq',
		'FactStaticPage',
		'FactTestimonial',
		'FactFeedback',
		'FactUpload',
        'FactEvent',
        'FactVisit',
        'FactOraSetting',
        'FactOwner',
        'FactTalkToORA'
	]);

App.constant('MODULE_CONFIG', [
	{
		name: 'ui.select',
		module: true,
		files: [
			'/assets/libs/angular/angular-ui-select/dist/select.min.js',
			'/assets/libs/angular/angular-ui-select/dist/select.min.css'
		]
	},
	{
		name: 'textAngular',
		module: true,
		files: [
			'/assets/libs/angular/textAngular/dist/textAngular-sanitize.min.js',
			'/assets/libs/angular/textAngular/dist/textAngular.min.js'
		]
	},
	{
		name: 'vr.directives.slider',
		module: true,
		files: [
			'/assets/libs/angular/venturocket-angular-slider/build/angular-slider.min.js',
			'/assets/libs/angular/venturocket-angular-slider/angular-slider.css'
		]
	},
	{
		name: 'angularBootstrapNavTree',
		module: true,
		files: [
			'/assets/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
			'/assets/libs/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
		]
	},
	{
		name: 'angularFileUpload',
		module: true,
		files: [
			'/assets/libs/angular/angular-file-upload/angular-file-upload.js'
		]
	},
	{
		name: 'ngImgCrop',
		module: true,
		files: [
			'/assets/libs/angular/ngImgCrop/compile/minified/ng-img-crop.js',
			'/assets/libs/angular/ngImgCrop/compile/minified/ng-img-crop.css'
		]
	},
	{
		name: 'smart-table',
		module: true,
		files: [
			'/assets/libs/angular/angular-smart-table/dist/smart-table.min.js'
		]
	},
	{
		name: 'ui.map',
		module: true,
		files: [
			'/assets/libs/angular/angular-ui-map/ui-map.js'
		]
	},
	{
		name: 'ngGrid',
		module: true,
		files: [
			'/assets/libs/angular/ng-grid/build/ng-grid.min.js',
			'/assets/libs/angular/ng-grid/ng-grid.min.css',
			'/assets/libs/angular/ng-grid/ng-grid.bootstrap.css'
		]
	},
	{
		name: 'ui.grid',
		module: true,
		files: [
			'/assets/libs/angular/angular-ui-grid/ui-grid.min.js',
			'/assets/libs/angular/angular-ui-grid/ui-grid.min.css',
			'/assets/libs/angular/angular-ui-grid/ui-grid.bootstrap.css'
		]
	},
	{
		name: 'xeditable',
		module: true,
		files: [
			'/assets/libs/angular/angular-xeditable/dist/js/xeditable.min.js',
			'/assets/libs/angular/angular-xeditable/dist/css/xeditable.css'
		]
	},
	{
		name: 'smart-table',
		module: true,
		files: [
			'/assets/libs/angular/angular-smart-table/dist/smart-table.min.js'
		]
	},
	{
		name: 'dataTable',
		module: false,
		files: [
			'/assets/libs/jquery/datatables/media/js/jquery.dataTables.min.js',
			'/assets/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
			'/assets/libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'
		]
	},
	{
		name: 'footable',
		module: false,
		files: [
			'/assets/libs/jquery/footable/dist/footable.all.min.js',
			'/assets/libs/jquery/footable/css/footable.core.css'
		]
	},
	{
		name: 'easyPieChart',
		module: false,
		files: [
			'/assets/libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'
		]
	},
	{
		name: 'sparkline',
		module: false,
		files: [
			'/assets/libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'
		]
	},
	{
		name: 'plot',
		module: false,
		files: [
			'/assets/libs/jquery/flot/jquery.flot.js',
			'/assets/libs/jquery/flot/jquery.flot.resize.js',
			'/assets/libs/jquery/flot/jquery.flot.pie.js',
			'/assets/libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
			'/assets/libs/jquery/flot-spline/js/jquery.flot.spline.min.js',
			'/assets/libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'
		]
	},
	{
		name: 'vectorMap',
		module: false,
		files: [
			'/assets/libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
			'/assets/libs/jquery/bower-jvectormap/jquery-jvectormap.css',
			'/assets/libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
			'/assets/libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'
		]
	},
	{
		name: 'moment',
		module: false,
		files: [
			'/assets/libs/jquery/moment/moment.js'
		]
	}])
	.config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function ($ocLazyLoadProvider, MODULE_CONFIG) {
		$ocLazyLoadProvider.config({
			debug: false,
			events: false,
			modules: MODULE_CONFIG
		});
	} ]);

// App.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function($controllerProvider, $compileProvider, $filterProvider, $provide) {

// 		// app.controller = $controllerProvider.register;
//   //       app.directive = $compileProvider.directive;
//   //       app.filter = $filterProvider.register;
//   //       app.factory = $provide.factory;
//   //       app.service = $provide.service;
//   //       app.constant = $provide.constant;
//   //       app.value = $provide.value;
//     }
// ])
// .config(['$translateProvider', function($translateProvider) {
//     // Register a loader for the static files
//     // So, the module will search missing translation tables under the specified urls.
//     // Those urls are [prefix][langKey][suffix].
//     $translateProvider.useStaticFilesLoader({
//         prefix: 'i18n/',
//         suffix: '.js'
//     });
//     // Tell the module what language to use by default
//     $translateProvider.preferredLanguage('en');
//     // Tell the module to store the language in the local storage
//     $translateProvider.useLocalStorage();
// }])
App.run(['$rootScope', '$state', '$stateParams', 'cfpLoadingBar', function ($rootScope, $state, $stateParams, cfpLoadingBar) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
		cfpLoadingBar.start();

		var withOutLogin = ['auth.signin', 'auth.signout', 'auth.signup', 'auth.forgot', 'auth.reset', 'error.notFound'];
		
		if(withOutLogin.indexOf(toState.name) == -1 && !localStorage.signinToken) {
			console.log(toState.name)
			event.preventDefault();
			$state.transitionTo('auth.signin');
		}
	});
	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		cfpLoadingBar.complete();
	});
} ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'cfpLoadingBarProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, cfpLoadingBarProvider) {

	cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
	cfpLoadingBarProvider.loadingBarTemplate = '<div  style="z-index: 100000000 !important; background-color: black !important;opacity:.5;position:fixed;top:0;bottom:0;left:0;right:0;">        <div style="position: fixed;top: 50%;left: 50%;margin-top: -64px;margin-left: -64px;height: 128px;width: 128px;z-index: 100000004;opacity: 100000;">          <img src="/assets/images/spinner_large.gif" alt="">        </div>    </div>';

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
			controller: 'CtrlAuth',
			templateUrl: '/views/states/auth/template.html'
		})
		.state('auth.signin', {
			url: '/signin',
			templateUrl: '/views/states/auth/signin.html',
			controller: 'CtrlSignin',
			data: { title: 'Login', folded: true }
		})
		.state('auth.signup', {
			url: '/signup',
			templateUrl: '/views/states/auth/signup.html',
			controller: 'CtrlSignin',
			data: { title: 'Signup', folded: true }
		})
		.state('auth.signout', {
			controller: 'CtrlSignout'
		})
		.state('auth.forgot', {
			url: '/forgot',
			templateUrl: '/views/states/auth/forgot.html',
			controller: 'CtrlForgotPassword',
			data: { title: 'Forgot Password', folded: true }
		})
		.state('auth.reset', {
			url: '/reset/:token',
			params: {
				token: null
			},
			templateUrl: '/views/states/auth/reset.html',
			controller: 'CtrlResetPassword',
			data: { title: 'Reset Password', folded: true }
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
		.state('dashboard.settings', {
			url: '/settings',
			templateUrl: '/views/states/dashboard/settings.html',
			controller: 'CtrlSettings',
			data: { title: 'Settings', folded: true }
		})
		.state('dashboard.venues', {
			url: '/venues/:ownerId',
            params: {
				ownerId: null
			},
			templateUrl: '/views/states/dashboard/venues.html',
			controller: 'CtrlVenues',
			data: {
				title: 'Manage Venues'
			}
		})
		.state('dashboard.addVenue', {
			url: '/venues/add/:ownerId',
            params: {
				ownerId: null
			},
			templateUrl: '/views/states/dashboard/add-venue.html',
			controller: 'CtrlAddVenue',
			data: {
				title: 'Add Venue'
			}
		})
		.state('dashboard.editVenue', {
			url: '/venues/edit/:id/:ownerId',
			params: {
				id: null,
                ownerId: null
			},
			templateUrl: '/views/states/dashboard/add-venue.html',
			controller: 'CtrlAddVenue',
			data: {
				title: 'Edit Venue'
			}
		})
		.state('dashboard.customers', {
			url: '/customers',
			templateUrl: '/views/states/dashboard/customers.html',
			controller: 'CtrlCustomers',
			data: {
				title: 'Customer List',
			}
		})
		.state('dashboard.addCustomer', {
			url: '/customers/add',
			templateUrl: '/views/states/dashboard/add-customer.html',
			controller: 'CtrlAddCustomer',
			data: {
				title: 'Add Customer',
			}
		})
		.state('dashboard.editCustomer', {
			url: '/customers/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/add-customer.html',
			controller: 'CtrlAddCustomer',
			data: {
				title: 'Edit Customer'
			}
		})
        .state('dashboard.owners', {
			url: '/owners',
			templateUrl: '/views/states/dashboard/owners.html',
			controller: 'CtrlOwners',
			data: {
				title: 'Owner List'
			}
		})
        .state('dashboard.addOwner', {
			url: '/owners/add',
			templateUrl: '/views/states/dashboard/add-owner.html',
			controller: 'CtrlAddOwner',
			data: {
				title: 'Add Owner'
			}
		})
		.state('dashboard.editOwner', {
			url: '/owners/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/add-owner.html',
			controller: 'CtrlAddOwner',
			data: {
				title: 'Edit Owner'
			}
		})
        .state('dashboard.quickTalk', {
			url: '/quick-talk',
			templateUrl: '/views/states/dashboard/talk-to-ora.html',
			controller: 'CtrlTalkToORA',
			data: {
				title: 'Quick Talk List'
			}
		})
        .state('dashboard.editQuickTalk', {
			url: '/quick-talk/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/add-quick-talk.html',
			controller: 'CtrlAddQuickTalk',
			data: {
				title: 'Edit Quick Talk'
			}
		})
		//.state('dashboard.addOwners', {
		//	url: '/owners/add',
		//	templateUrl: '/views/states/dashboard/add-owner.html',
		//	controller: 'CtrlAddCustomer',
		//	data: {
		//		title: 'Add Owners',
		//	}
		//})
		//.state('dashboard.editCustomer', {
		//	url: '/owners/edit/:id',
		//	params: {
		//		id: null
		//	},
		//	templateUrl: '/views/states/dashboard/add-owner.html',
		//	controller: 'CtrlAddCustomer',
		//	data: {
		//		title: 'Edit Owners',
		//	}
		//})


		.state('dashboard.currentOpenings', {
			url: '/current-openings',
			templateUrl: '/views/states/dashboard/current-openings.html',
			controller: 'CtrlCurrentOpenings',
			data: {
				title: 'Current Opening',
			}
		})
		.state('dashboard.addOpening', {
			url: '/current-openings/add',
			templateUrl: '/views/states/dashboard/add-opening.html',
			controller: 'CtrlAddOpening',
			data: {
				title: 'Add Opening',
			}
		})
		.state('dashboard.editOpening', {
			url: '/current-openings/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/add-opening.html',
			controller: 'CtrlAddOpening',
			data: {
				title: 'Edit Opening',
			}
		})
		.state('dashboard.viewApplications', {
			url: '/current-openings/applications',
			templateUrl: '/views/states/dashboard/view-applications.html',
			controller: 'CtrlApplications',
			data: {
				title: 'View Applications',
			}
		})
		.state('dashboard.faqs', {
		    url: '/faqs',
		    templateUrl: '/views/states/dashboard/faqs.html',
		    controller: 'CtrlFaqs',
		    data: {
		        title: 'FAQs',
		    }
		})
		.state('dashboard.addFaq', {
		    url: '/faqs/add',
		    templateUrl: '/views/states/dashboard/add-faq.html',
		    controller: 'CtrlAddFaq',
		    data: {
		        title: 'Add FAQ',
		    }
		})
		.state('dashboard.editFaq', {
		    url: '/faqs/edit/:id',
		    params: {
		    	id: null
		    },
		    templateUrl: '/views/states/dashboard/add-faq.html',
		    controller: 'CtrlAddFaq',
		    data: {
		        title: 'Edit FAQ',
		    }
		})
		.state('dashboard.users', {
		    url: '/users',
		    templateUrl: '/views/states/dashboard/users.html',
		    controller: 'CtrlUsers',
		    data: {
		        title: 'Users',
		    }
		})
		.state('dashboard.addUser', {
		    url: '/users/add',
		    templateUrl: '/views/states/dashboard/add-user.html',
		    controller: 'CtrlAddUser',
		    data: {
		        title: 'Add User',
		    }
		})
		.state('dashboard.editUser', {
		    url: '/users/edit/:id',
		    params: {
		    	id: null
		    },
		    templateUrl: '/views/states/dashboard/add-user.html',
		    controller: 'CtrlAddUser',
		    data: {
		        title: 'Edit User',
		    }
		})
		.state('dashboard.staticPages', {
		    url: '/static-pages',
		    templateUrl: '/views/states/dashboard/static-pages.html',
		    controller: 'CtrlStaticPages',
		    data: {
		        title: 'Static Pages',
		    }
		})
		.state('dashboard.addStaticPage', {
		    url: '/static-pages/add',
		    templateUrl: '/views/states/dashboard/add-static-page.html',
		    controller: 'CtrlAddStaticPage',
		    data: {
		        title: 'Add Static Page',
		    }
		})
		.state('dashboard.editStaticPage', {
		    url: '/static-pages/edit/:id',
		    params: {
		    	id: null
		    },
		    templateUrl: '/views/states/dashboard/add-static-page.html',
		    controller: 'CtrlAddStaticPage',
		    data: {
		        title: 'Edit Static Page',
		    }
		})
		.state('dashboard.testimonials', {
		    url: '/testimonials',
		    templateUrl: '/views/states/dashboard/testimonials.html',
		    controller: 'CtrlTestimonials',
		    data: {
		        title: 'FAQs',
		    }
		})
		.state('dashboard.addTestimonial', {
		    url: '/testimonials/add',
		    templateUrl: '/views/states/dashboard/add-testimonial.html',
		    controller: 'CtrlAddTestimonial',
		    data: {
		        title: 'Add Testimonial',
		    }
		})
		.state('dashboard.editTestimonial', {
		    url: '/testimonials/edit/:id',
		    params: {
		    	id: null
		    },
		    templateUrl: '/views/states/dashboard/add-testimonial.html',
		    controller: 'CtrlAddTestimonial',
		    data: {
		        title: 'Edit Testimonial',
		    }
		})
		.state('dashboard.feedbacks', {
		    url: '/feedbacks',
		    templateUrl: '/views/states/dashboard/feedbacks.html',
		    controller: 'CtrlFeedbacks',
		    data: {
		        title: 'Feedbacks',
		    }
		})
		.state('dashboard.editFeedback', {
		    url: '/feedbacks/edit/:id',
		    params: {
		    	id: null
		    },
		    templateUrl: '/views/states/dashboard/add-feedback.html',
		    controller: 'CtrlAddFeedback',
		    data: {
		        title: 'Edit Feedback'
		    }
		})
        .state('dashboard.editVisit', {
			url: '/visits/edit/:id',
		    params: {
		    	id: null
		    },
			templateUrl: '/views/states/dashboard/add-visit.html',
			controller: 'CtrlAddVisit',
			data: {
				title: 'Edit Visit'
			}
		})
        .state('dashboard.visits', {
			url: '/visits',
			templateUrl: '/views/states/dashboard/visits.html',
			controller: 'CtrlVisits',
			data: {
				title: 'Manage Visits'
			}
		})
        .state('dashboard.editEvent', {
			url: '/events/edit/:id',
		    params: {
		    	id: null
		    },
			templateUrl: '/views/states/dashboard/add-event.html',
			controller: 'CtrlAddEvent',
			data: {
				title: 'Edit Event'
			}
		})
        .state('dashboard.events', {
			url: '/events',
			templateUrl: '/views/states/dashboard/events.html',
			controller: 'CtrlEvents',
			data: {
				title: 'Manage Events'
			}
		})
	// .state('dashboard.visitlist', {
	//     url: '/visitlist',
	//     templateUrl: '/views/states/dashboard/visitlist.html',
	//     data: {
	//         title: 'Visit List',
	//     }
	// })
	// .state('dashboard.addvisit', {
	//     url: '/addvisit',
	//     templateUrl: '/views/states/dashboard/addvisit.html',
	//     data: {
	//         title: 'Add Visit',
	//     }
	// })
	// .state('dashboard.eventlist', {
	//     url: '/eventlist',
	//     templateUrl: '/views/states/dashboard/eventlist.html',
	//     data: {
	//         title: 'Event List',
	//     }
	// })
	// .state('dashboard.addevent', {
	//     url: '/addevent',
	//     templateUrl: '/views/states/dashboard/addevent.html',
	//     data: {
	//         title: 'Add Event',
	//     }
	// })
		.state('dashboard.visitCalendar', {
			url: '/visit-calendar',
			templateUrl: '/views/states/dashboard/visit-calendar.html',
			controller: 'CtrlVisitCalendar',
			data: {
				title: 'Visit Calendar'
			}
		})
		.state('dashboard.eventCalendar', {
			url: '/event-calendar',
			templateUrl: '/views/states/dashboard/event-calendar.html',
			controller: 'CtrlEventCalendar',
			data: {
				title: 'Event Calendar'
			}
		})
	// .state('dashboard.payments', {
	//     url: '/payments',
	//     templateUrl: '/views/states/dashboard/payments.html',
	//     data: {
	//         title: 'Payments',
	//     }
	// })
		.state('dashboard.eventType', {
			url: '/masters/event-type',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Event Type',
				createUrl: '/dashboard/masters/event-type/add',
				editUrl: '/dashboard/masters/event-type/edit/',
				masterName: 'EVENTTYPE'
			}
		})
		 .state('dashboard.createEventType', {
			 url: '/masters/event-type/add',
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Event Type',
				 masterName: 'EVENTTYPE',
				 editState: 'dashboard.editEventType',
				 listState: 'dashboard.eventType'
			 }
		 })
		 .state('dashboard.editEventType', {
			 url: '/masters/event-type/edit/:id',
			 params: {
				 id: null
			 },
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Event Type',
				 masterName: 'EVENTTYPE',
				 editState: 'dashboard.editEventType',
				 listState: 'dashboard.eventType'
			 }
		 })

		.state('dashboard.venueType', {
			url: '/masters/venue-type',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Venue Type',
				createUrl: '/dashboard/masters/venue-type/add',
				editUrl: '/dashboard/masters/venue-type/edit/',
				masterName: 'VENUETYPE'
			}
		})
		.state('dashboard.createVenueType', {
			url: '/masters/venue-type/add',
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Venue Type',
				masterName: 'VENUETYPE',
				listState: 'dashboard.venueType',
				editState: 'dashboard.editVenueType'
			}
		})
		.state('dashboard.editVenueType', {
			url: '/masters/venue-type/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Venue Type',
				masterName: 'VENUETYPE',
				listState: 'dashboard.venueType',
				editState: 'dashboard.editVenueType'
			}
		})

		.state('dashboard.amenities', {
			url: '/masters/amenities',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Amenities',
				createUrl: '/dashboard/masters/amenities/add',
				editUrl: '/dashboard/masters/amenities/edit/',
				masterName: 'AMENITIES'
			}
		})
		.state('dashboard.createAmenities', {
			url: '/masters/amenities/add',
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Amenities',
				masterName: 'AMENITIES',
				listState: 'dashboard.amenities',
				editState: 'dashboard.editAmenities'
			}
		})
		.state('dashboard.editAmenities', {
			url: '/masters/amenities/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Amenities',
				masterName: 'AMENITIES',
				listState: 'dashboard.amenities',
				editState: 'dashboard.editAmenities'
			}
		})

		.state('dashboard.services', {
			url: '/masters/services',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Services',
				createUrl: '/dashboard/masters/services/add',
				editUrl: '/dashboard/masters/services/edit/',
				masterName: 'SERVICES'
			}
		})
		.state('dashboard.createServices', {
			url: '/masters/services/add',
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Services',
				masterName: 'SERVICES',
				listState: 'dashboard.services',
				editState: 'dashboard.editServices'
			}
		})
		.state('dashboard.editServices', {
			url: '/masters/services/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Services',
				masterName: 'SERVICES',
				listState: 'dashboard.services',
				editState: 'dashboard.editServices'
			}
		})
        .state('dashboard.startType', {
            url: '/masters/start-type',
            templateUrl: '/views/states/dashboard/masters/masters.html',
            controller: 'CtrlMasters',
            data: {
                title: 'Star Type',
                createUrl: '/dashboard/masters/start-type/add',
                editUrl: '/dashboard/masters/start-type/edit/',
                masterName: 'STARTTYPE'
            }
        })
        .state('dashboard.createStartType', {
            url: '/masters/start-type/add',
            templateUrl: '/views/states/dashboard/masters/add-master.html',
            controller: 'CtrlAddMaster',
            data: {
                title: 'Star Type',
                masterName: 'STARTTYPE',
                listState: 'dashboard.startType',
                editState: 'dashboard.editStarType'
            }
        })
        .state('dashboard.editStartType', {
            url: '/masters/start-type/edit/:id',
            params: {
                id: null
            },
            templateUrl: '/views/states/dashboard/masters/add-master.html',
            controller: 'CtrlAddMaster',
            data: {
                title: 'Star Type',
                masterName: 'STARTTYPE',
                listState: 'dashboard.startType',
                editState: 'dashboard.editStartType'
            }
        })

		.state('dashboard.timeSlot', {
			url: '/masters/time-slot',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Time Slot',
				createUrl: '/dashboard/masters/time-slot/add',
				editUrl: '/dashboard/masters/time-slot/edit/',
				masterName: 'TIMESLOT'
			}
		})
		.state('dashboard.createTimeSlot', {
			url: '/masters/time-slot/add',
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Time Slot',
				masterName: 'TIMESLOT',
				listState: 'dashboard.timeSlot',
				editState: 'dashboard.editTimeSlot'
			}
		})
		.state('dashboard.editTimeSlot', {
			url: '/masters/time-slot/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Time Slot',
				masterName: 'TIMESLOT',
				listState: 'dashboard.timeSlot',
				editState: 'dashboard.editTimeSlot'
			}
		})


		.state('dashboard.quickTalkDetails', {
			url: '/masters/quick-talk-details',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Quick Talk Details',
				createUrl: '/dashboard/masters/quick-talk-details/add',
				editUrl: '/dashboard/masters/quick-talk-details/edit/',
				masterName: 'QUICKTALKDETAILS'
			}
		})
		.state('dashboard.createQuickTalkDetails', {
			url: '/masters/quick-talk-details/add',
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Quick Talk Details',
				masterName: 'QUICKTALKDETAILS',
				listState: 'dashboard.quickTalkDetails',
				editState: 'dashboard.editQuickTalkDetails'
			}
		})
		.state('dashboard.editQuickTalkDetails', {
			url: '/masters/quick-talk-details/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Quick Talk Details',
				masterName: 'QUICKTALKDETAILS',
				listState: 'dashboard.quickTalkDetails',
				editState: 'dashboard.editQuickTalkDetails'
			}
		})



		.state('dashboard.venueStatus', {
			url: '/masters/venue-status',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Venue Status',
				createUrl: '/dashboard/masters/venue-status/add',
				editUrl: '/dashboard/masters/venue-status/edit/',
				masterName: 'VENUESTATUS'
			}
		})
		.state('dashboard.createVenueStatus', {
			url: '/masters/venue-status/add',
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Venue Status',
				masterName: 'VENUESTATUS',
				listState: 'dashboard.venueStatus',
				editState: 'dashboard.editVenueStatus'
			}
		})
		.state('dashboard.editVenueStatus', {
			url: '/masters/venue-status/edit/:id',
			params: {
				id: null
			},
			templateUrl: '/views/states/dashboard/masters/add-master.html',
			controller: 'CtrlAddMaster',
			data: {
				title: 'Venue Status',
				masterName: 'VENUESTATUS',
				listState: 'dashboard.venueStatus',
				editState: 'dashboard.editVenueStatus'
			}
		})


		.state('dashboard.accountType', {
			url: '/masters/account-type',
			templateUrl: '/views/states/dashboard/masters/masters.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Account Type',
				createUrl: '/dashboard/masters/account-type/add',
				editUrl: '/dashboard/masters/account-type/edit/',
				masterName: 'ACCOUNTTYPE'
			}
		})
		 .state('dashboard.createAccountType', {
			 url: '/masters/account-type/add',
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Account Type',
				 masterName: 'ACCOUNTTYPE',
				 listState: 'dashboard.accountType',
				 editState: 'dashboard.editAccountType'
			 }
		 })
		 .state('dashboard.editAccountType', {
			 url: '/masters/account-type/edit/:id',
			 params: {
				 id: null
			 },
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Account Type',
				 masterName: 'ACCOUNTTYPE',
				 listState: 'dashboard.accountType',
				 editState: 'dashboard.editAccountType'
			 }
		 })

		 .state('dashboard.eventStatus', {
			 url: '/masters/event-status',
			 templateUrl: '/views/states/dashboard/masters/masters.html',
			 controller: 'CtrlMasters',
			 data: {
				 title: 'Event Status',
				 createUrl: '/dashboard/masters/event-status/add',
				 editUrl: '/dashboard/masters/event-status/edit/',
				 masterName: 'EVENTSTATUS'
			 }
		 })
		 .state('dashboard.createEventStatus', {
			 url: '/masters/event-status/add',
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Event Status',
				 masterName: 'EVENTSTATUS',
				 listState: 'dashboard.eventStatus',
				 editState: 'dashboard.editEventStatus'
			 }
		 })
		 .state('dashboard.editEventStatus', {
			 url: '/masters/event-status/edit/:id',
			 params: {
				 id: null
			 },
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Event Status',
				 masterName: 'EVENTSTATUS',
				 listState: 'dashboard.eventStatus',
				 editState: 'dashboard.editEventStatus'
			 }
		 })


		 .state('dashboard.foodCategory', {
			 url: '/masters/food-category',
			 templateUrl: '/views/states/dashboard/masters/masters.html',
			 controller: 'CtrlMasters',
			 data: {
				 title: 'Food Category',
				 createUrl: '/dashboard/masters/food-category/add',
				 editUrl: '/dashboard/masters/food-category/edit/',
				 masterName: 'FOODCATEGORY'
			 }
		 })
		 .state('dashboard.createFoodCategory', {
			 url: '/masters/food-category/add',
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Food Category',
				 masterName: 'FOODCATEGORY',
				 listState: 'dashboard.foodCategory',
				 editState: 'dashboard.editFoodCategory'
			 }
		 })
		 .state('dashboard.editFoodCategory', {
			 url: '/masters/food-category/edit/:id',
			 params: {
				 id: null
			 },
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Food Category',
				 masterName: 'FOODCATEGORY',
				 listState: 'dashboard.foodCategory',
				 editState: 'dashboard.editFoodCategory'
			 }
		 })



		 .state('dashboard.hallType', {
			 url: '/masters/hall-type',
			 templateUrl: '/views/states/dashboard/masters/masters.html',
			 controller: 'CtrlMasters',
			 data: {
				 title: 'Hall Type',
				 createUrl: '/dashboard/masters/hall-type/add',
				 editUrl: '/dashboard/masters/hall-type/edit/',
				 masterName: 'HALLTYPE'
			 }
		 })
		 .state('dashboard.createHallType', {
			 url: '/masters/hall-type/add',
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Hall Type',
				 masterName: 'HALLTYPE',
				 listState: 'dashboard.hallType',
				 editState: 'dashboard.editHallType'
			 }
		 })
		 .state('dashboard.editHallType', {
			 url: '/masters/hall-type/edit/:id',
			 params: {
				 id: null
			 },
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Hall Type',
				 masterName: 'HALLTYPE',
				 listState: 'dashboard.hallType',
				 editState: 'dashboard.editHallType'
			 }
		 })


		  .state('dashboard.bestSuitedFor', {
			  url: '/masters/best-suited-for',
			  templateUrl: '/views/states/dashboard/masters/best-suited-for.html',
			  controller: 'CtrlBestSuited',
			  data: {
				  title: 'Best Suited For (Home Page)',
				  createUrl: '/dashboard/masters/best-suited-for/add',
				  editUrl: '/dashboard/masters/best-suited-for/edit/',
				  masterName: 'BESTSUITEDFOR'
			  }
		  })
		 .state('dashboard.createBestSuitedFor', {
			 url: '/masters/best-suited-for/add',
			 templateUrl: '/views/states/dashboard/masters/add-best-suited-for.html',
			 controller: 'CtrlAddBestSuited',
			 data: {
				 title: 'Best Suited For (Home Page)',
				 masterName: 'BESTSUITEDFOR',
				 listState: 'dashboard.bestSuitedFor',
				 editState: 'dashboard.editBestSuitedFor'
			 }
		 })
		 .state('dashboard.editBestSuitedFor', {
			 url: '/masters/best-suited-for/edit/:id',
			 params: {
				 id: null
			 },
			 templateUrl: '/views/states/dashboard/masters/add-best-suited-for.html',
			 controller: 'CtrlAddBestSuited',
			 data: {
				 title: 'Best Suited For (Home Page)',
				 masterName: 'BESTSUITEDFOR',
				 listState: 'dashboard.bestSuitedFor',
				 editState: 'dashboard.editBestSuitedFor'
			 }
		 })


		 .state('dashboard.venueCategory', {
			 url: '/masters/venue-category',
			 templateUrl: '/views/states/dashboard/masters/masters.html',
			 controller: 'CtrlMasters',
			 data: {
				 title: 'Venue Category',
				 createUrl: '/dashboard/masters/venue-category/add',
				 editUrl: '/dashboard/masters/venue-category/edit/',
				 masterName: 'VENUECATEGORY'
			 }
		 })
		 .state('dashboard.createVenueCategory', {
			 url: '/masters/venue-category/add',
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Venue Category',
				 masterName: 'VENUECATEGORY',
				 listState: 'dashboard.venueCategory',
				 editState: 'dashboard.editVenueCategory'
			 }
		 })
		 .state('dashboard.editVenueCategory', {
			 url: '/masters/venue-category/edit/:id',
			 params: {
				 id: null
			 },
			 templateUrl: '/views/states/dashboard/masters/add-master.html',
			 controller: 'CtrlAddMaster',
			 data: {
				 title: 'Venue Category',
				 masterName: 'VENUECATEGORY',
				 listState: 'dashboard.venueCategory',
				 editState: 'dashboard.editVenueCategory'
			 }
		 })
         .state('dashboard.occasionType', {
             url: '/masters/occasion-type',
             templateUrl: '/views/states/dashboard/masters/masters.html',
             controller: 'CtrlMasters',
             data: {
                 title: 'Occasion Type',
                 createUrl: '/dashboard/masters/occasion-type/add',
                 editUrl: '/dashboard/masters/occasion-type/edit/',
                 masterName: 'OCASSIONSTYPE'
             }
         })
         .state('dashboard.createOccasionType', {
             url: '/masters/occasion-type/add',
             templateUrl: '/views/states/dashboard/masters/add-master.html',
             controller: 'CtrlAddMaster',
             data: {
                 title: 'Occasion Type',
                 masterName: 'OCASSIONSTYPE',
                 listState: 'dashboard.occasionType',
                 editState: 'dashboard.editOccasionType'
             }
         })
         .state('dashboard.editOccasionType', {
             url: '/masters/occasion-type/edit/:id',
             params: {
                 id: null
             },
             templateUrl: '/views/states/dashboard/masters/add-master.html',
             controller: 'CtrlAddMaster',
             data: {
                 title: 'Occasion Type',
                 masterName: 'OCASSIONSTYPE',
                 listState: 'dashboard.occasionType',
                 editState: 'dashboard.editOccasionType'
             }
         })


         .state('dashboard.occasion', {
             url: '/masters/occasion',
             templateUrl: '/views/states/dashboard/masters/child-masters.html',
             controller: 'CtrlChildMaster',
             data: {
                 title: 'Occasion',
                 createUrl: '/dashboard/masters/occasion/add',
                 editUrl: '/dashboard/masters/occasion/edit/',
                 masterName: 'OCASSIONS',
                 parentTitle: 'Occasion Type'
             }
         })
         .state('dashboard.createOccassion', {
             url: '/masters/occasion/add',
             templateUrl: '/views/states/dashboard/masters/add-child-master.html',
             controller: 'CtrlAddChildMaster',
             data: {
                 title: 'Occasion',
                 masterName: 'OCASSIONS',
                 listState: 'dashboard.occasion',
                 editState: 'dashboard.editOccasion',
                 parentMasterName: 'OCASSIONSTYPE',
                 parentTitle: 'Occasion Type'
             }
         })
         .state('dashboard.editOccasion', {
             url: '/masters/occasion/edit/:id',
             params: {
                 id: null
             },
             templateUrl: '/views/states/dashboard/masters/add-child-master.html',
             controller: 'CtrlAddChildMaster',
             data: {
                 title: 'Occasion',
                 masterName: 'OCASSIONS',
                 listState: 'dashboard.occasion',
                 editState: 'dashboard.editOccasion',
                 parentMasterName: 'OCASSIONSTYPE',
                 parentTitle: 'Occasion Type'
             }
         })

         .state('dashboard.country', {
             url: '/masters/country',
             templateUrl: '/views/states/dashboard/masters/masters.html',
             controller: 'CtrlMasters',
             data: {
                 title: 'Country',
                 createUrl: '/dashboard/masters/country/add',
                 editUrl: '/dashboard/masters/country/edit/',
                 masterName: 'COUNTRY'
             }
         })
         .state('dashboard.createCountry', {
             url: '/masters/country/add',
             templateUrl: '/views/states/dashboard/masters/add-master.html',
             controller: 'CtrlAddMaster',
             data: {
                 title: 'Country',
                 masterName: 'COUNTRY',
                 listState: 'dashboard.country',
                 editState: 'dashboard.editCountry'
             }
         })
         .state('dashboard.editCountry', {
             url: '/masters/country/edit/:id',
             params: {
                 id: null
             },
             templateUrl: '/views/states/dashboard/masters/add-master.html',
             controller: 'CtrlAddMaster',
             data: {
                 title: 'Country',
                 masterName: 'COUNTRY',
                 listState: 'dashboard.country',
                 editState: 'dashboard.editCountry'
             }
         })


         .state('dashboard.state', {
             url: '/masters/state',
             templateUrl: '/views/states/dashboard/masters/child-masters.html',
             controller: 'CtrlChildMaster',
             data: {
                 title: 'State',
                 createUrl: '/dashboard/masters/state/add',
                 editUrl: '/dashboard/masters/state/edit/',
                 masterName: 'STATE',
                 parentTitle: 'Country Name'
             }
         })
         .state('dashboard.createState', {
             url: '/masters/state/add',
             templateUrl: '/views/states/dashboard/masters/add-child-master.html',
             controller: 'CtrlAddChildMaster',
             data: {
                 title: 'State',
                 masterName: 'STATE',
                 listState: 'dashboard.state',
                 editState: 'dashboard.editState',
                 parentMasterName: 'COUNTRY',
                 parentTitle: 'Country Name'
             }
         })
         .state('dashboard.editState', {
             url: '/masters/state/edit/:id',
             params: {
                 id: null
             },
             templateUrl: '/views/states/dashboard/masters/add-child-master.html',
             controller: 'CtrlAddChildMaster',
             data: {
                 title: 'State',
                 masterName: 'STATE',
                 listState: 'dashboard.state',
                 editState: 'dashboard.editState',
                 parentMasterName: 'COUNTRY',
                 parentTitle: 'Country Name'
             }
         })
         .state('dashboard.city', {
             url: '/masters/city',
             templateUrl: '/views/states/dashboard/masters/city-masters.html',
             controller: 'CtrlCityMaster',
             data: {
                 title: 'City',
                 createUrl: '/dashboard/masters/city/add',
                 editUrl: '/dashboard/masters/city/edit/',
                 masterName: 'CITIES',
                 parentMasterName: 'STATE',
                 parentTitle: 'State Name'
             }
         })
         .state('dashboard.createCity', {
             url: '/masters/city/add',
             templateUrl: '/views/states/dashboard/masters/add-city-master.html',
             controller: 'CtrlAddCityMaster',
             data: {
                 title: 'City',
                 masterName: 'CITIES',
                 listState: 'dashboard.city',
                 editState: 'dashboard.editCity',
                 parentMasterName: 'STATE',
                 parentTitle: 'State Name'
             }
         })
         .state('dashboard.editCity', {
             url: '/masters/city/edit/:id',
             params: {
                 id: null
             },
             templateUrl: '/views/states/dashboard/masters/add-city-master.html',
             controller: 'CtrlAddCityMaster',
             data: {
                 title: 'City',
                 masterName: 'CITIES',
                 listState: 'dashboard.city',
                 editState: 'dashboard.editCity',
                 parentMasterName: 'STATE',
                 parentTitle: 'State Name'
             }
         })
         .state('dashboard.coupon', {
			url: '/masters/coupon',
			templateUrl: '/views/states/dashboard/masters/coupons.html',
			controller: 'CtrlMasters',
			data: {
				title: 'Coupons',
				createUrl: '/dashboard/masters/coupon/add',
				editUrl: '/dashboard/masters/coupon/edit/',
				masterName: 'COUPONS'
			}
         })
         .state('dashboard.createCoupon', {
			url: '/masters/coupon/add',
			templateUrl: '/views/states/dashboard/masters/add-coupon.html',
			controller: 'CtrlAddCoupon',
			data: {
				title: 'Coupon',
				masterName: 'COUPONS',
				listState: 'dashboard.coupons',
				editState: 'dashboard.editCoupon'
			}
         })
         .state('dashboard.editCoupon', {
             url: '/masters/coupon/edit/:id',
             params: {
                 id: null
             },
             templateUrl: '/views/states/dashboard/masters/add-coupon.html',
             controller: 'CtrlAddCoupon',
             data: {
                 title: 'Coupon',
                 masterName: 'COUPONS',
                 listState: 'dashboard.coupon',
                 editState: 'dashboard.editCoupon'
             }
         })
         .state('dashboard.tempPage', {
             url: '/temp-page',
             templateUrl: '/views/states/dashboard/testimonials.html',
             data: {
                 title: 'Temp'
             }
         })

	// .state('dashboard.venueconfiguration', {
	//     url: '/venueconfiguration',
	//     templateUrl: '/views/states/dashboard/venueconfiguration.html',
	//     data: {
	//         title: 'Venue Configuration',
	//     }
	// })
	// .state('dashboard.venuecategory', {
	//     url: '/venuecategory',
	//     templateUrl: '/views/states/dashboard/venuecategory.html',
	//     data: {
	//         title: 'Venue Category',
	//     }
	// })

	// .state('dashboard.menucategory', {
	//     url: '/menucategory',
	//     templateUrl: '/views/states/dashboard/menucategory.html',
	//     data: {
	//         title: 'Menu Category',
	//     }
	// })
	// .state('dashboard.menumaster', {
	//     url: '/menumaster',
	//     templateUrl: '/views/states/dashboard/menumaster.html',
	//     data: {
	//         title: 'Menu Master',
	//     }
	// })
	// .state('dashboard.ratingmaster', {
	//     url: '/ratingmaster',
	//     templateUrl: '/views/states/dashboard/ratingmaster.html',
	//     data: {
	//         title: 'Rating Master',
	//     }
	// })
	// .state('dashboard.newsletters', {
	//     url: '/newsletters',
	//     templateUrl: '/views/states/dashboard/newsletters.html',
	//     data: {
	//         title: 'Newsletters',
	//     }
	// })
	// .state('dashboard.pricerange', {
	//     url: '/pricerange',
	//     templateUrl: '/views/states/dashboard/pricerange.html',
	//     data: {
	//         title: 'Price Range',
	//     }
	// })
	// .state('dashboard.timeslot', {
	//     url: '/timeslot',
	//     templateUrl: '/views/states/dashboard/timeslot.html',
	//     data: {
	//         title: 'Time Slot',
	//     }
	// })
	// .state('dashboard.visitstatus', {
	//     url: '/visitstatus',
	//     templateUrl: '/views/states/dashboard/visitstatus.html',
	//     data: {
	//         title: 'Visit Status',
	//     }
	// })
	// .state('dashboard.quicktalkdetails', {
	//     url: '/quicktalkdetails',
	//     templateUrl: '/views/states/dashboard/quicktalkdetails.html',
	//     data: {
	//         title: 'Quick Talk Details',
	//     }
	// })
	// .state('dashboard.country', {
	//     url: '/country',
	//     templateUrl: '/views/states/dashboard/country.html',
	//     data: {
	//         title: 'Country',
	//     }
	// })
	// .state('dashboard.state', {
	//     url: '/state',
	//     templateUrl: '/views/states/dashboard/state.html',
	//     data: {
	//         title: 'State',
	//     }
	// })
	// .state('dashboard.city', {
	//     url: '/city',
	//     templateUrl: '/views/states/dashboard/city.html',
	//     data: {
	//         title: 'City',
	//     }
	// })
	// .state('dashboard.region', {
	//     url: '/region',
	//     templateUrl: '/views/states/dashboard/region.html',
	//     data: {
	//         title: 'Region',
	//     }
	// })
	// .state('dashboard.reports', {
	//     url: '/reports',
	//     templateUrl: '/views/states/dashboard/reports.html',
	//     data: {
	//         title: 'Reports',
	//     }
	// })
	;

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	function load(srcs, callback) {
		return {
			deps: ['$ocLazyLoad', '$q',
				function ($ocLazyLoad, $q) {
					var deferred = $q.defer();
					var promise = false;
					srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
					if (!promise) {
						promise = deferred.promise;
					}
					angular.forEach(srcs, function (src) {
						promise = promise.then(function () {
							angular.forEach(MODULE_CONFIG, function (module) {
								if (module.name == src) {
									if (!module.module) {
										name = module.files;
									} else {
										name = module.name;
									}
								} else {
									name = src;
								}
							});
							return $ocLazyLoad.load(name);
						});
					});
					deferred.resolve();
					return callback ? promise.then(function () {
						return callback();
					}) : promise;
				}
			]
		}
	}

	// $locationProvider.html5Mode({
	// 	enabled: false
	// });
} ])