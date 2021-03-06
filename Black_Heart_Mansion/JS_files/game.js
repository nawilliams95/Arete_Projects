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
    const oneSpace = $('.onePoint').droppable();
    const twoSpace = $('.twoPoints').droppable();
    const threeSpace = $('.threePoints').droppable();
    const penaltySpace = $('.pointDeduction').droppable();
    const challengeSpace = $('.challenge').droppable();

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
        // movePlayer();
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
        // movePlayer();
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
        // movePlayer();
        nextPlayer();
        playTurn();

    });

    const randomPointDeduction = () => {
        players[currentPlayer].score -= Math.floor(Math.random() * 3) + 1;
        if(players[currentPlayer].score < 0) {
            players[currentPlayer].score = 0
        }
    };
    
    

    penaltySpace.on('click', (event) => {
        randomPointDeduction();
        document.getElementById(players[currentPlayer].id + "_score").innerHTML = players[currentPlayer].score;
        players[currentPlayer].turn += 1;
        alert(`${players[currentPlayer].name} Lost Points!`)
        // movePlayer();
        nextPlayer();
        playTurn();

    })

    challengeSpace.on('click', (event) => {
        alert(`${players[currentPlayer].name} Lost A Turn!`);
        players[currentPlayer].turn += 1;
        nextPlayer();
        playTurn();
    });

    // //================================================
    // // ========Start the game/win condition===========
    // //================================================

    const playTurn = () => {
        if (players[currentPlayer].turn <= totalNumOfTurns) {
            showTurn();


        } else if (players[currentPlayer].turn > totalNumOfTurns) {
            if (players[0].score > players[1].score) {
                $('body').prepend(`<h1> GAME OVER ${players[0].name} WINS!!</h1>`)

            } else if (players[0].score < players[1].score) {
                $('body').prepend(`<h1> GAME OVER ${players[1].name} WINS!!</h1>`)

            } else {
                $('body').prepend(`<h1> GAME OVER ${players[0].name} and ${players[1].name} ARE TIED---Play again?!!</h1>`)
            }
        }

    };





});
