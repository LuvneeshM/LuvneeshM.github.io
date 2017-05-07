    // wait for dom to load
    $(document).ready(function() {
        // !-- animate the start of the page -->
        // animation of moving arrow downward
        arrowBounce();
        checkForModal();


    });

    //for home page
    function arrowBounce() {
        if ($('body').hasClass('home_page')) {
            var arrow = document.getElementById('arrow_bounce');
            TweenMax.fromTo(arrow, 0.75, {
                y: -5
            }, {
                y: 5,
                repeat: -1,
                yoyo: true
            });
        }   
    }

    //modals
    //projects page
    function checkForModal() {
        if ($('body').is('.projects_page')) {
            $('#proj_1_button').click(function() {
                $('#proj_1_modal').modal();
            });
            $('#proj_2_button').click(function() {
                $('#proj_2_modal').modal();
            });
            $('#proj_3_button').click(function() {
                $('#proj_3_modal').modal();
            });
            $('#proj_4_button').click(function() {
                $('#proj_4_modal').modal();
            });
            $('#proj_5_button').click(function() {
                $('#proj_5_modal').modal();
            });
            $('#proj_6_button').click(function() {
                $('#proj_6_modal').modal();
            });
        }
    }
