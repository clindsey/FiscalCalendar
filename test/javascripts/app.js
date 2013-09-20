if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/app.js'] === 'undefined'){_$jscoverage['public/javascripts/app.js']=[];
_$jscoverage['public/javascripts/app.js'].source=['window.require.register(\'helpers/handlebars\', function(require, module) {',
'',
'Handlebars.registerHelper("monthTitle", function(weeks) {',
'  var monthIndex;',
'  monthIndex = +_.chain(weeks).pluck(\'month\').countBy().pairs().max(_.last).head();',
'  return "January February March April May June July August September October November December".match(/\\w+/g)[monthIndex];',
'});',
'',
'Handlebars.registerHelper("yearTitle", function(quarters) {',
'  var month, quarter, years, _i, _j, _len, _len1, _ref;',
'  years = [];',
'  for (_i = 0, _len = quarters.length; _i < _len; _i++) {',
'    quarter = quarters[_i];',
'    _ref = quarter.months;',
'    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {',
'      month = _ref[_j];',
'      years = years.concat(_.pluck(month.weeks, \'year\'));',
'    }',
'  }',
'  return +_.chain(years).countBy().pairs().max(_.last).head();',
'});',
'',
'});',
'',
'window.require.register(\'index\', function(require, module) {',
'var FiscalCalendarModel, FiscalCalendarView, Index, handlebarsHelpers;',
'',
'FiscalCalendarModel = require("models/FiscalCalendar");',
'',
'FiscalCalendarView = require("views/FiscalCalendar");',
'',
'handlebarsHelpers = require("helpers/handlebars");',
'',
'module.exports = Index = (function() {',
'',
'  function Index() {',
'    this.buildCalendar("5-4-4", 2012, 8, 30);',
'    this.buildCalendar("4-4-5", 2013, 8, 29);',
'  }',
'',
'  Index.prototype.buildCalendar = function(format, year, month, day) {',
'    var fiscalCalendarModel, fiscalCalendarView;',
'    fiscalCalendarModel = FiscalCalendarModel.create({',
'      format: format,',
'      year: year,',
'      month: month,',
'      day: day',
'    });',
'    fiscalCalendarView = FiscalCalendarView.create(fiscalCalendarModel);',
'    return $("body").append(fiscalCalendarView.render());',
'  };',
'',
'  return Index;',
'',
'})();',
'',
'});',
'',
'window.require.register(\'models/FiscalCalendar\', function(require, module) {',
'var FiscalQuarterModel, Model;',
'',
'Model = require("models/base/Model");',
'',
'FiscalQuarterModel = require("models/FiscalQuarter");',
'',
'module.exports = Model.extend("FiscalCalendarModel", {',
'  create: function(settings) {',
'    var fiscalCalendarModel;',
'    this._assignSettings(settings);',
'    fiscalCalendarModel = this._super();',
'    fiscalCalendarModel.year = settings.year;',
'    fiscalCalendarModel.month = settings.month;',
'    fiscalCalendarModel.day = settings.day;',
'    fiscalCalendarModel.format = settings.format || "5-4-4";',
'    fiscalCalendarModel.quarters = this._generateQuarters(fiscalCalendarModel);',
'    return fiscalCalendarModel;',
'  },',
'  REQUIRED_SETTINGS: ["year", "month", "day"],',
'  _generateQuarters: function(fiscalCalendarModel) {',
'    var lastMonth, lastWeek, quarter, quarterIndex, quarterOptions, quarters, _i;',
'    quarters = [];',
'    quarter = FiscalQuarterModel.create({',
'      format: fiscalCalendarModel.format,',
'      year: fiscalCalendarModel.year,',
'      month: fiscalCalendarModel.month,',
'      day: fiscalCalendarModel.day',
'    });',
'    quarters.push(quarter);',
'    for (quarterIndex = _i = 1; _i <= 3; quarterIndex = ++_i) {',
'      lastMonth = quarter.months[quarter.months.length - 1];',
'      lastWeek = lastMonth.weeks[lastMonth.weeks.length - 1];',
'      quarterOptions = _.extend(_.extend({}, lastWeek.nextDay()), {',
'        format: fiscalCalendarModel.format',
'      });',
'      quarter = FiscalQuarterModel.create(quarterOptions);',
'      quarters.push(quarter);',
'    }',
'    return quarters;',
'  },',
'  _assignSettings: function(settings) {',
'    return _.each(this.REQUIRED_SETTINGS, function(value) {',
'      if (settings[value] == null) {',
'        throw new Error("Forgot to supply " + value);',
'      }',
'    });',
'  }',
'}, {',
'  dispose: function() {',
'    var quarter, _i, _len, _ref;',
'    _ref = this.quarters;',
'    for (_i = 0, _len = _ref.length; _i < _len; _i++) {',
'      quarter = _ref[_i];',
'      quarter.dispose();',
'    }',
'    return this._super();',
'  }',
'});',
'',
'});',
'',
'window.require.register(\'models/FiscalQuarter\', function(require, module) {',
'var FiscalWeekModel, Model;',
'',
'Model = require("models/base/Model");',
'',
'FiscalWeekModel = require("models/FiscalWeek");',
'',
'module.exports = Model.extend("FiscalQuarterModel", {',
'  create: function(options) {',
'    var fiscalQuarterModel;',
'    fiscalQuarterModel = this._super();',
'    fiscalQuarterModel.format = options.format;',
'    fiscalQuarterModel.year = options.year;',
'    fiscalQuarterModel.month = options.month;',
'    fiscalQuarterModel.day = options.day;',
'    fiscalQuarterModel.months = this._buildMonths(fiscalQuarterModel);',
'    return fiscalQuarterModel;',
'  },',
'  _buildMonths: function(fiscalQuarterModel) {',
'    var day, index, month, months, nextDay, week, weekCount, weekFormat, weeks, year, _i, _j, _len, _ref;',
'    months = [];',
'    year = fiscalQuarterModel.year;',
'    month = fiscalQuarterModel.month;',
'    day = fiscalQuarterModel.day;',
'    week = FiscalWeekModel.create({',
'      year: year,',
'      month: month,',
'      day: day',
'    });',
'    weekFormat = fiscalQuarterModel.format.match(/\\d+/g);',
'    for (_i = 0, _len = weekFormat.length; _i < _len; _i++) {',
'      weekCount = weekFormat[_i];',
'      weeks = [];',
'      weeks.push(week);',
'      for (index = _j = 1, _ref = weekCount - 1; 1 <= _ref ? _j <= _ref : _j >= _ref; index = 1 <= _ref ? ++_j : --_j) {',
'        nextDay = week.nextDay();',
'        week = FiscalWeekModel.create(nextDay);',
'        weeks.push(week);',
'      }',
'      months.push({',
'        weeks: weeks',
'      });',
'      nextDay = week.nextDay();',
'      week = FiscalWeekModel.create(nextDay);',
'    }',
'    week.dispose();',
'    return months;',
'  }',
'}, {',
'  dispose: function() {',
'    var fiscalWeekModel, month, _i, _j, _len, _len1, _ref, _ref1;',
'    _ref = this.months;',
'    for (_i = 0, _len = _ref.length; _i < _len; _i++) {',
'      month = _ref[_i];',
'      _ref1 = month.weeks;',
'      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {',
'        fiscalWeekModel = _ref1[_j];',
'        fiscalWeekModel.dispose();',
'      }',
'    }',
'    return this._super();',
'  }',
'});',
'',
'});',
'',
'window.require.register(\'models/FiscalWeek\', function(require, module) {',
'var FiscalWeekModel, Model;',
'',
'Model = require("models/base/Model");',
'',
'module.exports = FiscalWeekModel = Model.extend("FiscalWeekModel", {',
'  create: function(options) {',
'    var fiscalWeekModel;',
'    fiscalWeekModel = this._super();',
'    fiscalWeekModel.year = options.year;',
'    fiscalWeekModel.month = options.month;',
'    fiscalWeekModel.day = options.day;',
'    fiscalWeekModel.days = this._buildDays(fiscalWeekModel);',
'    return fiscalWeekModel;',
'  },',
'  _buildDays: function(fiscalWeekModel) {',
'    var date, day, dayIndex, days, daysInMonth, month, year, _i;',
'    days = [];',
'    year = fiscalWeekModel.year;',
'    month = fiscalWeekModel.month;',
'    day = fiscalWeekModel.day;',
'    daysInMonth = this._daysInMonth(year, fiscalWeekModel.month);',
'    for (dayIndex = _i = 0; _i <= 6; dayIndex = ++_i) {',
'      date = new Date("" + year + " " + (month + 1) + " " + day);',
'      days.push({',
'        day: date.getDate(),',
'        date: date.toJSON(),',
'        dayOfWeek: dayIndex',
'      });',
'      day += 1;',
'      if (day > daysInMonth) {',
'        day = 1;',
'        month += 1;',
'        if (month > 11) {',
'          month = 0;',
'          year += 1;',
'        }',
'      }',
'    }',
'    return days;',
'  },',
'  _daysInMonth: function(year, month) {',
'    if (month === 1) {',
'      return 28 + this._isLeapYear(year);',
'    } else {',
'      return 31 - month % 7 % 2;',
'    }',
'  },',
'  _isLeapYear: function(year) {',
'    var isLeapYear;',
'    isLeapYear = false;',
'    if (year % 400 === 0) {',
'      isLeapYear = true;',
'    } else if (year % 100 === 0) {',
'      isLeapYear = true;',
'    } else if (year % 4 === 0) {',
'      isLeapYear = true;',
'    }',
'    return isLeapYear;',
'  }',
'}, {',
'  nextDay: function() {',
'    var day, daysInMonth, lastDay, month, year;',
'    lastDay = new Date(this.days[6].date);',
'    year = lastDay.getFullYear();',
'    month = lastDay.getMonth();',
'    day = lastDay.getDate();',
'    daysInMonth = FiscalWeekModel._daysInMonth(year, month);',
'    day += 1;',
'    if (day > daysInMonth) {',
'      day = 1;',
'      month += 1;',
'      if (month > 11) {',
'        month = 1;',
'        year += 1;',
'      }',
'    }',
'    return {',
'      year: year,',
'      month: month,',
'      day: day',
'    };',
'  },',
'  dispose: function() {',
'    return this._super();',
'  }',
'});',
'',
'});',
'',
'window.require.register(\'models/base/Model\', function(require, module) {',
'',
'module.exports = gamecore.DualPooled.extend("Model", {',
'  getUsedLength: function() {',
'    return this.getPool().getUsedList().count;',
'  }',
'}, {',
'  dispose: function() {',
'    return this.release();',
'  }',
'});',
'',
'});',
'',
'window.require.register(\'views/FiscalCalendar\', function(require, module) {',
'var FiscalCalendarView, View;',
'',
'View = require("views/base/View");',
'',
'module.exports = FiscalCalendarView = View.extend("FiscalCalendarView", {',
'  create: function(model) {',
'    var fiscalCalendarView;',
'    fiscalCalendarView = this._super();',
'    fiscalCalendarView.model = model;',
'    return fiscalCalendarView;',
'  },',
'  template: require("templates")(Handlebars)[\'app/templates/fiscalCalendar/index.hbs\']',
'}, {',
'  render: function() {',
'    return this.$el = $(FiscalCalendarView.template({',
'      model: this.model',
'    }));',
'  },',
'  dispose: function() {',
'    if (this.$el != null) {',
'      this.$el.remove();',
'    }',
'    return this._super();',
'  }',
'});',
'',
'});',
'',
'window.require.register(\'views/base/View\', function(require, module) {',
'',
'module.exports = gamecore.DualPooled.extend("View", {',
'  getUsedLength: function() {',
'    return this.getPool().getUsedList().count;',
'  }',
'}, {',
'  dispose: function() {',
'    return this.release();',
'  }',
'});',
'',
'});',
''];
_$jscoverage['public/javascripts/app.js'][163]=0;
_$jscoverage['public/javascripts/app.js'][4]=0;
_$jscoverage['public/javascripts/app.js'][1]=0;
_$jscoverage['public/javascripts/app.js'][3]=0;
_$jscoverage['public/javascripts/app.js'][151]=0;
_$jscoverage['public/javascripts/app.js'][10]=0;
_$jscoverage['public/javascripts/app.js'][5]=0;
_$jscoverage['public/javascripts/app.js'][6]=0;
_$jscoverage['public/javascripts/app.js'][9]=0;
_$jscoverage['public/javascripts/app.js'][171]=0;
_$jscoverage['public/javascripts/app.js'][17]=0;
_$jscoverage['public/javascripts/app.js'][12]=0;
_$jscoverage['public/javascripts/app.js'][15]=0;
_$jscoverage['public/javascripts/app.js'][16]=0;
_$jscoverage['public/javascripts/app.js'][14]=0;
_$jscoverage['public/javascripts/app.js'][11]=0;
_$jscoverage['public/javascripts/app.js'][13]=0;
_$jscoverage['public/javascripts/app.js'][177]=0;
_$jscoverage['public/javascripts/app.js'][30]=0;
_$jscoverage['public/javascripts/app.js'][20]=0;
_$jscoverage['public/javascripts/app.js'][26]=0;
_$jscoverage['public/javascripts/app.js'][28]=0;
_$jscoverage['public/javascripts/app.js'][25]=0;
_$jscoverage['public/javascripts/app.js'][173]=0;
_$jscoverage['public/javascripts/app.js'][43]=0;
_$jscoverage['public/javascripts/app.js'][32]=0;
_$jscoverage['public/javascripts/app.js'][41]=0;
_$jscoverage['public/javascripts/app.js'][37]=0;
_$jscoverage['public/javascripts/app.js'][34]=0;
_$jscoverage['public/javascripts/app.js'][42]=0;
_$jscoverage['public/javascripts/app.js'][38]=0;
_$jscoverage['public/javascripts/app.js'][36]=0;
_$jscoverage['public/javascripts/app.js'][188]=0;
_$jscoverage['public/javascripts/app.js'][64]=0;
_$jscoverage['public/javascripts/app.js'][49]=0;
_$jscoverage['public/javascripts/app.js'][50]=0;
_$jscoverage['public/javascripts/app.js'][53]=0;
_$jscoverage['public/javascripts/app.js'][60]=0;
_$jscoverage['public/javascripts/app.js'][62]=0;
_$jscoverage['public/javascripts/app.js'][59]=0;
_$jscoverage['public/javascripts/app.js'][196]=0;
_$jscoverage['public/javascripts/app.js'][75]=0;
_$jscoverage['public/javascripts/app.js'][68]=0;
_$jscoverage['public/javascripts/app.js'][69]=0;
_$jscoverage['public/javascripts/app.js'][70]=0;
_$jscoverage['public/javascripts/app.js'][71]=0;
_$jscoverage['public/javascripts/app.js'][72]=0;
_$jscoverage['public/javascripts/app.js'][73]=0;
_$jscoverage['public/javascripts/app.js'][74]=0;
_$jscoverage['public/javascripts/app.js'][66]=0;
_$jscoverage['public/javascripts/app.js'][203]=0;
_$jscoverage['public/javascripts/app.js'][96]=0;
_$jscoverage['public/javascripts/app.js'][89]=0;
_$jscoverage['public/javascripts/app.js'][76]=0;
_$jscoverage['public/javascripts/app.js'][80]=0;
_$jscoverage['public/javascripts/app.js'][81]=0;
_$jscoverage['public/javascripts/app.js'][82]=0;
_$jscoverage['public/javascripts/app.js'][88]=0;
_$jscoverage['public/javascripts/app.js'][90]=0;
_$jscoverage['public/javascripts/app.js'][91]=0;
_$jscoverage['public/javascripts/app.js'][92]=0;
_$jscoverage['public/javascripts/app.js'][95]=0;
_$jscoverage['public/javascripts/app.js'][210]=0;
_$jscoverage['public/javascripts/app.js'][115]=0;
_$jscoverage['public/javascripts/app.js'][111]=0;
_$jscoverage['public/javascripts/app.js'][98]=0;
_$jscoverage['public/javascripts/app.js'][103]=0;
_$jscoverage['public/javascripts/app.js'][102]=0;
_$jscoverage['public/javascripts/app.js'][101]=0;
_$jscoverage['public/javascripts/app.js'][109]=0;
_$jscoverage['public/javascripts/app.js'][110]=0;
_$jscoverage['public/javascripts/app.js'][112]=0;
_$jscoverage['public/javascripts/app.js'][113]=0;
_$jscoverage['public/javascripts/app.js'][222]=0;
_$jscoverage['public/javascripts/app.js'][136]=0;
_$jscoverage['public/javascripts/app.js'][122]=0;
_$jscoverage['public/javascripts/app.js'][124]=0;
_$jscoverage['public/javascripts/app.js'][126]=0;
_$jscoverage['public/javascripts/app.js'][130]=0;
_$jscoverage['public/javascripts/app.js'][121]=0;
_$jscoverage['public/javascripts/app.js'][128]=0;
_$jscoverage['public/javascripts/app.js'][131]=0;
_$jscoverage['public/javascripts/app.js'][132]=0;
_$jscoverage['public/javascripts/app.js'][133]=0;
_$jscoverage['public/javascripts/app.js'][134]=0;
_$jscoverage['public/javascripts/app.js'][135]=0;
_$jscoverage['public/javascripts/app.js'][232]=0;
_$jscoverage['public/javascripts/app.js'][157]=0;
_$jscoverage['public/javascripts/app.js'][155]=0;
_$jscoverage['public/javascripts/app.js'][137]=0;
_$jscoverage['public/javascripts/app.js'][156]=0;
_$jscoverage['public/javascripts/app.js'][140]=0;
_$jscoverage['public/javascripts/app.js'][154]=0;
_$jscoverage['public/javascripts/app.js'][141]=0;
_$jscoverage['public/javascripts/app.js'][142]=0;
_$jscoverage['public/javascripts/app.js'][153]=0;
_$jscoverage['public/javascripts/app.js'][143]=0;
_$jscoverage['public/javascripts/app.js'][144]=0;
_$jscoverage['public/javascripts/app.js'][145]=0;
_$jscoverage['public/javascripts/app.js'][152]=0;
_$jscoverage['public/javascripts/app.js'][150]=0;
_$jscoverage['public/javascripts/app.js'][240]=0;
_$jscoverage['public/javascripts/app.js'][176]=0;
_$jscoverage['public/javascripts/app.js'][158]=0;
_$jscoverage['public/javascripts/app.js'][175]=0;
_$jscoverage['public/javascripts/app.js'][174]=0;
_$jscoverage['public/javascripts/app.js'][172]=0;
_$jscoverage['public/javascripts/app.js'][160]=0;
_$jscoverage['public/javascripts/app.js'][164]=0;
_$jscoverage['public/javascripts/app.js'][166]=0;
_$jscoverage['public/javascripts/app.js'][167]=0;
_$jscoverage['public/javascripts/app.js'][251]=0;
_$jscoverage['public/javascripts/app.js'][197]=0;
_$jscoverage['public/javascripts/app.js'][187]=0;
_$jscoverage['public/javascripts/app.js'][192]=0;
_$jscoverage['public/javascripts/app.js'][195]=0;
_$jscoverage['public/javascripts/app.js'][178]=0;
_$jscoverage['public/javascripts/app.js'][181]=0;
_$jscoverage['public/javascripts/app.js'][190]=0;
_$jscoverage['public/javascripts/app.js'][194]=0;
_$jscoverage['public/javascripts/app.js'][255]=0;
_$jscoverage['public/javascripts/app.js'][208]=0;
_$jscoverage['public/javascripts/app.js'][199]=0;
_$jscoverage['public/javascripts/app.js'][200]=0;
_$jscoverage['public/javascripts/app.js'][207]=0;
_$jscoverage['public/javascripts/app.js'][198]=0;
_$jscoverage['public/javascripts/app.js'][204]=0;
_$jscoverage['public/javascripts/app.js'][206]=0;
_$jscoverage['public/javascripts/app.js'][205]=0;
_$jscoverage['public/javascripts/app.js'][259]=0;
_$jscoverage['public/javascripts/app.js'][217]=0;
_$jscoverage['public/javascripts/app.js'][211]=0;
_$jscoverage['public/javascripts/app.js'][216]=0;
_$jscoverage['public/javascripts/app.js'][209]=0;
_$jscoverage['public/javascripts/app.js'][264]=0;
_$jscoverage['public/javascripts/app.js'][229]=0;
_$jscoverage['public/javascripts/app.js'][226]=0;
_$jscoverage['public/javascripts/app.js'][220]=0;
_$jscoverage['public/javascripts/app.js'][218]=0;
_$jscoverage['public/javascripts/app.js'][219]=0;
_$jscoverage['public/javascripts/app.js'][221]=0;
_$jscoverage['public/javascripts/app.js'][281]=0;
_$jscoverage['public/javascripts/app.js'][242]=0;
_$jscoverage['public/javascripts/app.js'][238]=0;
_$jscoverage['public/javascripts/app.js'][237]=0;
_$jscoverage['public/javascripts/app.js'][230]=0;
_$jscoverage['public/javascripts/app.js'][236]=0;
_$jscoverage['public/javascripts/app.js'][239]=0;
_$jscoverage['public/javascripts/app.js'][241]=0;
_$jscoverage['public/javascripts/app.js'][292]=0;
_$jscoverage['public/javascripts/app.js'][254]=0;
_$jscoverage['public/javascripts/app.js'][253]=0;
_$jscoverage['public/javascripts/app.js'][245]=0;
_$jscoverage['public/javascripts/app.js'][249]=0;
_$jscoverage['public/javascripts/app.js'][250]=0;
_$jscoverage['public/javascripts/app.js'][252]=0;
_$jscoverage['public/javascripts/app.js'][243]=0;
_$jscoverage['public/javascripts/app.js'][300]=0;
_$jscoverage['public/javascripts/app.js'][256]=0;
_$jscoverage['public/javascripts/app.js'][301]=0;
_$jscoverage['public/javascripts/app.js'][261]=0;
_$jscoverage['public/javascripts/app.js'][258]=0;
_$jscoverage['public/javascripts/app.js'][260]=0;
_$jscoverage['public/javascripts/app.js'][257]=0;
_$jscoverage['public/javascripts/app.js'][312]=0;
_$jscoverage['public/javascripts/app.js'][277]=0;
_$jscoverage['public/javascripts/app.js'][271]=0;
_$jscoverage['public/javascripts/app.js'][314]=0;
_$jscoverage['public/javascripts/app.js'][298]=0;
_$jscoverage['public/javascripts/app.js'][294]=0;
_$jscoverage['public/javascripts/app.js'][285]=0;
_$jscoverage['public/javascripts/app.js'][291]=0;
_$jscoverage['public/javascripts/app.js'][279]=0;
_$jscoverage['public/javascripts/app.js'][296]=0;
_$jscoverage['public/javascripts/app.js'][299]=0;
_$jscoverage['public/javascripts/app.js'][306]=0;
_$jscoverage['public/javascripts/app.js'][311]=0;
_$jscoverage['public/javascripts/app.js'][320]=0;
_$jscoverage['public/javascripts/app.js'][322]=0;
_$jscoverage['public/javascripts/app.js'][324]=0;
_$jscoverage['public/javascripts/app.js'][328]=0;
}_$jscoverage['public/javascripts/app.js'][1]++;
window.require.register('helpers/handlebars', function(require, module) {

_$jscoverage['public/javascripts/app.js'][3]++;
Handlebars.registerHelper("monthTitle", function(weeks) {
  _$jscoverage['public/javascripts/app.js'][4]++;
var monthIndex;
  _$jscoverage['public/javascripts/app.js'][5]++;
monthIndex = +_.chain(weeks).pluck('month').countBy().pairs().max(_.last).head();
  _$jscoverage['public/javascripts/app.js'][6]++;
return "January February March April May June July August September October November December".match(/\w+/g)[monthIndex];
});

_$jscoverage['public/javascripts/app.js'][9]++;
Handlebars.registerHelper("yearTitle", function(quarters) {
  _$jscoverage['public/javascripts/app.js'][10]++;
var month, quarter, years, _i, _j, _len, _len1, _ref;
  _$jscoverage['public/javascripts/app.js'][11]++;
years = [];
  _$jscoverage['public/javascripts/app.js'][12]++;
for (_i = 0, _len = quarters.length; _i < _len; _i++) {
    _$jscoverage['public/javascripts/app.js'][13]++;
quarter = quarters[_i];
    _$jscoverage['public/javascripts/app.js'][14]++;
_ref = quarter.months;
    _$jscoverage['public/javascripts/app.js'][15]++;
for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      _$jscoverage['public/javascripts/app.js'][16]++;
month = _ref[_j];
      _$jscoverage['public/javascripts/app.js'][17]++;
years = years.concat(_.pluck(month.weeks, 'year'));
    }
  }
  _$jscoverage['public/javascripts/app.js'][20]++;
return +_.chain(years).countBy().pairs().max(_.last).head();
});

});

