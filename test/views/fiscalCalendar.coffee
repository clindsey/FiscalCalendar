FiscalCalendarView = require "views/FiscalCalendar"
FiscalCalendarModel = require "models/FiscalCalendar"

fiscalCalendarOptions =
  year: 2012
  month: 8
  day: 30
  format: "5-4-4"

describe "View FiscalCalendar", ->
  beforeEach ->
    @fiscalCalendarModel = FiscalCalendarModel.create fiscalCalendarOptions
    @fiscalCalendarView = FiscalCalendarView.create @fiscalCalendarModel

  afterEach ->
    @fiscalCalendarView.dispose()
    @fiscalCalendarModel.dispose()

    expect($(".fiscal-calendar").length).to.equal 0

    expect(FiscalCalendarView.getUsedLength()).to.equal 0
    expect(FiscalCalendarModel.getUsedLength()).to.equal 0

  it "has a model", ->
    expect(@fiscalCalendarView.model).to.equal @fiscalCalendarModel

  it "can render", ->
    expect(=> @fiscalCalendarView.render()).to.not.throw()

  it "returns a jQuery object on render", ->
    expect(@fiscalCalendarView.render().length).to.equal 1

  it "attaches a div for every quarter", ->
    $el = @fiscalCalendarView.render()
    expect($el.find(".fiscal-calendar-quarter").length).to.equal 4

  it "removes itself from the dom", ->
    $("body").append @fiscalCalendarView.render()
