'use strict'
// const gamesApi = require('./games/api')
// const gamesUi = require('./games/ui')
const gamesEvents = require('./games/events')
const store = require('./store')

// gamesEvents.test()
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

// add response if empty and add to cells
const playGame = function (element) {
  console.log('element', element)
  const player = store.clickCount % 2 === 0 ? 'x' : 'o'
  // store.clickCount = countClicks()
  store.value = player
  const empty = isEmpty(element)
  if (store.over === false) {
    if (empty) {
      store.clickCount += 1
      console.log('click count', store.clickCount)
      cells[element.attr('id')] = player
      element.html(player)

      const isWinner = checkForWinner(cells, player)
      // console.log('isWinner ' + isWinner)
      if (isWinner) {
        console.log('Winner ' + player)
        // store.clickCount = 0
        $('.game-message').html('Winner is ' + player + '!')
        // $('.btn-play').off('click', '**')
        updateScore(player)
        store.over = true
        // return true
      } else if (store.clickCount === 9) {
        console.log('There is a tie.')
        $('.game-message').html("It's a tie!")
        store.over = true
        return false
      }
      gamesEvents.onUpdateGame(element.attr('id'), player, store.over)
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
  // console.log(score)
  $(element).html((score + 1))
  // console.log($('element').html(score + 1)
  if (player === 'x') {
    $('#games-won').html(store.gamesWon += 1)
  }
  console.log('games = ', store.games)
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

const clearBoard = () => { $('.box').text('') }

const resetGame = function () {
  // if (store.isSignedIn === true) {
  $('.box').text('')
  // }
  console.log('box empty =', $('.box').text())
  // if ($('.box').text() !== '') {
  if (store.clickCount >= 1) {
    addGamesPlayed()
  }
  store.clickCount = 0
  store.over = false
  $('.game-message').html('')
  cells = ['', '', '', '', '', '', '', '', '']
  $(this).html('clear Game')
  console.log('store.over', store.over)
}

// const games = [{"id":5526,"cells":["x","o","","","x","o","","","x"],"over":false,"player_x":{"id":627,"email":"onn"},"player_o":null},{"id":5525,"cells":["x","","","x","o","","x","o",""],"over":false,"player_x":{"id":627,"email":"onn"},"player_o":null},{"id":5528,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":627,"email":"onn"},"player_o":null},{"id":5529,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":627,"email":"onn"},"player_o":null}]

// const getLastGame = function () {
//   // gamesEvents.getGames()
//   console.log('store.game', store.games)
//   const totalGames = store.games.length
//   console.log('total games', totalGames)
//   console.log('store.game = ', store.games)
//   const lastGame = gamesEvents.getOneGame(store.games[totalGames - 1].id)
//   // $('#games-played').html(totalGames)
//   consle.log('lastGame =', lastGame)
// }

const getPlayerStats = function () {
  // gamesEvents.getGames()
  // console.log('store.games results = ', store.game)
  // console.log(store.games)
  const overTrue = store.games.filter((obj) => {
    return obj.over === true
  })
  const gamesWonArr = overTrue.filter(function (obj) {
    return checkForWinner(obj.cells, 'x')
  })

  // const numGamesWon = gamesWonArr.length
  $('#games-won').html(gamesWonArr.length)
  store.gamesWon = gamesWonArr.length
  // const totalGames = store.games.length
  // gamesEvents.getOneGame(store.games[totalGames - 1].id)
  const totalGames = Math.abs(getNumOfBlankGames() - store.games.length)
  $('#games-played').html(totalGames)
  store.gamesPlayed = totalGames
}
const getLastGame = function () {
  console.log('store.games[store.games.length - 1].over =', store.games[store.games.length - 1].over)
  if (store.games[store.games.length - 1].over === false) {
    store.lastGameID = store.games[store.games.length - 1].id
    console.log('last id =', store.lastGameID)
    gamesEvents.getOneGame(store.lastGameID)
  } else {
    gamesEvents.onCreateGame()
  }
}

const displayLastGame = function () {
  // if (store.game.over === false) {
  const cells = store.game.cells
  console.log('cells =', cells)
  const isBlank = checkIfBoardIsBlank(cells)
  console.log('isBlank =', isBlank)
  // if (isBlank) {
  //   // store.click = 0
  //   // gamesEvents.onCreateGame()
  // } else {
  console.log('cells =', cells)
  // $('#0').html(cells[0])
  for (let c = 0; c < cells.length; c++) {
    const element = '#' + c
    // let val = String(cells[c])
    // console.log('element=', element)
    // console.log('cellval =', cells[c])
    $(element).html(cells[c])
    // console.log("$('element').html()=", $('element').html())
  }
  const board = $('.box').text()
  console.log('board =', board)
  console.log('board.length =', board.length)
  store.clickCount = board.length
  // cells.forEach(function (c) {
  //   let element = '#' + 'c'
  //   console.log('element=', element)
  //   $('element').html(cells[c])
  //   console.log("'$('element').html(cells[c])=", $('element').html(cells[c]))
  // })
  // }
}

// store.games = [{"id":5866,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":664,"email":"t3"},"player_o":null},{"id":5867,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":664,"email":"t3"},"player_o":null},{"id":5865,"cells":["x","","","o","x","","","o","x"],"over":true,"player_x":{"id":664,"email":"t3"},"player_o":null},{"id":5868,"cells":["x","o","x","o","o","x","x","x","o"],"over":true,"player_x":{"id":664,"email":"t3"},"player_o":null},{"id":5869,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":664,"email":"t3"},"player_o":null},{"id":5870,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":664,"email":"t3"},"player_o":null}]

const getNumOfBlankGames = function () {
  const blank = (x) => {
    return x === ''
  }
  const blankGames = store.games.filter(function (obj) {
    return obj.cells.every(blank)
  })
  // console.log(blankGames)
  return blankGames.length
}

const checkIfBoardIsBlank = function (board) {
  const blank = (x) => {
    return x === ''
  }
  // const blankGames = board.filter(function (obj) {
  return board.every(blank)
  // })
  // console.log('blankGames =', blankGames)
  // if (blankGames.length > 0) {
  //   return false
  // } else {
  //   return true
  // }
}

const addGamesPlayed = () => {
  $('#games-played').html(store.gamesPlayed += 1)
}

// const updatePlayerStas = function () {
//   const gamesPlayed = $('#games-played').html()
//   const gamesWon = $('#games-won').html()
// }

const resetAll = () => {
  $('.box').text('')
  $('#player_x_score').html('0')
  $('#player_o_score').html('0')
  $('#games-played').html('-')
  $('#games-won').html('-')
  $('.game-message').html('')
}

// $('.test').on('click', gamesEvents.onUpdateGame())
// store.games = [{"id":5526,"cells":["x","o","","","x","o","","","x"],"over":true,"player_x":{"id":627,"email":"onn"},"player_o":null},
// {"id":5525,"cells":["x","","","x","o","","x","o",""],"over":true,"player_x":{"id":627,"email":"onn"},"player_o":null},
// {"id":5528,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":627,"email":"onn"},"player_o":null},
// {"id":5529,"cells":["","","","","","","","",""],"over":false,"player_x":{"id":627,"email":"onn"},"player_o":null}]
// console.log(store.games)
// const overTrue = store.games.filter((obj) => {
//   // console.log(obj.over)
//   return obj.over === true
// })
// const gamesWonArr = overTrue.filter(function (obj) {
// return checkForWinner(obj.cells, 'x')
// })
// const numGamesWon = gamesWonArr.length
//
// console.log(overTrue)

module.exports = {
  isEmpty,
  playGame,
  updateScore,
  getPlayerStats,
  resetGame,
  getLastGame,
  clearBoard,
  resetAll,
  displayLastGame
}
