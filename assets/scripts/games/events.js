'use strict'
const gamesApi = require('./api')
const gamesUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onCreateGame = function () {
  // event.preventDefault()
  console.log('created games')
  // const data = getFormFields(this)
  // const game = data.game
  // console.log(game)
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
  // event.preventDefault()
  // const data = getFormFields(this)
  gamesApi.update(i, value, over)
    .then(gamesUi.onUpdateSuccess)
    .catch(gamesUi.onError)
}

const addHandlers = function () {
  // if (store.clickCount >= 1) {
  $('.btn-play').on('click', () => {
    console.log('click count', store.clickCount)
    // if (store.clickCount >= 1) {
      onCreateGame()
    // }
  })
  // }
  // $('.btn-play').on('click', onCreateGame)
  $('#view-history').on('click', getGames)
}

const test = () => {
  console.log('test----')
}

// module.exports = {
//   onCreateGame,
//   onUpdateGame,
//   getOneGame,
//   getGames,
//   addHandlers,
//   test
// }

exports.onCreateGame = onCreateGame
exports.onUpdateGame = onUpdateGame
exports.getOneGame = getOneGame
exports.getGames = getGames
exports.addHandlers = addHandlers
exports.test = test
