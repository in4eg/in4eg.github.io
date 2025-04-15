$('[data-add]').click(function() {
  var inputTemplate, parent, type;
  parent = $(this).data('add');
  type = $(this).data('type');
  switch (type) {
    case 'phone':
      inputTemplate = "<li class=\"item\"> <div class=\"form-group remove-group\"> <input type=\"text\" class=\"input small bordered\" placeholder=\"Номер телефона\" data-mask=\"+7 999 999-99-99\"> <button type=\"button\" class=\"remove-btn\" data-remove> <i class=\"icon icon-close\"></i> </button> </div> </li>";
      break;
    case 'email':
      inputTemplate = "<li class=\"item\"> <div class=\"form-group remove-group\"> <input type=\"text\" class=\"input small bordered email\" placeholder=\"E-mail\"> <button type=\"button\" class=\"remove-btn\" data-remove> <i class=\"icon icon-close\"></i> </button> </div> </li>";
      break;
    default:
      inputTemplate = "<li class=\"item\"> <div class=\"form-group remove-group\"> <input type=\"text\" class=\"input small bordered\" placeholder=\"Адрес доставки\"> <button type=\"button\" class=\"remove-btn\" data-remove> <i class=\"icon icon-close\"></i> </button> </div> </li>";
  }
  $(parent).append(inputTemplate);
  $('[data-mask]').each(function(i, input) {
    var mask;
    mask = $(input).attr('data-mask');
    return $(input).mask(mask, {});
  });
  return;
});

$(document).on('click', '[data-remove]', function() {
  $(this).parent('.remove-group').remove();
});
