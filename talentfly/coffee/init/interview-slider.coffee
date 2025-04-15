recordingStart = $('#recordingStart')[0]
### SLIDER ###
x = 0
container = $('.desktop-slider .interview-slider-container')
items = container.find('li')
containerHeight = 0
numberVisible = 7
intervalSec = 900
defaultFirstItem = container.find('li:last')
defaultLastItem = container.find('li:first')

moveUp = ->
  if $('#interviewSliderNext').hasClass('controller-disabled')
    $('#interviewSliderNext').removeClass 'controller-disabled'
  #if container.find('li:first')[0] == defaultFirstItem[0]
    #$('#interviewSliderPrev').attr 'onclick', 'moveUp()'
    #return
  blockHeight = undefined
  firstItem = undefined
  $('#interviewSliderPrev').removeAttr 'onclick'
  firstItem = container.find('li.first')
  blockHeight = firstItem.outerHeight()
  if firstItem.hasClass('slider-item-done')
    if firstItem.hasClass('selected')
      container.append '<li class = "slider-item slider-item-done selected">' + firstItem.html() + '</li>'
    else
      container.append '<li class = "slider-item slider-item-done">' + firstItem.html() + '</li>'
  else if firstItem.hasClass('slider-item-rec')
    if firstItem.hasClass('selected')
      container.append '<li class = "slider-item slider-item-rec selected">' + firstItem.html() + '</li>'
    else
      container.append '<li class = "slider-item slider-item-rec">' + firstItem.html() + '</li>'
  else
    if firstItem.hasClass('selected')
      container.append '<li class="slider-item selected">' + firstItem.html() + '</li>'
    else
      container.append '<li class="slider-item">' + firstItem.html() + '</li>'
  firstItem = ''
  container.find('li.first').animate { marginTop: '-' + blockHeight + 'px' }, 300, ->
    $(this).remove()
    container.find('li:first').addClass 'first'
    container.find('li.last').removeClass 'last'
    container.find('li:last').addClass 'last'
    $('#interviewSliderPrev').attr 'onclick', 'moveUp()'
    container.find('.odd-inversed').removeClass 'odd-inversed'
    container.find('.even-inversed').removeClass 'even-inversed'
    container.find('.last').on 'click', ->
      if $(this).hasClass('selected')
        return
      else
        $('.selected').removeClass 'selected'
      $(this).addClass 'selected'
      return
    #if container.find('li.first')[0] == defaultFirstItem[0]
      #$('#interviewSliderPrev').addClass 'controller-disabled'
    return
  container.find('li:nth-child(odd)').addClass 'odd-inversed'
  container.find('li:nth-child(even)').addClass 'even-inversed'
  return

moveDown = ->
  if $('#interviewSliderPrev').hasClass('controller-disabled')
    $('#interviewSliderPrev').removeClass 'controller-disabled'
  # if container.find('li:last')[0] == defaultFirstItem[0]
  #   $('#interviewSliderNext').attr 'onclick', 'moveDown()'
  #   return
  blockHeight = undefined
  lastItem = undefined
  $('#interviewSliderNext').removeAttr 'onclick'
  lastItem = container.find('li.last')
  blockHeight = lastItem.outerHeight()
  if lastItem.hasClass('slider-item-done')
    if lastItem.hasClass('selected')
      container.prepend '<li class="slider-item slider-item-done selected" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>'
    else
      container.prepend '<li class="slider-item slider-item-done" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>'
  else if lastItem.hasClass('slider-item-rec')
    if lastItem.hasClass('selected')
      container.prepend '<li class="slider-item slider-item-rec selected" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>'
    else
      container.prepend '<li class="slider-item slider-item-rec" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>'
  else
    if lastItem.hasClass('selected')
      container.prepend '<li class="slider-item selected" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>'
    else
      container.prepend '<li class="slider-item" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>'
  lastItem = ''
  container.find('li:first').animate { marginTop: '5px' }, 300, ->
    $('li.last').remove()
    container.find('li:last').addClass 'last'
    container.find('li.first').removeClass 'first'
    container.find('li:first').addClass 'first'
    $('#interviewSliderNext').attr 'onclick', 'moveDown()'
    container.find('.first').on 'click', ->
      if $(this).hasClass('selected')
        return
      else
        $('.selected').removeClass 'selected'
      $(this).addClass 'selected'
      return
    #if container.find('li.last')[0] == defaultFirstItem[0]
      #$('#interviewSliderNext').addClass 'controller-disabled'
    return
  return

#$('#interviewSliderNext').addClass 'controller-disabled'
if !container.find('li:first').hasClass('first')
  container.find('li:first').addClass 'first'
if !container.find('li:last').hasClass('last')
  container.find('li:last').addClass 'last'
items.each ->
  if x < numberVisible
    containerHeight = containerHeight + $(this).outerHeight() - 4
    x++
  return
container.css
  height: containerHeight
  overflow: 'hidden'
$('.slider-item').on 'click', ->
  if $(this).hasClass('selected')
    return
  else
    $('.selected').removeClass 'selected'
  $(this).addClass 'selected'
  $(recordingStart).parent().removeAttr('data-tooltip')
  return
$('#interviewSliderPrev').attr 'onclick', 'moveUp()'
$('#interviewSliderNext').attr 'onclick', 'moveDown()'


### influence to video record bar ###
$('.slider-item').on 'click', () ->
  if(recordingStart)
    $(recordingStart).removeClass('btn-control')
    recordingStart.disabled = false
