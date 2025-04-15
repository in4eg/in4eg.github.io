$('[data-toggle]').mousedown(function(e) {
  var active, array, passive;
  e.preventDefault();
  if (!$(this).data('toggle')) {
    return;
  }
  if ($(this).data('toggle').match(/\,/gim)) {
    array = $(this).data('toggle').split(',');
    active = $(array[0]);
    passive = $(array[1]);
    $(this).toggleClass('opened');
    active.toggleClass('active');
    passive.removeClass('active');
    $('[data-toggle]').not($(this)).removeClass('opened');
    if (active[0].nodeName.toLowerCase() === 'form' && active.hasClass('active')) {
      setTimeout(function() {
        return active.find('.input').eq(0).focus();
      }, 600);
    }
  } else {
    $($(this).data('toggle')).toggleClass('active');
    $(this).toggleClass('active');
    if ($(this).children('.text')) {
      $(this).children('.text').toggleClass('hidden');
    }
  }
  if ($('.scrolled').length > 0) {
    setOverviewSize();
    Ps.initialize($('.overview-body .scrolled')[0], {
      suppressScrollX: true
    });
  }
});

$('.user-form .form-close').click(function(e) {
  $(this).closest('.user-form').removeClass('active');
  $('.btn').removeClass('opened');
});

$('body').click(function(e) {
  if ($(e.target).closest('.notification-link', '.notification-details').length === 0) {
    $('.notification-details', '.notification-link').removeClass('active');
    $('.notification-link').find('.notification').removeClass('active');
  }
});

$(document).ready(function() {
  $('#signInEmail, #signInPassword').focusout(function() {
    if ($(this).val() !== '') {
      $(this).addClass('labeled');
    } else {
      $(this).removeClass('labeled');
    }
  });
  $('#signUpFirstName, #signUpLastName, #signUpEmail, #signUpPassword').focusout(function() {
    if ($(this).val() !== '') {
      $(this).addClass('labeled');
    } else {
      $(this).removeClass('labeled');
    }
  });
});

$('[data-form]').mousedown(function(e) {
  e.preventDefault();
  if (!$(this).data('form')) {
    return;
  }
  $($(this).data('form')).addClass('active');
  $('#signButtonsDesktop').find('.gradient-border').addClass('opened');
});
