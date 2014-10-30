jQuery(function ($) {

    var green = 0;
    var blue = 0;
    var yellow = 0;
    var red = 0;
    var count = 60;
    var time = 60;
    var level = 1;



    function changeLevel() {
        count = time - (5 * level);
        level++;

    }

    function startGame() {
        $('#game').show();
        $('#timer').show();
        $('#prog').show();
        $('#startgame').hide();
        $('#user').hide();
        $('#nextlevel').hide();
        $('#success').hide();
        $("#level").html('Level ' + level).show();
        $('#logo').hide();

    }

    function newGame() {

        $('#game').show();
        $('#timer').show();
        $('#prog').show();
        $('#user').hide();
        $("#level").html('Level ' + level).show();
        $('#newGame').hide();
        $('#gameover').hide();
        $('#time').val('');
        $('#logo').hide();


    }


    function timer() {
        var timer = setInterval(function () {
            count--;
            $('#time').val(count);
            if (red == 10 && count != 0) {
                clearInterval(timer);
                $('#logo').show();

                $('#success').show();
                $('#game').hide();
                $('#timer').hide();
                $('#prog').hide();
                $('#time').val('');
                $("#level").html('Level ' + level).hide();
                $('#nextlevel').show();
                $('#blue').width(0).text('');
                $('#green').width(0).text('');
                $('#yellow').width(0).text('');
                $('#red').width(0).text('');

            }
            else if (count <= 0) {
                clearInterval(timer);
                $('#logo').show();

                $('#gameover').show();
                $('#newGame').show();
                $('#game').hide();
                $('#timer').hide();
                $('#prog').hide();
                $('#level').hide();
                $('#best').html('Level ' + level + ' - ' + (blue+green+yellow+red) + "%");
            }
        }, 1000);
    }


    $('#p1').click(function () {
        if (blue < 52) {
            blue += 4;

            $('#blue').width(blue + '%').text((blue+green+yellow+red) + '%');
        }
        else if (green < 24 && blue == 52) {
            green += 3;

            $('#green').width(green + '%').text((blue+green+yellow+red) + '%');
        }
        else if (yellow < 14 && green == 24) {
            yellow += 2;

            $('#yellow').width(yellow + '%').text((blue+green+yellow+red) + '%');
        }
        else if (red < 10 && yellow == 14) {
            red++;

            $('#red').width(red + '%').text((blue+green+yellow+red) + '%');
        }
    });


    $('#startgame').click(function () {
        startGame();
        timer();

    });

    $('#newGame').click(function () {
        count = 60;
        time = 60;
        level = 1;
        green = 0;
        blue = 0;
        yellow = 0;
        red = 0;
        $('#blue').width(0);
        $('#green').width(0);
        $('#yellow').width(0);
        $('#red').width(0);
        newGame();
        timer();

    });

    $('#nextlevel').click(function () {
        green = 0;
        blue = 0;
        yellow = 0;
        red = 0;
        changeLevel();
        startGame();
        timer();

    });

});



