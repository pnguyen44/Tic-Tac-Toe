const gameApi = require('./games/api')
const store = require('./store')
let cells = ['', '', '', '', '', '', '', '', '']
store.over = true
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
  const player = clickCount % 2 === 0 ? 'x' : 'o'
  // clickCount = countClicks()
  const empty = isEmpty(element)
  if (store.over === 'active') {
    if (empty) {
      clickCount += 1
      console.log('click count', clickCount)
      cells[element.attr('id')] = player
      element.html(player)
      const isWinner = checkForWinner(cells, player)
      console.log('isWinner ' + isWinner)
      if (isWinner) {
        console.log('Winner ' + player)
        // clickCount = 0
        $('.btn-play').html('Winner is ' + player + '! Play again.')
        // $('.btn-play').off('click', '**')
        updateScore(player)
        store.over = false
        // return true
      } else if (clickCount === 9) {
        console.log('There is a tie.')
        $('.btn-play').html('There is a tie, play again')
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
  store.over = 'active'
  $('.box').text('')
  cells = ['', '', '', '', '', '', '', '', '']
  $(this).html('Play New Game')
  // store.game = gameApi.create
}

module.exports = {
  isEmpty,
  playGame,
  updateScore,
  resetGame
}
