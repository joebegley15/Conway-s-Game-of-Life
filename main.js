function nextGen(cells){
  var newCells = [];
  for (var i = 0; i < cells.length; i++) {
    newCells.push([]);
    for (var j = 0; j < cells[i].length; j++) {
      // Calc Neighbors Count
      var around = (cells[i][j + 1] || 0) + (cells[i][j - 1] || 0);
      if (cells[i + 1]) {
        around += ((cells[i + 1][j] || 0) + (cells[i + 1][j - 1] || 0) + (cells[i + 1][j + 1] || 0));
      }
      if (cells[i - 1]) {
        around += ((cells[i - 1][j] || 0) + (cells[i - 1][j - 1] || 0) + (cells[i - 1][j + 1] || 0));
      }
      // Determine if this cell survives or is born
      if (cells[i][j]) {
        if (around < 2 || around > 3) {
          newCells[i].push(0);
        } else {
          newCells[i].push(1);
        }
      } else {
        if (around == 3) {
          newCells[i].push(1);
        } else {
          newCells[i].push(0);
        }
      }
    }
  }
  return newCells;
}