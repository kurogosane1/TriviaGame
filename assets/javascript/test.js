function isChecked(){
	var score=0;
	var answered= 0;
	var ansArray= ['b','d','d','c','c','c','d','d','c','c','c','c','e'];
	var one = document.getElementByName('q1');
	for (var i= 0; i<q1;i++){
		if(one[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
	var two=document.getElementByName('q2');
	for (var i= 0; i<q2;i++){
		if(two[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
		 
	var three=document.getElementByName('q3');
	for (var i= 0; i<q3;i++){
		if(three[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
	var four=document.getElementByName('q4');
	for (var i= 0; i<q4;i++){
	if(four[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
		}		
	var five=document.getElementByName('q5');
	for (var i= 0; i<q5;i++){
		if(five[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
	var six=document.getElementByName('q6');
	for (var i= 0; i<q6;i++){
	if(six[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
		}				
	var seven=document.getElementByName('q7');
	for (var i= 0; i<q7;i++){
		if(seven[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
	var eight=document.getElementByName('q8');
	for (var i= 0; i<q8;i++){
		if(eight[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
	var nine=document.getElementByName('q9');
	for (var i= 0; i<q9;i++){
	if(nine[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
		}	
	var ten=document.getElementByName('q10');
	for (var i= 0; i<q10;i++){
		if(ten[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
	var eleven=document.getElementByName('q11');
	for (var i= 0; i<q11;i++){
		if(eleven[i].checked && q1[i]==ansArray[i])
		{
			score++;
			answered++;

		}
	}
	var twelve=document.getElementByName('q12');
	for (var i= 0; i<q12;i++){
			if(twelve[i].checked && q1[i]==ansArray[i])
			{
				score++;
				answered++;
		
			}
		}
		var thirteen=document.getElementByName('q13');
		for (var i= 0; i<q13;i++){
			if(thirteen[i].checked && q1[i]==ansArray[i])
			{
				score++;
				answered++;
	
			}
		}

	results = score;
	$('#scored').html(results);
}