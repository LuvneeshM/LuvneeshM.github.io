    var oneTime = true;

    // wait for dom to load
    $(document).ready(function() {
        // !-- animate the start of the page -->
        // animation of moving arrow downward
        // checkForModal();

        homeStuff();
        aboutStuff();
        qAStuff();
        projectStuff();

        invertColors();

    });

    function invertColors(){
        $('.invert_me').click(function(){
            // $('*').css('color', 'antiquewhite');
            $('main').css("background-color",'rgb(31,31,31)');
        });
        
    }

    function homeStuff() {
        if ($('body').hasClass('home_page')) {
            arrowBounce();
            clickArrow();
        }
    }

    function clickArrow() {

        var $stuffContainer = $('#page_wrap');

        var $arrow = $(document.getElementById('arrow_bounce'));

        $stuffContainer.attr('data-scrollPos', $('#page_wrap').offset().top);
        $arrow.click(function() {
            var myScrollPosition = $stuffContainer.attr('data-scrollPos');
            TweenLite.to(window, 2, { scrollTo: myScrollPosition, ease: Back.easeOut });
            loadOnScroll();
        });

    }

    //for home page
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

    //for homepage
    function loadOnScroll() {
        // show when scrolled to 
        var $stuffContainer = $('#page_wrap'),
            $words = $('.starter_words'),
            $aboutP = $('.aboutP'),
            $projP = $('.projP'),
            $qaP = $('.qaP'),
            $resumeP = $('.resumeP');


        CSSPlugin.defualtTransformPerspective = 800;
        var tl = new TimelineLite();
        tl.from($stuffContainer, 0.8, { opacity: 0 })
            .from($words, 0.5, { x: -50, opacity: 0 })
            .from($aboutP, 0.5, { y: -50, opacity: 0 })
            .from($projP, 0.5, { y: -50, opacity: 0 })
            .from($qaP, 0.5, { y: -50, opacity: 0 })
            .from($resumeP, 0.5, { y: -50, opacity: 0 })

    }

    //About Page
    function aboutStuff() {
        if ($('body').is('.about_page')) {
            loadSkillLevels();
            $(window).scroll(function(){
                loadSkillLevels();
            });
            words();
        }
    }
    function loadSkillLevels(){
        var topSkills = $('.skills').offset().top;
        var botSkills = $('.skills').offset().top + $('.skills').height();

        var topScreen = $(window).scrollTop();
        var botScreen = $(window).scrollTop() + $(window).height();
        var botScreenMinus = botScreen-250;

        if(botScreenMinus>topSkills && topScreen < botSkills && oneTime){
            oneTime = false;
            loadSkills();
        }
    }
    // watch them skills load up
    function loadSkills() {
        var $allSkills = $('.progress_bar');
        $allSkills.each(function() {
            $(this).animate({
                width: $(this).attr('data-percent')
            }, 3000);
        })
    }

    function words() {
        $(".message").typed({
            strings: ["am a programmer.", "design and develop games.",
                "am who I am.", "build websites.", "am a co-founder of Gilly Works.",
                " treasure and need more sleep.", "work on artifical intelligence."
            ],
            typeSpeed: 60,
            shuffle: true,
            loop: true,
            contentType: 'text'
        });
    }

    // Projects
    function projectStuff() {
        if ($('body').is('.projects_page')) {
            checkForModal();
            checkCloseModal();
        }
    }

    //modals
    //projects page
    function checkForModal() {

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
    //close the modal
    //press the enter key
    function checkCloseModal(){
        $(document).keypress(function(e){
            if(e.keyCode == 13){
                $('.modal').modal('hide');
            }
        });
    }

    // qa page
    function qAStuff() {
        if ($('body').is('.qa_page')) {
            answersDropDown();
        }
    }

    function answersDropDown() {
        // show when scrolled to 
        var $answers = $('.anA');
        var $stall = $('main');

        //make sure everything was invis at first 
        // then no longer need to be invis cause I am "loading" it all now
        $stall.css({ opacity: 1.0 });

        CSSPlugin.defualtTransformPerspective = 800;
        var tl = new TimelineLite();
        tl.from($stall, 1.0, { opacity: 0 })
            .from($answers, 1.0, { y: -50, opacity: 0 });
    }
