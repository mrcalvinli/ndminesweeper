var Minesweeper = function() {
  var exports = {};

  /**
   * Board will be represented by lists of list, where 0 represents
   * that it doesn't contain a bomb in the slot and 1 represents that
   * it does contain a bomb in the slot.
   */
  var board = []

  exports.setBoard = function(inputBoard) {
    board = inputBoard;
  }

  return exports;
}