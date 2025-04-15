
jQuery ($) ->
    openDisclaimer = $('#showDisclaimer')[0]
    $(openDisclaimer).click()
    return

$('*[data-save-recommendation]').on 'click', ->
    $.magnificPopup.open 
        items:
            src: '#popupAfterRecommendation',
        closeMarkup: '<button class="mfp-close btn btn-grey btn-round" title="Close (Esc)"><i class="icon icon-close"></i></button>'
    return


$('*[data-recommendation-sent]').on 'submit', (e)->
    e.preventDefault()
    e.stopPropagation()
    errors = [off,off]
    isFormScrolled = off
    scrollTarget = if $(this).parents('.popup').length isnt 0 then $('.popup') else $ 'html, body'
    $('input:not(.ignored), textarea:not(.ignored)', this).each (i, input)->
        $(input).siblings('.icon-success').removeClass 'active'
        if ($(input).hasClass('email') and !isValidEmail($(input).val().trim()))
            errors[i] = on
            $(input).siblings('.icon-error').addClass 'active'
            $(input).parents('.form-group').addClass 'error'
        else if $(input).data('minlength') and $(input).val().trim().length < $(input).data('minlength')
            errors[i] = on
            $(input).siblings('.icon-error').addClass 'active'
            $(input).parents('.form-group').addClass 'error'
        else if $(input).val().trim() is ""
            errors[i] = on
            $(input).siblings('.icon-error').addClass 'active'
            $(input).parents('.form-group').addClass 'error'
        else
            errors[i] = off
            $(input).siblings('.icon-error').removeClass 'active'
            $(input).siblings('.icon-success').addClass 'active'
            $(input).parents('.form-group').removeClass 'error'
        return
    hasErrors = off
    for error in errors
        if error then hasErrors = on; e.preventDefault(); return;
    if !hasErrors
        $.magnificPopup.open items:
            src: '#successPopup'
        $.ajax
            type: 'post'
            url: location.href
            data:
                'name': $('#name').val()
                'position': $('#position').val()
                'recommendationText': $('#recommendationText').val()
            cache: false
            dataType: 'json'
            headers: 'X-CSRFToken': csrf_token
            success: (data) ->
                if data.success
                    $.magnificPopup.open items:
                        src: '#successPopup'
                else
                    hideGNotification()
                    showGNotification('warning', data.error, '')
                return
            error: (data, textStatus, errorThrown) ->
                console.log errorThrown
                hideGNotification()
                showGNotification('error', errorThrown, '')
                return
        return