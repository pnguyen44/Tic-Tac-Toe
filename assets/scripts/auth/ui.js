'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed Up')
  $('#message').text('Successfully signed up')
}
const signUpFailure = function (error) {
  console.log(error)
  console.log('Error On Sign-Up')
  $('#message').text('Error on sign up')
}
const signInSuccess = function (data) {
  console.log(data)
  console.log('Successfully Signed In')
  $('#message').text('Successfully signed in')
  store.user = data.user
}
const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  console.log('Successfully changed password')
  $('#message').text('Successfully change password')
}

const changePasswordFailure = (error) => {
  console.log(error)
  console.log('error on change password')
  $('#message').text('Error on change password')
}
const signOutSuccess = function (data) {
  console.log('successfully sign out')
  $('#message').text('Successfully signed out')
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
  console.log('error on sign out')
  $('#message').text('Error on sign out')
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
