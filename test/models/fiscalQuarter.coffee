FiscalQuarterModel = require "models/FiscalQuarter"

fiscalQuarterOptions =
  format: "5-4-4"
  year: 2012
  month: 8
  day: 30

describe "Model FiscalQuarter", ->
  beforeEach ->
    @fiscalQuarterModel = FiscalQuarterModel.create fiscalQuarterOptions

  afterEach ->
    @fiscalQuarterModel.dispose()

    expect(FiscalQuarterModel.getUsedLength()).to.equal 0

  it "accepts a format", ->
    expect(@fiscalQuarterModel.format).to.equal fiscalQuarterOptions.format

  it "accepts a year", ->
    expect(@fiscalQuarterModel.year).to.equal fiscalQuarterOptions.year

  it "accepts a month", ->
    expect(@fiscalQuarterModel.month).to.equal fiscalQuarterOptions.month

  it "accepts a day", ->
    expect(@fiscalQuarterModel.day).to.equal fiscalQuarterOptions.day

  it "has 3 months", ->
    expect(@fiscalQuarterModel.months.length).to.equal 3

  it "has 3 months with proper week count", ->
    _.each fiscalQuarterOptions.format.split("-"), (value, index) =>
      expect(@fiscalQuarterModel.months[index].weeks.length).to.equal +value

  it "has 7 days per week", ->
    _.each fiscalQuarterOptions.format.split("-"), (value, index) =>
      _.each @fiscalQuarterModel.months[index].weeks, (week) =>
        expect(week.days.length).to.equal 7

  it "begins the first month on the correct day", ->
    year = fiscalQuarterOptions.year
    month = fiscalQuarterOptions.month
    day = fiscalQuarterOptions.day

    targetDay = (new Date "#{year} #{month + 1} #{day}").toJSON()

    expect(@fiscalQuarterModel.months[0].weeks[0].days[0].date).to.equal targetDay

  context "with weeks", ->
    it "begins the second month on the correct day"#, ->
    ###
      year = fiscalQuarterOptions.year
      month = 9
      day = 28

      targetDay = (new Date "#{year} #{month + 1} #{day}").toJSON()

      expect(@fiscalQuarterModel.months[1].weeks[0].days[0].date).to.equal targetDay
    ###
