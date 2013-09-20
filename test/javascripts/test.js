window.require.register('test/index', function(require, module) {
var IndexView;

IndexView = require("index");

describe("View Index", function() {
  return beforeEach(function() {
    return this.indexView = new IndexView;
  });
});

});

window.require.register('test/initialize', function(require, module) {
var runner, test, tests, _i, _len;

tests = ["test/models/fiscalWeek", "test/models/fiscalQuarter", "test/models/fiscalCalendar", "test/views/fiscalCalendar", "test/index"];

for (_i = 0, _len = tests.length; _i < _len; _i++) {
  test = tests[_i];
  require(test);
}

if (window.mochaPhantomJS) {
  mochaPhantomJS.run();
} else {
  runner = mocha.run();
  runner.on("end", function() {
    return new MochaCov;
  });
}

});

window.require.register('test/models/fiscalCalendar', function(require, module) {
var FiscalCalendarModel, FiscalQuarterModel, fiscalCalendarOptions;

FiscalCalendarModel = require("models/FiscalCalendar");

FiscalQuarterModel = require("models/FiscalQuarter");

fiscalCalendarOptions = {
  year: 2012,
  month: 8,
  day: 30,
  format: "4-4-5"
};

describe("Model FiscalCalendar", function() {
  afterEach(function() {
    if (this.fiscalCalendarModel == null) {
      return;
    }
    this.fiscalCalendarModel.dispose();
    expect(FiscalCalendarModel.getUsedLength()).to.equal(0);
    return expect(FiscalQuarterModel.getUsedLength()).to.equal(0);
  });
  context("without options", function() {
    it("throws an exception for missing year", function() {
      return expect(function() {
        return FiscalCalendarModel.create();
      }).to["throw"]();
    });
    it("throws an exception for missing month", function() {
      return expect(function() {
        return FiscalCalendarModel.create({
          year: 2013
        });
      }).to["throw"]();
    });
    it("throws an exception for missing day", function() {
      return expect(function() {
        return FiscalCalendarModel.create({
          year: 2013,
          month: 8
        });
      }).to["throw"]();
    });
    return it("has a default format", function() {
      this.fiscalCalendarModel = FiscalCalendarModel.create({
        year: 2013,
        month: 9,
        day: 30
      });
      return expect(this.fiscalCalendarModel.format).to.equal("5-4-4");
    });
  });
  return context("with options", function() {
    beforeEach(function() {
      return this.fiscalCalendarModel = FiscalCalendarModel.create(fiscalCalendarOptions);
    });
    return context("with a calendar", function() {
      it("accepts year setting", function() {
        return expect(this.fiscalCalendarModel.year).to.equal(fiscalCalendarOptions.year);
      });
      it("accepts month setting", function() {
        return expect(this.fiscalCalendarModel.month).to.equal(fiscalCalendarOptions.month);
      });
      it("accepts day setting", function() {
        return expect(this.fiscalCalendarModel.day).to.equal(fiscalCalendarOptions.day);
      });
      it("accepts format setting", function() {
        return expect(this.fiscalCalendarModel.format).to.equal(fiscalCalendarOptions.format);
      });
      return context("with quarters", function() {
        it("has 4", function() {
          return expect(this.fiscalCalendarModel.quarters.length).to.equal(4);
        });
        return it("has months in correct format", function() {
          expect(this.fiscalCalendarModel.quarters[0].months[0].weeks.length).to.equal(4);
          expect(this.fiscalCalendarModel.quarters[0].months[1].weeks.length).to.equal(4);
          expect(this.fiscalCalendarModel.quarters[0].months[2].weeks.length).to.equal(5);
          expect(this.fiscalCalendarModel.quarters[1].months[0].weeks.length).to.equal(4);
          expect(this.fiscalCalendarModel.quarters[1].months[1].weeks.length).to.equal(4);
          return expect(this.fiscalCalendarModel.quarters[1].months[2].weeks.length).to.equal(5);
        });
      });
    });
  });
});

});

