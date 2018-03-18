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
	{
		name: 'Mocha Cupcake',
		price: '5.6$',
		src: 'media/images/mochacup.jpg',
		country: 'Serbia'
	},
	{
		name: 'Choco Cupcake',
		price: '5$',
		src: 'media/images/chococup.png',
		country: 'Serbia'
	},
	{
		name: 'Caramel Cupcake',
		price: '6$',
		src: 'media/images/caramelcup.png',
		country: 'Serbia'
	},
	{
		name: 'Greek Spinat pie',
		price: '12$',
		src: 'media/images/spinatpie.jpg',
		country: 'Balkan'+'Greek' 
	},
	{
		name: 'Balkan White bread',
		price: '5$',
		src: 'media/images/balkanwhite.png',
		country: 'Balkan'+'Serbia'
	},
	{
		name: 'Serbian Pogacha',
		price: '6$',
		src: 'media/images/balkanpogaca.png',
		country: 'Serbia'+'Balkan'
	},
	{
		name: 'Panonian Cipovka',
		price: '6$',
		src: 'media/images/cipovka.png',
		country: 'Panonia'+'Hungarian'
	},
	{
		name: 'Balkan Somun',
		price: '4.5$',
		src: 'media/images/somun.png',
		country: 'Balkan'+'Serbia'+'Turkey'
	},
	{
		name: 'Olive bread',
		price: '7$',
		src: 'media/images/olivebread.png',
		country: 'Mediterranean'+'Greek'
	},
	{
		name: 'Baguette',
		price: '5$',
		src: 'media/images/baguette.png',
		country: 'French'+'Mediterranean'
	},
	{
		name: 'Finnish Rye bread',
		price: '8$',
		src: 'media/images/finishbread.png',
		country: 'Finland'+'Rye'
	},	
	{
		name: 'Latvian bread',
		price: '8.6$',
		src: 'media/images/latvian.png',
		country: 'Latvia'+'Rye'
	},
	{
		name: 'Russian black bread',
		price: '7.5$',
		src: 'media/images/russianblack.png',
		country: 'Russian'+'Rye'
	}
		
	];
	
	
	
}]);