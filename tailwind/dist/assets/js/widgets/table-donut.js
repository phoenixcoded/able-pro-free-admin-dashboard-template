'use strict';
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    peity.defaults.donut = {
      delimiter: null,
      fill: ['#ff9900', '#fff4dd', '#ffd592'],
      height: null,
      innerRadius: 11,
      radius: 16,
      width: null
    };
    document.querySelectorAll('.donut').forEach((e) => peity(e, 'donut'));
  }, 500);
});
