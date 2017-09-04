const gamesApi = require('./api')
const gamesUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('created games')
  const data = getFormFields(this)
  // const game = data.game
  // console.log(game)
  gamesApi.create(data)
    .then(gamesUi.onCreateSuccess)
    .catch(gamesUi.onError)
}
const getGames = function () {
  gamesApi.index()
    .then(gamesUi.getGamesSuccess)
    .catch(gamesUi.onError)
}
const getGame = function (id) {
  gamesApi.show(id)
    .then(gamesUi.getGameSuccess)
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
  $('.btn-play').on('click', onCreateGame)
  $('#view-history').on('click', getGames)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  getGames,
  getGame,
  addHandlers
}