_$jscoverage['public/javascripts/app.js'][25]++;
window.require.register('index', function(require, module) {
_$jscoverage['public/javascripts/app.js'][26]++;
var FiscalCalendarModel, FiscalCalendarView, Index, handlebarsHelpers;

_$jscoverage['public/javascripts/app.js'][28]++;
FiscalCalendarModel = require("models/FiscalCalendar");

_$jscoverage['public/javascripts/app.js'][30]++;
FiscalCalendarView = require("views/FiscalCalendar");

_$jscoverage['public/javascripts/app.js'][32]++;
handlebarsHelpers = require("helpers/handlebars");

_$jscoverage['public/javascripts/app.js'][34]++;
module.exports = Index = (function() {

  _$jscoverage['public/javascripts/app.js'][36]++;
function Index() {
    _$jscoverage['public/javascripts/app.js'][37]++;
this.buildCalendar("5-4-4", 2012, 8, 30);
    _$jscoverage['public/javascripts/app.js'][38]++;
this.buildCalendar("4-4-5", 2013, 8, 29);
  }

  _$jscoverage['public/javascripts/app.js'][41]++;
Index.prototype.buildCalendar = function(format, year, month, day) {
    _$jscoverage['public/javascripts/app.js'][42]++;
var fiscalCalendarModel, fiscalCalendarView;
    _$jscoverage['public/javascripts/app.js'][43]++;
fiscalCalendarModel = FiscalCalendarModel.create({
      format: format,
      year: year,
      month: month,
      day: day
    });
    _$jscoverage['public/javascripts/app.js'][49]++;
fiscalCalendarView = FiscalCalendarView.create(fiscalCalendarModel);
    _$jscoverage['public/javascripts/app.js'][50]++;
return $("body").append(fiscalCalendarView.render());
  };

  _$jscoverage['public/javascripts/app.js'][53]++;
return Index;

})();

});

