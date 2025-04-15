cropImage = undefined
cropperCoords = undefined

filesExt = [
	'jpg'
	'png'
	'jpeg'
]
imageSave = undefined

savedImg = undefined
savedStorage = undefined
savedCaption = undefined

inputs = $('.changed-info').find('select, input')

$('#personPhoto').on 'change', (e) ->

	if $('#profileImage').find('img').length > 0
		storage = window.localStorage
		savedStorage = storage.getItem 'userpic'
		savedImg = $('#genPhoto').find('img').attr 'src'
		savedCaption = $('#personPhoto').siblings('.file-name').text().trim()

	parts = $(this).val().toLowerCase().split('.')
	if filesExt.join().search(parts[parts.length - 1]) == -1
		$(this).siblings('.alert').text('Only png/jpg files allowed').css 'opacity', '1'
		$(this).siblings('.file-name').css('border', '1px solid #FF5E5E').css 'color', '#FF5E5E'
		self = this
		setTimeout (->
			$(self).siblings('.alert').css 'opacity', '0'
			$(self).siblings('.file-name').css('border', '').css 'color', '#5d6778'
			$(self).siblings('.file-name').text 'png, .jpg, .jpeg, up to 2MB'
			$(self).val ''
			return
		), 3000, self
		return

	else if @files[0].size > 2100000
		$(this).siblings('.alert').text('Only files up to 2MB allowed').css 'opacity', '1'
		$(this).siblings('.file-name').css('border', '1px solid #FF5E5E').css 'color', '#FF5E5E'
		self = this
		setTimeout (->
			$(self).siblings('.alert').css 'opacity', '0'
			$(self).siblings('.file-name').css('border', '').css 'color', '#5d6778'
			$(self).siblings('.file-name').text 'png, .jpg, .jpeg, up to 2MB'
			$(self).val ''
			return
		), 3000, self
		return

	canvasData = undefined
	cropBoxData = undefined
	cropper = undefined
	files = undefined
	fr = undefined
	image = undefined
	src = undefined
	self = this
	# console.log $(this).val()
	files = e.target.files
	fr = new FileReader

	fr.onload = ->
		$('#image').attr 'src', fr.result
		if $(self).val() and $(self).data('popup').length > 0
			src = $(self).attr('data-popup')
			image = document.getElementById('image')
			cropBoxData = undefined
			canvasData = undefined
			cropper = undefined
			setTimeout (=>
				$.magnificPopup.open
					items: src: "#crop-photo-popup"
					closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>'
					type: 'inline'
					closeOnBgClick: false
		
				$.magnificPopup.instance.st.callbacks = {
					close: ->
						cropBoxData = cropper.getCropBoxData()
						canvasData = cropper.getCanvasData()
						cropper.destroy()
						return
				}
				return
				), 50
			
			setTimeout (=>
				cropper = new Cropper(image,
					aspectRatio: 1 / 1
					scalable: false
					zoomable: false
					zoomOnTouch: false
					zoomOnWheel: false
					autoCropArea: .5
					crop: (coord) ->
						cropperCoords = coord
						coord
					ready: ->
						cropper.setCropBoxData(cropBoxData).setCanvasData canvasData
						return
					)
				return
				), 55
		# console.log imageSave
		return

	fr.readAsDataURL files[0]

	return

cropImage = (image, coord) ->
	bbox = undefined
	canvas = undefined
	ctx = undefined
	canvas = document.createElement('canvas')
	ctx = canvas.getContext('2d')
	bbox = image.getBoundingClientRect()
	canvas.width = coord.detail.width
	canvas.height = coord.detail.height
	ctx.drawImage image, -coord.detail.x, -coord.detail.y, image.width, image.height
	canvas.toDataURL().replace new RegExp('data:image/png;base64,', 'gim'), ''

