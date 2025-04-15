var activateTechSkills;

activateTechSkills = function() {
  $('.skills-list li').on('mouseenter', function() {
    if ($(this).find('.last-year').text().trim() !== '') {
      $(this).find('.years').css('display', 'none');
      $(this).find('.last-year').css('display', 'inline-block');
    }
  });
  $('.skills-list li').on('mouseleave', function() {
    if ($(this).find('.last-year').text().trim() !== '') {
      $(this).find('.years').css('display', 'inline-block');
      $(this).find('.last-year').css('display', 'none');
    }
  });
};

$(document).ready(function() {
  activateTechSkills();
});
