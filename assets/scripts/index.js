'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const board = ['', '', '', '', '', '', '', '', '']

const isEmpty = function (element) {
  const len = element.html().length
  // console.log('length ', len)
  if (len <= 0) {
    return true
  } else {
    return false
  }
}
let clickCount = 0

const countClicks = function () {
  clickCount += 1
  return clickCount
}
const getPlayer = function () {
  return clickCount % 2 === 0 ? 'o' : 'x'
}

// add response if empty and add to board
const addResponse = function (element) {
  const player = clickCount % 2 === 0 ? 'o' : 'x'
  // clickCount = countClicks()
  console.log('click count', clickCount)
  board[element.attr('id')] = player
  element.html(player)
  let isWinner = checkForWinner(board, player)

  console.log(isWinner)
  if (isWinner) {
    console.log('Winner ' + player)
    // clickCount = 0
    return true
  } else if (clickCount === 9) {
    console.log('There is a tie.')
    return true
  }
//   console.log('board', board)
//   // checkForWinner(board, player)
}

const clearBoard = function () {
  if (clickCount === 10) {
    $('.box').text('')
  }
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
  clickCount = 0
  // console.log(clickCount)
  $('.box').on('click', function (event) {
    // console.log(clickCount)
    // event.stopPropagation()
    event.preventDefault()
    // console.log('isEmpty', isEmpty($(this)))
    if (isEmpty($(this))) {
      clickCount += 1
      addResponse($(this))
      console.log(addResponse($(this)))
      if (addResponse($(this))) {
        event.stopPropagation()
      }
      // let player = getPlayer
      // let isWinner = checkForWinner(board, player)
      // console.log('click count', clickCount)
      // console.log(isWinner)
      // if (isWinner) {
      //   console.log('Winner ' + player)
      // } else if (clickCount === 9) {
      //   console.log('There is a tie.')
      // }
    }
    // console.log('click count', clickCount)
    // clearBoard()
    // let isWinner
    // let player
    // for (let i = 0; i < board.length; i++) {
    //   player = board[i]
    //   console.log('player', player)
    //   console.log('board', board)
    //
    //   isWinner = checkForWinner(board, player)
    //   if (isWinner) {
    //     break
    //   } else {
    //     continue
    //   }
    // }
    // console.log(isWinner)
    // if (isWinner) {
    //   console.log('Winner is' + player)
    // } else {
    //   console.log('There is a tie')
    // }
  })
})
