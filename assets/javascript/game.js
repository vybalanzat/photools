// Var for Random Number:

$(document).ready(function () {
    // Create variable for wins and losses

    var wins = 0;
    var losses = 0;
    var totalNumber = 0;
    var purple = Math.floor(Math.random() * 11);
    var blue = Math.floor(Math.random() * 11);
    var green =  Math.floor(Math.random() * 11);
    var red  = Math.floor(Math.random() * 11);
    var randomNumber = 0;




    var randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);


    $("#blue").on("click", function () {
       
        totalNumber = totalNumber + blue;
        console.log(blue);
        console.log('total number is' + totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            wins++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            blue = Math.floor(Math.random() * 11);
            purple = Math.floor(Math.random() * 11);
            green =  Math.floor(Math.random() * 11);
            red  = Math.floor(Math.random() * 11);
            
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            blue = Math.floor(Math.random() * 11);
            purple = Math.floor(Math.random() * 11);
            green =  Math.floor(Math.random() * 11);
            red  = Math.floor(Math.random() * 11);
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
            wins++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            purple = Math.floor(Math.random() * 11);
            blue = Math.floor(Math.random() * 11);
            green =  Math.floor(Math.random() * 11);
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            purple = Math.floor(Math.random() * 11);
            blue = Math.floor(Math.random() * 11);
            green =  Math.floor(Math.random() * 11);
            red  = Math.floor(Math.random() * 11);
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
            wins++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            red = Math.floor(Math.random() * 11);
            purple = Math.floor(Math.random() * 11);
            blue = Math.floor(Math.random() * 11);
            red  = Math.floor(Math.random() * 11);
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            red = Math.floor(Math.random() * 11);
            purple = Math.floor(Math.random() * 11);
            blue = Math.floor(Math.random() * 11);
            green =  Math.floor(Math.random() * 11);
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
            wins++;
            totalNumber = 0;
            randomNumber = Math.floor(Math.random() * 101);
            green =  Math.floor(Math.random() * 11);
            purple = Math.floor(Math.random() * 11);
            blue = Math.floor(Math.random() * 11);
            red  = Math.floor(Math.random() * 11);
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
             totalNumber = 0;
             randomNumber = Math.floor(Math.random() * 101);
             green =  Math.floor(Math.random() * 11);
             purple = Math.floor(Math.random() * 11);
             blue = Math.floor(Math.random() * 11);
             red  = Math.floor(Math.random() * 11);
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




