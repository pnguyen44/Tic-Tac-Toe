'use strict'
const store = require('../store')
const gamesEvents = require('../games/events')
const game = require('../game')

const signUpSuccess = function (data) {
  store.user = data.user
  store.token = data.user.token
  store.isNewUser = true
  // $('#message-form').html('Successfully signed up. Please log in!')
}
const signUpFailure = function () {
  $('#message-form').html('Error on sign up')
  clearForm()
}
const signInSuccess = function (data) {
  store.user = data.user
  store.token = data.user.token
  store.isSignedIn = true
  clearForm()
  gamesEvents.getGames()
  game.resetGame()
  $('#account').modal('hide')
  $('.btn-play').show()
  // $('.header-message').html('Welcome to the game')
}
const signInFailure = function () {
  $('#message-form').html('Error on sign in')
  clearForm()
}

const changePasswordSuccess = (data) => {
  clearForm()
  $('#sign-out').show()
  $('#message-form').html('Successfully changed password')
  $('#account').modal('hide')
}

const changePasswordFailure = () => {
  $('#message-form').text('Error on change password')
  clearForm()
}
const signOutSuccess = function (data) {
  store.user = null
  game.clearBoard()
  game.resetAll()
  store.isSignedIn = false
  $('#message-form').html('Successfully signed out')
  $('#account').modal('hide')
  // $('.header-message').html('Please log in to play')
  $('.btn-play').hide()
  $('.game-message').html('Please Log In')
}

const signOutFailure = function () {
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
