window.require.register("views/FiscalCalendar", function(require, module) {var FiscalCalendarView, View;

View = require("views/base/View");

module.exports = FiscalCalendarView = View.extend("FiscalCalendarView", {
  create: function(model) {
    var fiscalCalendarView;
    fiscalCalendarView = this._super();
    fiscalCalendarView.model = model;
    return fiscalCalendarView;
  },
  template: require("templates")(Handlebars)['app/templates/fiscalCalendar/index.hbs']
}, {
  render: function() {
    return this.$el = $(FiscalCalendarView.template({
      model: this.model
    }));
  },
  dispose: function() {
    if (this.$el != null) {
      this.$el.remove();
    }
    return this._super();
  }
});
});