window.require.register('test/models/fiscalQuarter', function(require, module) {
var FiscalQuarterModel, FiscalWeekModel, fiscalQuarterOptions;

FiscalQuarterModel = require("models/FiscalQuarter");

FiscalWeekModel = require("models/FiscalWeek");

fiscalQuarterOptions = {
  format: "5-4-4",
  year: 2012,
  month: 8,
  day: 30
};

describe("Model FiscalQuarter", function() {
  beforeEach(function() {
    return this.fiscalQuarterModel = FiscalQuarterModel.create(fiscalQuarterOptions);
  });
  afterEach(function() {
    this.fiscalQuarterModel.dispose();
    expect(FiscalQuarterModel.getUsedLength()).to.equal(0);
    return expect(FiscalWeekModel.getUsedLength()).to.equal(0);
  });
  it("accepts a format", function() {
    return expect(this.fiscalQuarterModel.format).to.equal(fiscalQuarterOptions.format);
  });
  it("accepts a year", function() {
    return expect(this.fiscalQuarterModel.year).to.equal(fiscalQuarterOptions.year);
  });
  it("accepts a month", function() {
    return expect(this.fiscalQuarterModel.month).to.equal(fiscalQuarterOptions.month);
  });
  it("accepts a day", function() {
    return expect(this.fiscalQuarterModel.day).to.equal(fiscalQuarterOptions.day);
  });
  it("has 3 months", function() {
    return expect(this.fiscalQuarterModel.months.length).to.equal(3);
  });
  it("has 3 months with proper week count", function() {
    var _this = this;
    return _.each(fiscalQuarterOptions.format.split("-"), function(value, index) {
      return expect(_this.fiscalQuarterModel.months[index].weeks.length).to.equal(+value);
    });
  });
  it("has 7 days per week", function() {
    var _this = this;
    return _.each(fiscalQuarterOptions.format.split("-"), function(value, index) {
      return _.each(_this.fiscalQuarterModel.months[index].weeks, function(week) {
        return expect(week.days.length).to.equal(7);
      });
    });
  });
  it("begins the first month on the correct day", function() {
    var day, month, targetDay, year;
    year = fiscalQuarterOptions.year;
    month = fiscalQuarterOptions.month;
    day = fiscalQuarterOptions.day;
    targetDay = (new Date("" + year + " " + (month + 1) + " " + day)).toJSON();
    return expect(this.fiscalQuarterModel.months[0].weeks[0].days[0].date).to.equal(targetDay);
  });
  return context("with weeks", function() {
    it("begins the second week of the first month on the correct day", function() {
      var day, month, targetDay, year;
      year = fiscalQuarterOptions.year;
      month = 9;
      day = 7;
      targetDay = (new Date("" + year + " " + (month + 1) + " " + day)).toJSON();
      return expect(this.fiscalQuarterModel.months[0].weeks[1].days[0].date).to.equal(targetDay);
    });
    it("begins the third week of the first month on the correct day", function() {
      var day, month, targetDay, year;
      year = fiscalQuarterOptions.year;
      month = 9;
      day = 14;
      targetDay = (new Date("" + year + " " + (month + 1) + " " + day)).toJSON();
      return expect(this.fiscalQuarterModel.months[0].weeks[2].days[0].date).to.equal(targetDay);
    });
    return it("begins the second month on the correct day", function() {
      var day, month, targetDay, year;
      year = fiscalQuarterOptions.year;
      month = 10;
      day = 4;
      targetDay = (new Date("" + year + " " + (month + 1) + " " + day)).toJSON();
      return expect(this.fiscalQuarterModel.months[1].weeks[0].days[0].date).to.equal(targetDay);
    });
  });
});

});

