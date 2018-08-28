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
  [87]:94,
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
  this.winner = null;
  this.scores = {
    ["Player 1"]: 0,
    ["Player 2"]: 0
  }


  this.alternate = function(player){
    this.player = player == "Player 1" ? "Player 2" : "Player 1";
  }

  this.registScore = function(player, score){
    let scr = this.scores[player] + score;

    if(scr > 100){
      const diff = scr - 100;
      scr = 100 - diff;
    }
    
    if(portals[scr]){
      scr = portals[scr]
    }

    return this.scores[player] = scr;
  }
};

SnakesLadders.prototype.play = function(die1, die2) {
  const currentPlayer = this.player;
  if(this.winner){
    return "Game over!";
  }else if(die1 !== die2){
    this.alternate(currentPlayer)
  }

  const score = this.registScore(currentPlayer, die1 + die2);

  if(score === 100){
    this.winner = currentPlayer;
    return currentPlayer  + " Wins!";  
  }

  return currentPlayer  + " is on square " + score;
}

var game = new SnakesLadders();

game.play(1, 1)
game.play(1, 5)





