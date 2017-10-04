'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('./store')
const authEvents = require('./auth/events')
const game = require('./game')
const gameEvents = require('./games/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  store.isSignedIn = false
  if (store.isSignedIn === false) {
    $('.btn-play').hide()
  } else {
    $('.btn-play').show()
  }
  $('.box').on('click', function () {
    if (store.isSignedIn === true) {
      game.playGame($(this))
    }
  })
  authEvents.addHandlers()
  $('.btn-play').on('click', () => {
    if (store.isSignedIn === true) {
      game.resetGame()
    }
  })
  gameEvents.addHandlers()
  $('#btn-account').on('click', function () {
    $('#message-form').text('')
    if (store.isSignedIn === true) {
      $('#change-password').show()
      $('#view-history').hide()
      $('#btn-sign-out').show()
      $('#sign-up').hide()
      $('#sign-in').hide()
    } else {
      $('#sign-up').show()
      $('#sign-in').show()
      $('#btn-sign-out').show()
      $('#change-password').hide()
      $('#view-history').hide()
      $('#btn-sign-out').hide()
    }
  })
})