window.require.register('test/models/fiscalWeek', function(require, module) {
var FiscalWeekModel, fiscalWeekOptions;

FiscalWeekModel = require("models/FiscalWeek");

fiscalWeekOptions = {
  year: 2013,
  month: 8,
  day: 1
};

describe("Model FiscalWeek", function() {
  afterEach(function() {
    this.fiscalWeekModel.dispose();
    return expect(FiscalWeekModel.getUsedLength()).to.equal(0);
  });
  context("with regular options", function() {
    beforeEach(function() {
      return this.fiscalWeekModel = FiscalWeekModel.create(fiscalWeekOptions);
    });
    it("accepts a year option", function() {
      return expect(this.fiscalWeekModel.year).to.equal(fiscalWeekOptions.year);
    });
    it("accepts a month option", function() {
      return expect(this.fiscalWeekModel.month).to.equal(fiscalWeekOptions.month);
    });
    it("accepts a day option", function() {
      return expect(this.fiscalWeekModel.day).to.equal(fiscalWeekOptions.day);
    });
    it("has 7 days", function() {
      return expect(this.fiscalWeekModel.days.length).to.equal(7);
    });
    it("has sunday as first day", function() {
      return expect(this.fiscalWeekModel.days[0].day).to.equal(1);
    });
    it("has correct date as first day", function() {
      var date, day, month, year;
      year = fiscalWeekOptions.year;
      month = fiscalWeekOptions.month;
      day = fiscalWeekOptions.day;
      date = (new Date("" + year + " " + (month + 1) + " " + day)).toJSON();
      return expect(this.fiscalWeekModel.days[0].date).to.equal(date);
    });
    it("has correct days for regular week", function() {
      var day, days, index, _i, _len, _results;
      days = _.map(["2013 9 1", "2013 9 2", "2013 9 3", "2013 9 4", "2013 9 5", "2013 9 6", "2013 9 7"], function(dayString) {
        var day;
        day = new Date(dayString);
        return {
          day: day.getDate(),
          date: day.toJSON()
        };
      });
      _results = [];
      for (index = _i = 0, _len = days.length; _i < _len; index = ++_i) {
        day = days[index];
        expect(this.fiscalWeekModel.days[index].day).to.equal(index + 1);
        _results.push(expect(this.fiscalWeekModel.days[index].date).to.equal(day.date));
      }
      return _results;
    });
    return context("with utility helpers", function() {
      return it("knows start date of next week", function() {
        var targetDay;
        targetDay = {
          year: 2013,
          month: 8,
          day: 8
        };
        return expect(this.fiscalWeekModel.nextDay()).to.deep.equal(targetDay);
      });
    });
  });
  context("with weeks starting in another month", function() {
    beforeEach(function() {
      var specialOptions;
      specialOptions = {
        year: 2012,
        month: 8,
        day: 30
      };
      return this.fiscalWeekModel = FiscalWeekModel.create(specialOptions);
    });
    it("has day of week", function() {
      var day, days, index, _i, _len, _results;
      days = _.map(["2012 9 30"], function(dayString) {
        var day, obj;
        day = new Date(dayString);
        return obj = {
          dayOfWeek: day.getDay()
        };
      });
      _results = [];
      for (index = _i = 0, _len = days.length; _i < _len; index = ++_i) {
        day = days[index];
        _results.push(expect(this.fiscalWeekModel.days[index].dayOfWeek).to.equal(day.dayOfWeek));
      }
      return _results;
    });
    return it("has correct days for week starting in another month", function() {
      var day, days, index, _i, _len, _results;
      days = _.map(["2012 9 30", "2012 10 1", "2012 10 2", "2012 10 3", "2012 10 4", "2012 10 5", "2012 10 6"], function(dayString) {
        var day, obj;
        day = new Date(dayString);
        return obj = {
          day: day.getDate(),
          date: day.toJSON()
        };
      });
      _results = [];
      for (index = _i = 0, _len = days.length; _i < _len; index = ++_i) {
        day = days[index];
        expect(this.fiscalWeekModel.days[index].day).to.equal(day.day);
        _results.push(expect(this.fiscalWeekModel.days[index].date).to.equal(day.date));
      }
      return _results;
    });
  });
  context("with weeks starting in another year", function() {
    beforeEach(function() {
      var specialOptions;
      specialOptions = {
        year: 2012,
        month: 11,
        day: 30
      };
      return this.fiscalWeekModel = FiscalWeekModel.create(specialOptions);
    });
    return it("has correct days for week starting in another month", function() {
      var day, days, index, _i, _len, _results;
      days = _.map(["2012 12 30", "2012 12 31", "2013 1 1", "2013 1 2", "2013 1 3", "2013 1 4", "2013 1 5"], function(dayString) {
        var day, obj;
        day = new Date(dayString);
        return obj = {
          day: day.getDate(),
          date: day.toJSON()
        };
      });
      _results = [];
      for (index = _i = 0, _len = days.length; _i < _len; index = ++_i) {
        day = days[index];
        expect(this.fiscalWeekModel.days[index].day).to.equal(day.day);
        _results.push(expect(this.fiscalWeekModel.days[index].date).to.equal(day.date));
      }
      return _results;
    });
  });
  return context("with leap years", function() {
    it("has correct week days for a normal year", function() {
      var day, days, index, specialOptions, _i, _len, _results;
      specialOptions = {
        year: 2013,
        month: 1,
        day: 24
      };
      this.fiscalWeekModel = FiscalWeekModel.create(specialOptions);
      days = _.map(["2013 2 24", "2013 2 25", "2013 2 26", "2013 2 27", "2013 2 28", "2013 3 1", "2013 3 2"], function(dayString) {
        var day, obj;
        day = new Date(dayString);
        return obj = {
          day: day.getDate(),
          date: day.toJSON()
        };
      });
      _results = [];
      for (index = _i = 0, _len = days.length; _i < _len; index = ++_i) {
        day = days[index];
        expect(this.fiscalWeekModel.days[index].day).to.equal(day.day);
        _results.push(expect(this.fiscalWeekModel.days[index].date).to.equal(day.date));
      }
      return _results;
    });
    return it("has correct week days for a leap year", function() {
      var day, days, index, specialOptions, _i, _len, _results;
      specialOptions = {
        year: 2012,
        month: 1,
        day: 26
      };
      this.fiscalWeekModel = FiscalWeekModel.create(specialOptions);
      days = _.map(["2012 2 26", "2012 2 27", "2012 2 28", "2012 2 29", "2012 3 1", "2012 3 2", "2012 3 3"], function(dayString) {
        var day, obj;
        day = new Date(dayString);
        return obj = {
          day: day.getDate(),
          date: day.toJSON()
        };
      });
      _results = [];
      for (index = _i = 0, _len = days.length; _i < _len; index = ++_i) {
        day = days[index];
        expect(this.fiscalWeekModel.days[index].day).to.equal(day.day);
        _results.push(expect(this.fiscalWeekModel.days[index].date).to.equal(day.date));
      }
      return _results;
    });
  });
});

});

