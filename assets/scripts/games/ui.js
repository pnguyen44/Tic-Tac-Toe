'use strict'
const store = require('../store')
const game = require('../game')
const gamesEvents = require('./events')
const onSuccess = function (data) {
  console.log('on sucess data ', data)
}
const onError = function (err) {
  console.log(err)
  // console.log('Error on creating game')
}
const onCreateSuccess = function (data) {
  console.log('onCreateSuccess = data', data)
  store.game = data.game
  $('.game-message').html("X's turn")
  // store.games.push(store.game)
  console.log('onCreateSuccesss store.game =', store.game)
  console.log('onCreateSuccesss store.games =', store.games)
}

const getGamesSuccess = function (data) {
  store.games = data.games
  console.log('on getGamesSuccess store.games =', store.games)
  // store.lastGameID = store.games[ store.games.length - 1 ].id
  // console.log('last game id =', store.lastGameID)
  game.getPlayerStats()
  // console.log('store.games[ store.games.length - 1 ].over =', store.games[ store.games.length - 1 ].over)
  console.log('isNewUser =', store.isNewUser)
  if (store.isNewUser === true) {
    gamesEvents.onCreateGame()
  } else {
    game.getLastGame()
  }
}

const getOneGameSuccess = function (data) {
  store.game = data.game
  console.log('getOneGameSuccess store.game =', store.game)
  // game.getLastGame()
  if (store.game.over === false) {
    game.displayLastGame()
  } else {
    gamesEvents.onCreateGame()
  }
}

const onUpdateSuccess = function (data) {
  store.game = data.game
  console.log('onUpdateSuccess store.game =', store.game)
  // console.log('onUpdateSuccess store.games =', store.games)
}

module.exports = {
  onCreateSuccess,
  onError,
  onUpdateSuccess,
  onSuccess,
  getOneGameSuccess,
  getGamesSuccess
}
