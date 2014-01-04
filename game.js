/*global jQuery, friGame */
/*jslint white: true, browser: true */

(function ($, fg) {
	'use strict';

	var
		REFRESH_RATE = 15
	;

	$(function () {
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
				}, REFRESH_RATE);
			});
		});
	});
}(jQuery, friGame));

