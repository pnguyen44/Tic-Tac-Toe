'use strict'
const gamesEvents = require('./games/events')
const store = require('./store')

const isEmpty = function (element) {
  const len = element.html().length
  if (len <= 0) {
    return true
  } else {
    return false
  }
}

const playGame = function (element) {
  const player = store.clickCount % 2 === 0 ? 'X' : 'O'
  if (store.clickCount === 0) {
    $('.game-message').html("X's turn")
  }
  store.value = player
  if (store.over === false) {
    if (isEmpty(element)) {
      store.clickCount += 1
      store.cells[element.attr('id')] = player
      element.html(player)
      store.clickCount % 2 === 0 ? $('.game-message').html("X's turn") : $('.game-message').html("O's turn")
      const isWinner = checkForWinner(store.cells, player)

      if (isWinner) {
        $('.game-message').html('Winner is ' + player + '!')
        updateScore(player)
        store.over = true
      } else if (store.clickCount === 9) {
        $('.game-message').html("It's a tie!")
        store.over = true
      }
      gamesEvents.onUpdateGame(element.attr('id'), player, store.over)
    }
  }
}

const updateScore = function (player) {
  const element = '#player_' + player.toLowerCase() + '_score'
  let score = parseInt($(element).html())
  if (score === 'NAN') {
    score = 0
  }

  $(element).html((score + 1))
  if (player === 'X') {
    $('#games-won').html(store.gamesWon += 1)
  }
}

const checkForWinner = function (cells, player) {
  const val = player
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
  $('.game-message').html("X's turn")
  $('.box').text('')

  if (store.clickCount >= 1) {
    addGamesPlayed()
  }
  store.clickCount = 0
  store.over = false
  $('.game-message').html('')
  store.cells = ['', '', '', '', '', '', '', '', '']
  $(this).html('clear Game')
}

const getPlayerStats = function () {
  const overTrue = store.games.filter((obj) => {
    return obj.over === true
  })
  const gamesWonArr = overTrue.filter(function (obj) {
    return checkForWinner(obj.cells, 'X')
  })

  $('#games-won').html(gamesWonArr.length)
  store.gamesWon = gamesWonArr.length
  const totalGames = Math.abs(getNumOfBlankGames() - store.games.length)
  $('#games-played').html(totalGames)
  store.gamesPlayed = totalGames
}
const getLastGame = function () {
  const lastGame = store.games.reduce(function (prev, curr) {
    return prev.id > curr.id ? prev : curr
  })
  store.lastGameID = lastGame.id
  gamesEvents.getOneGame(store.lastGameID)
}

const displayLastGame = function () {
  store.cells = store.game.cells
  const isBlank = checkIfBoardIsBlank(store.cells)
  for (let c = 0; c < store.cells.length; c++) {
    const element = '#' + c

    $(element).html(store.cells[c])
  }
  const board = $('.box').text()

  store.clickCount = board.length
  store.clickCount % 2 === 0 ? $('.game-message').html("X's turn") : $('.game-message').html("O's turn")
}

const getNumOfBlankGames = function () {
  const blank = (x) => {
    return x === ''
  }
  const blankGames = store.games.filter(function (obj) {
    return obj.cells.every(blank)
  })
  return blankGames.length
}

const checkIfBoardIsBlank = function (board) {
  const blank = (x) => {
    return x === ''
  }
  return board.every(blank)
}

const addGamesPlayed = () => {
  $('#games-played').html(store.gamesPlayed += 1)
}

const resetAll = () => {
  $('.box').text('')
  $('#player_x_score').html('0')
  $('#player_o_score').html('0')
  $('#games-played').html('-')
  $('#games-won').html('-')
  $('.game-message').html('')
}

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
