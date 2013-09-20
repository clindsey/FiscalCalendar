if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/index.js'] === 'undefined'){_$jscoverage['public/javascripts/index.js']=[];
_$jscoverage['public/javascripts/index.js'].source=['window.require.register("index", function(require, module) {var FiscalCalendarModel, FiscalCalendarView, Index, handlebarsHelpers;',
'',
'FiscalCalendarModel = require("models/FiscalCalendar");',
'',
'FiscalCalendarView = require("views/FiscalCalendar");',
'',
'handlebarsHelpers = require("helpers/handlebars");',
'',
'module.exports = Index = (function() {',
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
'});',
''];
_$jscoverage['public/javascripts/index.js'][16]=0;
_$jscoverage['public/javascripts/index.js'][1]=0;
_$jscoverage['public/javascripts/index.js'][17]=0;
_$jscoverage['public/javascripts/index.js'][1]=0;
_$jscoverage['public/javascripts/index.js'][23]=0;
_$jscoverage['public/javascripts/index.js'][5]=0;
_$jscoverage['public/javascripts/index.js'][3]=0;
_$jscoverage['public/javascripts/index.js'][7]=0;
_$jscoverage['public/javascripts/index.js'][9]=0;
_$jscoverage['public/javascripts/index.js'][10]=0;
_$jscoverage['public/javascripts/index.js'][11]=0;
_$jscoverage['public/javascripts/index.js'][12]=0;
_$jscoverage['public/javascripts/index.js'][15]=0;
_$jscoverage['public/javascripts/index.js'][24]=0;
_$jscoverage['public/javascripts/index.js'][27]=0;
}_$jscoverage['public/javascripts/index.js'][1]++;
window.require.register("index", function(require, module) {_$jscoverage['public/javascripts/index.js'][1]++;
var FiscalCalendarModel, FiscalCalendarView, Index, handlebarsHelpers;

_$jscoverage['public/javascripts/index.js'][3]++;
FiscalCalendarModel = require("models/FiscalCalendar");

_$jscoverage['public/javascripts/index.js'][5]++;
FiscalCalendarView = require("views/FiscalCalendar");

_$jscoverage['public/javascripts/index.js'][7]++;
handlebarsHelpers = require("helpers/handlebars");

_$jscoverage['public/javascripts/index.js'][9]++;
module.exports = Index = (function() {
  _$jscoverage['public/javascripts/index.js'][10]++;
function Index() {
    _$jscoverage['public/javascripts/index.js'][11]++;
this.buildCalendar("5-4-4", 2012, 8, 30);
    _$jscoverage['public/javascripts/index.js'][12]++;
this.buildCalendar("4-4-5", 2013, 8, 29);
  }

  _$jscoverage['public/javascripts/index.js'][15]++;
Index.prototype.buildCalendar = function(format, year, month, day) {
    _$jscoverage['public/javascripts/index.js'][16]++;
var fiscalCalendarModel, fiscalCalendarView;
    _$jscoverage['public/javascripts/index.js'][17]++;
fiscalCalendarModel = FiscalCalendarModel.create({
      format: format,
      year: year,
      month: month,
      day: day
    });
    _$jscoverage['public/javascripts/index.js'][23]++;
fiscalCalendarView = FiscalCalendarView.create(fiscalCalendarModel);
    _$jscoverage['public/javascripts/index.js'][24]++;
return $("body").append(fiscalCalendarView.render());
  };

  _$jscoverage['public/javascripts/index.js'][27]++;
return Index;

})();
});
