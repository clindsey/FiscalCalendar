if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/models/FiscalQuarter.js'] === 'undefined'){_$jscoverage['public/javascripts/models/FiscalQuarter.js']=[];
_$jscoverage['public/javascripts/models/FiscalQuarter.js'].source=['window.require.register("models/FiscalQuarter", function(require, module) {var FiscalWeekModel, Model;',
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
'});',
''];
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][35]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][1]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][36]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][1]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][37]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][5]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][3]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][34]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][10]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][7]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][9]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][42]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][13]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][11]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][12]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][30]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][19]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][15]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][14]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][16]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][50]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][23]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][22]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][21]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][20]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][53]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][33]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][29]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][24]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][31]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][32]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][57]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][39]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][43]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][45]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][46]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][51]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][52]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][54]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][55]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][56]=0;
_$jscoverage['public/javascripts/models/FiscalQuarter.js'][60]=0;
}_$jscoverage['public/javascripts/models/FiscalQuarter.js'][1]++;
window.require.register("models/FiscalQuarter", function(require, module) {_$jscoverage['public/javascripts/models/FiscalQuarter.js'][1]++;
var FiscalWeekModel, Model;

_$jscoverage['public/javascripts/models/FiscalQuarter.js'][3]++;
Model = require("models/base/Model");

_$jscoverage['public/javascripts/models/FiscalQuarter.js'][5]++;
FiscalWeekModel = require("models/FiscalWeek");

_$jscoverage['public/javascripts/models/FiscalQuarter.js'][7]++;
module.exports = Model.extend("FiscalQuarterModel", {
  create: function(options) {
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][9]++;
var fiscalQuarterModel;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][10]++;
fiscalQuarterModel = this._super();
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][11]++;
fiscalQuarterModel.format = options.format;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][12]++;
fiscalQuarterModel.year = options.year;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][13]++;
fiscalQuarterModel.month = options.month;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][14]++;
fiscalQuarterModel.day = options.day;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][15]++;
fiscalQuarterModel.months = this._buildMonths(fiscalQuarterModel);
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][16]++;
return fiscalQuarterModel;
  },
  _buildMonths: function(fiscalQuarterModel) {
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][19]++;
var day, index, month, months, nextDay, week, weekCount, weekFormat, weeks, year, _i, _j, _len, _ref;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][20]++;
months = [];
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][21]++;
year = fiscalQuarterModel.year;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][22]++;
month = fiscalQuarterModel.month;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][23]++;
day = fiscalQuarterModel.day;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][24]++;
week = FiscalWeekModel.create({
      year: year,
      month: month,
      day: day
    });
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][29]++;
weekFormat = fiscalQuarterModel.format.match(/\d+/g);
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][30]++;
for (_i = 0, _len = weekFormat.length; _i < _len; _i++) {
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][31]++;
weekCount = weekFormat[_i];
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][32]++;
weeks = [];
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][33]++;
weeks.push(week);
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][34]++;
for (index = _j = 1, _ref = weekCount - 1; 1 <= _ref ? _j <= _ref : _j >= _ref; index = 1 <= _ref ? ++_j : --_j) {
        _$jscoverage['public/javascripts/models/FiscalQuarter.js'][35]++;
nextDay = week.nextDay();
        _$jscoverage['public/javascripts/models/FiscalQuarter.js'][36]++;
week = FiscalWeekModel.create(nextDay);
        _$jscoverage['public/javascripts/models/FiscalQuarter.js'][37]++;
weeks.push(week);
      }
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][39]++;
months.push({
        weeks: weeks
      });
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][42]++;
nextDay = week.nextDay();
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][43]++;
week = FiscalWeekModel.create(nextDay);
    }
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][45]++;
week.dispose();
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][46]++;
return months;
  }
}, {
  dispose: function() {
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][50]++;
var fiscalWeekModel, month, _i, _j, _len, _len1, _ref, _ref1;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][51]++;
_ref = this.months;
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][52]++;
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][53]++;
month = _ref[_i];
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][54]++;
_ref1 = month.weeks;
      _$jscoverage['public/javascripts/models/FiscalQuarter.js'][55]++;
for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        _$jscoverage['public/javascripts/models/FiscalQuarter.js'][56]++;
fiscalWeekModel = _ref1[_j];
        _$jscoverage['public/javascripts/models/FiscalQuarter.js'][57]++;
fiscalWeekModel.dispose();
      }
    }
    _$jscoverage['public/javascripts/models/FiscalQuarter.js'][60]++;
return this._super();
  }
});
});
