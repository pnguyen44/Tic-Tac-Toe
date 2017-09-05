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
  console.log('onCreateSuccess =', data)
  store.game = data.game
  console.log(store.game)
}

const getGamesSuccess = function (data) {
  store.games = data.games
  console.log('on getGamesSuccess store.games =', store.games)
  // store.lastGameID = store.games[ store.games.length - 1 ].id
  // console.log('last game id =', store.lastGameID)
  game.getPlayerStats()
  // console.log('store.games[ store.games.length - 1 ].over =', store.games[ store.games.length - 1 ].over)
  console.log('isNewUser =', store.isNewUser)
  // if (store.isNewUser === true) {
  gamesEvents.onCreateGame()
  // } else {
  //   game.getLastGame()
  // }
}

const getOneGameSuccess = function (data) {
  store.game = data.game
  console.log('getOneGameSuccess store.game =', store.game)
  game.getLastGame()
}

const onUpdateSuccess = function (data) {
  store.game = data.game
  console.log(data)
  console.log(store)
}

module.exports = {
  onCreateSuccess,
  onError,
  onUpdateSuccess,
  onSuccess,
  getOneGameSuccess,
  getGamesSuccess
}
