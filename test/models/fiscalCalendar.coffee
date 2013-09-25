FiscalCalendarModel = require "models/FiscalCalendar"
FiscalQuarterModel = require "models/FiscalQuarter"

fiscalCalendarOptions =
  year: 2012
  month: 8
  day: 30
  format: "4-4-5"

describe "Model FiscalCalendar", ->
  afterEach ->
    return unless @fiscalCalendarModel?

    @fiscalCalendarModel.dispose()

    expect(FiscalCalendarModel.getUsedLength()).to.equal 0
    expect(FiscalQuarterModel.getUsedLength()).to.equal 0

  context "without options", ->
    it "throws an exception for missing year", ->
      expect(-> FiscalCalendarModel.create()).to.throw()

    it "throws an exception for missing month", ->
      expect(-> FiscalCalendarModel.create {year: 2013}).to.throw()

    it "throws an exception for missing day", ->
      expect(-> FiscalCalendarModel.create {year: 2013, month: 8}).to.throw()

    it "has a default format", ->
      @fiscalCalendarModel = FiscalCalendarModel.create year: 2013, month: 9, day: 30
      expect(@fiscalCalendarModel.format).to.equal "5-4-4"

  context "with options", ->
    beforeEach ->
      @fiscalCalendarModel = FiscalCalendarModel.create fiscalCalendarOptions

    context "with a calendar", ->
      it "accepts year setting", ->
        expect(@fiscalCalendarModel.year).to.equal fiscalCalendarOptions.year

      it "accepts month setting", ->
        expect(@fiscalCalendarModel.month).to.equal fiscalCalendarOptions.month

      it "accepts day setting", ->
        expect(@fiscalCalendarModel.day).to.equal fiscalCalendarOptions.day

      it "accepts format setting", ->
        expect(@fiscalCalendarModel.format).to.equal fiscalCalendarOptions.format

      context "with quarters", ->
        it "has 4", ->
          expect(@fiscalCalendarModel.quarters.length).to.equal 4

        it "has months in correct format", ->
          expect(@fiscalCalendarModel.quarters[0].months[0].weeks.length).to.equal 4
          expect(@fiscalCalendarModel.quarters[0].months[1].weeks.length).to.equal 4
          expect(@fiscalCalendarModel.quarters[0].months[2].weeks.length).to.equal 5

          expect(@fiscalCalendarModel.quarters[1].months[0].weeks.length).to.equal 4
          expect(@fiscalCalendarModel.quarters[1].months[1].weeks.length).to.equal 4
          expect(@fiscalCalendarModel.quarters[1].months[2].weeks.length).to.equal 5

      it "has 52 weeks for a normal year", ->
        weekCount = 0

        for quarter in @fiscalCalendarModel.quarters
          for month in quarter.months
            weekCount += month.weeks.length

        expect(weekCount).to.equal 52

  context "with 53 week year options", ->
    fiscalCalendarSpecialOptions =
      year: 2012
      month: 0
      day: 29
      format: "4-5-4"

    beforeEach ->
      @fiscalCalendarModel = FiscalCalendarModel.create fiscalCalendarSpecialOptions

    it "should have 53 weeks for a special year", ->
      weekCount = 0

      for quarter in @fiscalCalendarModel.quarters
        for month in quarter.months
          weekCount += month.weeks.length

      expect(weekCount).to.equal 53
