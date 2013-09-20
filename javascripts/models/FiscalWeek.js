window.require.register("models/FiscalWeek", function(require, module) {var FiscalWeekModel, Model;

Model = require("models/base/Model");

module.exports = FiscalWeekModel = Model.extend("FiscalWeekModel", {
  create: function(options) {
    var fiscalWeekModel;
    fiscalWeekModel = this._super();
    fiscalWeekModel.year = options.year;
    fiscalWeekModel.month = options.month;
    fiscalWeekModel.day = options.day;
    fiscalWeekModel.days = this._buildDays(fiscalWeekModel);
    return fiscalWeekModel;
  },
  _buildDays: function(fiscalWeekModel) {
    var date, day, dayIndex, days, daysInMonth, month, year, _i;
    days = [];
    year = fiscalWeekModel.year;
    month = fiscalWeekModel.month;
    day = fiscalWeekModel.day;
    daysInMonth = this._daysInMonth(year, fiscalWeekModel.month);
    for (dayIndex = _i = 0; _i <= 6; dayIndex = ++_i) {
      date = new Date("" + year + " " + (month + 1) + " " + day);
      days.push({
        day: date.getDate(),
        date: date.toJSON(),
        dayOfWeek: dayIndex
      });
      day += 1;
      if (day > daysInMonth) {
        day = 1;
        month += 1;
        if (month > 11) {
          month = 0;
          year += 1;
        }
      }
    }
    return days;
  },
  _daysInMonth: function(year, month) {
    if (month === 1) {
      return 28 + this._isLeapYear(year);
    } else {
      return 31 - month % 7 % 2;
    }
  },
  _isLeapYear: function(year) {
    var isLeapYear;
    isLeapYear = false;
    if (year % 400 === 0) {
      isLeapYear = true;
    } else if (year % 100 === 0) {
      isLeapYear = true;
    } else if (year % 4 === 0) {
      isLeapYear = true;
    }
    return isLeapYear;
  }
}, {
  nextDay: function() {
    var day, daysInMonth, lastDay, month, year;
    lastDay = new Date(this.days[6].date);
    year = lastDay.getFullYear();
    month = lastDay.getMonth();
    day = lastDay.getDate();
    daysInMonth = FiscalWeekModel._daysInMonth(year, month);
    day += 1;
    if (day > daysInMonth) {
      day = 1;
      month += 1;
      if (month > 11) {
        month = 1;
        year += 1;
      }
    }
    return {
      year: year,
      month: month,
      day: day
    };
  },
  dispose: function() {
    return this._super();
  }
});
});
