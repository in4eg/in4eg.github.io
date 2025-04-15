var disableSelection;

$('.checkbox-group').click(function() {
  if ($(this).find('#agreetment').prop('checked') === true) {
    $(this).parents('form').find('.btn').removeClass('blocked');
  } else {
    $(this).parents('form').find('.btn').addClass('blocked');
  }
});

$('#copybtn').on('click touch', function() {
  Clipboard.copy(document.querySelector('#copied').innerText);
});

window.Clipboard = (function(window, document, navigator) {
  var copy, copyToClipboard, createTextArea, isOS, selectText, textArea;
  textArea = void 0;
  copy = void 0;
  isOS = function() {
    return navigator.userAgent.match(/ipad|iphone/i);
  };
  createTextArea = function(text) {
    textArea = document.createElement('textArea');
    textArea.value = text;
    document.body.appendChild(textArea);
  };
  selectText = function() {
    var e, range, selection;
    range = void 0;
    selection = void 0;
    if (isOS()) {
      try {
        range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, textArea.value.length);
      } catch (error) {
        e = error;
        console.log(e);
      }
    } else {
      textArea.select();
    }
  };
  copyToClipboard = function() {
    $(document).off('copy contextmenu');
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };
  copy = function(text) {
    createTextArea(text);
    selectText();
    copyToClipboard();
  };
  return {
    copy: copy
  };
})(window, document, navigator);

disableSelection = function(target) {
  if ($(target).length > 0) {
    $(function() {
      $(this).on('contextmenu copy', function(e) {
        e.preventDefault();
      });
    });
    if (typeof target.onselectstart !== 'undefined') {
      target.onselectstart = function() {
        return false;
      };
    } else if (typeof target.style.MozUserSelect !== 'undefined') {
      target.style.MozUserSelect = 'none';
    } else {
      target.onmousedown = function() {
        return false;
      };
    }
    target.style.cursor = 'default';
  }
};

disableSelection(document.getElementById('copied'));