window.require.register('test/views/fiscalCalendar', function(require, module) {
var FiscalCalendarModel, FiscalCalendarView, fiscalCalendarOptions;

FiscalCalendarView = require("views/FiscalCalendar");

FiscalCalendarModel = require("models/FiscalCalendar");

fiscalCalendarOptions = {
  year: 2012,
  month: 8,
  day: 30,
  format: "5-4-4"
};

describe("View FiscalCalendar", function() {
  beforeEach(function() {
    this.fiscalCalendarModel = FiscalCalendarModel.create(fiscalCalendarOptions);
    return this.fiscalCalendarView = FiscalCalendarView.create(this.fiscalCalendarModel);
  });
  afterEach(function() {
    this.fiscalCalendarView.dispose();
    this.fiscalCalendarModel.dispose();
    expect($(".fiscal-calendar").length).to.equal(0);
    expect(FiscalCalendarView.getUsedLength()).to.equal(0);
    return expect(FiscalCalendarModel.getUsedLength()).to.equal(0);
  });
  it("has a model", function() {
    return expect(this.fiscalCalendarView.model).to.equal(this.fiscalCalendarModel);
  });
  it("can render", function() {
    var _this = this;
    return expect(function() {
      return _this.fiscalCalendarView.render();
    }).to.not["throw"]();
  });
  it("returns a jQuery object on render", function() {
    return expect(this.fiscalCalendarView.render().length).to.equal(1);
  });
  it("attaches a div for every quarter", function() {
    var $el;
    $el = this.fiscalCalendarView.render();
    return expect($el.find(".fiscal-calendar-quarter").length).to.equal(4);
  });
  return it("removes itself from the dom", function() {
    return $("body").append(this.fiscalCalendarView.render());
  });
});

});
