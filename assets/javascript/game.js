$(document).ready(function() {
    
    var winsCount = 0;
    var lossesCount = 0;
    var randomNum = 0;
    var totalScore = 0;

    var diamondNum = 0;
    var emeraldNum = 0;
    var lapisLazuliNum = 0;
    var redstoneNum = 0;

    // Set counts to 0
    $("#wins-count").text(winsCount);
    $("#losses-count").text(lossesCount);
    $("#total-score").text(totalScore);

    // Generate first random numbers
    getRandomNums();

    // Generate random numbers for new game
    function getRandomNums() {
        randomNum = getRandomIntInclusive(19, 120);
        $("#random-number").text(randomNum);

        diamondNum = getRandomIntInclusive(1, 12);
        emeraldNum = getRandomIntInclusive(1, 12);
        lapisLazuliNum = getRandomIntInclusive(1, 12);
        redstoneNum = getRandomIntInclusive(1, 12);
    }

    // Generate inclusive random ints function from MDN
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    // Assign on-click functionality to crystals
    $("#diamond").on("click", function() {
        totalScore += diamondNum;
        $("#total-score").text(totalScore);
        checkWin();
    })

    $("#emerald").on("click", function() {
        totalScore += emeraldNum;
        $("#total-score").text(totalScore);
        checkWin();
    })

    $("#lapis-lazuli").on("click", function() {
        totalScore += lapisLazuliNum;
        $("#total-score").text(totalScore);
        checkWin();
    })

    $("#redstone").on("click", function() {
        totalScore += redstoneNum;
        $("#total-score").text(totalScore);
        checkWin();
    })

    // Check if the user won on each crystal click
    function checkWin() {
        if (totalScore === randomNum) {
            $("#win-lose-text").text("")
            $("#win-lose-text").append("<p style='background-color: black; padding: 10px'>You won!!</p>")

            winsCount++;
            $("#wins-count").text(winsCount);

            resetGame();
        }
        else if (totalScore > randomNum) {
            $("#win-lose-text").text("")
            $("#win-lose-text").append("<p style='background-color: black; padding: 10px'>You lost!!</p>")
            
            lossesCount++;
            $("#losses-count").text(lossesCount);

            resetGame();
        }
    }

    // Reset the game if the user won or lost
    function resetGame() {
        totalScore = 0;
        $("#total-score").text(totalScore);

        getRandomNums();
    }
})