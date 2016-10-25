/* eslint-env mocha */

var expect = require('chai').expect
var sinonChai = require('sinon-chai')
var extractTimeParts = require(process.cwd() + '/index')

require('sinon-as-promised')
require('chai').use(sinonChai)

describe('extractTimeParts', function () {
  var time

  it('should extract hour part', function () {
    time = extractTimeParts(new Date('2015-12-04 15:00'))
    expect(time).to.have.property('hour')
    expect(time.hour).to.eql('15')
    expect(time.weekday).to.eql('Friday')
    expect(time.weekdayandhour).to.eql('515')
  })

  it('should extract day, morning, evening etc', function () {
    time = extractTimeParts(new Date('2015-12-04 15:00'))
    expect(time.timeofday).to.eql('afternoon')

    time = extractTimeParts(new Date('2015-12-04 11:00'))
    expect(time.timeofday).to.eql('day')

    time = extractTimeParts(new Date('2015-12-04 19:00'))
    expect(time.timeofday).to.eql('evening')

    time = extractTimeParts(new Date('2015-12-04 00:15'))
    expect(time.timeofday).to.eql('night')

  })

  it('should exctract weekend, weekday', function () {
    time = extractTimeParts(new Date('2015-12-04 15:00'))
    expect(time.dayType).to.eql('weekday')

    time = extractTimeParts(new Date('2015-12-05 15:00'))
    expect(time.dayType).to.eql('weekend')
  })

  xit('should handle null', function () {
    time = extractTimeParts(null)
    expect(time.dayType).to.not.eql('weekday')
  })

})
