FiscalCalendarModel = require "models/FiscalCalendar"
FiscalCalendarView = require "views/FiscalCalendar"
handlebarsHelpers = require "helpers/handlebars"

# The kick-off point for the application.

module.exports = class Index
  constructor: ->
    @buildCalendar "5-4-4", 2012, 8, 30
    @buildCalendar "4-4-5", 2013, 8, 29

  buildCalendar: (format, year, month, day) ->
    fiscalCalendarModel = FiscalCalendarModel.create {format, year, month, day}
    fiscalCalendarView = FiscalCalendarView.create fiscalCalendarModel
    $("body").append fiscalCalendarView.render()
