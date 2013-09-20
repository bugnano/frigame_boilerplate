/*global jQuery, friGame */
/*jslint sloppy: true, white: true, browser: true */

(function ($, fg) {
	var
		REFRESH_RATE = 15
	;

	$(function () {
		// Initialize resources
		fg.resourceManager
		;

		// Initialize loadCallback
		fg.loadCallback(function (percent) {
			$('#loadingBar').width(400 * percent);
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

