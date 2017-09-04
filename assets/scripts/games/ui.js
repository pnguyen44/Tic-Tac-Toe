'use strict'
const store = require('../store')
const onSuccess = function (data) {
  console.log('on sucess data ', data)
}
const onError = function (err) {
  console.log(err)
  // console.log('Error on creating game')
}
const onCreateSuccess = function (data) {
  console.log(data)
  store.game = data.game
  console.log(store.game)
}

const getGamesSuccess = function (data) {
  store.games = data.games
  console.log('on getGamesSuccess store.games =', store.games)
}
const getGameSuccess = function (data) {
  store.game = data.game
  console.log('store.game =', store.game)
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
  getGamesSuccess,
  getGameSuccess
}
