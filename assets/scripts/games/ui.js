'use strict'
const store = require('../store')
const game = require('../game')
const gamesEvents = require('./events')
const onSuccess = function (data) {
}
const onError = function () {
}
const onCreateSuccess = function (data) {
  store.game = data.game
  $('.game-message').html("X's turn")
}

const getGamesSuccess = function (data) {
  store.games = data.games
  game.getPlayerStats()
  if (store.isNewUser === true) {
    gamesEvents.onCreateGame()
  } else {
    game.getLastGame()
  }
}

const getOneGameSuccess = function (data) {
  store.game = data.game
  if (store.game.over === false) {
    game.displayLastGame()
  } else {
    gamesEvents.onCreateGame()
  }
}

const onUpdateSuccess = function (data) {
  store.game = data.game
}

module.exports = {
  onCreateSuccess,
  onError,
  onUpdateSuccess,
  onSuccess,
  getOneGameSuccess,
  getGamesSuccess
}
