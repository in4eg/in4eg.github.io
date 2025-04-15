var setTextLength, titleFont;

(function() {
  var block, childrens, childrensLI, childrensUL, count, countHiddenSkills, i, j, k, len, limitBlocks, summary;
  limitBlocks = $('.wrap-info');
  for (k = 0, len = limitBlocks.length; k < len; k++) {
    block = limitBlocks[k];
    count = $(block).data('limit');
    childrens = $(block).children().not('.scrolled-more');
    if ($(block).attr('data-limit-skill')) {
      countHiddenSkills = 0;
      i = 0;
      while (i < childrens.length) {
        childrensUL = $(childrens[i]).children('ul');
        childrensLI = $(childrensUL).children('li');
        j = 0;
        while (j < childrensLI.length) {
          if (i >= count) {
            countHiddenSkills += 1;
          } else {
            if (j >= $(block).attr('data-limit-skill')) {
              countHiddenSkills += 1;
              $(childrensLI[j]).addClass('hidden');
            }
          }
          j++;
        }
        i++;
      }
      if (countHiddenSkills > 0) {
        $(block).find('.scrolled-more').removeClass('hidden');
        $(block).find('.scrolled-more').find('.count').html(countHiddenSkills);
        childrens.last().removeClass('no-border');
      } else {
        childrens.last().addClass('no-border');
      }
    } else {
      if (childrens.length > count) {
        $(block).find('.scrolled-more').removeClass('hidden');
        $(block).find('.scrolled-more').find('.count').html(childrens.length - count);
        childrens.last().removeClass('no-border');
      } else {
        childrens.last().addClass('no-border');
      }
    }
    $(childrens).slice(count).addClass('hidden');
  }
  summary = $('.summary-info').find('[data-text-limit]');
  count = parseInt(summary.attr('data-text-limit'));
  if (count > 620) {
    $(summary).next('.scrolled-more').removeClass('hidden');
    $(summary).parent('.summary-info').addClass('shadow');
  } else {
    $(summary).parent('.summary-info').removeClass('shadow');
    $(summary).next('.scrolled-more').addClass('hidden');
  }
})();

setTextLength = function(text, textBlock) {
  if (text < 264) {
    textBlock.attr('data-length', '264');
  } else if (text >= 265 && text < 350) {
    textBlock.attr('data-length', '300');
  } else if (text >= 350 && text < 400) {
    textBlock.attr('data-length', '400');
  } else if (text >= 400 && text < 500) {
    textBlock.attr('data-length', '500');
  } else if (text >= 500) {
    textBlock.attr('data-length', '600');
  }
};

setTextLength($('.card-title').attr('data-text-limit'), $('.card-title'));

(titleFont = function() {
  var totalVal;
  if ($('.user-name').find('.h4-title').length > 0) {
    totalVal = $('.user-name').find('.h4-title').attr('data-text-length');
  }
  if ($(window).innerWidth() < 1260 && $(window).innerWidth() >= 1051) {
    if (totalVal < 20) {
      $('.user-name').find('.h4-title').css('font-size', '24px');
    } else if (totalVal >= 21 && totalVal < 37) {
      $('.user-name').find('.h4-title').css('font-size', '20px');
    } else if (totalVal >= 38 && totalVal < 42) {
      $('.user-name').find('.h4-title').css('font-size', '18px');
    } else if (totalVal >= 43) {
      $('.user-name').find().css('font-size', '16px');
    }
  } else if ($(window).innerWidth() < 1050) {
    if (totalVal < 20) {
      $('.user-name').find('.h4-title').css('font-size', '20px');
    } else if (totalVal >= 21 && totalVal < 37) {
      $('.user-name').find('.h4-title').css('font-size', '18px');
    } else if (totalVal >= 38 && totalVal < 42) {
      $('.user-name').find('.h4-title').css('font-size', '16px');
    } else if (totalVal >= 43) {
      $('.user-name').find().css('font-size', '14px');
    }
  } else {
    if (totalVal < 20) {
      $('.user-name').find('.h4-title').css('font-size', '28px');
    } else if (totalVal >= 21 && totalVal < 37) {
      $('.user-name').find('.h4-title').css('font-size', '22px');
    } else if (totalVal >= 38 && totalVal < 42) {
      $('.user-name').find('.h4-title').css('font-size', '20px');
    } else if (totalVal >= 43) {
      $('.user-name').find().css('font-size', '18px');
    }
  }
})();

$(document).on('input change', '[data-characters]', function() {
  var maxLength, textVal;
  maxLength = $(this).data('characters');
  textVal = $(this).val().trim().length;
  if ($(this).val().length >= 0) {
    $(this).siblings('.count-help').find('.count').html(maxLength - textVal);
  }
});

$(window).resize(function() {
  titleFont();
});
