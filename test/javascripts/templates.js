if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/templates.js'] === 'undefined'){_$jscoverage['public/javascripts/templates.js']=[];
_$jscoverage['public/javascripts/templates.js'].source=['window.require.register("templates", function(require, module) {module.exports = function(Handlebars) {',
'',
'this["JST"] = this["JST"] || {};',
'',
'Handlebars.registerPartial("day", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {',
'  this.compilerInfo = [4,\'>= 1.0.0\'];',
'helpers = this.merge(helpers, Handlebars.helpers); data = data || {};',
'  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;',
'',
'',
'  buffer += "<span class=\\"fiscal-calendar-day\\">\\n  ";',
'  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }',
'  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }',
'  buffer += escapeExpression(stack1)',
'    + "\\n</span>\\n";',
'  return buffer;',
'  }));',
'',
'Handlebars.registerPartial("month", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {',
'  this.compilerInfo = [4,\'>= 1.0.0\'];',
'helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};',
'  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;',
'',
'function program1(depth0,data) {',
'  ',
'  var buffer = "", stack1;',
'  buffer += "\\n      ";',
'  stack1 = self.invokePartial(partials.week, \'week\', depth0, helpers, partials, data);',
'  if(stack1 || stack1 === 0) { buffer += stack1; }',
'  buffer += "\\n    ";',
'  return buffer;',
'  }',
'',
'  buffer += "<div class=\\"fiscal-calendar-month\\">\\n  <h4>";',
'  options = {hash:{},data:data};',
'  buffer += escapeExpression(((stack1 = helpers.monthTitle || depth0.monthTitle),stack1 ? stack1.call(depth0, depth0.weeks, options) : helperMissing.call(depth0, "monthTitle", depth0.weeks, options)))',
'    + "</h4>\\n  <div>\\n    ";',
'  stack2 = helpers.each.call(depth0, depth0.weeks, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});',
'  if(stack2 || stack2 === 0) { buffer += stack2; }',
'  buffer += "\\n  </div>\\n</div>\\n";',
'  return buffer;',
'  }));',
'',
'Handlebars.registerPartial("quarter", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {',
'  this.compilerInfo = [4,\'>= 1.0.0\'];',
'helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};',
'  var buffer = "", stack1, self=this;',
'',
'function program1(depth0,data) {',
'  ',
'  var buffer = "", stack1;',
'  buffer += "\\n    ";',
'  stack1 = self.invokePartial(partials.month, \'month\', depth0, helpers, partials, data);',
'  if(stack1 || stack1 === 0) { buffer += stack1; }',
'  buffer += "\\n  ";',
'  return buffer;',
'  }',
'',
'  buffer += "<div class=\\"fiscal-calendar-quarter\\">\\n  ";',
'  stack1 = helpers.each.call(depth0, depth0.months, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});',
'  if(stack1 || stack1 === 0) { buffer += stack1; }',
'  buffer += "\\n  <div style=\\"clear:both;\\"></div>\\n</div>\\n";',
'  return buffer;',
'  }));',
'',
'Handlebars.registerPartial("week", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {',
'  this.compilerInfo = [4,\'>= 1.0.0\'];',
'helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};',
'  var buffer = "", stack1, self=this;',
'',
'function program1(depth0,data) {',
'  ',
'  var buffer = "", stack1;',
'  buffer += "\\n    ";',
'  stack1 = self.invokePartial(partials.day, \'day\', depth0, helpers, partials, data);',
'  if(stack1 || stack1 === 0) { buffer += stack1; }',
'  buffer += "\\n  ";',
'  return buffer;',
'  }',
'',
'  buffer += "<div class=\\"fiscal-calendar-week\\">\\n  ";',
'  stack1 = helpers.each.call(depth0, depth0.days, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});',
'  if(stack1 || stack1 === 0) { buffer += stack1; }',
'  buffer += "\\n</div>\\n";',
'  return buffer;',
'  }));',
'',
'this["JST"]["app/templates/fiscalCalendar/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {',
'  this.compilerInfo = [4,\'>= 1.0.0\'];',
'helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};',
'  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;',
'',
'function program1(depth0,data) {',
'  ',
'  var buffer = "", stack1;',
'  buffer += "\\n      ";',
'  stack1 = self.invokePartial(partials.quarter, \'quarter\', depth0, helpers, partials, data);',
'  if(stack1 || stack1 === 0) { buffer += stack1; }',
'  buffer += "\\n    ";',
'  return buffer;',
'  }',
'',
'  buffer += "<div class=\\"fiscal-calendar\\">\\n  <h3 class=\\"fiscal-calendar-year-title\\">";',
'  options = {hash:{},data:data};',
'  buffer += escapeExpression(((stack1 = helpers.yearTitle || depth0.yearTitle),stack1 ? stack1.call(depth0, ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), options) : helperMissing.call(depth0, "yearTitle", ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), options)))',
'    + "</h3>\\n  <div>\\n    ";',
'  stack2 = helpers.each.call(depth0, ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});',
'  if(stack2 || stack2 === 0) { buffer += stack2; }',
'  buffer += "\\n  </div>\\n</div>\\n";',
'  return buffer;',
'  });',
'',
'return this["JST"];',
'',
'};});',
''];
_$jscoverage['public/javascripts/templates.js'][61]=0;
_$jscoverage['public/javascripts/templates.js'][1]=0;
_$jscoverage['public/javascripts/templates.js'][1]=0;
_$jscoverage['public/javascripts/templates.js'][61]=0;
_$jscoverage['public/javascripts/templates.js'][3]=0;
_$jscoverage['public/javascripts/templates.js'][62]=0;
_$jscoverage['public/javascripts/templates.js'][7]=0;
_$jscoverage['public/javascripts/templates.js'][7]=0;
_$jscoverage['public/javascripts/templates.js'][6]=0;
_$jscoverage['public/javascripts/templates.js'][5]=0;
_$jscoverage['public/javascripts/templates.js'][67]=0;
_$jscoverage['public/javascripts/templates.js'][11]=0;
_$jscoverage['public/javascripts/templates.js'][8]=0;
_$jscoverage['public/javascripts/templates.js'][68]=0;
_$jscoverage['public/javascripts/templates.js'][14]=0;
_$jscoverage['public/javascripts/templates.js'][13]=0;
_$jscoverage['public/javascripts/templates.js'][12]=0;
_$jscoverage['public/javascripts/templates.js'][12]=0;
_$jscoverage['public/javascripts/templates.js'][13]=0;
_$jscoverage['public/javascripts/templates.js'][69]=0;
_$jscoverage['public/javascripts/templates.js'][20]=0;
_$jscoverage['public/javascripts/templates.js'][16]=0;
_$jscoverage['public/javascripts/templates.js'][19]=0;
_$jscoverage['public/javascripts/templates.js'][74]=0;
_$jscoverage['public/javascripts/templates.js'][27]=0;
_$jscoverage['public/javascripts/templates.js'][24]=0;
_$jscoverage['public/javascripts/templates.js'][21]=0;
_$jscoverage['public/javascripts/templates.js'][21]=0;
_$jscoverage['public/javascripts/templates.js'][21]=0;
_$jscoverage['public/javascripts/templates.js'][22]=0;
_$jscoverage['public/javascripts/templates.js'][26]=0;
_$jscoverage['public/javascripts/templates.js'][77]=0;
_$jscoverage['public/javascripts/templates.js'][30]=0;
_$jscoverage['public/javascripts/templates.js'][28]=0;
_$jscoverage['public/javascripts/templates.js'][29]=0;
_$jscoverage['public/javascripts/templates.js'][29]=0;
_$jscoverage['public/javascripts/templates.js'][81]=0;
_$jscoverage['public/javascripts/templates.js'][39]=0;
_$jscoverage['public/javascripts/templates.js'][34]=0;
_$jscoverage['public/javascripts/templates.js'][31]=0;
_$jscoverage['public/javascripts/templates.js'][35]=0;
_$jscoverage['public/javascripts/templates.js'][36]=0;
_$jscoverage['public/javascripts/templates.js'][38]=0;
_$jscoverage['public/javascripts/templates.js'][39]=0;
_$jscoverage['public/javascripts/templates.js'][84]=0;
_$jscoverage['public/javascripts/templates.js'][46]=0;
_$jscoverage['public/javascripts/templates.js'][46]=0;
_$jscoverage['public/javascripts/templates.js'][46]=0;
_$jscoverage['public/javascripts/templates.js'][40]=0;
_$jscoverage['public/javascripts/templates.js'][41]=0;
_$jscoverage['public/javascripts/templates.js'][45]=0;
_$jscoverage['public/javascripts/templates.js'][44]=0;
_$jscoverage['public/javascripts/templates.js'][90]=0;
_$jscoverage['public/javascripts/templates.js'][52]=0;
_$jscoverage['public/javascripts/templates.js'][49]=0;
_$jscoverage['public/javascripts/templates.js'][47]=0;
_$jscoverage['public/javascripts/templates.js'][51]=0;
_$jscoverage['public/javascripts/templates.js'][90]=0;
_$jscoverage['public/javascripts/templates.js'][54]=0;
_$jscoverage['public/javascripts/templates.js'][53]=0;
_$jscoverage['public/javascripts/templates.js'][54]=0;
_$jscoverage['public/javascripts/templates.js'][95]=0;
_$jscoverage['public/javascripts/templates.js'][68]=0;
_$jscoverage['public/javascripts/templates.js'][56]=0;
_$jscoverage['public/javascripts/templates.js'][68]=0;
_$jscoverage['public/javascripts/templates.js'][59]=0;
_$jscoverage['public/javascripts/templates.js'][63]=0;
_$jscoverage['public/javascripts/templates.js'][66]=0;
_$jscoverage['public/javascripts/templates.js'][60]=0;
_$jscoverage['public/javascripts/templates.js'][55]=0;
_$jscoverage['public/javascripts/templates.js'][99]=0;
_$jscoverage['public/javascripts/templates.js'][73]=0;
_$jscoverage['public/javascripts/templates.js'][71]=0;
_$jscoverage['public/javascripts/templates.js'][100]=0;
_$jscoverage['public/javascripts/templates.js'][83]=0;
_$jscoverage['public/javascripts/templates.js'][76]=0;
_$jscoverage['public/javascripts/templates.js'][78]=0;
_$jscoverage['public/javascripts/templates.js'][82]=0;
_$jscoverage['public/javascripts/templates.js'][76]=0;
_$jscoverage['public/javascripts/templates.js'][83]=0;
_$jscoverage['public/javascripts/templates.js'][75]=0;
_$jscoverage['public/javascripts/templates.js'][105]=0;
_$jscoverage['public/javascripts/templates.js'][85]=0;
_$jscoverage['public/javascripts/templates.js'][107]=0;
_$jscoverage['public/javascripts/templates.js'][96]=0;
_$jscoverage['public/javascripts/templates.js'][91]=0;
_$jscoverage['public/javascripts/templates.js'][90]=0;
_$jscoverage['public/javascripts/templates.js'][93]=0;
_$jscoverage['public/javascripts/templates.js'][89]=0;
_$jscoverage['public/javascripts/templates.js'][88]=0;
_$jscoverage['public/javascripts/templates.js'][97]=0;
_$jscoverage['public/javascripts/templates.js'][98]=0;
_$jscoverage['public/javascripts/templates.js'][98]=0;
_$jscoverage['public/javascripts/templates.js'][103]=0;
_$jscoverage['public/javascripts/templates.js'][104]=0;
_$jscoverage['public/javascripts/templates.js'][108]=0;
_$jscoverage['public/javascripts/templates.js'][108]=0;
_$jscoverage['public/javascripts/templates.js'][109]=0;
_$jscoverage['public/javascripts/templates.js'][110]=0;
_$jscoverage['public/javascripts/templates.js'][113]=0;
}_$jscoverage['public/javascripts/templates.js'][1]++;
window.require.register("templates", function(require, module) {_$jscoverage['public/javascripts/templates.js'][1]++;
module.exports = function(Handlebars) {

_$jscoverage['public/javascripts/templates.js'][3]++;
this["JST"] = this["JST"] || {};

_$jscoverage['public/javascripts/templates.js'][5]++;
Handlebars.registerPartial("day", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  _$jscoverage['public/javascripts/templates.js'][6]++;
this.compilerInfo = [4,'>= 1.0.0'];
_$jscoverage['public/javascripts/templates.js'][7]++;
helpers = this.merge(helpers, Handlebars.helpers); _$jscoverage['public/javascripts/templates.js'][7]++;
data = data || {};
  _$jscoverage['public/javascripts/templates.js'][8]++;
var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  _$jscoverage['public/javascripts/templates.js'][11]++;
buffer += "<span class=\"fiscal-calendar-day\">\n  ";
  _$jscoverage['public/javascripts/templates.js'][12]++;
if (stack1 = helpers.day) { _$jscoverage['public/javascripts/templates.js'][12]++;
stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { _$jscoverage['public/javascripts/templates.js'][13]++;
stack1 = depth0.day; _$jscoverage['public/javascripts/templates.js'][13]++;
stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  _$jscoverage['public/javascripts/templates.js'][14]++;
buffer += escapeExpression(stack1)
    + "\n</span>\n";
  _$jscoverage['public/javascripts/templates.js'][16]++;
return buffer;
  }));

_$jscoverage['public/javascripts/templates.js'][19]++;
Handlebars.registerPartial("month", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  _$jscoverage['public/javascripts/templates.js'][20]++;
this.compilerInfo = [4,'>= 1.0.0'];
_$jscoverage['public/javascripts/templates.js'][21]++;
helpers = this.merge(helpers, Handlebars.helpers); _$jscoverage['public/javascripts/templates.js'][21]++;
partials = this.merge(partials, Handlebars.partials); _$jscoverage['public/javascripts/templates.js'][21]++;
data = data || {};
  _$jscoverage['public/javascripts/templates.js'][22]++;
var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

_$jscoverage['public/javascripts/templates.js'][24]++;
function program1(depth0,data) {
  
  _$jscoverage['public/javascripts/templates.js'][26]++;
var buffer = "", stack1;
  _$jscoverage['public/javascripts/templates.js'][27]++;
buffer += "\n      ";
  _$jscoverage['public/javascripts/templates.js'][28]++;
stack1 = self.invokePartial(partials.week, 'week', depth0, helpers, partials, data);
  _$jscoverage['public/javascripts/templates.js'][29]++;
if(stack1 || stack1 === 0) { _$jscoverage['public/javascripts/templates.js'][29]++;
buffer += stack1; }
  _$jscoverage['public/javascripts/templates.js'][30]++;
buffer += "\n    ";
  _$jscoverage['public/javascripts/templates.js'][31]++;
return buffer;
  }

  _$jscoverage['public/javascripts/templates.js'][34]++;
buffer += "<div class=\"fiscal-calendar-month\">\n  <h4>";
  _$jscoverage['public/javascripts/templates.js'][35]++;
options = {hash:{},data:data};
  _$jscoverage['public/javascripts/templates.js'][36]++;
buffer += escapeExpression(((stack1 = helpers.monthTitle || depth0.monthTitle),stack1 ? stack1.call(depth0, depth0.weeks, options) : helperMissing.call(depth0, "monthTitle", depth0.weeks, options)))
    + "</h4>\n  <div>\n    ";
  _$jscoverage['public/javascripts/templates.js'][38]++;
stack2 = helpers.each.call(depth0, depth0.weeks, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  _$jscoverage['public/javascripts/templates.js'][39]++;
if(stack2 || stack2 === 0) { _$jscoverage['public/javascripts/templates.js'][39]++;
buffer += stack2; }
  _$jscoverage['public/javascripts/templates.js'][40]++;
buffer += "\n  </div>\n</div>\n";
  _$jscoverage['public/javascripts/templates.js'][41]++;
return buffer;
  }));

_$jscoverage['public/javascripts/templates.js'][44]++;
Handlebars.registerPartial("quarter", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  _$jscoverage['public/javascripts/templates.js'][45]++;
this.compilerInfo = [4,'>= 1.0.0'];
_$jscoverage['public/javascripts/templates.js'][46]++;
helpers = this.merge(helpers, Handlebars.helpers); _$jscoverage['public/javascripts/templates.js'][46]++;
partials = this.merge(partials, Handlebars.partials); _$jscoverage['public/javascripts/templates.js'][46]++;
data = data || {};
  _$jscoverage['public/javascripts/templates.js'][47]++;
var buffer = "", stack1, self=this;

_$jscoverage['public/javascripts/templates.js'][49]++;
function program1(depth0,data) {
  
  _$jscoverage['public/javascripts/templates.js'][51]++;
var buffer = "", stack1;
  _$jscoverage['public/javascripts/templates.js'][52]++;
buffer += "\n    ";
  _$jscoverage['public/javascripts/templates.js'][53]++;
stack1 = self.invokePartial(partials.month, 'month', depth0, helpers, partials, data);
  _$jscoverage['public/javascripts/templates.js'][54]++;
if(stack1 || stack1 === 0) { _$jscoverage['public/javascripts/templates.js'][54]++;
buffer += stack1; }
  _$jscoverage['public/javascripts/templates.js'][55]++;
buffer += "\n  ";
  _$jscoverage['public/javascripts/templates.js'][56]++;
return buffer;
  }

  _$jscoverage['public/javascripts/templates.js'][59]++;
buffer += "<div class=\"fiscal-calendar-quarter\">\n  ";
  _$jscoverage['public/javascripts/templates.js'][60]++;
stack1 = helpers.each.call(depth0, depth0.months, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  _$jscoverage['public/javascripts/templates.js'][61]++;
if(stack1 || stack1 === 0) { _$jscoverage['public/javascripts/templates.js'][61]++;
buffer += stack1; }
  _$jscoverage['public/javascripts/templates.js'][62]++;
buffer += "\n  <div style=\"clear:both;\"></div>\n</div>\n";
  _$jscoverage['public/javascripts/templates.js'][63]++;
return buffer;
  }));

_$jscoverage['public/javascripts/templates.js'][66]++;
Handlebars.registerPartial("week", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  _$jscoverage['public/javascripts/templates.js'][67]++;
this.compilerInfo = [4,'>= 1.0.0'];
_$jscoverage['public/javascripts/templates.js'][68]++;
helpers = this.merge(helpers, Handlebars.helpers); _$jscoverage['public/javascripts/templates.js'][68]++;
partials = this.merge(partials, Handlebars.partials); _$jscoverage['public/javascripts/templates.js'][68]++;
data = data || {};
  _$jscoverage['public/javascripts/templates.js'][69]++;
var buffer = "", stack1, self=this;

_$jscoverage['public/javascripts/templates.js'][71]++;
function program1(depth0,data) {
  
  _$jscoverage['public/javascripts/templates.js'][73]++;
var buffer = "", stack1;
  _$jscoverage['public/javascripts/templates.js'][74]++;
buffer += "\n    ";
  _$jscoverage['public/javascripts/templates.js'][75]++;
stack1 = self.invokePartial(partials.day, 'day', depth0, helpers, partials, data);
  _$jscoverage['public/javascripts/templates.js'][76]++;
if(stack1 || stack1 === 0) { _$jscoverage['public/javascripts/templates.js'][76]++;
buffer += stack1; }
  _$jscoverage['public/javascripts/templates.js'][77]++;
buffer += "\n  ";
  _$jscoverage['public/javascripts/templates.js'][78]++;
return buffer;
  }

  _$jscoverage['public/javascripts/templates.js'][81]++;
buffer += "<div class=\"fiscal-calendar-week\">\n  ";
  _$jscoverage['public/javascripts/templates.js'][82]++;
stack1 = helpers.each.call(depth0, depth0.days, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  _$jscoverage['public/javascripts/templates.js'][83]++;
if(stack1 || stack1 === 0) { _$jscoverage['public/javascripts/templates.js'][83]++;
buffer += stack1; }
  _$jscoverage['public/javascripts/templates.js'][84]++;
buffer += "\n</div>\n";
  _$jscoverage['public/javascripts/templates.js'][85]++;
return buffer;
  }));

