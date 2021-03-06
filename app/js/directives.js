define(function(require){
	'use strict';

    var angular = require('angular');
    var services = require('services');

    /* Directives */

	angular.module('numeralsweb.directives', ['numeralsweb.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});
