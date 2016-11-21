//This is the pseduo code that will point out what will happen next//
//This is the fade in and fadeout function that would show the respective dive sections related to it
$(document).ready(function () {
    $('#wrapper1').hide();
    $('#score').hide();
    $('#clockCounter').hide();
    $('#enter').click(function () {
        $('#wrapper1').fadeIn(2000);
        $('#clockCounter').fadeIn(2000);
        $('#intro').fadeOut(2000);
    });
    $('#clicker').click(function () {
        $('score').fadeIn(2000);
        $('#wrapper1').fadeOut(2000);
    });
    //    This is the timer function setup//
    var count = 44; //time that would be aloted to the user//
    var counter = setInterval(timer, 1000); // it would count down by 1 second each//
    //This is the function that would take action once the count down timer ends
    function timer() {
        count -= 1;
        if (count === 0) {
            clearInterval(counter);
            $('score').fadeIn(2000);
            $('#wrapper1').fadeOut(2000);
        }
        $('#timer').html(count);
    }
    $(document).on('click keypress', 'input[type="submit"]', function () {
        event.preventDefault(); // This shall prevent the page from refreshing upon the click of the submit button
        //Goal//
        //1. upon completion of the quiz or when time runs out then the code to verify the input or the buttons that were selected and then that would then collect the checked and correct answers and then adds the score//
        var score = 0; //This is the score that the user shall start with//
        var answered = 0; //This is the count for the number of questions answered//
        var unAnswered = 13; //This is the count that would decrease with the number of questions not answered//
        var ansArray = ['b', 'd', 'd', 'c', 'c', 'c', 'd', 'd', 'c', 'c', 'c', 'c', 'e']; //This is the answer to the questions//
        var selected = []; //This is where the values of the input button are going to be store so that they can then be compared latter//
        wrong = 0;

        function selector() {
            //       this forloop is going to seach for the input's with the names    attribute that matches and is checked and if it does then it adds the value to the array//
            for (var i = 1; i <= 13; i++) {
                selected[i - 1] = $('input[name="qi"].checked').val();
            }
        }

        function isChecked() // this is the function used when the button is clicked//
        {
            event.preventDefault(); //Again, to prevent the code from refreshing the browser//
            for (var j = 0; j < 13; j++) {
                if (selected[j] === true) //first the values need to be checked //
                {
                    for (var i = 0; i < selected.length; i) //this is then to see if the values selected match the answer//
                    {
                        if (selected[i].val() == ansArray[i]) {
                            score++; //if it does match, then the answer is correct and then shall add to the score//
                            answered++;
                            unAnswered--;
                        }
                        else { //this is the case where the answer does not match with the answer and is therefore wrong//
                            wrong++;
                            answered++;
                            unAnswered--; //this means the user did answer accept that he didn't get it right//
                        }
                    }
                }
                else {}
            }
        }
        timer();
        selector(); //This is to create the selector
        isChecked(); //this is to run the function//
        $('#scored').html(score); //This is to push the score to the html file//
        $('#unanswered1').html(unAnswered); //the same as above//
        $('#answered1').html(answered); //The same as above//
    });
});
