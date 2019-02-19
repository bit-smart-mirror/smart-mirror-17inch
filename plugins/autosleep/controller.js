function AutoSleep($http, $q, SpeechService,AutoSleepService, Focus) {


    // Hide everything and "sleep"
	SpeechService.addCommand('sleep', function () {
		console.debug("Ok, going to sleep...");
		Focus.change("all-sleep");
	});

}

angular.module('SmartMirror')
    .controller('AutoSleep', AutoSleep);