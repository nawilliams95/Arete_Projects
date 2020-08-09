// console.log($)

$(() => {
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
        constructor(name, score, character) {
            this.name = name;
            this.score = score;
            this.character = character;
        }
    };

    let players = [];

    // assigns players names, score, avatars and pushes that info to player arry and dom. 
    $('form').on('submit', (event) => {
        const playerOne = new Player($('#plyr1').val(), 0, ghost);
        const playerTwo = new Player($('#plyr2').val(), 0, greenGhost);
        $('#player1').text(playerOne.name);
        $('#player1_score').text(playerOne.score);
        players.push(playerOne);
        $('#player2').text(playerTwo.name);
        $('#player2_score').text(playerTwo.score);
        players.push(playerTwo);
        moveAvatarStart();
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
    // ========Game point/space system set up=========
    //================================================
    const oneSpace = $('.onePoint');
    const twoSpace = $('.twoPoints');
    const threeSpace = $('.threePoints');
    const penaltySpace = $('.pointDeduction');
    const challengeSpace = $('.challenge');
    const startSpace = $('.Start');
    // $('.ghost').appendTo(startSpace).css('display', 'block');

    const moveAvatarStart = () => {
        let start = $('.Start').offset();
        ghost.css('top', `${start.top}` + 'px')
        ghost.css('left', `${start.left}` + 'px');
        ghost.css('display', 'block' );
        greenGhost.css('top', `${start.top}` + 'px')
        greenGhost.css('left', `${start.left}` + 'px');
        greenGhost.css('display', 'block' )
    }
});
