const store = require('./store')
let board = store.cells

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

// add response if empty and add to board
const playGame = function (element) {
  const player = clickCount % 2 === 0 ? 'x' : 'o'
  // clickCount = countClicks()
  const empty = isEmpty(element)
  if (store.status === 'active') {
    if (empty) {
      clickCount += 1
      console.log('click count', clickCount)
      board[element.attr('id')] = player
      element.html(player)
      const isWinner = checkForWinner(board, player)
      console.log('isWinner ' + isWinner)
      if (isWinner) {
        console.log('Winner ' + player)
        // clickCount = 0
        $('.btn-play').html('Winner is ' + player + '! Play again.')
        // $('.btn-play').off('click', '**')
        updateScore(player)
        store.status = 'inactive'
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
  let element = '#player_' + player + '_score'
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


const checkForWinner = function (board, player) {
  const val = player
  // const winner = val
  if (((board[0] === val) && (board[1] === val) && (board[2] === val)) ||
    ((board[3] === val) && (board[4] === val) && (board[5] === val)) ||
    ((board[6] === val) && (board[7] === val) && (board[8] === val)) ||
    ((board[0] === val) && (board[3] === val) && (board[6] === val)) ||
    ((board[1] === val) && (board[4] === val) && (board[7] === val)) ||
    ((board[2] === val) && (board[5] === val) && (board[8] === val)) ||
    ((board[0] === val) && (board[4] === val) && (board[8] === val)) ||
    ((board[2] === val) && (board[4] === val) && (board[6] === val))) {
    return true
  } else {
    return false
  }
}

const resetGame = function () {
  clickCount = 0
  store.status = 'active'
  $('.box').text('')
  board = ['', '', '', '', '', '', '', '', '']
  $(this).html('Play New Game')
}

module.exports = {
  isEmpty,
  playGame,
  updateScore,
  resetGame
}
