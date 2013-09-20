$ = jQuery
fg = friGame

REFRESH_RATE = 15

$(() ->
	# Initialize resources
	fg.resourceManager

	# Initialize loadCallback
	fg.loadCallback((percent) ->
		$('#loadingBar').width(400 * percent)
		return false
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
				return false
			, REFRESH_RATE)
		)
	)
)

