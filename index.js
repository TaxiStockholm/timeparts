var moment = require('moment')

module.exports = {
  getTimeParts: function () {
    var time = moment(new Date())
    return {
      time: time.format(),
      hour: time.format('HH'),
      weekday: time.format('dddd'),
      timeofday: time.hour() < 4 && 'night' || time.hour() < 10 && 'morning' || time.hour() < 14 && 'day' || time.hour() < 18 && 'afternoon' || 'evening',
      week: time.isoWeek(),
      dayofmonth: time.format('DD'),
      weekdayandhour: time.format('EHH'),
      dayType: time.format('d') > 5 ? 'weekend' : 'weekday'
    }
  }
}
