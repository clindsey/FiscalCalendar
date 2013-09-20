Handlebars.registerHelper "monthTitle", (weeks) ->
  # get the most occurring value
  monthIndex = +_.chain(weeks).pluck('month').countBy().pairs().max(_.last).head()
  ("January February March April May June July August September October November December").match(/\w+/g)[monthIndex]

Handlebars.registerHelper "yearTitle", (quarters) ->
  years = []

  for quarter in quarters
    for month in quarter.months
      years = years.concat _.pluck month.weeks, 'year'

  +_.chain(years).countBy().pairs().max(_.last).head()
