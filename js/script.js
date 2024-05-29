// Created by: Clara Tyman
// Created on: May 2024
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-05-JS/sw.js", {
    scope: "/ICS2O-Assignment-05-JS/",
  })
}

/**
 * This function calculates π
 */
function calculate() {
  // input
  var userInput = document.getElementById("user-input").value

  // process
  const NUMERATOR = 4
  let counter = 0
  var answer = 0
  var denominator = 1
  var userInputInt = parseInt(userInput)

  if (userInputInt < 0) {
    document.getElementById("answer").innerHTML = "Please input a positive whole number!"
  } else {
    while (counter < userInputInt) {
      if (counter % 2 == 0) {
        denominator = counter * 2 + 1
        answer += NUMERATOR / denominator
      } else {
        denominator = counter * 2 + 1
        answer += - (NUMERATOR / denominator)
      }
    counter++
    }

    // output
    document.getElementById("answer").innerHTML = "The value of π is " + (answer)
  }
}