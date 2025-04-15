activateTechSkills = ->
  $('.skills-list li').on 'mouseenter', ->
    if $(this).find('.last-year').text().trim() != ''
      $(this).find('.years').css 'display', 'none'
      $(this).find('.last-year').css 'display', 'inline-block'
    return
  $('.skills-list li').on 'mouseleave', ->
    if $(this).find('.last-year').text().trim() != ''
      $(this).find('.years').css 'display', 'inline-block'
      $(this).find('.last-year').css 'display', 'none'
    return
  return

$(document).ready ->
  activateTechSkills()
  return