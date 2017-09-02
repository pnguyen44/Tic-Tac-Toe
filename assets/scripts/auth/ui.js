'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up')
  clearForm()
}
const signUpFailure = function (error) {
  console.log(error)
  console.log('Error On Sign-Up')
  $('#message-form').text('Error on sign up')
  clearForm()
}
const signInSuccess = function (data) {
  console.log('Successfully Signed In')
  store.user = data.user
  console.log(store.user)
  clearForm()
}
const signInFailure = function (error) {
  console.error(error)
  $('#message-form').text('Error on sign in')
  clearForm()
}

const changePasswordSuccess = (data) => {
  console.log(data)
  console.log('Successfully changed password')
  clearForm()
}

const changePasswordFailure = (error) => {
  console.log(error)
  console.log('error on change password')
  $('#message-form').text('Error on change password')
  clearForm()
}
const signOutSuccess = function (data) {
  console.log('successfully sign out')
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
  console.log('error on sign out')
  $('#message-form').text('Error on sign out')
}
const clearForm = function () {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
