FiscalWeekModel = require "models/FiscalWeek"

fiscalWeekOptions =
  year: 2013
  month: 8
  day: 1

describe "Model FiscalWeek", ->
  context "with class methods", ->
    it "should find days in month", ->
      daysInMonth = FiscalWeekModel.daysInMonth 2012, 0

      expect(daysInMonth).to.equal 31

    context "with leap years", ->
      it "should recognize a non leap year", ->
        expect(FiscalWeekModel.isLeapYear(2010)).to.equal false

      it "should recognize an oridary leap year", ->
        expect(FiscalWeekModel.isLeapYear(2012)).to.equal true

      it "should recognize a 400 leap year", ->
        expect(FiscalWeekModel.isLeapYear(400)).to.equal true

      it "should not recognize a 100 leap year", ->
        expect(FiscalWeekModel.isLeapYear(100)).to.equal false


  context "with instance methods", ->
    afterEach ->
      @fiscalWeekModel.dispose()

      expect(FiscalWeekModel.getUsedLength()).to.equal 0

    context "with regular options", ->
      beforeEach ->
        @fiscalWeekModel = FiscalWeekModel.create fiscalWeekOptions

      it "accepts a year option", ->
        expect(@fiscalWeekModel.year).to.equal fiscalWeekOptions.year

      it "accepts a month option", ->
        expect(@fiscalWeekModel.month).to.equal fiscalWeekOptions.month

      it "accepts a day option", ->
        expect(@fiscalWeekModel.day).to.equal fiscalWeekOptions.day

      it "has 7 days", ->
        expect(@fiscalWeekModel.days.length).to.equal 7

      it "has sunday as first day", ->
        expect(@fiscalWeekModel.days[0].day).to.equal 1

      it "has correct date as first day", ->
        year = fiscalWeekOptions.year
        month = fiscalWeekOptions.month
        day = fiscalWeekOptions.day

        date = (new Date "#{year} #{month + 1} #{day}").toJSON()
        expect(@fiscalWeekModel.days[0].date).to.equal date

      it "has correct days for regular week", ->
        days = _.map [
          "2013 9 1"
          "2013 9 2"
          "2013 9 3"
          "2013 9 4"
          "2013 9 5"
          "2013 9 6"
          "2013 9 7"
        ], (dayString) ->
          day = new Date dayString
          {
            day: day.getDate()
            date: day.toJSON()
          }

        for day, index in days
          expect(@fiscalWeekModel.days[index].day).to.equal index + 1
          expect(@fiscalWeekModel.days[index].date).to.equal day.date

      context "with utility helpers", ->
        it "knows start date of next week", ->
          targetDay =
            year: 2013
            month: 8
            day: 8

          expect(@fiscalWeekModel.nextDay()).to.deep.equal targetDay

    context "with weeks starting in another month", ->
      beforeEach ->
        specialOptions =
          year: 2012
          month: 8
          day: 30

        @fiscalWeekModel = FiscalWeekModel.create specialOptions

      it "has day of week", ->
        days = _.map [
          "2012 9 30"
        ], (dayString) ->
          day = new Date dayString
          obj = {
            dayOfWeek: day.getDay()
          }

        for day, index in days
          expect(@fiscalWeekModel.days[index].dayOfWeek).to.equal day.dayOfWeek

      it "has correct days for week starting in another month", ->
        days = _.map [
          "2012 9 30"
          "2012 10 1"
          "2012 10 2"
          "2012 10 3"
          "2012 10 4"
          "2012 10 5"
          "2012 10 6"
        ], (dayString) ->
          day = new Date dayString
          obj = {
            day: day.getDate()
            date: day.toJSON()
          }

        for day, index in days
          expect(@fiscalWeekModel.days[index].day).to.equal day.day
          expect(@fiscalWeekModel.days[index].date).to.equal day.date

    context "with weeks starting in another year", ->
      beforeEach ->
        specialOptions =
          year: 2012
          month: 11
          day: 30

        @fiscalWeekModel = FiscalWeekModel.create specialOptions

      it "has correct days for week starting in another month", ->
        days = _.map [
          "2012 12 30"
          "2012 12 31"
          "2013 1 1"
          "2013 1 2"
          "2013 1 3"
          "2013 1 4"
          "2013 1 5"
        ], (dayString) ->
          day = new Date dayString
          obj = {
            day: day.getDate()
            date: day.toJSON()
          }

        for day, index in days
          expect(@fiscalWeekModel.days[index].day).to.equal day.day
          expect(@fiscalWeekModel.days[index].date).to.equal day.date

    context "with leap years", ->
      it "has correct week days for a normal year", ->
        specialOptions =
          year: 2013
          month: 1
          day: 24

        @fiscalWeekModel = FiscalWeekModel.create specialOptions

        days = _.map [
          "2013 2 24"
          "2013 2 25"
          "2013 2 26"
          "2013 2 27"
          "2013 2 28"
          "2013 3 1"
          "2013 3 2"
        ], (dayString) ->
          day = new Date dayString
          obj = {
            day: day.getDate()
            date: day.toJSON()
          }

        for day, index in days
          expect(@fiscalWeekModel.days[index].day).to.equal day.day
          expect(@fiscalWeekModel.days[index].date).to.equal day.date

      it "has correct week days for a leap year", ->
        specialOptions =
          year: 2012
          month: 1
          day: 26

        @fiscalWeekModel = FiscalWeekModel.create specialOptions

        days = _.map [
          "2012 2 26"
          "2012 2 27"
          "2012 2 28"
          "2012 2 29"
          "2012 3 1"
          "2012 3 2"
          "2012 3 3"
        ], (dayString) ->
          day = new Date dayString
          obj = {
            day: day.getDate()
            date: day.toJSON()
          }

        for day, index in days
          expect(@fiscalWeekModel.days[index].day).to.equal day.day
          expect(@fiscalWeekModel.days[index].date).to.equal day.date
