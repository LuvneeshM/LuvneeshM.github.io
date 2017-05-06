    // wait for dom to load
    $(document).ready(function() {
        // !-- animate the start of the page -->
        // animation of moving arrow downward
        arrowBounce();



    });

    function arrowBounce() {
        var arrow = document.getElementById('arrow_bounce');
        TweenMax.fromTo(arrow, 0.75, {
            y: -5
        }, {
            y: 5,
            repeat: -1,
            yoyo: true
        });
    }