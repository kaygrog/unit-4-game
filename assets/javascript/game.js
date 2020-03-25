$(document).ready(function() {
    
    var randomNum = 0;
    var diamondNum = 0;
    var emeraldNum = 0;
    var lapisLazuliNum = 0;
    var redstoneNum = 0;
    var totalScore = 0;

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

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    $("#diamond").on("click", function() {
        totalScore += diamondNum;
        $("#total-score").text(totalScore);
    })

    $("#emerald").on("click", function() {
        totalScore += emeraldNum;
        $("#total-score").text(totalScore);
    })

    $("#lapis-lazuli").on("click", function() {
        totalScore += lapisLazuliNum;
        $("#total-score").text(totalScore);
    })

    $("#redstone").on("click", function() {
        totalScore += redstoneNum;
        $("#total-score").text(totalScore);
    })
})