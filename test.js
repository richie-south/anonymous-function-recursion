'use strict'

const chai = require('chai')
const expect = require('chai').expect
const laiva = require('./app')

describe('laiva', () => {

  it('count to 10', (done) => {
    const expectedResult = 10
    const expectedIterations = 5
    const [result, i] = laiva(a => a >= expectedResult, a => a+2, 0)
    
    expect(result).to.equal(expectedResult)
    expect(i).to.equal(expectedIterations)
    done()
  })

})