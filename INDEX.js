while(0===0){
    //Prompt user for an option.
    var Opt = prompt("Welcome to Shoshard's Program. Press 1 to Count. Press 2 to use a calculator. Press q to Quit.");
    if (Opt === "q" || Opt === "Q"){
            //If user hits "Q" or "q" they can quit the program.
            break;
    }
    else if (Opt === "1"){
        //Going option 1
        var Opt2 = prompt("Press 1 to count by 1. Press 2 to count by 2. Press q to go back.");
            //Giving user the option to go back to menu or continue with count.
        if (Opt2 === "1"){
            //Option 1
            var num1 = parseInt(prompt("Enter the number you want to count to."));
            var x = 1;
            //Counting to user input.
            while (x <= num1){
                console.log(x);
                x++;
                }

            }
        else if (Opt2 === "2"){
            //Option 2
            var num4 = parseInt(prompt("Enter the number you want to count to."));
            var y = 1;
            //Counting to user input.
            while (y <= num4){
                console.log(y);
                y = y + 2;
                }
            }
        else if (Opt2 === "Q" || Opt2 === "q"){
            //Sending user back to menu.
            alert("Heading Back!");
            }

        else{
            //If user input an invalid answer it will send them back to menu.
            alert("INVALID ANSWER");
        }
    }
    else if (Opt === "2") {
        var Opt3 = prompt("Press A to Add. Press S to Subtract. Press q to go back.");
        //Giving user the option to go back to menu or continue with calculator.
        if (Opt3 === "a" || Opt3 === "A") {
            var num2 = parseInt(prompt("Enter a number."));
            var num3 = parseInt(prompt("Enter another number."));
            var sum = num2 + num3;
            //Adding user inputs
            alert("The sum is " + sum);
        }

        else if (Opt3 === "s" || Opt3 === "S") {
            var num5 = parseInt(prompt("Enter a number."));
            var num6 = parseInt(prompt("Enter another number."));
            var diff = num5 - num6;
            //Subtracting user inputs
            alert("The difference is " + diff);
        }

        else if (Opt3 === "q" || Opt3 === "Q") {
            //Sending user back to menu.
            alert("Heading Back")
        }
        else{
            alert("INVALID ANSWER")
        }
    }
    else {
        alert("INVALID ANSWER")
    }

}


