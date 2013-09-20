Model = require "models/base/Model"
FiscalWeekModel = require "models/FiscalWeek"

module.exports = Model.extend "FiscalQuarterModel",
    create: (options) ->
      fiscalQuarterModel = @_super()

      fiscalQuarterModel.format = options.format
      fiscalQuarterModel.year = options.year
      fiscalQuarterModel.month = options.month
      fiscalQuarterModel.day = options.day
      fiscalQuarterModel.months = @_buildMonths fiscalQuarterModel

      fiscalQuarterModel

    _buildMonths: (fiscalQuarterModel) ->
      months = []

      year = fiscalQuarterModel.year
      month = fiscalQuarterModel.month
      day = fiscalQuarterModel.day

      week = FiscalWeekModel.create {year, month, day}
      weekFormat = fiscalQuarterModel.format.match /\d+/g

      # this is where the format is applied - 4-4-5, 5-4-4, 4-5-4

      for weekCount in weekFormat
        weeks = []

        weeks.push week

        for index in [1..weekCount - 1]
          nextDay = week.nextDay()

          week = FiscalWeekModel.create nextDay

          weeks.push week

        months.push {weeks}

        nextDay = week.nextDay()

        week = FiscalWeekModel.create nextDay

      # this week isn't a part of this quarter
      week.dispose()

      months
  ,
    dispose: ->
      for month in @months
        for fiscalWeekModel in month.weeks
          fiscalWeekModel.dispose()

      @_super()
