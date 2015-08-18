define([
    '$',
    'fastclick',
    'pikabu',
    'deckard'
],
function(
    $,
    fastclick,
    Pikabu
) {
    // Pikabu initialization.
    var initPikabu = function() {
        alert(1);
        var pikabu = new Pikabu({
            widths: {
                left: '85%'
            }
        });
        $('.m-pikabu-sidebar').removeClass('m-pikabu-hidden');
    };

    var globalUI = function() {
        // Remove 300ms tap delay using FastClick
        fastclick.attach(document.body);
        initPikabu();

        // Enable active states for CSS
        $(document).on('touchstart', function() {});

        // Add any scripts you would like to run on ALL pages here
    };

    return globalUI;

});
