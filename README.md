# timeparts

Convert a date time to an object containing more searchable properties 
such as day type (weekend, weekday) and time of day (afternoon, night, morning)

# weekdayhour
Included in the datepart object there is also a special field called weekdayhour which is a compound number consisting 
of the weekday number and hour, example: 111 is monday at 11am, 211 is tuesday at 11am, 
623 is saturday at 11pm


# how to install

    $ npm install timeparts --save

# how to use

    var timeparts = require('timeparts')
    var time = Date()
    var parts = timeparts(time)
    console.log(parts)
    /*  { 
          time: '2016-09-12T17:33:25+02:00',
          hour: '17',
          weekday: 'Monday',
          timeofday: 'afternoon',
          week: 37,
          dayofmonth: '12',
          weekdayandhour: '117',
          dayType: 'weekday' 
        }
    */