if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/helpers/handlebars.js'] === 'undefined'){_$jscoverage['public/javascripts/helpers/handlebars.js']=[];
_$jscoverage['public/javascripts/helpers/handlebars.js'].source=['window.require.register("helpers/handlebars", function(require, module) {Handlebars.registerHelper("monthTitle", function(weeks) {',
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
'});',
''];
_$jscoverage['public/javascripts/helpers/handlebars.js'][12]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][1]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][1]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][15]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][2]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][3]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][4]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][7]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][8]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][9]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][10]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][11]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][13]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][14]=0;
_$jscoverage['public/javascripts/helpers/handlebars.js'][18]=0;
}_$jscoverage['public/javascripts/helpers/handlebars.js'][1]++;
window.require.register("helpers/handlebars", function(require, module) {_$jscoverage['public/javascripts/helpers/handlebars.js'][1]++;
Handlebars.registerHelper("monthTitle", function(weeks) {
  _$jscoverage['public/javascripts/helpers/handlebars.js'][2]++;
var monthIndex;
  _$jscoverage['public/javascripts/helpers/handlebars.js'][3]++;
monthIndex = +_.chain(weeks).pluck('month').countBy().pairs().max(_.last).head();
  _$jscoverage['public/javascripts/helpers/handlebars.js'][4]++;
return "January February March April May June July August September October November December".match(/\w+/g)[monthIndex];
});

_$jscoverage['public/javascripts/helpers/handlebars.js'][7]++;
Handlebars.registerHelper("yearTitle", function(quarters) {
  _$jscoverage['public/javascripts/helpers/handlebars.js'][8]++;
var month, quarter, years, _i, _j, _len, _len1, _ref;
  _$jscoverage['public/javascripts/helpers/handlebars.js'][9]++;
years = [];
  _$jscoverage['public/javascripts/helpers/handlebars.js'][10]++;
for (_i = 0, _len = quarters.length; _i < _len; _i++) {
    _$jscoverage['public/javascripts/helpers/handlebars.js'][11]++;
quarter = quarters[_i];
    _$jscoverage['public/javascripts/helpers/handlebars.js'][12]++;
_ref = quarter.months;
    _$jscoverage['public/javascripts/helpers/handlebars.js'][13]++;
for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      _$jscoverage['public/javascripts/helpers/handlebars.js'][14]++;
month = _ref[_j];
      _$jscoverage['public/javascripts/helpers/handlebars.js'][15]++;
years = years.concat(_.pluck(month.weeks, 'year'));
    }
  }
  _$jscoverage['public/javascripts/helpers/handlebars.js'][18]++;
return +_.chain(years).countBy().pairs().max(_.last).head();
});
});
