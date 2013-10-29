// THIS IS PSEUDO CODE!!

// this is a skeleton: things to look up include '$q' and '$http'



angular.module('myApp').value('AppConfigurations', {
	baseUrl: '...'	
});


angular.module('myApp').factory('Users', function ($http, AppConfigurations, $q) {
	var userUrl = AppConfigurations.baseUrl + '/users';

	var users = {
		...		
	};

	return {

		get : function (cb) {
			var deferred = $q.defer();

			$http({
				'get' : '',
				'url' : '',
				'cache': true
			}).success(function (data) {
				deferred.resolve(data);
			})
			.error(function() {

			});

			return deferred.promise;
		},

		post : function () {
			
		},

		put : function () {
			
		}

	}

});



//ctrl
function Ctrl (Users){


	Users.get()
		.then(function (data) {
			var d = $q.defer();

			console.log(something);

			return d.promise; 
		}).then(function (data) {

		})
}
