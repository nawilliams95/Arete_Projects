console.log($)
$(() => {

    //================================================
    // ==========Game Instructions Box==========
    //================================================

    const $openBtn = $('#openModal');
    const $modalHowTo = $('.How_To');
    const $closeBtn = $('#close');
    const $setUpModal = $('.player_setup')
    const $doneBtn = $('#done');

    const openModal = () => {
        $modalHowTo.css('display', 'block');
    }

    const closeModal = () => {
        $modalHowTo.css('display', 'none')
        $setUpModal.css('display', 'block');
    }

    const doneSetup = () => {
        $setUpModal.css('display', 'none');
        moveAvatarStart();
        playTurn();
    };

    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);
    $doneBtn.on('click', doneSetup);

    setTimeout(openModal, 3000);

    // $('path').on('click', (event) => {
    //     console.log($(event.currentTarget))
    // });

//================================================
// ========Game point/space system set up=========
//================================================
const oneSpace = $('.onePoint');
const twoSpace = $('.twoPoints');
const threeSpace = $('.threePoints');
const penaltySpace = $('.pointDeduction');
const challengeSpace = $('.challenge');

const addOnePiont = () => {
    players[currentPlayer].score += 1;
};

oneSpace.on('click', (event) => {

    addOnePiont();
    document.getElementById(players[currentPlayer].id + "_score").innerHTML = players[currentPlayer].score;
    players[currentPlayer].turn += 1;
    // let playerPos = $(event.currentTarget).offset();
    // players[currentPlayer].character.css('top', `${playerPos.top}` + 'px');
    // players[currentPlayer].character.css('left', `${playerPos.left}` + 'px');
    movePlayer();
    nextPlayer();
    playTurn();
});

const addTwoPionts = () => {
    players[currentPlayer].score += 2;
};

twoSpace.on('click', (event) => {

    addTwoPionts();
    document.getElementById(players[currentPlayer].id + "_score").innerHTML = players[currentPlayer].score;
    players[currentPlayer].turn += 1;
    // let playerPos = $(event.currentTarget).offset();
    // players[currentPlayer].character.css('top', `${playerPos.top}` + 'px');
    // players[currentPlayer].character.css('left', `${playerPos.left}` + 'px');
    movePlayer();
    nextPlayer();
    playTurn();
});

const addThreePionts = () => {
    players[currentPlayer].score += 3;

};

threeSpace.on('click', (event) => {

    addThreePionts();
    document.getElementById(players[currentPlayer].id + "_score").innerHTML = players[currentPlayer].score;
    players[currentPlayer].turn += 1;
    // let playerPos = $(event.currentTarget).offset();
    // players[currentPlayer].character.css('top', `${playerPos.top}` + 'px');
    // players[currentPlayer].character.css('left', `${playerPos.left}` + 'px');
    movePlayer();
    nextPlayer();
    playTurn();
});

const randomPointDeduction = () => {
    players[currentPlayer].score -= Math.floor(Math.random() * 3) + 1;
};

penaltySpace.on('click', (event) => {
    randomPointDeduction();
    document.getElementById(players[currentPlayer].id + "_score").innerHTML = players[currentPlayer].score;
    players[currentPlayer].turn += 1;
    movePlayer();
    nextPlayer();
    playTurn();
})


    // //================================================
    // // ========Start the game/win condition===========
    // //================================================

    const playTurn = () => {
        if (players[currentPlayer].turn <= totalNumOfTurns) {
            alert(`its ${players[currentPlayer].id}: ${players[currentPlayer].name}'s turn!`);

        }

    };





});
