module.exports = class LivingCreature {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.multiply = 0;
    this.index = index;
  }

  chooseCell(character, character2 = 100) {
    var found = [];

    for (var i in this.directions) {
      var x = this.directions[i][0];

      var y = this.directions[i][1];

      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == character || matrix[y][x] == character2) {
          found.push(this.directions[i]);
        }
      }
    }

    return found;
  }
}
