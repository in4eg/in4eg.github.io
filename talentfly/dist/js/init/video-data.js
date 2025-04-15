var playVideo, toHHMMSS, videoChange;

toHHMMSS = function(time) {
  var hours, minutes, seconds, secoundsData;
  secoundsData = parseInt(time, 10);
  hours = Math.floor(secoundsData / 3600);
  minutes = Math.floor((secoundsData - (hours * 3600)) / 60);
  seconds = secoundsData - (hours * 3600) - (minutes * 60);
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

$('#changeVideo').on('click', 'li', function() {
  var url, videoId;
  videoId = $(this).data('video-id');
  videojs('demo').currentTime(0);
  url = $(this).parent('ul').data('url');
  console.log('Id видео: ' + videoId);
  $('#tagCover').children('.search-tag').remove();
  $('.tags-group').removeClass('with-tag').addClass('rounded');
  $('.tags-group').find('label').removeClass('hidden');
  Ps.destroy($('.scrolled-block')[0]);
  markersArr.splice(0, markersArr.length);
  videojs('demo').markers.reset(markersArr);
  videojs('demo').markers.removeAll();
  $('#overviewBody').removeClass('active');
  $('#overviewBody').find('.collapsed-btn').removeClass('active');
  $.ajax({
    data: {
      'getVideoData': videoId
    },
    url: url,
    dataType: 'json',
    type: 'get',
    error: function(data, textStatus, errorThrown) {
      console.log(errorThrown);
    },
    success: function(data) {
      var candidate_src, i, interviewer_src, len, question, ref, visibleInterviews;
      console.log('video.json loaded');
      console.log(data);
      if (data) {
        console.log('video result founded');
        $('#overviewSearchForm').data('video-id', data.id).attr('data-video-id', data.id);
        if ($('#videoDate').length) {
          $('#videoDate').html(data.date);
        }
        $('#changeVideo').attr('data-video-id', data.id + '');
        visibleInterviews = $('#changeVideo').attr('data-visibility-id').split(',');
        if ($('#video-sticker').length > 0) {
          if (visibleInterviews.indexOf('' + data.id) === -1) {
            $('#video-sticker').removeClass('hidden');
          } else {
            $('#video-sticker').addClass('hidden');
          }
        }
        $('#changeBtn').data('interviewer-mp4', data.interviewer_src_mp4).attr('data-interviewer-mp4', data.interviewer_src_mp4);
        $('#changeBtn').data('interviewer-ogg', data.interviewer_src_ogg).attr('data-interviewer-ogg', data.interviewer_src_ogg);
        $('#changeBtn').data('candidate-mp4', data.candidate_src_mp4).attr('data-candidate-mp4', data.candidate_src_mp4);
        $('#changeBtn').data('candidate-ogg', data.candidate_src_ogg).attr('data-candidate-ogg', data.candidate_src_ogg);
        $('#videoLinks').children('li').remove();
        if ($('#changeBtn').data('active') === 'candidate') {
          candidate_src = [
            {
              type: "video/mp4",
              src: data.candidate_src_mp4
            }, {
              type: "video/ogg",
              src: data.candidate_src_ogg
            }
          ];
          videoChange('demo', candidate_src);
          $('#changeBtn').data('active', 'interviewer').attr('data-active', 'interviewer');
        } else if ($('#changeBtn').data('active') === 'interviewer') {
          interviewer_src = [
            {
              type: "video/mp4",
              src: data.interviewer_src_mp4
            }, {
              type: "video/ogg",
              src: data.interviewer_src_ogg
            }
          ];
          videoChange('demo', interviewer_src);
          $(this).data('active', 'candidate').attr('data-active', 'candidate');
        }
        ref = data.questions;
        for (i = 0, len = ref.length; i < len; i++) {
          question = ref[i];
          $('#videoLinks').append('<li data-time="' + question.time + '"><span class="link">' + question.text + '<span class="time">' + toHHMMSS(question.time) + '</span></span></li>');
        }
        if ($(window).width() > 992) {
          return Ps.initialize($('.overview-body .scrolled')[0], {
            suppressScrollX: true
          });
        }
      } else {
        return console.log('no-result in video');
      }
    }
  });
});

videoChange = function(video, src, time) {
  time = videojs(video).currentTime();
  videojs(video).load();
  videojs(video).src(src);
  videojs(video).currentTime(time);
  videojs(video).play();
};

$('#videoLinks').on('click', 'li', function() {
  var time;
  time = $(this).data('time');
  playVideo('demo', time);
});

playVideo = function(videoId, time) {
  videojs(videoId).currentTime(time);
  videojs(videoId).play();
};