$ '#profileImage'
	.click ->
		image = document.getElementById 'image'
		imageSrc = localStorage.getItem 'userpic'


		if localStorage['userpic']
			$(image).attr 'src', imageSrc
			cropBoxData = undefined
			canvasData = undefined
			cropper = undefined

			setTimeout (=>
				$.magnificPopup.open
					items: src: "#crop-photo-popup"
					closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>'
					type: 'inline'
					closeOnBgClick: false
		
				$.magnificPopup.instance.st.callbacks = {
					close: ->
						cropBoxData = cropper.getCropBoxData()
						canvasData = cropper.getCanvasData()
						cropper.destroy()

						return
				}
				return
				), 10
			
			setTimeout (=>
				cropper = new Cropper(image,
					aspectRatio: 1 / 1
					scalable: false
					zoomable: false
					zoomOnTouch: false
					zoomOnWheel: false
					autoCropArea: .5
					crop: (coord) ->
						cropperCoords = coord
						coord
					ready: ->
						cropper.setCropBoxData(cropBoxData).setCanvasData canvasData
						return
					)
				return
				), 15
		return

$ '[data-photo-remove]'
	.click ->
		$('.userpic').find('img').addClass 'hidden'
		$(@).addClass 'hidden'
		$('#personPhoto').siblings('.file-name').html 'png, .jpg, .jpeg, up to 2MB'
		cropedUserPhoto = 'remove_image';
		savedStorage = window.localStorage['userpic']
		# console.log savedStorage

		storage = window.localStorage
		storage.removeItem 'userpic'
		return

$ '#cancelGereral'
	.click ->
		$.magnificPopup.close()
		storage = window.localStorage
		storage.setItem 'userpic', savedStorage
		$('#genPhoto').find('img').removeClass'hidden'
		$('[data-photo-remove]').removeClass'hidden'
		
		if $('#profileImage').find('img').hasClass 'hidden'
			$('.userpic').find('img').removeClass 'hidden'
			$('[data-photo-remove]').removeClass 'hidden'
		else
			$('#profileImage').find('img').attr 'src', savedImg
			$('#personPhoto').siblings('.file-name').html savedCaption
		return

$ '#saveGeneral'
	.click ->
		if $('#profileImage').find('img').hasClass 'hidden'
			$('#profileImage').find('img').attr 'src', ''
			# $('#profileImage').find('img').remove()
		$('html,body').animate
			scrollTop: $('body').offset().top
		, 500
		return

$ '#cropSave'
	.click ->
		imageSrc = $('#image').attr 'src'
		storage = window.localStorage
		storage.setItem 'userpic', imageSrc
		$('.userpic').find('img').removeClass 'hidden'
		$('[data-photo-remove]').removeClass 'hidden'
		$.magnificPopup.close()
		$('#preloader').removeClass 'hidden'

		setTimeout (=>
			$('#preloader').addClass 'hidden'
			for input in inputs
				# console.log $(input).val()
				# console.log $(input).attr('id')
				$('.changed-info').find('#' + $(input).attr('id')).val($(input).val())

			$.magnificPopup.open
				items: src: "#edit-gereral-popup"
				closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>'
				type: 'inline'
				closeOnBgClick: on
	
			# $.magnificPopup.instance.st.callbacks = {
			# 	close: ->
			# 		cropBoxData = cropper.getCropBoxData()
			# 		canvasData = cropper.getCanvasData()
			# 		cropper.destroy()
			# 		return
			# }
						
			return
			), 270
		return

$ '#cropCancel'
	.click ->
		$.magnificPopup.close()
		if $('#profileImage').find('img').length is 0
			$('#personPhoto').siblings('.file-name').html 'png, .jpg, .jpeg, up to 2MB'

		setTimeout (=>
			$.magnificPopup.open
				items: src: "#edit-gereral-popup"
				closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>'
				type: 'inline'
				closeOnBgClick: on
	
			# $.magnificPopup.instance.st.callbacks = {
			# 	close: ->
			# 		cropBoxData = cropper.getCropBoxData()
			# 		canvasData = cropper.getCanvasData()
			# 		cropper.destroy()
			# 		return
			# }
			for input in inputs
				$('.changed-info').find('#' + $(input).attr('id')).val($(input).val())
			return
			), 70
		return

# $ '[data-crop-popup]'
# 	.click ->
# 		setTimeout (=>
# 			$.magnificPopup.open
# 				items: src: "#edit-gereral-popup"
# 				closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>'
# 				type: 'inline'
# 				closeOnBgClick: false
	
# 			$.magnificPopup.instance.st.callbacks = {
# 				close: ->
# 					cropBoxData = cropper.getCropBoxData()
# 					canvasData = cropper.getCanvasData()
# 					cropper.destroy()
# 					return
# 			}
# 			return
# 			), 10
# 		return