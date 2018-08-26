// GAME RULES:
//
// - The game has 2 players, playing in rounds
// - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
// - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
// - The first player to reach 100 points on GLOBAL score wins the game??

var scores, roundScore, activePlayer,gamePlaying;
var btnRoll = document.querySelector('.btn-roll');
var btnHold = document.querySelector('.btn-hold');

//dice images
var diceimgs = {
 diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
 diceimg02: 'https://cdn.pbrd.co/images/711lemsMX.png',
 diceimg03: "https://cdn.pbrd.co/images/711NjfjV5.png",
 diceimg04: "https://cdn.pbrd.co/images/712dK3C2z.png",
 diceimg05: "https://cdn.pbrd.co/images/70Zqc4icX.png",
 diceimg06: "https://cdn.pbrd.co/images/712DzRw22.png",
 diceimg11: "https://cdn.pbrd.co/images/713n3lHQN.png",
 diceimg12: 'https://cdn.pbrd.co/images/713JSMJDr.png',
 diceimg13: "https://cdn.pbrd.co/images/HvoZO4Gb.png",
 diceimg14: "https://cdn.pbrd.co/images/HvqN3Kjq.png",
 diceimg15: "https://cdn.pbrd.co/images/714IXBStH.png",
 diceimg16: "https://cdn.pbrd.co/images/714ZovsdD.png"
};
init();
