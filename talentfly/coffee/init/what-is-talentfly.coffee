h = $('.try-wrap')[0].offsetHeight
h1 = $('.try-wrap')[1].offsetHeight
if($('.try-wrap')[0].offsetHeight > $('.try-wrap')[1].offsetHeight)
    $($('.try-wrap')[1]).css('height', h)
else
    $($('.try-wrap')[0]).css('height', h1)