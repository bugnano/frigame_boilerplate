/*global friGame */
/*jshint bitwise: true, curly: true, eqeqeq: true, esversion: 3, forin: true, freeze: true, funcscope: true, futurehostile: true, iterator: true, latedef: true, noarg: true, nocomma: true, nonbsp: true, nonew: true, notypeof: false, shadow: outer, singleGroups: false, strict: true, undef: true, unused: true, varstmt: false, eqnull: false, plusplus: true, browser: true, laxbreak: true, laxcomma: true */

(function (fg) {
	'use strict';

	fg.ready(function () {
		// Initialize resources
		fg.resourceManager
		;

		// Initialize loadCallback
		fg.loadCallback(function (percent) {
			document.getElementById('loadingBar').style.width = String(Math.round(percent * 100)) + '%';
		});

		// Initialize the start button
		document.getElementById('startbutton').addEventListener('click', function () {
			fg.startGame(function () {
				var
					el = document.getElementById('welcomeScreen')
				;

				el.parentNode.removeChild(el);

				// Initialize the playground
				fg.playground()
				;

				// Game logic
				fg.playground().registerCallback(function () {
				});
			});
		}, false);
	});
}(friGame));

