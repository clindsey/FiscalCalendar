window.require.register('helpers/handlebars', function(require, module) {

Handlebars.registerHelper("monthTitle", function(weeks) {
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

window.require.register('index', function(require, module) {
var FiscalCalendarModel, FiscalCalendarView, Index, handlebarsHelpers;

FiscalCalendarModel = require("models/FiscalCalendar");

FiscalCalendarView = require("views/FiscalCalendar");

handlebarsHelpers = require("helpers/handlebars");

module.exports = Index = (function() {

  function Index() {
    this.buildCalendar("5-4-4", 2012, 8, 30);
    this.buildCalendar("4-4-5", 2013, 8, 29);
  }

  Index.prototype.buildCalendar = function(format, year, month, day) {
    var fiscalCalendarModel, fiscalCalendarView;
    fiscalCalendarModel = FiscalCalendarModel.create({
      format: format,
      year: year,
      month: month,
      day: day
    });
    fiscalCalendarView = FiscalCalendarView.create(fiscalCalendarModel);
    return $("body").append(fiscalCalendarView.render());
  };

  return Index;

})();

});

window.require.register('models/FiscalCalendar', function(require, module) {
var FiscalQuarterModel, Model;

Model = require("models/base/Model");

FiscalQuarterModel = require("models/FiscalQuarter");

module.exports = Model.extend("FiscalCalendarModel", {
  create: function(settings) {
    var fiscalCalendarModel;
    this._assignSettings(settings);
    fiscalCalendarModel = this._super();
    fiscalCalendarModel.year = settings.year;
    fiscalCalendarModel.month = settings.month;
    fiscalCalendarModel.day = settings.day;
    fiscalCalendarModel.format = settings.format || "5-4-4";
    fiscalCalendarModel.quarters = this._generateQuarters(fiscalCalendarModel);
    return fiscalCalendarModel;
  },
  REQUIRED_SETTINGS: ["year", "month", "day"],
  _generateQuarters: function(fiscalCalendarModel) {
    var lastMonth, lastWeek, quarter, quarterIndex, quarterOptions, quarters, _i;
    quarters = [];
    quarter = FiscalQuarterModel.create({
      format: fiscalCalendarModel.format,
      year: fiscalCalendarModel.year,
      month: fiscalCalendarModel.month,
      day: fiscalCalendarModel.day
    });
    quarters.push(quarter);
    for (quarterIndex = _i = 1; _i <= 3; quarterIndex = ++_i) {
      lastMonth = quarter.months[quarter.months.length - 1];
      lastWeek = lastMonth.weeks[lastMonth.weeks.length - 1];
      quarterOptions = _.extend(_.extend({}, lastWeek.nextDay()), {
        format: fiscalCalendarModel.format
      });
      quarter = FiscalQuarterModel.create(quarterOptions);
      quarters.push(quarter);
    }
    return quarters;
  },
  _assignSettings: function(settings) {
    return _.each(this.REQUIRED_SETTINGS, function(value) {
      if (settings[value] == null) {
        throw new Error("Forgot to supply " + value);
      }
    });
  }
}, {
  dispose: function() {
    var quarter, _i, _len, _ref;
    _ref = this.quarters;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      quarter = _ref[_i];
      quarter.dispose();
    }
    return this._super();
  }
});

});

window.require.register('models/FiscalQuarter', function(require, module) {
var FiscalWeekModel, Model;

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

window.require.register('models/FiscalWeek', function(require, module) {
var FiscalWeekModel, Model;

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

window.require.register('models/base/Model', function(require, module) {

module.exports = gamecore.DualPooled.extend("Model", {
  getUsedLength: function() {
    return this.getPool().getUsedList().count;
  }
}, {
  dispose: function() {
    return this.release();
  }
});

});

window.require.register('views/FiscalCalendar', function(require, module) {
var FiscalCalendarView, View;

View = require("views/base/View");

module.exports = FiscalCalendarView = View.extend("FiscalCalendarView", {
  create: function(model) {
    var fiscalCalendarView;
    fiscalCalendarView = this._super();
    fiscalCalendarView.model = model;
    return fiscalCalendarView;
  },
  template: require("templates")(Handlebars)['app/templates/fiscalCalendar/index.hbs']
}, {
  render: function() {
    return this.$el = $(FiscalCalendarView.template({
      model: this.model
    }));
  },
  dispose: function() {
    if (this.$el != null) {
      this.$el.remove();
    }
    return this._super();
  }
});

});

window.require.register('views/base/View', function(require, module) {

module.exports = gamecore.DualPooled.extend("View", {
  getUsedLength: function() {
    return this.getPool().getUsedList().count;
  }
}, {
  dispose: function() {
    return this.release();
  }
});

});
