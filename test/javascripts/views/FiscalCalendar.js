if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['public/javascripts/views/FiscalCalendar.js'] === 'undefined'){_$jscoverage['public/javascripts/views/FiscalCalendar.js']=[];
_$jscoverage['public/javascripts/views/FiscalCalendar.js'].source=['window.require.register("views/FiscalCalendar", function(require, module) {var FiscalCalendarView, View;',
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
'});',
''];
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][15]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][1]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][1]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][3]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][5]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][7]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][8]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][9]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][10]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][20]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][21]=0;
_$jscoverage['public/javascripts/views/FiscalCalendar.js'][23]=0;
}_$jscoverage['public/javascripts/views/FiscalCalendar.js'][1]++;
window.require.register("views/FiscalCalendar", function(require, module) {_$jscoverage['public/javascripts/views/FiscalCalendar.js'][1]++;
var FiscalCalendarView, View;

_$jscoverage['public/javascripts/views/FiscalCalendar.js'][3]++;
View = require("views/base/View");

_$jscoverage['public/javascripts/views/FiscalCalendar.js'][5]++;
module.exports = FiscalCalendarView = View.extend("FiscalCalendarView", {
  create: function(model) {
    _$jscoverage['public/javascripts/views/FiscalCalendar.js'][7]++;
var fiscalCalendarView;
    _$jscoverage['public/javascripts/views/FiscalCalendar.js'][8]++;
fiscalCalendarView = this._super();
    _$jscoverage['public/javascripts/views/FiscalCalendar.js'][9]++;
fiscalCalendarView.model = model;
    _$jscoverage['public/javascripts/views/FiscalCalendar.js'][10]++;
return fiscalCalendarView;
  },
  template: require("templates")(Handlebars)['app/templates/fiscalCalendar/index.hbs']
}, {
  render: function() {
    _$jscoverage['public/javascripts/views/FiscalCalendar.js'][15]++;
return this.$el = $(FiscalCalendarView.template({
      model: this.model
    }));
  },
  dispose: function() {
    _$jscoverage['public/javascripts/views/FiscalCalendar.js'][20]++;
if (this.$el != null) {
      _$jscoverage['public/javascripts/views/FiscalCalendar.js'][21]++;
this.$el.remove();
    }
    _$jscoverage['public/javascripts/views/FiscalCalendar.js'][23]++;
return this._super();
  }
});
});