_$jscoverage['public/javascripts/app.js'][59]++;
window.require.register('models/FiscalCalendar', function(require, module) {
_$jscoverage['public/javascripts/app.js'][60]++;
var FiscalQuarterModel, Model;

_$jscoverage['public/javascripts/app.js'][62]++;
Model = require("models/base/Model");

_$jscoverage['public/javascripts/app.js'][64]++;
FiscalQuarterModel = require("models/FiscalQuarter");

_$jscoverage['public/javascripts/app.js'][66]++;
module.exports = Model.extend("FiscalCalendarModel", {
  create: function(settings) {
    _$jscoverage['public/javascripts/app.js'][68]++;
var fiscalCalendarModel;
    _$jscoverage['public/javascripts/app.js'][69]++;
this._assignSettings(settings);
    _$jscoverage['public/javascripts/app.js'][70]++;
fiscalCalendarModel = this._super();
    _$jscoverage['public/javascripts/app.js'][71]++;
fiscalCalendarModel.year = settings.year;
    _$jscoverage['public/javascripts/app.js'][72]++;
fiscalCalendarModel.month = settings.month;
    _$jscoverage['public/javascripts/app.js'][73]++;
fiscalCalendarModel.day = settings.day;
    _$jscoverage['public/javascripts/app.js'][74]++;
fiscalCalendarModel.format = settings.format || "5-4-4";
    _$jscoverage['public/javascripts/app.js'][75]++;
fiscalCalendarModel.quarters = this._generateQuarters(fiscalCalendarModel);
    _$jscoverage['public/javascripts/app.js'][76]++;
return fiscalCalendarModel;
  },
  REQUIRED_SETTINGS: ["year", "month", "day"],
  _generateQuarters: function(fiscalCalendarModel) {
    _$jscoverage['public/javascripts/app.js'][80]++;
var lastMonth, lastWeek, quarter, quarterIndex, quarterOptions, quarters, _i;
    _$jscoverage['public/javascripts/app.js'][81]++;
quarters = [];
    _$jscoverage['public/javascripts/app.js'][82]++;
quarter = FiscalQuarterModel.create({
      format: fiscalCalendarModel.format,
      year: fiscalCalendarModel.year,
      month: fiscalCalendarModel.month,
      day: fiscalCalendarModel.day
    });
    _$jscoverage['public/javascripts/app.js'][88]++;
quarters.push(quarter);
    _$jscoverage['public/javascripts/app.js'][89]++;
for (quarterIndex = _i = 1; _i <= 3; quarterIndex = ++_i) {
      _$jscoverage['public/javascripts/app.js'][90]++;
lastMonth = quarter.months[quarter.months.length - 1];
      _$jscoverage['public/javascripts/app.js'][91]++;
lastWeek = lastMonth.weeks[lastMonth.weeks.length - 1];
      _$jscoverage['public/javascripts/app.js'][92]++;
quarterOptions = _.extend(_.extend({}, lastWeek.nextDay()), {
        format: fiscalCalendarModel.format
      });
      _$jscoverage['public/javascripts/app.js'][95]++;
quarter = FiscalQuarterModel.create(quarterOptions);
      _$jscoverage['public/javascripts/app.js'][96]++;
quarters.push(quarter);
    }
    _$jscoverage['public/javascripts/app.js'][98]++;
return quarters;
  },
  _assignSettings: function(settings) {
    _$jscoverage['public/javascripts/app.js'][101]++;
return _.each(this.REQUIRED_SETTINGS, function(value) {
      _$jscoverage['public/javascripts/app.js'][102]++;
if (settings[value] == null) {
        _$jscoverage['public/javascripts/app.js'][103]++;
throw new Error("Forgot to supply " + value);
      }
    });
  }
}, {
  dispose: function() {
    _$jscoverage['public/javascripts/app.js'][109]++;
var quarter, _i, _len, _ref;
    _$jscoverage['public/javascripts/app.js'][110]++;
_ref = this.quarters;
    _$jscoverage['public/javascripts/app.js'][111]++;
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      _$jscoverage['public/javascripts/app.js'][112]++;
quarter = _ref[_i];
      _$jscoverage['public/javascripts/app.js'][113]++;
quarter.dispose();
    }
    _$jscoverage['public/javascripts/app.js'][115]++;
return this._super();
  }
});

});

