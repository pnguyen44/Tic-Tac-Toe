const gamesApi = require('./games/api')
const gamesUi = require('./games/ui')
const gamesEvents = require('./games/events')
const store = require('./store')
let cells = ['', '', '', '', '', '', '', '', '']
// store.over = false

const isEmpty = function (element) {
  const len = element.html().length
  // console.log('length ', len)
  if (len <= 0) {
    return true
  } else {
    return false
  }
}
let clickCount = store.clickCount

// add response if empty and add to cells
const playGame = function (element) {
  console.log('element', element)
  const player = clickCount % 2 === 0 ? 'x' : 'o'
  // clickCount = countClicks()
  store.value = player
  const empty = isEmpty(element)
  if (store.over === false) {
    if (empty) {
      clickCount += 1
      console.log('click count', clickCount)
      cells[element.attr('id')] = player
      element.html(player)
      console.log(element.attr('id'))
      gamesEvents.onUpdateGame(element.attr('id'), player, store.over)
      // .then(gamesUi.onUpdateSuccess)
      // .catch(gamesUi.onError)
      console.log(gamesApi.update(element.attr('id'), player, false))

      const isWinner = checkForWinner(cells, player)
      console.log('isWinner ' + isWinner)
      if (isWinner) {
        console.log('Winner ' + player)
        // clickCount = 0
        $('.btn-play').html('Winner is ' + player + '! Play again.')
        // $('.btn-play').off('click', '**')
        updateScore(player)
        store.over = true
        // return true
      } else if (clickCount === 9) {
        console.log('There is a tie.')
        $('.btn-play').html('There is a tie, play again')
        store.over = true
        return false
      }
    }
  }
}

const updateScore = function (player) {
  const element = '#player_' + player + '_score'
  // console.log($(element))
  let score = parseInt($(element).html())
  if (score === 'NAN') {
    score = 0
  }
  // score += 1
  console.log(score)
  $(element).html((score + 1))
  // console.log($('element').html(score + 1))
}

const checkForWinner = function (cells, player) {
  const val = player
  // const winner = val
  if (((cells[0] === val) && (cells[1] === val) && (cells[2] === val)) ||
    ((cells[3] === val) && (cells[4] === val) && (cells[5] === val)) ||
    ((cells[6] === val) && (cells[7] === val) && (cells[8] === val)) ||
    ((cells[0] === val) && (cells[3] === val) && (cells[6] === val)) ||
    ((cells[1] === val) && (cells[4] === val) && (cells[7] === val)) ||
    ((cells[2] === val) && (cells[5] === val) && (cells[8] === val)) ||
    ((cells[0] === val) && (cells[4] === val) && (cells[8] === val)) ||
    ((cells[2] === val) && (cells[4] === val) && (cells[6] === val))) {
    return true
  } else {
    return false
  }
}

const resetGame = function () {
  clickCount = 0
  store.over = false
  $('.box').text('')
  cells = ['', '', '', '', '', '', '', '', '']
  $(this).html('Play New Game')
  console.log('store.over', store.over)
  // store.game = gameApi.create
}

module.exports = {
  isEmpty,
  playGame,
  updateScore,
  resetGame
}
