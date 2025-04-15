var getRandomColor, markersArr, markersStyle, player;

getRandomColor = function() {
  var color, i, letters;
  letters = '0123456789ABCDEF';
  color = '#';
  i = 0;
  while (i < 6) {
    color += letters[Math.floor(Math.random() * 16)];
    i++;
  }
  return color;
};

markersStyle = ['blue', 'orange', 'green', 'yellow', 'red', 'purple'];

player = videojs('demo');

player.markers({
  markerStyle: {
    'width': '10px',
    'border-radius': '50%'
  },
  markerTip: {
    display: true,
    text: function(marker) {
      return marker.text + ' ' + marker.time;
    }
  },
  breakOverlay: {
    display: true,
    displayTime: 4,
    style: {
      'width': '100%',
      'height': '30%',
      'background-color': 'rgba(10,10,10,0.6)',
      'color': 'white',
      'font-size': '16px'
    },
    text: function(marker) {
      return 'This is a break overlay: ' + marker.overlayText;
    }
  },
  markers: [
    {
      time: 9.5,
      text: 'Java',
      overlayText: '1',
      "class": markersStyle[Math.floor(Math.random() * markersStyle.length)]
    }, {
      time: 16,
      text: 'Code',
      overlayText: '2',
      "class": markersStyle[Math.floor(Math.random() * markersStyle.length)]
    }, {
      time: 45,
      text: 'Javascript',
      overlayText: '3',
      "class": markersStyle[Math.floor(Math.random() * markersStyle.length)]
    }, {
      time: 28,
      text: 'HTML',
      overlayText: '4',
      "class": markersStyle[Math.floor(Math.random() * markersStyle.length)]
    }
  ]
});

$('[data-remove]').on('click touch', function() {
  $($(this).data('remove')).remove();
  $(this).remove();
  setOverviewSize();
  if ($('.tag-wrap').outerHeight() <= 48) {
    $('.tags-group').addClass('rounded');
    Ps.destroy($('.scrolled-block')[0]);
    if ($('[data-remove]').length === 0) {
      $('.tags-group').removeClass('with-tag');
    }
  } else {
    $('.tags-group').removeClass('rounded');
  }
});

markersArr = player.markers.getMarkers();
