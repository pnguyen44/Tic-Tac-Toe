'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const store = require('./store')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

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
        $('button').html('Winner is ' + player + '! Play again.')
        return true
      } else if (clickCount === 9) {
        console.log('There is a tie.')
        $('button').html('There is a tie, play again')
        return false
      }
    }
  }
}

const clearBoard = function () {
  // if (clickCount === 10) {
  $('.box').text('')
  // }
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
  clearBoard()
  board = ['', '', '', '', '', '', '', '', '']
  $(this).html('Play New Game')
}

$(() => {
  $('button').on('click', resetGame)

  $('.box').on('click', function () {
    // event.preventDefault()
    if (store.status === 'active') {
      playGame($(this))
    }
  })
})
