if navigator.userAgent.search('Safari') >= 0 and navigator.userAgent.search('Chrome') < 0
    $(document).ready ->
        $('.process-step').addClass 'safari'
        $('.steps-divider').addClass 'safari'
        return