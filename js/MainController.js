app.controller('MainController',['$scope', function($scope){
	$scope.promo = 'Our products';
	$scope.title = 'Search results for...'; 
	
	$scope.products = [
	{   name: 'Danish Apple Pastry',
		price: '10$',
		src: 'media/images/danish1.png',
		country: 'Danish'
	},
	{
		name: 'Cream Danish Pastry',
		price: '11$',
		src: 'media/images/danish2.png',
		country: 'Danish'
	},
	{
		name: 'Danish Forest Fruits',
		price: '7.8$',
		src: 'media/images/danish3.png',
		country: 'Danish'
	},
	{
		name: 'Danish Snails',
		price: '5$',
		src: 'media/images/danish4.png',
		country: 'Danish'
	},
	{
		name: 'Danish Pastry Triangle',
		price: '17$',
		src: 'media/images/danish5.png',
		country: 'Danish'
	},
	{
		name: 'Danish Pinwheel',
		price: '7$',
		src: 'media/images/danish6.png',
		country: 'Danish'
	},
	{
		name: 'Danish Wienerstang',
		price: '9$',
		src: 'media/images/danish7.png',
		country: 'Danish'
	},
	{
		name: 'Apple Strudel',
		price: '9.6$',
		src: 'media/images/applestrudel.png',
		country: 'Austrian'
	},
	{
		name: 'Croissant Apricot',
		price: '7.6$',
		src: 'media/images/croissantapricot.png',
		country: 'French'
	},
	{
		name: 'Croissant Butter',
		price: '6$',
		src: 'media/images/croissantbutter.png',
		country: 'French'
	},
	{
		name: 'Croissant Chocolate',
		price: '8$',
		src: 'media/images/croissantchoco.png',
		country: 'French'
	},
	{
		name: 'Croissant and Moka Coffee',
		price: '2$ + 5.6$',
		src: 'media/images/croissantcoffee.png',
		country: 'French'
	},
	{
		name: 'Croissant Vanilla',
		price: '11$',
		src: 'media/images/croissantvanilla.png',
		country: 'French'
	},
	{
		name: 'Pain aux Raisins',
		price: '7$',
		src: 'media/images/painauxraisins.png',
		country: 'French'
	},
	{
		name: 'Vanilla & Almond Tart',
		price: '12$',
		src: 'media/images/vanillaalmondtart.png',
		country: 'French'
	},
	{
		name: 'Strawberry Custard Tart',
		price: '10$',
		src: 'media/images/strawberryCustardTarts.png',
		country: 'French'
	},




	
	];
	/** Search box 
	$scope.search= function(val) {
		// fetch data
	};**/
}]);