Model = require "models/base/Model"
FiscalQuarterModel = require "models/FiscalQuarter"

module.exports = Model.extend "FiscalCalendarModel",
    create: (settings) ->
      @_assignSettings settings

      fiscalCalendarModel = @_super()

      fiscalCalendarModel.year = settings.year
      fiscalCalendarModel.month = settings.month
      fiscalCalendarModel.day = settings.day
      fiscalCalendarModel.format = settings.format || "5-4-4"

      fiscalCalendarModel.quarters = @_generateQuarters fiscalCalendarModel

      fiscalCalendarModel

    REQUIRED_SETTINGS: [
      "year"
      "month"
      "day"
    ]

    _generateQuarters: (fiscalCalendarModel) ->
      quarters = []

      quarter = FiscalQuarterModel.create
        format: fiscalCalendarModel.format
        year: fiscalCalendarModel.year
        month: fiscalCalendarModel.month
        day: fiscalCalendarModel.day

      quarters.push quarter

      for quarterIndex in [1..3]
        lastMonth = quarter.months[quarter.months.length - 1]
        lastWeek = lastMonth.weeks[lastMonth.weeks.length - 1]
        quarterOptions = _.extend (_.extend {}, lastWeek.nextDay()),
          format: fiscalCalendarModel.format
        quarter = FiscalQuarterModel.create quarterOptions

        quarters.push quarter

      quarters

    _assignSettings: (settings) ->
      _.each @REQUIRED_SETTINGS, (value) ->
        throw new Error("Forgot to supply #{value}") unless settings[value]?
  ,
    dispose: ->
      for quarter in @quarters
        quarter.dispose()

      @_super()
