const portals = {
  [2]:38,
  [7]:14,
  [8]:31,
  [15]:26,
  [21]:42,
  [28]:84,  
  [36]:44,
  [51]:67,
  [71]:91,  
  [78]:98,
  [87]:94
}

const holes = {
  [16]:6,
  [46]:25,
  [49]:11,
  [62]:19,  
  [64]:60,
  [74]:53,
  [89]:68,  
  [92]:88,
  [95]:75,
  [99]:80
}


function SnakesLadders() {
  this.player = "Player 1";
  this.scores = {
    ["Player 1"]: 0,
    ["Player 2"]: 0
  }


  this.alternate = function(player){
    this.player = player == "Player 1" ? "Player 2" : "Player 1";
  }

  this.registScore = function(player, score){
    const scr = this.scores[player] + score;
    console.log(scr)

    if(portals[scr]){
      return this.scores[player] = portals[scr]
    }else {
      return this.scores[player] = scr
    }
  }
};

SnakesLadders.prototype.play = function(die1, die2) {
  const currentPlayer = this.player;
  if(die1 !== die2){
    this.alternate(currentPlayer)
  }

  const score = this.registScore(currentPlayer, die1 + die2);

  if(score === 100){
    return currentPlayer  + " Wins";  
  }

  return currentPlayer  + " is on square " + score;
}

SnakesLadders.prototype.alternate = function(die1, die2) {

  const currentPlayer = this.nexPlayer == "Player 2" ? "Player 1" : "Player 2";
  this.nextPlayer = "Player 1"
  return currentPlayer  + " is on square " + (+die1+die2);
}

var game = new SnakesLadders();

game.play(1, 1)
game.play(1, 5)





