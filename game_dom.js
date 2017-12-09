/*global jQuery, friGame */
/*jshint bitwise: true, curly: true, eqeqeq: true, esversion: 3, forin: true, freeze: true, funcscope: true, futurehostile: true, iterator: true, latedef: true, noarg: true, nocomma: true, nonbsp: true, nonew: true, notypeof: false, shadow: outer, singleGroups: false, strict: true, undef: true, unused: true, varstmt: false, eqnull: false, plusplus: true, browser: true, laxbreak: true, laxcomma: true */

(function ($, fg) {
	'use strict';

	fg.ready(function () {
		var
			LOADING_BAR_WIDTH = $('#loadingBarB').width()
		;

		// Initialize resources
		fg.resourceManager
		;

		// Initialize loadCallback
		fg.loadCallback(function (percent) {
			$('#loadingBar').width(LOADING_BAR_WIDTH * percent);
		});

		// Initialize the start button
		$('#startbutton').click(function () {
			fg.startGame(function () {
				$('#welcomeScreen').fadeTo(1000, 0, function () {
					$(this).remove();
				});

				// Initialize the playground
				fg.playground()
				;

				// Game logic
				fg.playground().registerCallback(function () {
				});
			});
		});
	});
}(jQuery, friGame));

