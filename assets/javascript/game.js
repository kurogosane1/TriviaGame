var time=60;
var newTimer;



//this is the function that would place the timer and see if it works
function timer(){
    if(!time<1)
        {
            time = time-1;
            $('#timer').html(time);

        }
    else{
        document.clearinterval(newTimer);
        $('#timer').append("Countdown done");
        }
}
newTimer = setInterval("timer()",1000);
