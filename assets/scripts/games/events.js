const gamesApi = require('./api')
const gamesUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

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
const onIndex = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  gamesApi.index(data.game)
    .then(gamesApi.onIndexSuccess)
    .catch(gamesApi.onError)
}
// const onUpdateGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   gamesApi.update(data)
//     .then(gamesUi.onCreateSuccess)
//     .catch(gamesUi.onError)
// }
const onUpdateGame = function (i, value, over) {
  // event.preventDefault()
  // const data = getFormFields(this)
  gamesApi.update(i, value, over)
    .then(gamesUi.onUpdateSuccess)
    .catch(gamesUi.onError)
}

const addHandlers = function () {
  $('.btn-play').on('click', onCreateGame)
  $('#view-history').on('click', onIndex)
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  addHandlers
}
