// index.js

var expect    = require("chai").expect;
var express = require('express');
var request = require("request");


describe('Take Home Assignment', function() {
  var url = "http://localhost:3000/fizzbuzz/"

  it("returns status 200", function() {
      request(url+"1", function(error, response, body) {
        expect(response.statusCode).to.equal(200)

      })

    })

   it("returns the number in case not divisible by 3 or 5",  function() {
       request(url+"1", function(error, response, body) {
         expect(response.body).to.equal('1')

       })
       request(url+"4", function(error, response, body) {
         expect(response.body).to.equal('4')

       })
       request(url+"44444", function(error, response, body) {
         expect(response.body).to.equal('44444')

       })

     })

     it("returns Fizz in case divisible by 3",  function() {
         request(url+"3", function(error, response, body) {
           expect(body).to.equal("Fizz")

         })
         request(url+"9", function(error, response, body) {
           expect(body).to.equal("Fizz")

         })
         request(url+"33333", function(error, response, body) {
           expect(response.body).to.equal("Fizz")

         })

       })

       it("returns Buzz in case divisible by 5",  function() {
           request(url+"5", function(error, response, body) {
             expect(body).to.equal("Buzz")

           })
           request(url+"10", function(error, response, body) {
             expect(body).to.equal("Buzz")

           })
           request(url+"55555", function(error, response, body) {
             expect(response.body).to.equal("Buzz")

           })

         })

         it("returns FizzBuzz in case divisible by 3 and 5",  function() {
             request(url+"15", function(error, response, body) {
               expect(body).to.equal("FizzBuzz")

             })
             request(url+"30", function(error, response, body) {
               expect(body).to.equal("FizzBuzz")

             })
             request(url+"600", function(error, response, body) {
               expect(response.body).to.equal("FizzBuzz")

             })

           })

           it("returns status 400 in case of illegal input",  function() {
             request(url+"123456", function(error, response, body) {
               expect(response.statusCode).to.equal(400)

             })

             request(url+"hello", function(error, response, body) {
               expect(response.statusCode).to.equal(400)

             })

             request(url+"0", function(error, response, body) {
               expect(response.statusCode).to.equal(400)

             })

             })
})
