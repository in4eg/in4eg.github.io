$(document).ready ->
	$('#pswdRestoreLabel').click ->
		document.getElementById('pswdRestoreEmail').focus()
		return

	$('#pswdRestoreSendButton').click ->
		$('#mainRestoreSection').css 'display', 'none'
		$('#restoreSuccessNotification').removeClass 'display-none'
		return
	
	$('#pswdRestoreEmail, #pswdRestorePassword, #pswdRestoreEnter, #pswdRestoreReEnter').focusout ->
		if $(this).val() != ''
			$(this).addClass 'labeled'
		else
			$(this).removeClass 'labeled'
		return

	# RESET EMAIL
	$('#sendEmail').on 'click', (e) ->
		$('#emailResetForm').off()
		$(@).addClass('box-disabled')
		self = @
		setTimeout (->
            $(self).removeClass('box-disabled')
            return
        ), 6000
		return

	$('#sendPass').on 'click', (e) ->
		$('#pswdRestoreForm').off()
		$(@).addClass('box-disabled')
		self = @
		setTimeout (->
            $(self).removeClass('box-disabled')
            return
        ), 6000
		return

	return