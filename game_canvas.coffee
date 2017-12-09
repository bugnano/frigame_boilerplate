'use strict'

fg = friGame

fg.ready(() ->
	# Initialize resources
	fg.resourceManager

	# Initialize loadCallback
	fg.loadCallback((percent) ->
		document.getElementById('loadingBar').style.width = "#{Math.round(percent * 100)}%"
		return
	)

	# Initialize the start button
	document.getElementById('startbutton').addEventListener('click', () ->
		fg.startGame(() ->
			el = document.getElementById('welcomeScreen')
			el.parentNode.removeChild(el)

			# Initialize the playground
			fg.playground()

			# Game logic
			fg.playground().registerCallback(() ->
				return
			)
		)
	, false)
)

