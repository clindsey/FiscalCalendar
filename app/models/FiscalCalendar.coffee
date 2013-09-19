Model = require "models/base/Model"

module.exports = Model.extend "FiscalCalendarModel",
    create: (settings) ->
      @_assignSettings settings

      fiscalCalendarModel = @_super()

      fiscalCalendarModel.year = settings.year
      fiscalCalendarModel.month = settings.month
      fiscalCalendarModel.format = settings.format || "5-4-4"

      fiscalCalendarModel.quarters = @_generateQuarters()

      fiscalCalendarModel

    REQUIRED_SETTINGS: [
      "year"
      "month"
    ]

    _generateQuarters: ->
      [undefined, undefined, undefined, undefined]

    _assignSettings: (settings) ->
      _.each @REQUIRED_SETTINGS, (value) ->
        throw new Error("Forgot to supply #{value}") unless settings[value]?
  ,
    dispose: ->
      @_super()
