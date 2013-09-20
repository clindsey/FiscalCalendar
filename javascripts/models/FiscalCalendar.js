window.require.register("models/FiscalCalendar", function(require, module) {var FiscalQuarterModel, Model;

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
