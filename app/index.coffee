FiscalCalendarModel = require "models/FiscalCalendar"
FiscalCalendarView = require "views/FiscalCalendar"
handlebarsHelpers = require "helpers/handlebars"

# The kick-off point for the application.

module.exports = class Index
  constructor: ->
    @buildCalendar "4-5-4", 2012, 0, 29
    @buildCalendar "4-5-4", 2013, 1, 3
    @buildCalendar "4-5-4", 2014, 1, 2
    @buildCalendar "4-5-4", 2015, 1, 1
    @buildCalendar "4-5-4", 2016, 0, 31
    @buildCalendar "4-5-4", 2017, 0, 29
    @buildCalendar "4-5-4", 2018, 0, 28
    @buildCalendar "4-5-4", 2019, 1, 3

  buildCalendar: (format, year, month, day) ->
    fiscalCalendarModel = FiscalCalendarModel.create {format, year, month, day}
    fiscalCalendarView = FiscalCalendarView.create fiscalCalendarModel
    $("body").append fiscalCalendarView.render()
