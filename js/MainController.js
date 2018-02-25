app.controller('MainController', ['$scope', 
function($scope){
	$scope.promo = 'Our products';
	$scope.title = 'Die beste kamionen'; 
	$scope.products = [
	{
		name: 'Danish Apple Pastry',
		price: 10$,
		image: 'media/images/danish-aeblestang.png'		
	},
	{
		name: 'Cream Danish Pastry',
		price: 11$,
		image: 'media/images/danish-ceam-buns.png'
	},
	{
		name:
		price:
		image:
	},
	{
		name:
		price:
		image:
	},
	{
		name:
		price:
		image:
	},
	{
		name:
		price:
		image:
	},
	{
		name:
		price:
		image:
	},
	
	];
	/** Search box ***/
	$scope.search= function(val) {
		// fetch data
	};
}]);