// Slideshow Function
$(document).ready(function() {
    // hides all the divs within the slideshow div(parent div) to begin with
    $("#slideshow > div:gt(0)").hide();

    // use JQuery functions to apply transition of fade 
    // each new div in and out by then adding the next div in the cycle
    setInterval(function() {
        // finds the first div to render 
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
});


// Click handling function for radio buttons within nav element to 
// dynamically change the background colour based of the selected button
$(document).ready(function() {
    $("nav input[name='demo_type']").click(function() {
        // stores the input value within a var
        var demo_type_checked = $("nav input[name='demo_type']:checked").val();
        $("#output_checked_radio_val").empty();
        //   returns the selected value by adding the new div to the DOM
        $("#output_checked_radio_val").append("<div class='box-shadow'><h2>Your chosen team is: " + demo_type_checked + "</h2></div>");
        $("#hide_show_div, #events_div, #arenas_div").show();
        switch (demo_type_checked) {
            case "orange":
                $("#container").css({
                    "color": "white",
                    "background": "#ff8c00",
                    "opacity": "0.75"
                });
                break;
            case "blue":
                $("#container").css({
                    "color": "white",
                    "background": "#001a4d",
                    "opacity": "0.75"
                });
                break;
        }
    });
});

// Initially were hide/show function 
// but used fadeOut/In for user experience based off click events
$(document).ready(function() {
    $('#hide_events_button').click(function(event) {
        $("#tabs").fadeOut();
    });
    $('#show_events_button').click(function(event) {
        $("#tabs").fadeIn();
    });
    $('#toggle_arenas_button').click(function(event) {
        $("#accordion").toggle(250);
    });
});

// Function that renders more text directly into the DOM
$(document).ready(function() {
    $('#read_more_button').click(function(event) {
        $("#read_more_button").after(
            `<p id="read_more_info">
            This cross-genre arena battler is the latest craze on Steam, 
            PS4, Xbox One and Nintendo Switch. Fun for all players and abilities, 
            the game offers both a casual and competitive atmosphere, as well as a ton of laughs.
            Rocket League was released on July 7, 2015 for Steam and PS4, February 17, 
            2016 for Xbox One and November 14th, 2017 for Nintendo Switch.
            It should be noted that cross-platform play is now possible between all platforms.
          <a id="read_less_button">Read less</a>
         </p>`
        );
        // hide the read more button when its been clicked
        $("#read_more_button").css({
            "display": "none"
        });

        // function to render the read less button 
        // when the read more button has been clicked and vice versa
        $("#read_less_button").click(function() {
            $("#read_more_info").hide();
            $("#read_more_button").css({
                "display": "block"
            });
        });
    });
});

// Use of jQuery plugin to call the tab function within the script
$(function() {
    $("#tabs").tabs();
});

// Use of jQuery plugin to call the accordion function within the script
$(function() {
    $("#accordion").accordion();
});

// Use of jQuery plugin to call the sortable and disable selection function within the script
// this enables the user to interactive drag elements within a list 
$(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});

// GARAGE - Use of jQuery plugin to call the draggable function within the script 
// that enables user to drag divs onto other divs
$(function() {
    $("#draggable-hat").draggable();
    $("#draggable-hat-1").draggable();
    $("#draggable-antenna").draggable();
    $("#draggable-antenna-1").draggable();
});

// Used animate function to enable a smooth scroll animation when click through nav items
$(document).ready(function() {
    //   gets all anchors (a) that contain # in href
    $('a[href*="#"]').on('click', function() {
        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500, 'linear'
        )
    })
});

// Use the fadeToggle to render hidden elements in the DOM based off the nearest class/div
$(document).ready(function() {
    $('.garage-hats').on('click', '.expand', function() {
        $(this).closest('.garage-hats')
            .find('.hats')
            .fadeToggle();
    });
});

// same function as above however it made sense to duplicate as there were different class/ids used
$(document).ready(function() {
    $('.garage-antennas').on('click', '.expand', function() {
        $(this).closest('.garage-antennas')
            .find('.antennas')
            .fadeToggle();
    });
});


// TOOLTIP 
// Used from a previous practicals task work.
function tooltip() {
    // CONFIG SETUP		
    xOffset = 10;
    yOffset = 30;
    // these 2 variable determine popup's distance from the cursor
    // which is then appended to the DOM element and is styled appropriately via CSS sheet
    $("a.tooltip").hover(function(e) {
            //  tooltip renders the title value of the element
            $("body").append("<p id='tooltip'>" + this.title + "</p>");
            $("#tooltip")
                .css("top", (e.pageY - xOffset) + "px")
                .css("left", (e.pageX + yOffset) + "px")
                .fadeIn("fast");
        },

        function() {
            $("#tooltip").remove();
        });

    //  renders the tooltip based off the mousemove function 
    // when hovering over element with class of Tooltip
    $("a.tooltip").mousemove(function(e) {
        $("#tooltip")
            .css("top", (e.pageY - xOffset) + "px")
            .css("left", (e.pageX + yOffset) + "px");
    });
};

//   rendering the above function
$(document).ready(function() {
    tooltip();
});

// function that is called based on button click that passes the value 
// the value is the parameter degree so it is expecting a number .ie 360
// animates the div with the id to then apply styling tansform to rotate
function rotateImage(degree) {
    $('#demo-image').animate({
        transform: degree
    }, {
        step: function(now, fx) {
            $(this).css({
                '-webkit-transform': 'rotate(' + now + 'deg)',
                '-moz-transform': 'rotate(' + now + 'deg)',
                'transform': 'rotate(' + now + 'deg)'
            });
        }
    });
}