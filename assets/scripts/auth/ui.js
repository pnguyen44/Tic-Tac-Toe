'use strict'
const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const authEvents = require('./events')
const gamesEvents = require('../games/events')
const game = require('../game')
const signUpSuccess = function (data) {
  console.log('data', data)
  console.log('store.user', data.user)
  console.log('Successfully Signed Up')
  store.user = data.user
  // console.log('data.user', data.user)
  // api.signIn(data)
  // api.signIn(store.user)
  clearForm()
  // api.signIn(data.user.id)
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
  store.token = data.user.token
  store.isSignedIn = true
  $('#change-password').show()
  $('#btn-sign-out').show()
  $('#view-history').show()
  $('#sign-up').hide()
  clearForm()
  gamesEvents.getGames()
  game.getPlayerStats()
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