_$jscoverage['public/javascripts/app.js'][121]++;
window.require.register('models/FiscalQuarter', function(require, module) {
_$jscoverage['public/javascripts/app.js'][122]++;
var FiscalWeekModel, Model;

_$jscoverage['public/javascripts/app.js'][124]++;
Model = require("models/base/Model");

_$jscoverage['public/javascripts/app.js'][126]++;
FiscalWeekModel = require("models/FiscalWeek");

_$jscoverage['public/javascripts/app.js'][128]++;
module.exports = Model.extend("FiscalQuarterModel", {
  create: function(options) {
    _$jscoverage['public/javascripts/app.js'][130]++;
var fiscalQuarterModel;
    _$jscoverage['public/javascripts/app.js'][131]++;
fiscalQuarterModel = this._super();
    _$jscoverage['public/javascripts/app.js'][132]++;
fiscalQuarterModel.format = options.format;
    _$jscoverage['public/javascripts/app.js'][133]++;
fiscalQuarterModel.year = options.year;
    _$jscoverage['public/javascripts/app.js'][134]++;
fiscalQuarterModel.month = options.month;
    _$jscoverage['public/javascripts/app.js'][135]++;
fiscalQuarterModel.day = options.day;
    _$jscoverage['public/javascripts/app.js'][136]++;
fiscalQuarterModel.months = this._buildMonths(fiscalQuarterModel);
    _$jscoverage['public/javascripts/app.js'][137]++;
return fiscalQuarterModel;
  },
  _buildMonths: function(fiscalQuarterModel) {
    _$jscoverage['public/javascripts/app.js'][140]++;
var day, index, month, months, nextDay, week, weekCount, weekFormat, weeks, year, _i, _j, _len, _ref;
    _$jscoverage['public/javascripts/app.js'][141]++;
months = [];
    _$jscoverage['public/javascripts/app.js'][142]++;
year = fiscalQuarterModel.year;
    _$jscoverage['public/javascripts/app.js'][143]++;
month = fiscalQuarterModel.month;
    _$jscoverage['public/javascripts/app.js'][144]++;
day = fiscalQuarterModel.day;
    _$jscoverage['public/javascripts/app.js'][145]++;
week = FiscalWeekModel.create({
      year: year,
      month: month,
      day: day
    });
    _$jscoverage['public/javascripts/app.js'][150]++;
weekFormat = fiscalQuarterModel.format.match(/\d+/g);
    _$jscoverage['public/javascripts/app.js'][151]++;
for (_i = 0, _len = weekFormat.length; _i < _len; _i++) {
      _$jscoverage['public/javascripts/app.js'][152]++;
weekCount = weekFormat[_i];
      _$jscoverage['public/javascripts/app.js'][153]++;
weeks = [];
      _$jscoverage['public/javascripts/app.js'][154]++;
weeks.push(week);
      _$jscoverage['public/javascripts/app.js'][155]++;
for (index = _j = 1, _ref = weekCount - 1; 1 <= _ref ? _j <= _ref : _j >= _ref; index = 1 <= _ref ? ++_j : --_j) {
        _$jscoverage['public/javascripts/app.js'][156]++;
nextDay = week.nextDay();
        _$jscoverage['public/javascripts/app.js'][157]++;
week = FiscalWeekModel.create(nextDay);
        _$jscoverage['public/javascripts/app.js'][158]++;
weeks.push(week);
      }
      _$jscoverage['public/javascripts/app.js'][160]++;
months.push({
        weeks: weeks
      });
      _$jscoverage['public/javascripts/app.js'][163]++;
nextDay = week.nextDay();
      _$jscoverage['public/javascripts/app.js'][164]++;
week = FiscalWeekModel.create(nextDay);
    }
    _$jscoverage['public/javascripts/app.js'][166]++;
week.dispose();
    _$jscoverage['public/javascripts/app.js'][167]++;
return months;
  }
}, {
  dispose: function() {
    _$jscoverage['public/javascripts/app.js'][171]++;
var fiscalWeekModel, month, _i, _j, _len, _len1, _ref, _ref1;
    _$jscoverage['public/javascripts/app.js'][172]++;
_ref = this.months;
    _$jscoverage['public/javascripts/app.js'][173]++;
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      _$jscoverage['public/javascripts/app.js'][174]++;
month = _ref[_i];
      _$jscoverage['public/javascripts/app.js'][175]++;
_ref1 = month.weeks;
      _$jscoverage['public/javascripts/app.js'][176]++;
for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        _$jscoverage['public/javascripts/app.js'][177]++;
fiscalWeekModel = _ref1[_j];
        _$jscoverage['public/javascripts/app.js'][178]++;
fiscalWeekModel.dispose();
      }
    }
    _$jscoverage['public/javascripts/app.js'][181]++;
return this._super();
  }
});

});

