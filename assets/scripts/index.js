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

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  store.isSignedIn = false
  // if (store.isSignedIn === true) {
  $('.box').on('click', function () {
    console.log('store.over =', store.over)
    // console.log(updat  eScore('x'))
    if (store.isSignedIn === true) {
      game.playGame($(this))
    // } else {
    //   $('.box').off()
    }
  })
  authEvents.addHandlers()
  // }
  $('.btn-play').on('click', () => {
    if (store.isSignedIn === true) {
      game.resetGame()
    }
  })
  gameEvents.addHandlers()
  $('#btn-account').on('click', function () {
    $('#message-form').text('')
    console.log('is sign in = ', store.isSignedIn)
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
