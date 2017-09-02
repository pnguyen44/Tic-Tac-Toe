'use strict'
const store = require('../store')
const onSuccess = function (data) {
  console.log(data)
  console.log('success')
}
const onIndexSuccess = function (response) {
  console.log(response)
}

const onCreateSuccess = function (data) {
  console.log(data)
  store.game = data.game
  console.log(store.game)
}

const onError = function (response) {
  console.log(response)
  // console.log('Error on creating game')
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
  onIndexSuccess
}
