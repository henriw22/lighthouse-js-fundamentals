const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  



function finalPosition(moves) {
  var position = [0,0];
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === "north") {
      position[1] = position [1] + 1;
    } else if (moves[i] === "south") {
      position[1] = position [1] - 1;
    } else if (moves[i] === "east") {
      position[0] = position [0] + 1;
    } else if (moves[i] === "west") {
      position[0] = position [0] - 1;
    }
  } 
  return position;
};

console.log(finalPosition(moves));