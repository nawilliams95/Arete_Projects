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
        startGame();
    };

    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);
    $doneBtn.on('click', doneSetup);

    setTimeout(openModal, 3000);

    // $('path').on('click', (event) => {
    //     console.log($(event.currentTarget))
    // });


    // //================================================
    // // =================turn function=================
    // //================================================

    // function nextPlayer(currentPlayer) {
    //     let nextPlayer = currentPlayer + 1;

    //     if (nextPlayer == game.players.length) {
    //         return 0;
    //     }

    //     return nextPlayer;
    // };
    

    const startGame = () => {
        if (currentPlayer.turn <= totalNumOfTurns) {
            alert(`its ${currentPlayer.name}'s turn!`);

        }

    };





});