_$jscoverage['public/javascripts/templates.js'][88]++;
this["JST"]["app/templates/fiscalCalendar/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  _$jscoverage['public/javascripts/templates.js'][89]++;
this.compilerInfo = [4,'>= 1.0.0'];
_$jscoverage['public/javascripts/templates.js'][90]++;
helpers = this.merge(helpers, Handlebars.helpers); _$jscoverage['public/javascripts/templates.js'][90]++;
partials = this.merge(partials, Handlebars.partials); _$jscoverage['public/javascripts/templates.js'][90]++;
data = data || {};
  _$jscoverage['public/javascripts/templates.js'][91]++;
var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

_$jscoverage['public/javascripts/templates.js'][93]++;
function program1(depth0,data) {
  
  _$jscoverage['public/javascripts/templates.js'][95]++;
var buffer = "", stack1;
  _$jscoverage['public/javascripts/templates.js'][96]++;
buffer += "\n      ";
  _$jscoverage['public/javascripts/templates.js'][97]++;
stack1 = self.invokePartial(partials.quarter, 'quarter', depth0, helpers, partials, data);
  _$jscoverage['public/javascripts/templates.js'][98]++;
if(stack1 || stack1 === 0) { _$jscoverage['public/javascripts/templates.js'][98]++;
buffer += stack1; }
  _$jscoverage['public/javascripts/templates.js'][99]++;
buffer += "\n    ";
  _$jscoverage['public/javascripts/templates.js'][100]++;
return buffer;
  }

  _$jscoverage['public/javascripts/templates.js'][103]++;
buffer += "<div class=\"fiscal-calendar\">\n  <h3 class=\"fiscal-calendar-year-title\">";
  _$jscoverage['public/javascripts/templates.js'][104]++;
options = {hash:{},data:data};
  _$jscoverage['public/javascripts/templates.js'][105]++;
buffer += escapeExpression(((stack1 = helpers.yearTitle || depth0.yearTitle),stack1 ? stack1.call(depth0, ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), options) : helperMissing.call(depth0, "yearTitle", ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), options)))
    + "</h3>\n  <div>\n    ";
  _$jscoverage['public/javascripts/templates.js'][107]++;
stack2 = helpers.each.call(depth0, ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  _$jscoverage['public/javascripts/templates.js'][108]++;
if(stack2 || stack2 === 0) { _$jscoverage['public/javascripts/templates.js'][108]++;
buffer += stack2; }
  _$jscoverage['public/javascripts/templates.js'][109]++;
buffer += "\n  </div>\n</div>\n";
  _$jscoverage['public/javascripts/templates.js'][110]++;
return buffer;
  });

_$jscoverage['public/javascripts/templates.js'][113]++;
return this["JST"];

};});
