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

      # this is where the format is applied - 4-4-5, 5-4-4, 4-5-4
      _.each fiscalQuarterModel.format.match(/\d+/g), (value) ->
        weeks = []

        _.each [1..value], (value, index) ->
          week = FiscalWeekModel.create {year, month, day}
          weeks.push week

        months.push {weeks}

      months
  ,
    dispose: ->
      @_super()
