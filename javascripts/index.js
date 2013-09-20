window.require.register("index", function(require, module) {var FiscalCalendarModel, FiscalCalendarView, Index, handlebarsHelpers;

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
