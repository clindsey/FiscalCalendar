View = require "views/base/View"

module.exports = FiscalCalendarView = View.extend "FiscalCalendarView",
    create: (model) ->
      fiscalCalendarView = @_super()

      fiscalCalendarView.model = model

      fiscalCalendarView

    template: require("templates")(Handlebars)['app/templates/fiscalCalendar/index.hbs']
  ,
    render: ->
      @$el = $ FiscalCalendarView.template {@model}

    dispose: ->
      @$el.remove() if @$el?

      @_super()
