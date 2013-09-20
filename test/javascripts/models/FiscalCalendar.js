if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/models/FiscalCalendar.js'] === 'undefined'){_$jscoverage['public/javascripts/models/FiscalCalendar.js']=[];
_$jscoverage['public/javascripts/models/FiscalCalendar.js'].source=['window.require.register("models/FiscalCalendar", function(require, module) {var FiscalQuarterModel, Model;',
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
'});',
''];
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][32]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][1]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][33]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][1]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][36]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][5]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][3]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][37]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][10]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][7]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][9]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][39]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][13]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][11]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][12]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][43]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][17]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][15]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][16]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][14]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][51]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][22]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][21]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][53]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][29]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][23]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][30]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][31]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][42]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][44]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][50]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][52]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][54]=0;
_$jscoverage['public/javascripts/models/FiscalCalendar.js'][56]=0;
}_$jscoverage['public/javascripts/models/FiscalCalendar.js'][1]++;
window.require.register("models/FiscalCalendar", function(require, module) {_$jscoverage['public/javascripts/models/FiscalCalendar.js'][1]++;
var FiscalQuarterModel, Model;

_$jscoverage['public/javascripts/models/FiscalCalendar.js'][3]++;
Model = require("models/base/Model");

_$jscoverage['public/javascripts/models/FiscalCalendar.js'][5]++;
FiscalQuarterModel = require("models/FiscalQuarter");

_$jscoverage['public/javascripts/models/FiscalCalendar.js'][7]++;
module.exports = Model.extend("FiscalCalendarModel", {
  create: function(settings) {
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][9]++;
var fiscalCalendarModel;
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][10]++;
this._assignSettings(settings);
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][11]++;
fiscalCalendarModel = this._super();
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][12]++;
fiscalCalendarModel.year = settings.year;
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][13]++;
fiscalCalendarModel.month = settings.month;
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][14]++;
fiscalCalendarModel.day = settings.day;
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][15]++;
fiscalCalendarModel.format = settings.format || "5-4-4";
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][16]++;
fiscalCalendarModel.quarters = this._generateQuarters(fiscalCalendarModel);
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][17]++;
return fiscalCalendarModel;
  },
  REQUIRED_SETTINGS: ["year", "month", "day"],
  _generateQuarters: function(fiscalCalendarModel) {
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][21]++;
var lastMonth, lastWeek, quarter, quarterIndex, quarterOptions, quarters, _i;
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][22]++;
quarters = [];
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][23]++;
quarter = FiscalQuarterModel.create({
      format: fiscalCalendarModel.format,
      year: fiscalCalendarModel.year,
      month: fiscalCalendarModel.month,
      day: fiscalCalendarModel.day
    });
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][29]++;
quarters.push(quarter);
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][30]++;
for (quarterIndex = _i = 1; _i <= 3; quarterIndex = ++_i) {
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][31]++;
lastMonth = quarter.months[quarter.months.length - 1];
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][32]++;
lastWeek = lastMonth.weeks[lastMonth.weeks.length - 1];
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][33]++;
quarterOptions = _.extend(_.extend({}, lastWeek.nextDay()), {
        format: fiscalCalendarModel.format
      });
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][36]++;
quarter = FiscalQuarterModel.create(quarterOptions);
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][37]++;
quarters.push(quarter);
    }
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][39]++;
return quarters;
  },
  _assignSettings: function(settings) {
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][42]++;
return _.each(this.REQUIRED_SETTINGS, function(value) {
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][43]++;
if (settings[value] == null) {
        _$jscoverage['public/javascripts/models/FiscalCalendar.js'][44]++;
throw new Error("Forgot to supply " + value);
      }
    });
  }
}, {
  dispose: function() {
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][50]++;
var quarter, _i, _len, _ref;
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][51]++;
_ref = this.quarters;
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][52]++;
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][53]++;
quarter = _ref[_i];
      _$jscoverage['public/javascripts/models/FiscalCalendar.js'][54]++;
quarter.dispose();
    }
    _$jscoverage['public/javascripts/models/FiscalCalendar.js'][56]++;
return this._super();
  }
});
});
