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
        $("#totalNumber-text").text(totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
         }
        $("wins-text").text(wins);
        $("#losses-text").text(losses);
        
        
    });
    $("#purple").on("click", function () {
        totalNumber = totalNumber + purple;
        console.log(purple);
        console.log('total number is' + totalNumber);
        $("#totalNumber-text").text(totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
         }
        $("wins-text").text(wins);
        $("#losses-text").text(losses);
        

    });

    $("#red").on("click", function () {
        totalNumber = totalNumber + red;
        console.log(red);
        console.log('total number is' + totalNumber);
        $("#totalNumber-text").text(totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
         }
        $("wins-text").text(wins);
        $("#losses-text").text(losses);
        
    });

    $("#green").on("click", function () {
        totalNumber = totalNumber + green;
        console.log(green);
        console.log('total number is' + totalNumber);
        $("#totalNumber-text").text(totalNumber);
        if (totalNumber === randomNumber) {
            alert("You Won!");
            win++;
         }
         else if (totalNumber > randomNumber) {
             alert("Try Again!");
             losses++;
         }
        $("wins-text").text(wins);
        $("#losses-text").text(losses);
     
    });

   // if (totalNumber === randomNumber) {
   //    alert("You Won!");
   //    win++;
   // }
   // else if (totalNumber > randomNumber) {
  //      alert("Try Again!");
  //      losses++;
  //  }
    


    console.log('total number is' + totalNumber);






//Set Html where to display it

    
   
    $("#randomNumber-text").text(randomNumber);
    $("wins-text").text(wins);
    $("#losses-text").text(losses);
    $("#totalNumber-text").text(totalNumber);


});




