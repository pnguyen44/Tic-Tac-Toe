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
  $('.btn-play').on('click', game.resetGame)

  $('.box').on('click', function () {
    console.log('store.over =', store.over)
    // console.log(updat  eScore('x'))
    if (store.over === false) {
      game.playGame($(this))
    }
  })
  authEvents.addHandlers()
  gameEvents.addHandlers()
  $('#btn-account').on('click', function () {
    $('#message-form').text('')
    $('#sign-up').show()
    if (store.isSignedIn === false) {
      $('#change-password').hide()
      $('#view-history').hide()
      $('#btn-sign-out').hide()
    } else {
      $('#sign-up').show()
    }
  })
})
