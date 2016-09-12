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

    var now = Date()
    timeparts.