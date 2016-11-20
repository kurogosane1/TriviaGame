var score=0;
var answered=0;
var unAnswered = 13;
var ansArray= ['b','d','d','c','c','c','d','d','c','c','c','c','e'];
var selected=[];

$(document).ready(function(){
    event.preventDefault();
    function isChecked(){
    event.preventDefault();
    var score=0;
    var answered=0;
    var unAnswered = 13;
    var ansArray= ['b','d','d','c','c','c','d','d','c','c','c','c','e'];
    var selected=[];
    var numOfQues = 13;

   var q1 = document.forms['quiz']['q1'].value;
   var q2 = document.forms['quiz']['q2'].value;
   var q3 = document.forms['quiz']['q3'].value;
   var q4 = document.forms['quiz']['q4'].value;
   var q5 = document.forms['quiz']['q5'].value;
   var q6 = document.forms['quiz']['q6'].value;
   var q7 = document.forms['quiz']['q7'].value;
   var q8 = document.forms['quiz']['q8'].value;
   var q9 = document.forms['quiz']['q9'].value;
   var q10 = document.forms['quiz']['q10'].value;
   var q11 = document.forms['quiz']['q11'].value;
   var q12 = document.forms['quiz']['q12'].value;
   var q13 = document.forms['quiz']['q13'].value;


   for ( var i= 1; i<= ansArray.length; i++)
       {
           if (eval('q'+i)=='')
               {
                   alert('You missed question number'+ i)
               }
       }
        for ( var i=1; i <= ansArray.length; i++)
            {
                if (eval('q'+i)== ansArray[i-1])
                    {
                        score++;
                    }
            }
    var result = document.getElementById('scored');
    results.innerHTML = results;
    alert('You scored'+ score+ 'out of '+ numOfQues);
    return false;
    }
});

//    $(document).on('click', 'input[type="submit"]', function(){
//
//    console.log($('input[name="q2"]:checked').val());
//
//    var sel1 = document.getElementsByName('q1').value;
//
//
//    })
//
//
//
//
//    }
//


