var fromInput, fromPicker, toInput, toPicker, yesterday;

yesterday = new Date((new Date).valueOf() - (1000 * 60 * 60 * 24));

$('.datepicker').pickadate({
  disable: [
    {
      from: [0, 0, 0],
      to: yesterday
    }
  ],
  selectYears: 10,
  weekdaysShort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  today: '',
  clear: '',
  close: ''
});

fromInput = $('.datepicker-from').pickadate({
  selectYears: 10,
  weekdaysShort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  today: '',
  clear: '',
  close: ''
});

fromPicker = fromInput.pickadate('picker');

toInput = $('.datepicker-to').pickadate({
  selectYears: 10,
  weekdaysShort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  format: 'mm/dd/yyyy',
  formatSubmit: 'mm/dd/yyyy',
  today: '',
  clear: '',
  close: ''
});

toPicker = toInput.pickadate('picker');

if (fromPicker) {
  if (fromPicker.get('value')) {
    toPicker.set('min', fromPicker.get('select'));
  }
  if (toPicker.get('value')) {
    fromPicker.set('max', toPicker.get('select'));
  }
}

if (fromPicker) {
  fromPicker.on('set', function(event) {
    if (event.select) {
      toPicker.set('min', fromPicker.get('select'));
    } else if ('clear' in event) {
      toPicker.set('min', false);
    }
  });
}

if (toPicker) {
  toPicker.on('set', function(event) {
    if (event.select) {
      fromPicker.set('max', toPicker.get('select'));
    } else if ('clear' in event) {
      fromPicker.set('max', false);
    }
  });
}
