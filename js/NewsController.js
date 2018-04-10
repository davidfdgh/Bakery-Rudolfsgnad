app.controller('NewsController',['$scope', function($scope){	
	$scope.articles = [
	{
		title: 'New sale point in Novi Sad',
		date: '03.03.2018.',
		text: 'We are happy to anounce! We have openned the biggest shop in Novi Sad, last weekend.'
	},
	{
		title: 'Prize for the best quality brand 2017',
		date: '11.02.2018.',
		text: 'Proud to anounce! Winners for year 2017 s best brands! We left behind companies such as Telenor, Nis, McEricson'
	},	
	{
		title: 'Red Cross activism',
		date: '15.01.2018.',
		text: 'In order to everyone have warm and festive holidays, we participared in donation for local Social Center for homeless',
	},
	{
		title: 'Sponsorship with FC Red Star',
		date: '04.01.2018.',
		text: 'Who could guess? We made significant move, seeking the best partners in order to grow together',
	},
	{
		title: 'The Biggest Retail Brand',
		date: '21.11.2017.',
		text: 'By independent strategic marketing research, done by EY. We are placed at 1st place in the Vojvodina Province.',
	},
	
	
	];
	
}]);