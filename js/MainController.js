app.controller('MainController',['$scope', function($scope){
	$scope.promo = 'Our products';
	$scope.title = 'Search results...'; 
	
	$scope.products = [
	{   name: 'Danish Apple Pastry',
		price: '10$',
		src: 'media/images/danish1.png'		
	},
	{
		name: 'Cream Danish Pastry',
		price: '11$',
		src: 'media/images/danish2.png'
	},
	{
		name: 'Danish Forest Fruits',
		price: '7.8$',
		src: 'media/images/danish3.png'
	},
	{
		name: 'Danish Snails',
		price: '5$',
		src: 'media/images/danish4.png'
	},
	{
		name: 'Danish Pastry Triangle',
		price: '17$',
		src: 'media/images/danish5.png'
	},
	{
		name: 'Danish Pinwheel',
		price: '7$',
		src: 'media/images/danish6.png'
	},
	{
		name: 'Danish Wienerstang',
		price: '9$',
		src: 'media/images/danish7.png'
	}






	
	];
	/** Search box 
	$scope.search= function(val) {
		// fetch data
	};**/
}]);