var dataArr, getKeywords, getRandomColor, getUniqTags, markersArr, markersStyle, player, removeMarkers, tagWrapSize, timeFormat, videoMarkers;

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

timeFormat = function(time) {
  var hrs, mins, ret, secs;
  hrs = ~~(time / 3600);
  mins = ~~(time % 3600 / 60);
  secs = time % 60;
  ret = '';
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
  }
  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
};

markersStyle = ['blue', 'orange', 'green', 'yellow', 'red', 'darkslategray', 'violet', 'aquamarine', 'purple', 'pink', 'steelblue', 'darkslateblue', 'blueviolet'];

player = videojs('demo');

$('#tagInput').on('change, input', function() {
  var text;
  text = $(this).val();
  if (text) {
    $(this).next('label').addClass('hidden');
  } else {
    $(this).next('label').removeClass('hidden');
  }
});

videoMarkers = [];

player.markers({
  markerStyle: {
    'width': '10px',
    'border-radius': '50%'
  },
  markerTip: {
    display: true,
    text: function(marker) {
      return marker.text;
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
  markers: []
});

$('body').on('click', '[data-oninput]', function(e) {
  e.stopPropagation();
  if ($(e.target).closest('.search-tag').length <= 0) {
    $($(this).data('oninput')).focus();
  }
});

$('body').on('click', '[data-remove]', function() {
  var index;
  index = $(this).index();
  removeMarkers(index);
  $($(this).data('remove')).remove();
  $(this).remove();
  tagWrapSize();
  if ($('#tagCover').children('.search-tag').length === 0) {
    $('#tagCover').find('label').removeClass('hidden');
    $('#tagCover').parents('.tags-group').removeClass('with-tag');
    $('.vjs-control-bar').removeClass('active');
  }
});

markersArr = [];

dataArr = void 0;

getUniqTags = function(tags) {
  var existTags, results;
  existTags = [];
  videoMarkers.forEach(function(marker) {
    return existTags.push(marker.name);
  });
  results = [];
  tags.forEach(function(value) {
    value = value.trim();
    if (results.indexOf(value) === -1 && existTags.indexOf(value) === -1) {
      results.push(value);
    }
  });
  return results;
};

getKeywords = function(text, videoId, url, demo) {
  var filterText, textArr;
  textArr = text.split(', ');
  filterText = getUniqTags(textArr);
  if (filterText.length === 0) {
    $('#tagInput').val('');
    return;
  }
  filterText.reverse();
  dataArr = filterText.join(', ');
  markersArr.splice(0, markersArr.length);
  videojs('demo').markers.reset(markersArr);
  videojs('demo').markers.removeAll();
  $.ajax({
    data: {
      'keywords': dataArr,
      'videoNumber': videoId,
      'demo': demo
    },
    url: url,
    type: 'get',
    cache: false,
    error: function(data, textStatus, errorThrown) {
      console.log(errorThrown);
    },
    success: function(data) {
      var el, i, j, k, key, l, len, len1, len2, len3, marker, n, ref, ref1, repeats, resultObj, time, totalCount;
      console.log('текст запроса: ' + dataArr, 'id видео: ' + videoId);
      if (data) {
        repeats = {};
        videoMarkers.forEach(function(marker) {
          return repeats[marker.name] = true;
        });
        $('#tagInput').val('');
        $('.tags-group').find('label').removeClass('hidden');
        $('.vjs-control-bar').addClass('active');
        totalCount = 0;
        for (j = 0, len = data.length; j < len; j++) {
          resultObj = data[j];
          for (key in resultObj) {
            videoMarkers.push({
              name: key.replace(/(\s| )/gim, '_'),
              title: key,
              time: resultObj[key],
              className: markersStyle[0]
            });
            markersStyle.push(markersStyle[0]);
            markersStyle.splice(0, 1);
            if (resultObj[key].length > 0) {
              totalCount += resultObj[key].length;
            }
          }
        }
        for (i = k = 0, len1 = videoMarkers.length; k < len1; i = ++k) {
          marker = videoMarkers[i];
          ref = marker.time;
          for (l = 0, len2 = ref.length; l < len2; l++) {
            time = ref[l];
            player.markers.add([
              {
                time: time['phrase start'],
                word_time: time['word_start'],
                text: marker.title + ' ' + timeFormat(time['word_start']),
                "class": marker.className,
                keyName: marker.name
              }
            ]);
            if (!repeats[marker.name]) {
              $('#tagCover').parents('.tags-group').addClass('with-tag');
              $("<div class=\"search-tag " + marker.className + "\" data-remove> <span class=\"text\">" + marker.title + "</span> <i class=\"icon icon-close2\"></i> </div>").insertBefore('#tagInput');
              tagWrapSize();
              repeats[marker.name] = true;
            }
          }
        }
        ref1 = player.markers.getMarkers();
        for (n = 0, len3 = ref1.length; n < len3; n++) {
          el = ref1[n];
          markersArr.push(el);
        }
        totalCount = markersArr.length;
        console.log(totalCount);
        if (videoMarkers.length && totalCount > 0) {
          $('#totalOverviewKey').removeClass('hidden');
          if (totalCount === 1) {
            $('#totalKeyCount').html(totalCount + ' ' + 'result');
          } else {
            $('#totalKeyCount').html(totalCount + ' ' + 'results');
          }
        }
      }
    }
  });
};

$('#overviewSearchForm').on('submit', function(e) {
  var demo, text, url, videoId;
  text = $('#tagInput').val().trim();
  videoId = $(this).data('video-id');
  url = $(this).data('url');
  demo = $('#isDemo').val();
  if (text) {
    getKeywords(text, videoId, url, demo);
  }
  e.preventDefault();
});

removeMarkers = function(index) {
  var currentMarker, currentMarkers, el, i, j, k, len, len1, m, removals, totalCount;
  currentMarker = videoMarkers[index];
  currentMarkers = player.markers.getMarkers();
  dataArr = dataArr.replace(currentMarker.name + ', ', '');
  console.log(dataArr);
  removals = [];
  for (i = j = 0, len = currentMarkers.length; j < len; i = ++j) {
    m = currentMarkers[i];
    if (m.keyName === currentMarker.name) {
      removals.push(i);
    }
  }
  markersArr = [];
  player.markers.remove(removals);
  videoMarkers.splice(index, 1);
  totalCount = currentMarkers.length;
  if ($('#totalKeyCount') && totalCount >= 1) {
    if (totalCount === 1) {
      $('#totalKeyCount').html(totalCount + ' ' + 'result');
    } else {
      $('#totalKeyCount').html(totalCount + ' ' + 'results');
    }
  } else {
    $('#totalOverviewKey').addClass('hidden');
  }
  for (k = 0, len1 = currentMarkers.length; k < len1; k++) {
    el = currentMarkers[k];
    markersArr.push(el);
  }
};

tagWrapSize = function() {
  if ($('.tag-wrap').outerHeight() <= 48) {
    $('.tags-group').addClass('rounded');
    if ($('.scrolled-block').length > 0) {
      Ps.destroy($('.scrolled-block')[0]);
    }
    if ($('[data-remove]').length === 0) {
      $('.tags-group').removeClass('with-tag');
    }
  } else {
    $('.tags-group').removeClass('rounded');
  }
  if ($('.scrolled-block').length > 0) {
    Ps.initialize($('.scrolled-block')[0], {
      suppressScrollX: true
    });
  }
};

$('#changeBtn').click(function(e, video) {
  var mp4, ogg, src;
  e.preventDefault();
  if ($(this).data('active') === 'candidate') {
    mp4 = $(this).data('interviewer-mp4');
    ogg = $(this).data('interviewer-ogg');
    $(this).data('active', 'interviewer').attr('data-active', 'interviewer');
  } else if ($(this).data('active') === 'interviewer') {
    mp4 = $(this).data('candidate-mp4');
    ogg = $(this).data('candidate-ogg');
    $(this).data('active', 'candidate').attr('data-active', 'candidate');
  }
  src = [
    {
      type: "video/mp4",
      src: mp4
    }, {
      type: "video/ogg",
      src: ogg
    }
  ];
  $(this).find('.caption').toggleClass('active');
  videoChange('demo', src);
  setTimeout((function() {
    player.markers.reset(markersArr);
  }), 500);
});
