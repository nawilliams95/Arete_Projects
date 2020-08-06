// console.log($)

$(() => {

    //================================================
    // =============Game player set up================
    //================================================





    //================================================
    // ================Dice Setup====================
    //================================================

    const die = $('.dice');

    const rollDice = () => {
        console.log(Math.floor(Math.random() * 6) + 1);

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
    const startSpace = $('.start');


});
