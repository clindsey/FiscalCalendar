window.require.register("helpers/handlebars", function(require, module) {Handlebars.registerHelper("monthTitle", function(weeks) {
  var monthIndex;
  monthIndex = +_.chain(weeks).pluck('month').countBy().pairs().max(_.last).head();
  return "January February March April May June July August September October November December".match(/\w+/g)[monthIndex];
});

Handlebars.registerHelper("yearTitle", function(quarters) {
  var month, quarter, years, _i, _j, _len, _len1, _ref;
  years = [];
  for (_i = 0, _len = quarters.length; _i < _len; _i++) {
    quarter = quarters[_i];
    _ref = quarter.months;
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      month = _ref[_j];
      years = years.concat(_.pluck(month.weeks, 'year'));
    }
  }
  return +_.chain(years).countBy().pairs().max(_.last).head();
});
});
