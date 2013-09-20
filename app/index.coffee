FiscalCalendarModel = require "models/FiscalCalendar"
FiscalCalendarView = require "views/FiscalCalendar"
handlebarsHelpers = require "helpers/handlebars"

# The kick-off point for the application.

module.exports = class Index
  constructor: ->
    @fiscalCalendarModel = FiscalCalendarModel.create
      year: 2012
      month: 8
      day: 30
      format: "5-4-4"
    @fiscalCalendarView = FiscalCalendarView.create @fiscalCalendarModel

    $("body").append @fiscalCalendarView.render()
