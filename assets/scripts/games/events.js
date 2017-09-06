'use strict'
const gamesApi = require('./api')
const gamesUi = require('./ui')
const store = require('../store')

const onCreateGame = function () {
  gamesApi.create()
    .then(gamesUi.onCreateSuccess)
    .catch(gamesUi.onError)
}

const getGames = function () {
  gamesApi.index()
    .then(gamesUi.getGamesSuccess)
    .catch(gamesUi.onError)
}
const getOneGame = function (id) {
  gamesApi.show(id)
    .then(gamesUi.getOneGameSuccess)
    .catch(gamesUi.onError)
}

const onUpdateGame = function (i, value, over) {
  gamesApi.update(i, value, over)
    .then(gamesUi.onUpdateSuccess)
    .catch(gamesUi.onError)
}

const addHandlers = function () {
  $('.btn-play').on('click', () => {
    onCreateGame()
  })
}

exports.onCreateGame = onCreateGame
exports.onUpdateGame = onUpdateGame
exports.getOneGame = getOneGame
exports.getGames = getGames
exports.addHandlers = addHandlers