_$jscoverage['public/javascripts/app.js'][187]++;
window.require.register('models/FiscalWeek', function(require, module) {
_$jscoverage['public/javascripts/app.js'][188]++;
var FiscalWeekModel, Model;

_$jscoverage['public/javascripts/app.js'][190]++;
Model = require("models/base/Model");

_$jscoverage['public/javascripts/app.js'][192]++;
module.exports = FiscalWeekModel = Model.extend("FiscalWeekModel", {
  create: function(options) {
    _$jscoverage['public/javascripts/app.js'][194]++;
var fiscalWeekModel;
    _$jscoverage['public/javascripts/app.js'][195]++;
fiscalWeekModel = this._super();
    _$jscoverage['public/javascripts/app.js'][196]++;
fiscalWeekModel.year = options.year;
    _$jscoverage['public/javascripts/app.js'][197]++;
fiscalWeekModel.month = options.month;
    _$jscoverage['public/javascripts/app.js'][198]++;
fiscalWeekModel.day = options.day;
    _$jscoverage['public/javascripts/app.js'][199]++;
fiscalWeekModel.days = this._buildDays(fiscalWeekModel);
    _$jscoverage['public/javascripts/app.js'][200]++;
return fiscalWeekModel;
  },
  _buildDays: function(fiscalWeekModel) {
    _$jscoverage['public/javascripts/app.js'][203]++;
var date, day, dayIndex, days, daysInMonth, month, year, _i;
    _$jscoverage['public/javascripts/app.js'][204]++;
days = [];
    _$jscoverage['public/javascripts/app.js'][205]++;
year = fiscalWeekModel.year;
    _$jscoverage['public/javascripts/app.js'][206]++;
month = fiscalWeekModel.month;
    _$jscoverage['public/javascripts/app.js'][207]++;
day = fiscalWeekModel.day;
    _$jscoverage['public/javascripts/app.js'][208]++;
daysInMonth = this._daysInMonth(year, fiscalWeekModel.month);
    _$jscoverage['public/javascripts/app.js'][209]++;
for (dayIndex = _i = 0; _i <= 6; dayIndex = ++_i) {
      _$jscoverage['public/javascripts/app.js'][210]++;
date = new Date("" + year + " " + (month + 1) + " " + day);
      _$jscoverage['public/javascripts/app.js'][211]++;
days.push({
        day: date.getDate(),
        date: date.toJSON(),
        dayOfWeek: dayIndex
      });
      _$jscoverage['public/javascripts/app.js'][216]++;
day += 1;
      _$jscoverage['public/javascripts/app.js'][217]++;
if (day > daysInMonth) {
        _$jscoverage['public/javascripts/app.js'][218]++;
day = 1;
        _$jscoverage['public/javascripts/app.js'][219]++;
month += 1;
        _$jscoverage['public/javascripts/app.js'][220]++;
if (month > 11) {
          _$jscoverage['public/javascripts/app.js'][221]++;
month = 0;
          _$jscoverage['public/javascripts/app.js'][222]++;
year += 1;
        }
      }
    }
    _$jscoverage['public/javascripts/app.js'][226]++;
return days;
  },
  _daysInMonth: function(year, month) {
    _$jscoverage['public/javascripts/app.js'][229]++;
if (month === 1) {
      _$jscoverage['public/javascripts/app.js'][230]++;
return 28 + this._isLeapYear(year);
    } else {
      _$jscoverage['public/javascripts/app.js'][232]++;
return 31 - month % 7 % 2;
    }
  },
  _isLeapYear: function(year) {
    _$jscoverage['public/javascripts/app.js'][236]++;
var isLeapYear;
    _$jscoverage['public/javascripts/app.js'][237]++;
isLeapYear = false;
    _$jscoverage['public/javascripts/app.js'][238]++;
if (year % 400 === 0) {
      _$jscoverage['public/javascripts/app.js'][239]++;
isLeapYear = true;
    } else {
_$jscoverage['public/javascripts/app.js'][240]++;
if (year % 100 === 0) {
      _$jscoverage['public/javascripts/app.js'][241]++;
isLeapYear = true;
    } else {
_$jscoverage['public/javascripts/app.js'][242]++;
if (year % 4 === 0) {
      _$jscoverage['public/javascripts/app.js'][243]++;
isLeapYear = true;
    }}
}

    _$jscoverage['public/javascripts/app.js'][245]++;
return isLeapYear;
  }
}, {
  nextDay: function() {
    _$jscoverage['public/javascripts/app.js'][249]++;
var day, daysInMonth, lastDay, month, year;
    _$jscoverage['public/javascripts/app.js'][250]++;
lastDay = new Date(this.days[6].date);
    _$jscoverage['public/javascripts/app.js'][251]++;
year = lastDay.getFullYear();
    _$jscoverage['public/javascripts/app.js'][252]++;
month = lastDay.getMonth();
    _$jscoverage['public/javascripts/app.js'][253]++;
day = lastDay.getDate();
    _$jscoverage['public/javascripts/app.js'][254]++;
daysInMonth = FiscalWeekModel._daysInMonth(year, month);
    _$jscoverage['public/javascripts/app.js'][255]++;
day += 1;
    _$jscoverage['public/javascripts/app.js'][256]++;
if (day > daysInMonth) {
      _$jscoverage['public/javascripts/app.js'][257]++;
day = 1;
      _$jscoverage['public/javascripts/app.js'][258]++;
month += 1;
      _$jscoverage['public/javascripts/app.js'][259]++;
if (month > 11) {
        _$jscoverage['public/javascripts/app.js'][260]++;
month = 1;
        _$jscoverage['public/javascripts/app.js'][261]++;
year += 1;
      }
    }
    _$jscoverage['public/javascripts/app.js'][264]++;
return {
      year: year,
      month: month,
      day: day
    };
  },
  dispose: function() {
    _$jscoverage['public/javascripts/app.js'][271]++;
return this._super();
  }
});

});

