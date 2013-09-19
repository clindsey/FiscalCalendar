tests = [
  # list all source files here, line-by-line
  "test/models/fiscalWeek"
  "test/models/fiscalQuarter"
  "test/models/fiscalCalendar"
  "test/index"
]

for test in tests
  require test

if window.mochaPhantomJS
  mochaPhantomJS.run()
else
  runner = mocha.run()

  runner.on "end", ->
    new MochaCov
