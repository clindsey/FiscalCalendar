if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/models/FiscalWeek.js'] === 'undefined'){_$jscoverage['public/javascripts/models/FiscalWeek.js']=[];
_$jscoverage['public/javascripts/models/FiscalWeek.js'].source=['window.require.register("models/FiscalWeek", function(require, module) {var FiscalWeekModel, Model;',
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
'});',
''];
_$jscoverage['public/javascripts/models/FiscalWeek.js'][45]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][1]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][42]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][1]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][49]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][7]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][5]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][3]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][52]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][9]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][8]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][56]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][13]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][11]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][10]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][12]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][53]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][18]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][16]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][17]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][58]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][24]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][20]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][19]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][22]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][21]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][23]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][65]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][34]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][33]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][32]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][31]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][29]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][30]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][68]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][43]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][39]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][35]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][71]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][55]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][51]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][50]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][54]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][72]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][62]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][63]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][64]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][66]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][67]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][69]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][70]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][73]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][74]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][77]=0;
_$jscoverage['public/javascripts/models/FiscalWeek.js'][84]=0;
}_$jscoverage['public/javascripts/models/FiscalWeek.js'][1]++;
window.require.register("models/FiscalWeek", function(require, module) {_$jscoverage['public/javascripts/models/FiscalWeek.js'][1]++;
var FiscalWeekModel, Model;

_$jscoverage['public/javascripts/models/FiscalWeek.js'][3]++;
Model = require("models/base/Model");

_$jscoverage['public/javascripts/models/FiscalWeek.js'][5]++;
module.exports = FiscalWeekModel = Model.extend("FiscalWeekModel", {
  create: function(options) {
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][7]++;
var fiscalWeekModel;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][8]++;
fiscalWeekModel = this._super();
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][9]++;
fiscalWeekModel.year = options.year;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][10]++;
fiscalWeekModel.month = options.month;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][11]++;
fiscalWeekModel.day = options.day;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][12]++;
fiscalWeekModel.days = this._buildDays(fiscalWeekModel);
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][13]++;
return fiscalWeekModel;
  },
  _buildDays: function(fiscalWeekModel) {
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][16]++;
var date, day, dayIndex, days, daysInMonth, month, year, _i;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][17]++;
days = [];
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][18]++;
year = fiscalWeekModel.year;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][19]++;
month = fiscalWeekModel.month;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][20]++;
day = fiscalWeekModel.day;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][21]++;
daysInMonth = this._daysInMonth(year, fiscalWeekModel.month);
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][22]++;
for (dayIndex = _i = 0; _i <= 6; dayIndex = ++_i) {
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][23]++;
date = new Date("" + year + " " + (month + 1) + " " + day);
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][24]++;
days.push({
        day: date.getDate(),
        date: date.toJSON(),
        dayOfWeek: dayIndex
      });
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][29]++;
day += 1;
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][30]++;
if (day > daysInMonth) {
        _$jscoverage['public/javascripts/models/FiscalWeek.js'][31]++;
day = 1;
        _$jscoverage['public/javascripts/models/FiscalWeek.js'][32]++;
month += 1;
        _$jscoverage['public/javascripts/models/FiscalWeek.js'][33]++;
if (month > 11) {
          _$jscoverage['public/javascripts/models/FiscalWeek.js'][34]++;
month = 0;
          _$jscoverage['public/javascripts/models/FiscalWeek.js'][35]++;
year += 1;
        }
      }
    }
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][39]++;
return days;
  },
  _daysInMonth: function(year, month) {
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][42]++;
if (month === 1) {
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][43]++;
return 28 + this._isLeapYear(year);
    } else {
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][45]++;
return 31 - month % 7 % 2;
    }
  },
  _isLeapYear: function(year) {
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][49]++;
var isLeapYear;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][50]++;
isLeapYear = false;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][51]++;
if (year % 400 === 0) {
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][52]++;
isLeapYear = true;
    } else {
_$jscoverage['public/javascripts/models/FiscalWeek.js'][53]++;
if (year % 100 === 0) {
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][54]++;
isLeapYear = true;
    } else {
_$jscoverage['public/javascripts/models/FiscalWeek.js'][55]++;
if (year % 4 === 0) {
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][56]++;
isLeapYear = true;
    }}
}

    _$jscoverage['public/javascripts/models/FiscalWeek.js'][58]++;
return isLeapYear;
  }
}, {
  nextDay: function() {
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][62]++;
var day, daysInMonth, lastDay, month, year;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][63]++;
lastDay = new Date(this.days[6].date);
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][64]++;
year = lastDay.getFullYear();
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][65]++;
month = lastDay.getMonth();
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][66]++;
day = lastDay.getDate();
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][67]++;
daysInMonth = FiscalWeekModel._daysInMonth(year, month);
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][68]++;
day += 1;
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][69]++;
if (day > daysInMonth) {
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][70]++;
day = 1;
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][71]++;
month += 1;
      _$jscoverage['public/javascripts/models/FiscalWeek.js'][72]++;
if (month > 11) {
        _$jscoverage['public/javascripts/models/FiscalWeek.js'][73]++;
month = 1;
        _$jscoverage['public/javascripts/models/FiscalWeek.js'][74]++;
year += 1;
      }
    }
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][77]++;
return {
      year: year,
      month: month,
      day: day
    };
  },
  dispose: function() {
    _$jscoverage['public/javascripts/models/FiscalWeek.js'][84]++;
return this._super();
  }
});
});