_$jscoverage['public/javascripts/app.js'][277]++;
window.require.register('models/base/Model', function(require, module) {

_$jscoverage['public/javascripts/app.js'][279]++;
module.exports = gamecore.DualPooled.extend("Model", {
  getUsedLength: function() {
    _$jscoverage['public/javascripts/app.js'][281]++;
return this.getPool().getUsedList().count;
  }
}, {
  dispose: function() {
    _$jscoverage['public/javascripts/app.js'][285]++;
return this.release();
  }
});

});

_$jscoverage['public/javascripts/app.js'][291]++;
window.require.register('views/FiscalCalendar', function(require, module) {
_$jscoverage['public/javascripts/app.js'][292]++;
var FiscalCalendarView, View;

_$jscoverage['public/javascripts/app.js'][294]++;
View = require("views/base/View");

_$jscoverage['public/javascripts/app.js'][296]++;
module.exports = FiscalCalendarView = View.extend("FiscalCalendarView", {
  create: function(model) {
    _$jscoverage['public/javascripts/app.js'][298]++;
var fiscalCalendarView;
    _$jscoverage['public/javascripts/app.js'][299]++;
fiscalCalendarView = this._super();
    _$jscoverage['public/javascripts/app.js'][300]++;
fiscalCalendarView.model = model;
    _$jscoverage['public/javascripts/app.js'][301]++;
return fiscalCalendarView;
  },
  template: require("templates")(Handlebars)['app/templates/fiscalCalendar/index.hbs']
}, {
  render: function() {
    _$jscoverage['public/javascripts/app.js'][306]++;
return this.$el = $(FiscalCalendarView.template({
      model: this.model
    }));
  },
  dispose: function() {
    _$jscoverage['public/javascripts/app.js'][311]++;
if (this.$el != null) {
      _$jscoverage['public/javascripts/app.js'][312]++;
this.$el.remove();
    }
    _$jscoverage['public/javascripts/app.js'][314]++;
return this._super();
  }
});

});

_$jscoverage['public/javascripts/app.js'][320]++;
window.require.register('views/base/View', function(require, module) {

_$jscoverage['public/javascripts/app.js'][322]++;
module.exports = gamecore.DualPooled.extend("View", {
  getUsedLength: function() {
    _$jscoverage['public/javascripts/app.js'][324]++;
return this.getPool().getUsedList().count;
  }
}, {
  dispose: function() {
    _$jscoverage['public/javascripts/app.js'][328]++;
return this.release();
  }
});

});
