// console.log($)


//================================================
// =============Player Avatar set up==============
//================================================

//=============>>>>Ghost Avatar<<<<<============
$(".ghost").animateSprite({
    fps: 4,
    animations: {
        walkRight: [0, 1, 2, 3, 4],
        walkLeft: [9, 8, 7, 6, 5]
    },
    loop: true,
    // complete: function(){
    //     // use complete only when you set animations with 'loop: false'
    //     alert("animation End");
    // }
});

const ghost = $('.ghost');

$(".ghost").on('mousedown').animateSprite('play', 'walkLeft').draggable();

//=============>>>>Green Avatar<<<<<============

$(".green_ghost").animateSprite({
    fps: 4,
    animations: {
        walkRight: [0, 1, 2, 3, 4],
        walkLeft: [9, 8, 7, 6, 5]
    },
    loop: true,
    // complete: function(){
    //     // use complete only when you set animations with 'loop: false'
    //     alert("animation End");
    // }
});

const greenGhost = $('.green_ghost');

$(".green_ghost").on('mousedown').animateSprite('play', 'walkLight').draggable();


// $greenGhost.css('display', 'block');

//================================================
// =============Game player set up================
//================================================


class Player {
    constructor(name, score, character, turn, id) {
        this.name = name;
        this.score = score;
        this.character = character;
        this.turn = turn;
        this.id = id
    }
};

let players = [];
let totalNumOfTurns = null;
let CurrentNumOfturns = null;
let currentPlayer = null;
// assigns players names, score, avatars and pushes that info to player arry and dom. 
$('form').on('submit', (event) => {
    const playerOne = new Player($('#plyr1').val(), 0, ghost, 0, 'player1');
    const playerTwo = new Player($('#plyr2').val(), 0, greenGhost, 0, 'player2');
    $('#player1').text(playerOne.name);
    $('#player1_score').text(playerOne.score);
    players.push(playerOne);
    $('#player2').text(playerTwo.name);
    $('#player2_score').text(playerTwo.score);
    players.push(playerTwo);
    totalNumOfTurns = $('#total_turns').val();
    // setTimeout(moveAvatarStart, 3000);
    currentPlayer = players [0];
});






//================================================
// ================Dice Setup====================
//================================================

const die = $('.dice');
let dieRollResult = []

const render = (arry) => {
    const resultBox = $('ul').empty();
    for (let item of arry) {
        const dieNum = $('<li>')
        dieNum.text(item).addClass('result').appendTo(resultBox);

    }
}
const rollDice = (event) => {
    let result = Math.floor(Math.random() * 6) + 1;
    dieRollResult.push(result);
    event.preventDefault();
    $(event.currentTarget).trigger('reset');
    render(dieRollResult);
    dieRollResult.pop()
}
die.on('mousedown', (event) => {
    die.draggable();
});


die.on('mouseup', rollDice);




//================================================
// ======Makes player avatar move to start=======
//================================================
const startSpace = $('.Start');
const moveAvatarStart = () => {
    let start = startSpace.offset();
    ghost.css('top', `${start.top}` + 'px')
    ghost.css('left', `${start.left}` + 'px');
    ghost.css('display', 'block');
    greenGhost.css('top', `${start.top}` + 'px')
    greenGhost.css('left', `${start.left}` + 'px');
    greenGhost.css('display', 'block')
}

//================================================
// =================turn function=================
//================================================

// const currentPlayer = players[0];

function nextPlayer(currentPlayer) {
    let nextPlayer = currentPlayer + 1;

    if (nextPlayer === players.length) {
        return 0;
    }

    return nextPlayer;
};


//================================================
// ========Game point/space system set up=========
//================================================
const oneSpace = $('.onePoint');
const twoSpace = $('.twoPoints');
const threeSpace = $('.threePoints');
const penaltySpace = $('.pointDeduction');
const challengeSpace = $('.challenge');

const addOnePiont = () => {
    currentPlayer.score += 1;
};

oneSpace.on('click', (event) => {
    
    addOnePiont();
    document.getElementById(currentPlayer.id + "_score").innerHTML = currentPlayer.score;
    currentPlayer.turn += 1;
    let playerPos = $(event.currentTarget).offset();
    currentPlayer.character.css('top', `${playerPos.top}` + 'px');
    currentPlayer.character.css('left', `${playerPos.left}` + 'px');
});

const addTwoPionts = () => {
    currentPlayer.score += 2;
};

twoSpace.on('click', (event) => {
    
    addTwoPionts();
    document.getElementById(currentPlayer.id + "_score").innerHTML = currentPlayer.score;
    currentPlayer.turn += 1;
    let playerPos = $(event.currentTarget).offset();
    currentPlayer.character.css('top', `${playerPos.top}` + 'px');
    currentPlayer.character.css('left', `${playerPos.left}` + 'px');
});

const addThreePionts = () => {
    currentPlayer.score += 3;

};

threeSpace.on('click', (event) => {
    
    addThreePionts();
    document.getElementById(currentPlayer.id + "_score").innerHTML = currentPlayer.score;
    currentPlayer.turn += 1;
    let playerPos = $(event.currentTarget).offset();
    currentPlayer.character.css('top', `${playerPos.top}` + 'px');
    currentPlayer.character.css('left', `${playerPos.left}` + 'px');
});




