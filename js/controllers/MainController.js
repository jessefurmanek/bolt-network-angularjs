app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [{
	  series: "Sherlock",
	  series_img: "img/sherlock.jpg",
	  genre: "Crime drama",
	  season: 3,
	  episode: "The Empty Hearse",
	  description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
	  datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
	},
	
	{
	  series: "Game of Thrones",
	  series_img: "http://cdn1.vox-cdn.com/assets/4229567/game-of-thrones-poster_85627-1920x1200.jpg",
	  genre: "Awesome",
	  season: 3,
	  episode: "Lord Snow",
	  description: "Daenerys (Emilia Clarke) is beginning to gain confidence in her new role as the Khal's wife and gains the respect of the exiled knight Ser Jorah Mormont (Iain Glen). But the relationship with her brother Viserys (Harry Lloyd) becomes strained when he angrily assaults her under the assumption that she is giving him commands. As punishment, Viserys is choked and nearly killed by Daenerys's bloodrider Rakharo (Elyes Gabel) and is forced to walk back to camp after Daenerys intervenes to spare his life.",
	  datetime: new Date(2013, 11, 31, 21, 00, 00, 00)
	}
	]
}

]);