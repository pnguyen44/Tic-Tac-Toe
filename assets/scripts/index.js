'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('./store')
const authEvents = require('./auth/events')
const game = require('./game')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.btn-play').on('click', game.resetGame)

  $('.box').on('click', function () {
    // console.log(updateScore('x'))
    if (store.status === 'active') {
      game.playGame($(this))
    }
  })

  // $('#sign-up').on('submit', authEvents.onSignUp)
  authEvents.addHandlers()
})
