// console.log($)
//================================================
// ========Game Board path pieces in order========
//================================================

const boradPath = ['patch22', 'patch1', 'patch2', 'patch3', 'patch4', 'patch5', 'patch6', 'patch21', 'patch20',
    'patch7', 'patch19', 'patch8', 'patch9', 'patch10', 'patch11', 'patch12', 'patch14', 'patch15', 'patch18', 'patch16', 'patch13', 'patch17', 'patch31', 'patch30', 'patch29', 'patch28', 'patch27', 'patch32', 'patch57', 'patch58', 'patch59', 'patch33', 'patch24', 'patch34', 'patch35', 'patch36', 'patch37', 'patch38', 'patch56', 'patch55', 'patch39', 'patch54', 'patch40', 'patch41', 'patch42', 'patch43', 'patch44', 'patch45', 'patch47', 'patch53', 'patch48', 'patch49', 'patch50', 'patch51', 'patch52'];


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

const ghost = $('.ghost').draggable();

// $(".ghost").on('mousedown').animateSprite('play', 'walkLeft');

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

const greenGhost = $('.green_ghost').draggable();

// $(".green_ghost").on('mousedown').animateSprite('play', 'walkLight');




// $greenGhost.css('display', 'block');

//================================================
// =============Game player set up================
//================================================


class Player {
    constructor(name, score, character, turn, id, position) {
        this.name = name;
        this.score = score;
        this.character = character;
        this.turn = turn;
        this.id = id
        this.position = position
    }
};

let players = [];
let totalNumOfTurns = null;
let CurrentNumOfturns = null;
let currentPlayer = null;

// assigns players names, score, avatars and pushes that info to player arry and dom. 
$('form').on('submit', (event) => {
    const playerOne = new Player($('#plyr1').val(), 0, ghost, 0, 'player1', 0);
    const playerTwo = new Player($('#plyr2').val(), 0, greenGhost, 0, 'player2', 0);
    $('#player1').text(playerOne.name);
    $('#player1_score').text(playerOne.score);
    players.push(playerOne);
    $('#player2').text(playerTwo.name);
    $('#player2_score').text(playerTwo.score);
    players.push(playerTwo);
    totalNumOfTurns = $('#total_turns').val();
    // setTimeout(moveAvatarStart, 3000);
    currentPlayer = 0
});






//================================================
// ================Dice Setup====================
//================================================

const die = $('.dice');
let dieRollResult = []

const render = (arry) => {
    const resultBox = $('.roll_result').empty();
    for (let item of arry) {
        const dieNum = $('<li>')
        dieNum.text(item).addClass('result').appendTo(resultBox);

    }
}
const rollDice = (event) => {
    let result = Math.floor(Math.random() * 6) + 1;
    dieRollResult.push(result);
    showNextMove();
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

const nextPlayer = () => {
    let nextPlayer = currentPlayer + 1;
    if (nextPlayer === players.length - 1) {
       currentPlayer = nextPlayer;
    } else {
        nextPlayer = 0;
        currentPlayer = nextPlayer;
    };

};

const movePlayer = () => {
    let playerPos = $(event.currentTarget).offset();
    players[currentPlayer].character.css('top', `${playerPos.top}` + 'px');
    players[currentPlayer].character.css('left', `${playerPos.left}` + 'px');
};


const totalBoardPaths = boradPath.length + 1;



// shows players where to drag thier avatar/click
const showNextMove = () => {
    if(players[currentPlayer].position += dieRollResult[0] <= totalBoardPaths) {
        let newPlayerPos = players[currentPlayer].position += dieRollResult[0] - 1;
        let nextPlayerMove = boradPath[newPlayerPos];
        players[currentPlayer].position = newPlayerPos;
        $('#' + nextPlayerMove).addClass('vibrate');
        stopVib($('#' + nextPlayerMove));

    } else {
        let newPlayerPos = players[currentPlayer].position += dieRollResult[0] - totalBoardPaths - 1;
        let nextPlayerMove = boradPath[newPlayerPos];
        players[currentPlayer].position = newPlayerPos;
         $('#' + nextPlayerMove).addClass('vibrate');
        
    }
    
    
};

const stopVib = (patch) => {
    setTimeout(() => {
        patch.removeClass('vibrate');
    } ,8000);
    
};

let trunAlert = [];
const renderTurn = (arry) => {
    const trunAlert = $('.turn_box').empty();
    for (let item of arry) {
        const turn = $('<li>')
        turn.text(item).addClass('turn_alert').appendTo(trunAlert);

    }
}
 const showTurn =(event) => {
    let alert = ` Its ${players[currentPlayer].id}: ${players[currentPlayer].name}'s turn!`;
    trunAlert.push(alert);
    renderTurn(trunAlert);
    trunAlert.pop();
 };
 