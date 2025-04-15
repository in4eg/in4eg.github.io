baseClasses = 'col-xs-6 col-md-6 col-lg-6';
interviewVideoBox = $('#interviewVideoBox')
myVideoFrame = $('#myVideoFrame')
interviewerVideoFrame = $('#interviewerVideoFrame')


$('#myVideoToLarge').click ->
    toChangeView(interviewerVideoFrame, myVideoFrame)

$('#interviewerVideoToLarge').click ->
    toChangeView(myVideoFrame, interviewerVideoFrame)

$('#interviewerVideoToSmall').click ->
    toChangeView(interviewerVideoFrame, myVideoFrame)

$('#myVideoToSmall').click ->
    toChangeView(myVideoFrame, interviewerVideoFrame)


toChangeView = (small, large) ->
    if( !interviewVideoBox.hasClass('flexible-mode-box') )
        interviewVideoBox.addClass('flexible-mode-box')

    if(myVideoFrame.parent().hasClass('main-video-frame') || myVideoFrame.parent().hasClass('second-video-frame'))
        interviewVideoBox.removeClass('flexible-mode-box')

        myVideoFrame.parent().removeClass()
        myVideoFrame.parent().addClass(baseClasses)
        interviewerVideoFrame.parent().removeClass()
        interviewerVideoFrame.parent().addClass(baseClasses)
    else
        large.parent().removeClass()
        large.parent().addClass('main-video-frame')
        small.parent().removeClass()
        small.parent().addClass('second-video-frame')


# эмулировать клик по showDisclaimer
jQuery ($) ->
    openDisclaimer = $('#showDisclaimer')[0]
    $(openDisclaimer).magnificPopup
        modal: true

    $(openDisclaimer).click()
    return

### FOR INTERVIEW ###
if($('#callHandler')[0])
	callHandler = $('#callHandler')[0]

if($(callHandler)[0])
	$(callHandler).on 'click', ->
		callStatus = $('#callStatus')[0]
		callStatus.innerText = 'END INTERVIEW'
		callHandlerOff = $('#callHandlerOff')[0]
		$(@).addClass('hidden')
		$(callHandlerOff).removeClass('hidden')
		return

	$(callHandlerOff).on 'click', ->
		showPopupLink = $('#showVideoEnded')[0]
		$(showPopupLink).magnificPopup
        	modal: true
		$(showPopupLink).click()
		return

$('#beforeStopCall').on 'mousedown', () ->
    callEnd()
    return

# function helpers, for backend
introForUser = (show) ->
    stub = $('.video-stub')[0]
    if(show)
        $(stub).removeClass('hidden')
    else
        $(stub).addClass('hidden')
        return
    return

callEnd = () ->
    callStatus = $('#callStatus')[0]
    callStatus.innerText = 'START INTERVIEW'
    $(callHandlerOff).addClass('hidden')
    $(callHandler).removeClass('hidden')
    return
