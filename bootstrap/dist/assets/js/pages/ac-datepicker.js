'use strict';

(function () {
  const d_week = new Datepicker(document.querySelector('#d_week'), {
    buttonClass: 'btn',
    daysOfWeekDisabled: [0,6]
  });

  const d_highlight = new Datepicker(document.querySelector('#d_highlight'), {
    buttonClass: 'btn',
    daysOfWeekHighlighted: [1]
  });

  const d_auto = new Datepicker(document.querySelector('#d_auto'), {
    buttonClass: 'btn',
    autohide: true
  });

  const d_disable = new Datepicker(document.querySelector('#d_disable'), {
    buttonClass: 'btn',
    datesDisabled: ['02/18/2022', '02/22/2022']
  });

  const d_today = new Datepicker(document.querySelector('#d_today'), {
    buttonClass: 'btn',
    todayHighlight: true
  });

  const disp_week = new Datepicker(document.querySelector('#disp_week'), {
    buttonClass: 'btn',
    calendarWeeks: true
  });

  const datepicker_range = new DateRangePicker(document.querySelector('#datepicker_range'), {
    buttonClass: 'btn'
  });
})();
