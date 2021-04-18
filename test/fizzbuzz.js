// index.js

var expect    = require("chai").expect;
var express = require('express');
var request = require("request");


describe('Take Home Assignment', function() {
  var url = "http://localhost:3000/fizzbuzz/"

  it("returns status 200", function() {
      request(url+"1", function(error, response, body) {
        expect(response.statusCode).to.equal(200)
        done()
      })

    })

   it("returns the number in case not divisible by 3 or 5",  function() {
       request(url+"1", function(error, response, body) {
         expect(response.body).to.equal('1')
         done()
       })
       request(url+"4", function(error, response, body) {
         expect(response.body).to.equal('4')
         done()
       })
       request(url+"44444", function(error, response, body) {
         expect(response.body).to.equal('44444')
         done()
       })

     })

     it("returns the Fizz in case divisible by 3",  function() {
         request(url+"3", function(error, response, body) {
           expect(body).to.equal("Fizz")
           done()
         })
         request(url+"9", function(error, response, body) {
           expect(body).to.equal("Fizz")
           done()
         })
         request(url+"33333", function(error, response, body) {
           expect(response.body).to.equal("Fizz")
           done()
         })

       })

       it("returns the Buzz in case divisible by 5",  function() {
           request(url+"5", function(error, response, body) {
             expect(body).to.equal("Buzz")
             done()
           })
           request(url+"10", function(error, response, body) {
             expect(body).to.equal("Buzz")
             done()
           })
           request(url+"55555", function(error, response, body) {
             expect(response.body).to.equal("Buzz")
             done()
           })

         })

         it("returns the FizzBuzz in case divisible by 3 and 5",  function() {
             request(url+"15", function(error, response, body) {
               expect(body).to.equal("FizzBuzz")
               done()
             })
             request(url+"30", function(error, response, body) {
               expect(body).to.equal("FizzBuzz")
               done()
             })
             request(url+"600", function(error, response, body) {
               expect(response.body).to.equal("FizzBuzz")
               done()
             })

           })

           it("returns the status 400 in case of illegal input",  function() {
             request(url+"123456", function(error, response, body) {
               expect(response.statusCode).to.equal(400)
               done()
             })

             request(url+"hello", function(error, response, body) {
               expect(response.statusCode).to.equal(400)
               done()
             })

             request(url+"0", function(error, response, body) {
               expect(response.statusCode).to.equal(400)
               done()
             })

             })
})
