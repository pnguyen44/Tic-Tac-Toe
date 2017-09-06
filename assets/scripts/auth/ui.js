'use strict'
const store = require('../store')
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
// const authEvents = require('./events')
const gamesEvents = require('../games/events')
const game = require('../game')

const signUpSuccess = function (data) {
  console.log('onsign up success data = ', data)
  console.log('store.user', data.user)
  console.log('Successfully Signed Up')
  store.user = data.user
  store.token = data.user.token
  console.log('on signup token = ', store.token)
  // console.log('data.user', data.user)
  // api.signIn(store.credential)
  //   .then(function () { console.log('sign-in after sign-up') })
  //   .catch(function () { console.log('error on signin after signup') })
  // clearForm()
  // $('#sign-out').show()
  // $('#change-password').show()
  // store.isSignedIn = true
  store.isNewUser = true
  // api.signIn(data.user.id)
  $('#message-form').html('Successfully signed up. Please log in!')
}
const signUpFailure = function (error) {
  console.log(error)
  console.log('Error On Sign-Up')
  $('#message-form').html('Error on sign up')
  clearForm()
}
const signInSuccess = function (data) {
  console.log('Successfully Signed In')
  store.user = data.user
  store.token = data.user.token
  console.log('ons sign in store.token=', store.token)
  store.isSignedIn = true
  clearForm()
  gamesEvents.getGames()
  game.resetGame()
  // $('#message-form').html('Successfully signed in')
  console.log('signInSuccess store.isSignedIn =', store.isSignedIn)
  $('#account').modal('hide')
  $('.btn-play').show()
  $('.header-message').hide()
}
const signInFailure = function (error) {
  console.error(error)
  $('#message-form').html('Error on sign in')
  clearForm()
}

const changePasswordSuccess = (data) => {
  console.log(data)
  console.log('Successfully changed password')
  clearForm()
  $('#sign-out').show()
  $('#message-form').html('Successfully changed password')
  $('#account').modal('hide')
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
  game.clearBoard()
  game.resetAll()
  store.isSignedIn = false
  $('#message-form').html('Successfully signed out')
  $('#account').modal('hide')
}

const signOutFailure = function (error) {
  console.log(error)
  console.log('error on sign out')
  $('#message-form').text('Error on sign out')
  $('#sign-out').hide()
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
