// Copyright (c) 2021 Ryan-Shaw-2 All rights reserved
//
// Created by: Ryan-Shaw-2
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function calculateClicked () {
  // this function calculates the users salary

  // input
  const hoursWorked = parseInt(document.getElementById("hours-worked").value)
  const hourlyRate = parseInt(document.getElementById("hourly-rate").value)

  // process
  const pay = (hoursWorked * hourlyRate) * (1.00 - 0.18)
  const tax = 0.18 * (hoursWorked * hourlyRate)

  // output
  document.getElementById("user-pay").innerHTML = 'Your pay will be: $' + pay.toFixed(2) + '.'
  document.getElementById("user-tax").innerHTML = "You will pay $" + tax.toFixed(2) + ' in taxes.'

}
