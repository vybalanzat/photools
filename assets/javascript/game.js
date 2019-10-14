// Var for Random Number:

$(document).ready(function () {
    // Create variable for wins and losses

    var wins = 0;
    var losses = 0;
    var totalNumber = 0;
    var purple = Math.floor(Math.random() * 51);
    var blue = Math.floor(Math.random() * 51);
    var green =  Math.floor(Math.random() * 51);
    var red  = Math.floor(Math.random() * 51);
    var randomNumber = 0;




    var randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);


    $("#blue").on("click", function () {
       
        totalNumber = totalNumber + blue;
        console.log(blue);
        console.log('total number is' + totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
         }
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
        $("#randomNumber-text").text(randomNumber);
        $("#totalNumber-text").text(totalNumber);
        
        
    });
    $("#purple").on("click", function () {
        totalNumber = totalNumber + purple;
        console.log(purple);
        console.log('total number is' + totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
         }
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
        $("#randomNumber-text").text(randomNumber);
        $("#totalNumber-text").text(totalNumber);

    });

    $("#red").on("click", function () {
        totalNumber = totalNumber + red;
        console.log(red);
        console.log('total number is' + totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
         }
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
        $("#randomNumber-text").text(randomNumber);
        $("#totalNumber-text").text(totalNumber);
        
    });

    $("#green").on("click", function () {
        totalNumber = totalNumber + green;
        console.log(green);
        console.log('total number is' + totalNumber);
        
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
             randomNumber = Math.floor(Math.random() * 101);
         }
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
        $("#randomNumber-text").text(randomNumber);
        $("#totalNumber-text").text(totalNumber);
    });


    
   
    $("#randomNumber-text").text(randomNumber);
    $("#wins-text").text(wins);
    $("#losses-text").text(losses);
    $("#totalNumber-text").text(totalNumber);


});




