app.controller('MainController',['$scope', function($scope){
	$scope.promo = 'Our products';
	$scope.title = 'Search results for...'; 
	
	$scope.products = [
	{   id: 1,
		name: 'Danish Apple Pastry',
		price: 10,
		src: 'media/images/danish1.png',
		likes: 0,
		country: 'Danish'
	},
	{
		id: 2,
		name: 'Cream Danish Pastry',
		price: 11,
		src: 'media/images/danish2.png',
		likes: 0,
		country: 'Danish'
	},
	{
		id: 3,
		name: 'Danish Forest Fruits',
		price: 7.8,
		src: 'media/images/danish3.png',
		likes: 0,
		country: 'Danish'
	},
	{
		id: 4,
		name: 'Danish Snails',
		price: 5,
		src: 'media/images/danish4.png',
		likes: 0,
		country: 'Danish'
	},
	{
		id: 5,
		name: 'Danish Pastry Triangle',
		price: 17,
		src: 'media/images/danish5.png',
		likes: 0,
		country: 'Danish'
	},
	{
		id: 6,
		name: 'Danish Pinwheel',
		price: 7,
		src: 'media/images/danish6.png',
		likes: 0,
		country: 'Danish'
	},
	{
		id: 7,
		name: 'Danish Wienerstang',
		price: 9,
		src: 'media/images/danish7.png',
		likes: 0,
		country: 'Danish'
	},
	
	{
		id: 8,
		name: 'Apple Strudel',
		price: 9.6,
		src: 'media/images/applestrudel.png',
		likes: 0,
		country: 'Austrian'
	},
	{
		id: 9,
		name: 'Croissant Apricot',
		price: 7.6,
		src: 'media/images/croissantapricot.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 10,
		name: 'Croissant Butter',
		price: 6,
		src: 'media/images/croissantbutter.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 11,
		name: 'Croissant Chocolate',
		price: 8,
		src: 'media/images/croissantchoco.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 12,
		name: 'Croissant and Moka Coffee',
		price: 7.6,
		src: 'media/images/croissantcoffee.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 13,
		name: 'Croissant Vanilla',
		price: 11,
		src: 'media/images/croissantvanilla.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 14,
		name: 'Pain aux Raisins',
		price: 7,
		src: 'media/images/painauxraisins.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 15,
		name: 'Vanilla & Almond Tart',
		price: 12,
		src: 'media/images/vanillaalmondtart.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 16,
		name: 'Strawberry Custard Tart',
		price: 10,
		src: 'media/images/strawberryCustardTarts.png',
		likes: 0,
		country: 'French'
	},
	{
		id: 17,
		name: 'Mocha Cupcake',
		price: 5.6,
		src: 'media/images/mochacup.jpg',
		likes: 0,
		country: 'Serbia'
	},
	{
		id: 18,
		name: 'Choco Cupcake',
		price: 5,
		src: 'media/images/chococup.png',
		likes: 0,
		country: 'Serbia'
	},
	{
		id: 19,
		name: 'Caramel Cupcake',
		price: 6,
		src: 'media/images/caramelcup.png',
		likes: 0,
		country: 'Serbia'
	},
	{
		id: 20,
		name: 'Greek Spinat pie',
		price: 12,
		src: 'media/images/spinatpie.jpg',
		likes: 0,
		country: 'Balkan'+'Greek' 
	},
	{
		id: 21,
		name: 'Balkan White bread',
		price: 5,
		src: 'media/images/balkanwhite.png',
		likes: 0,
		country: 'Balkan'+'Serbia'
	},
	{
		id: 22,
		name: 'Serbian Pogacha',
		price: 6,
		src: 'media/images/balkanpogaca.png',
		likes: 0,
		country: 'Serbia'+'Balkan'
	},
	{
		id: 23,
		name: 'Panonian Cipovka',
		price: 6,
		src: 'media/images/cipovka.png',
		likes: 0,
		country: 'Panonia'+'Hungarian'
	},
	{
		id: 24,
		name: 'Balkan Somun',
		price: 4.5,
		src: 'media/images/somun.png',
		likes: 0,
		country: 'Balkan'+'Serbia'+'Turkey'
	},
	{
		id: 25,
		name: 'Olive bread',
		price: 7,
		src: 'media/images/olivebread.png',
		likes: 0,
		country: 'Mediterranean'+'Greek'
	},
	{
		id: 26,
		name: 'Baguette',
		price: 5,
		src: 'media/images/baguette.png',
		likes: 0,
		country: 'French'+'Mediterranean'
	},
	{
		id: 27,
		name: 'Finnish Rye bread',
		price: 8,
		src: 'media/images/finishbread.png',
		likes: 0,
		country: 'Finland'+'Rye'
	},	
	{
		id: 28,
		name: 'Latvian bread',
		price: 8.6,
		src: 'media/images/latvian.png',
		likes: 0,
		country: 'Latvia'+'Rye'
	},
	{
		id: 29,
		name: 'Russian black bread',
		price: 7.5,
		src: 'media/images/russianblack.png',
		likes: 0,
		country: 'Russian'+'Rye'
	}
		
	]
	
	/** ADD to cart function **/
	
	
	
	/** like function **/
	$scope.plusOne = function(index) { 
	$scope.products[index].likes += 1; 	
};	
	
	
}]);