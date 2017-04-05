var myVar ;

function myStartFunction() {
	document.getElementById("start").disabled=true;
	document.getElementById("start").style.color="lightgrey";
	var interval = document.getElementById("numseconds").value*1000;
	//window.alert(	interval);
	myVar = setInterval(myTimer, interval);    
	
}

/* Ratings assume values between 1-5  */
/* 1 - numusers possible */
/* 1- numchannels possible */
/* 3 event types possible ie , 1 (channel change),2 (rating),3 (issue)*/
/* Do not log switch off event-type */


function randomEventGenerator(){
	var eventTypes={min:1,max:3};
	var channels={min:1 ,max: document.getElementById("numchannels").value};
	var users={min:1,max: document.getElementById("numusers").value};
	var ratings ={min:1,max:5};
	var issues ={min:0,max:1};// this is array index into issueValues*/
	var issueValues=["UNCLEAR","NO PICTURE"];
	var channelValues=["","BBC","CNN","NBC","CBS","MSNBC","ESPN","NATGEO","HBO","MTV","TCM"];

	var record = new Object();
	record.eventType= eventTypes.min + Math.floor(Math.random() * eventTypes.max); /* values between 1 and 3 */
	record.chID = channels.min + Math.floor(Math.random() * channels.max);
	record.chDesc=channelValues[record.chID];
	record.userID = 10000+users.min + Math.floor(Math.random() * users.max);
	record.rating = ratings.min + Math.floor(Math.random() * ratings.max);
	record.issue = issueValues[issues.min + Math.floor(Math.random() * issues.max)];
	record.ratingOrIssue="0";

	if ( record.eventType ==2) {
		record.ratingOrIssue = record.rating.toString();
		}
	else if ( record.eventType ==3){
		record.ratingOrIssue = record.issue;
	}
		
	return record;

}
function myTimer() {
	
	var date_time= createDate();
    var xmlhttp = new XMLHttpRequest();
	var record = randomEventGenerator();
	var displayRecord = " User: "+record.userID+" Channel: " + record.chDesc+ " Rating: " + record.ratingOrIssue ;
	var phpCall="../../../php/demo_random_event_insert.php?date_time="+date_time+"&user_id="+ record.userID +"&ch_id=" + record.chID + "&ch_desc=" + record.chDesc+ "&rating_issue=" + record.ratingOrIssue + "&event_type=" +record.eventType;
	//window.alert(phpCall);
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
			document.getElementById("datetime").innerHTML = "Time: "+date_time;       
			document.getElementById("eventdata").innerHTML = displayRecord;       
			}
    }
	
    xmlhttp.open("GET", phpCall, true);
	
	 
    xmlhttp.send();
}
function createDate(){
	var d = new Date();
	var date=d.toISOString().substr(0,10);
   // var time = d.toLocaleTimeString();
	var time = d.toISOString().substr(11,8);
	var datetime= date+" "+time;
	return datetime;
}
function myStopFunction() {
    clearInterval(myVar);
	document.getElementById("start").disabled=false;
}
