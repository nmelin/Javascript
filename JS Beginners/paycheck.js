var paycheck=0, expenses=0;

paycheck += Number(prompt("How much did you earn?"));
expenses += Number(prompt("how much did you spend?"));

if (expenses > paycheck)
	alert("you need to spend less or make more!");
	else
		alert("you're doing good.  Put some money in savings!");