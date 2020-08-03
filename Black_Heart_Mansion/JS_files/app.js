// console.log ($); << test Jquery and JS connectivity


$(() => {

    //================================================
    // ========Game Home Page Audio Controls==========
    //================================================

    // $(document).on('click', (event) => {
    //     $("#audio").get(0).play();
    // });

    //====Updated audio functionality >>toggles mute/unmute sound and button=======

    const button = $('#button');
    const icon = $('#button > i');
    const audio = $('#audio');

    button.on('click', () => {
        if (audio.paused) {
            audio.volume = 0.2;
            audio.play();
            icon.removeClass('fa-volume-up');
            icon.addClass('fa-volume-mute');

        } else {
            audio.pause();
            icon.removeClass('fa-volume-mute');
            icon.addClass('fa-volume-up');
        }
        button.addClass('fade');
    });

});

