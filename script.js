let arrAnswer = [5>4, "ананас">"яблоко", "2">"12", undefined==null, undefined===null, null=="\n0\n", null===+"\n0\n",""+1+0, ""-1+0, true+false, 6/"3", "2"*"3", 4+5+"px", "$"+4+5, "4"-2, "4px"-2, 7/0, "-9"+5, "-9"-5, null+1,undefined+1, "\t\n"-2];
for (var i = 0; i < arrAnswer.length; i++) {
	console.log((i+1) + ")   " + arrAnswer[i]);
}