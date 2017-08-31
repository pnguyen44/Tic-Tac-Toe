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
  const player = clickCount % 2 === 0 ? 'o' : 'x'
  // clickCount = countClicks()
  console.log('click count', clickCount)
  board[element.attr('id')] = player
  element.html(player)
  const isWinner = checkForWinner(board, player)

  console.log(isWinner)
  if (isWinner) {
    console.log('Winner ' + player)
    // clickCount = 0
    // $('button').html('Winner is ' + player + '! Play again.')
    return true
  } else if (clickCount === 9) {
    console.log('There is a tie.')
    // $('button').html('There is a tie, play again')
    return false
  }

  return isWinner
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

$(() => {
  $('button').on('click', function (event) {
    // event.preventDefault()
    clickCount = 0
    store.status = 'active'
    clearBoard()
    $(this).html('Play New Game')
    board = ['', '', '', '', '', '', '', '', '']
  })
  $('.box').on('click', function (event) {
    event.preventDefault()
    if (store.status === 'active') {
    // console.log('isEmpty', isEmpty($(this)))
      if (isEmpty($(this))) {
        clickCount += 1
        playGame($(this))
        console.log('playGame ', playGame($(this)))
        if (playGame($(this))) {
          store.winner = $(this).html()
          $('button').html('Winner is ' + store.winner + '!  Play again.')
          console.log('store winner ', store.winner)
        //   store.status = 'inactive'
        //   // store.clickCount = 0
        //   console.log(playGame($(this)))
        } else if (clickCount === 9 && !playGame($(this))) {
        //   clickCount = 0
          $('button').html('There is a tie, play again.')
        //   // $('.players').toogle()
        //   store.status = 'inactive'
        // }
        }
      }
    }
  })
})
