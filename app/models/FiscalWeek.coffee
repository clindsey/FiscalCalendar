Model = require "models/base/Model"

module.exports = FiscalWeekModel = Model.extend "FiscalWeekModel",
    create: (options) ->
      fiscalWeekModel = @_super()

      fiscalWeekModel.year = options.year
      fiscalWeekModel.month = options.month
      fiscalWeekModel.day = options.day

      fiscalWeekModel.days = @_buildDays fiscalWeekModel

      fiscalWeekModel

    daysInMonth: (year, month) ->
      if month is 1
        28 + @isLeapYear year
      else
        31 - (month) % 7 % 2

    isLeapYear: (year) ->
      isLeapYear = false

      if year % 400 is 0
        isLeapYear = true
      else if year % 100 is 0
        isLeapYear = false
      else if year % 4 is 0
        isLeapYear = true

      isLeapYear

    _buildDays: (fiscalWeekModel) ->
      days = []

      year = fiscalWeekModel.year
      month = fiscalWeekModel.month
      day = fiscalWeekModel.day

      daysInMonth = FiscalWeekModel.daysInMonth year, fiscalWeekModel.month

      for dayIndex in [0..6]
        date = (new Date "#{year} #{month + 1} #{day}")

        days.push
          day: date.getDate()
          date: date.toJSON()
          dayOfWeek: dayIndex

        day += 1

        if day > daysInMonth # this fiscal week spans 2 months
          day = 1
          month += 1

          if month > 11
            month = 0
            year += 1

      days
  ,
    nextDay: ->
      lastDay = new Date @days[6].date
      year = lastDay.getFullYear()
      month = lastDay.getMonth()
      day = lastDay.getDate()

      daysInMonth = FiscalWeekModel.daysInMonth year, month

      # TODO: not DRY
      day += 1

      if day > daysInMonth # this fiscal week spans 2 months
        day = 1
        month += 1

        if month > 11
          month = 0
          year += 1

      {year, month, day}

    dispose: ->
      @_super()
