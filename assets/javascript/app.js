$(document).ready(function () {

    //set up questions array
    /* for each index we need:
        a question
        an answer
        a timer
        an image?
        
        need a start function, reset function
        reset function */

    var TI = 0;
    var timer = 15;
    var rightGuess = 0;
    var wrongGuess = 0;

    var clock;

    var trivia = [
        {
            question: "Who was the first team to win the NBA Finals in 1950?",
            choices: ["Minneapolis Lakers", "Syracuse Nationals", "Fort Wayne Pistons", "New York Knicks"],
            answer: "Minneapolis Lakers",
            image: "<img src= '../images/Minneapolis_lakers_logo.png' >",
        },

        {
            question: "Which team has won the most NBA Finals championships?",
            choices: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors"],
            answer: "Boston Celtics",
            image: "<img src= 'assets/images/BOS.logo.svg' >",
        },

        {
            question: "Who was the only player to win 6 Finals MVP?",
            choices: ["Lebron James", "Kareem Abdul Jabaar", "Bill Russell", "Michael Jordan"],
            answer: "Michael Jordan",
            image: "<img src= '../images/MJ.jpg' />",
        },

        {
            question: "Name the last team to achieve a 3-peat in the NBA Finals (3 in a row)?",
            choices: ["Los Angeles Lakers", "Miami Heat", "San Antonio Spurs", "Utah Jazz"],
            answer: "Los Angeles Lakers",
            image: "<img src= '../images/3peat.jpg' />",
        },

        {
            question: "Which team broke a 52-year championship drought in their city, by winning the 2016 NBA Finals?",
            choices: ["Atlanta Hawks", "Sacramento Kings", "Cleveland Cavaliers", "Denver Nuggets"],
            answer: "Cleveland Cavaliers",
            image: "<img src= '../images/cavs.jpg' />",
        },

        {
            question: "Which one of these players has won the most NBA Finals?",
            choices: ["Michael Jordan", "Kobe Bryant", "Bill Russell", "Tim Duncan"],
            answer: "Bill Russell",
            image: "<img src= '../images/russell.jpg' />",
        },

        {
            question: "Which one of these teams has never won the NBA Finals trophy?",
            choices: ["Minnesota Timberwolves", "Cleveland Cavaliers", "Washington Wizards", "Milwaukee Bucks"],
            answer: "Minnesota Timberwolves",
            image: "<img src= '../images/twolves.jpg' />",
        },

        {
            question: "Name the player with the most NBA Finals losses with 8? (1 win)",
            choices: ["Shaquille O'Neal", "Jerry West", "Lebron James", "Magic Johnson"],
            answer: "Jerry West",
            image: "<img src= '../images/jerry-west-nba-logo.jpg' />",
        },
    ];


    function Qplacement() {
        $("#gameplay").html("<h3>" + trivia[TI].question + "</h3>");
        $("#gameplay").append("<p class='qc'>" + trivia[TI].choices[0] + "</p>");
        $("#gameplay").append("<p class='qc'>" + trivia[TI].choices[1] + "</p>");
        $("#gameplay").append("<p class='qc'>" + trivia[TI].choices[2] + "</p>");
        $("#gameplay").append("<p class='qc'>" + trivia[TI].choices[3] + "</p>");
    }


    var rightAnswer = trivia[TI].answer;
    var image = trivia[TI].image;

    function youRight() {
        $("#gameplay").html("<p2 class='p2'> Swish! Your right! </p2> <br>")
        rightGuess++;
        rightAnswer = trivia[TI].answer;
        $("#gameplay").append("<p2 class='p2'> The answer is: " + rightAnswer + "</p2>");
        $("gameplay").append(image);
        setTimeout(Qengine, 5000);
        TI++;
    }
    function youWrong() {
        $("#gameplay").html("<p2 class='p2'> Aaaaair Ball! Wrong! </p2> <br>")
        wrongGuess++;
        rightAnswer = trivia[TI].answer;
        $("#gameplay").append("<p2 class='p2'> The correct answer is: " + rightAnswer + "</p2>");
        $("gameplay").append($("<img>").attr("src", image));
        setTimeout(Qengine, 5000);
        TI++;
    }

    function timesUp() {
        if (timer === 0) {
            $("#gameplay").html("<p2 class='p2'> Aaaaair Ball </p2> <br>")
            wrongGuess++;
            rightAnswer = trivia[TI].answer;
            $("#gameplay").html("<p2 class='p2'> The correct answer is: " + rightAnswer + "</p2>");
            $("gameplay").append($("<img>").attr("src", image));
            setTimeout(Qengine, 5000);
            TI++;
        }
    }

    var clock;

    function timeClock() {
        clock = setInterval(count, 1000);
        function count(clock) {
            if (timer < 1) {
                clearInterval(clock);
                timesUp();
            }
            else if (timer > 0) {
                timer--;
            }
            $("#time").html(timer);
        }
    }

    function Qengine() {
        if (TI < trivia.length) {
            timer = 15;
            Qplacement();
            $("#gameplay").prepend("<p> You have <span id='time'>" + timer + "</span> seconds left! </p>");
            timeClock();
            timesUp();
        }
        else {
            // endGame ();
        }
    }

    $(".btn").click(Qplacement);
    $("#gameplay").on("click", ".qc", function () {
        var guess = $(this).text();
        if (guess === trivia[TI].answer) {
            clearInterval(clock);
            youRight();

        }
        else {
            clearInterval(clock);
            youWrong();
        }
    })


















})