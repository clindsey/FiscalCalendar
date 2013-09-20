window.require.register("templates", function(require, module) {module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

Handlebars.registerPartial("day", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"fiscal-calendar-day\">\n  ";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</span>\n";
  return buffer;
  }));

Handlebars.registerPartial("month", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = self.invokePartial(partials.week, 'week', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<div class=\"fiscal-calendar-month\">\n  <h4>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.monthTitle || depth0.monthTitle),stack1 ? stack1.call(depth0, depth0.weeks, options) : helperMissing.call(depth0, "monthTitle", depth0.weeks, options)))
    + "</h4>\n  <div>\n    ";
  stack2 = helpers.each.call(depth0, depth0.weeks, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  }));

Handlebars.registerPartial("quarter", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.month, 'month', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  buffer += "<div class=\"fiscal-calendar-quarter\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.months, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div style=\"clear:both;\"></div>\n</div>\n";
  return buffer;
  }));

Handlebars.registerPartial("week", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = self.invokePartial(partials.day, 'day', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }

  buffer += "<div class=\"fiscal-calendar-week\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.days, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  }));

this["JST"]["app/templates/fiscalCalendar/index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = self.invokePartial(partials.quarter, 'quarter', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<div class=\"fiscal-calendar\">\n  <h3 class=\"fiscal-calendar-year-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.yearTitle || depth0.yearTitle),stack1 ? stack1.call(depth0, ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), options) : helperMissing.call(depth0, "yearTitle", ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), options)))
    + "</h3>\n  <div>\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.model),stack1 == null || stack1 === false ? stack1 : stack1.quarters), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });

return this["JST"];

};});
