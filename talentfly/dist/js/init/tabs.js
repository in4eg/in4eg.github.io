var setActiveTab;

setActiveTab = function(content, indx) {
  content.each(function(i, cont) {
    $('> .content', cont).removeClass('active').eq(indx).addClass('active');
  });
};

$('body').on('click', '[data-tabs] li', function(e) {
  var nav;
  e.preventDefault();
  nav = $(this).closest('[data-tabs]')[0];
  if ($(this).hasClass('disabled')) {
    return;
  }
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  setActiveTab($($(nav).data('tabs')), $(this).index());
  if ($('.soft-scroll-container')[0]) {
    Ps.update($('.soft-scroll-container')[0]);
  }
  if ($('.education-scroll-container')[0]) {
    Ps.update($('.education-scroll-container')[0]);
  }
  if ($('.certification-scroll-container')[0]) {
    Ps.update($('.certification-scroll-container')[0]);
  }
  if ($('.language-scroll-container')[0]) {
    Ps.update($('.language-scroll-container')[0]);
  }
  if ($('.interests-scroll-container')[0]) {
    Ps.update($('.interests-scroll-container')[0]);
  }
  if ($('.volunteering-scroll-container')[0]) {
    Ps.update($('.volunteering-scroll-container')[0]);
  }
});

$('[data-set-tab]').click(function(e) {
  var data, index, selector;
  data = $(this).attr('data-set-tab');
  if (!data) {
    return;
  }
  if ($('.tech-scroll-container')[0]) {
    setTimeout((function() {
      Ps.update($('.tech-scroll-container')[0]);
    }), 100);
  }
  if ($('.experience-scroll-container')[0]) {
    setTimeout((function() {
      Ps.update($('.experience-scroll-container')[0]);
    }), 100);
  }
  index = data.split('|')[0];
  selector = data.split('|')[1];
  setActiveTab($(selector), index);
});
