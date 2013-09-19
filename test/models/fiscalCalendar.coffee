FiscalCalendarModel = require "models/FiscalCalendar"

fiscalCalendarOptions =
  year: 2013
  month: 9
  format: "4-4-5"

describe "Model FiscalCalendar", ->
  afterEach ->
    return unless @fiscalCalendarModel?

    @fiscalCalendarModel.dispose()

    expect(FiscalCalendarModel.getUsedLength()).to.equal 0

  context "without options", ->
    it "throws an exception for missing year", ->
      expect(-> FiscalCalendarModel.create()).to.throw()

    it "throws an exception for missing month", ->
      expect(-> FiscalCalendarModel.create {year: 2013}).to.throw()

    it "has a default format", ->
      @fiscalCalendarModel = FiscalCalendarModel.create year: 2013, month: 9
      expect(@fiscalCalendarModel.format).to.equal "5-4-4"

  context "with options", ->
    beforeEach ->
      @fiscalCalendarModel = FiscalCalendarModel.create fiscalCalendarOptions

    context "with a calendar", ->
      it "accepts year setting", ->
        expect(@fiscalCalendarModel.year).to.equal fiscalCalendarOptions.year

      it "accepts month setting", ->
        expect(@fiscalCalendarModel.month).to.equal fiscalCalendarOptions.month

      it "accepts format setting", ->
        expect(@fiscalCalendarModel.format).to.equal fiscalCalendarOptions.format

      it "has 4 quarters", ->
        expect(@fiscalCalendarModel.quarters.length).to.equal 4

      it "has 13 weeks per quarter"#, ->
      ###
        _.each @fiscalCalendarOptions.quarters, (quarter) ->
          expect(quarter.weeks.length).to.equal 13
      ###

      it "has 52 weeks"

      it "has 4-4-5 months in each quarter"
