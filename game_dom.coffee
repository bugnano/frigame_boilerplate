'use strict'

$ = jQuery
fg = friGame

fg.ready(() ->
	LOADING_BAR_WIDTH = $('#loadingBarB').width()

	# Initialize resources
	fg.resourceManager

	# Initialize loadCallback
	fg.loadCallback((percent) ->
		$('#loadingBar').width(LOADING_BAR_WIDTH * percent)
		return
	)

	# Initialize the start button
	$('#startbutton').click(() ->
		fg.startGame(() ->
			$('#welcomeScreen').fadeTo(1000, 0, () ->
				$(@).remove()
			)

			# Initialize the playground
			fg.playground()

			# Game logic
			fg.playground().registerCallback(() ->
				return
			)
		)
	)
)

