// console.log($)

$(() => {

    //================================================
    // =============Game player set up================
    //================================================





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
        // const displayResult = $('<h2>').text(`${result}`).appendTo(resultBox);
        // displayResult;
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
    const startSpace = $('.start');


});
