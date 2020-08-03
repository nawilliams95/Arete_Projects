// console.log ($); << test Jquery and JS connectivity


$(() => {

    //================================================
    // ========Game Home Page Audio Controls==========
    //================================================

    // $(document).on('click', (event) => {
    //     $("#audio").get(0).play();
    // });

    //====Updated audio functionality >>toggles mute/unmute sound and button=======

    $('#unmute').on('click', (event) => {
        $('#audio').get(0).play();
    });

    $('#mute').on('click', (event) => {
        $('#audio').get(0).pause();
    });

});

