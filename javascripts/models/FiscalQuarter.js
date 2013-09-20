window.require.register("models/FiscalQuarter", function(require, module) {var FiscalWeekModel, Model;

Model = require("models/base/Model");

FiscalWeekModel = require("models/FiscalWeek");

module.exports = Model.extend("FiscalQuarterModel", {
  create: function(options) {
    var fiscalQuarterModel;
    fiscalQuarterModel = this._super();
    fiscalQuarterModel.format = options.format;
    fiscalQuarterModel.year = options.year;
    fiscalQuarterModel.month = options.month;
    fiscalQuarterModel.day = options.day;
    fiscalQuarterModel.months = this._buildMonths(fiscalQuarterModel);
    return fiscalQuarterModel;
  },
  _buildMonths: function(fiscalQuarterModel) {
    var day, index, month, months, nextDay, week, weekCount, weekFormat, weeks, year, _i, _j, _len, _ref;
    months = [];
    year = fiscalQuarterModel.year;
    month = fiscalQuarterModel.month;
    day = fiscalQuarterModel.day;
    week = FiscalWeekModel.create({
      year: year,
      month: month,
      day: day
    });
    weekFormat = fiscalQuarterModel.format.match(/\d+/g);
    for (_i = 0, _len = weekFormat.length; _i < _len; _i++) {
      weekCount = weekFormat[_i];
      weeks = [];
      weeks.push(week);
      for (index = _j = 1, _ref = weekCount - 1; 1 <= _ref ? _j <= _ref : _j >= _ref; index = 1 <= _ref ? ++_j : --_j) {
        nextDay = week.nextDay();
        week = FiscalWeekModel.create(nextDay);
        weeks.push(week);
      }
      months.push({
        weeks: weeks
      });
      nextDay = week.nextDay();
      week = FiscalWeekModel.create(nextDay);
    }
    week.dispose();
    return months;
  }
}, {
  dispose: function() {
    var fiscalWeekModel, month, _i, _j, _len, _len1, _ref, _ref1;
    _ref = this.months;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      month = _ref[_i];
      _ref1 = month.weeks;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        fiscalWeekModel = _ref1[_j];
        fiscalWeekModel.dispose();
      }
    }
    return this._super();
  }
});
});
