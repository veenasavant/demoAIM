// COPYRIGHT INFOSYS AIM 1.1 2016-2017 

function social_channel(ch){
	
	if (ch=="OFF"){
		ch="xfinity";
	}
	fb_channel(ch);
	tw_channel(ch);
	
}
function fb_channel(ch){
	source = "http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F"+ch+"&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435";
   document.getElementById("fb_frame").src=source;
}

function tw_channel(ch){
var anchor = document.createElement("A");
var att = document.createAttribute("class");       // Create a "class" attribute
	att.value = "twitter-timeline";    
	anchor.setAttributeNode(att);
	att = document.createTextNode("Tweets by");
	anchor.appendChild(att);
	att= document.createAttribute("href");
	att.value = "https://twitter.com/"+ch;
	anchor.setAttributeNode(att);
	att= document.createAttribute("data-widget-id");
	att.value = "808122197688451072";
	anchor.setAttributeNode(att);
	att= document.createAttribute("data-screen-name");
	att.value = ch;
	anchor.setAttributeNode(att);

	var parnode=document.getElementById("tw");
	var scriptnode = parnode.firstChild;
	parnode.insertBefore(anchor,scriptnode);
	anchor.style.display='inline-block';

	var element = document.getElementById("twitter-wjs");
	if(element){
	element.parentNode.removeChild(element);
	};

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	//window.alert("Inside Twitter Script");
	if(!d.getElementById(id)){
	js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);
	}}(document,"script","twitter-wjs");

}

function displayDate() {   
    document.getElementById("eta").innerHTML = Date() ;
};
function displayChannel(val) {
	
    //document.getElementById("channel").innerHTML=val;
	
	switch (val) {
	case "OFF":
		//document.getElementById("channel").innerHTML="...";
		document.getElementById("video").src="";
		break;
    case "BBC":
        document.getElementById("video").src="https://www.youtube.com/embed/pyMjJFSez1w?autoplay=1";
		break;
    case "CNN":
		document.getElementById("video").src="https://www.youtube.com/embed/jK1ZaS6mcBc?autoplay=1";
		break;
	case "CBS":
        document.getElementById("video").src="https://www.youtube.com/embed/SV5DqxgW764?autoplay=1";
		break;
    case "NATGEO":
        document.getElementById("video").src="https://www.youtube.com/embed/Ecep41XJmzc?autoplay=1";
		break;
	case "MSNBC":
        document.getElementById("video").src="https://www.youtube.com/embed/CpYO0Emc8kY?autoplay=1";
         break;
    case "NBC":
        document.getElementById("video").src="https://www.youtube.com/embed/c8r1n9qruns?autoplay=1";
		break;
	case "HBO":
		document.getElementById("video").src="https://www.youtube.com/embed/3lCPbCM0tVk?autoplay=1";
		break;
    case "TCM":
        document.getElementById("video").src="https://www.youtube.com/embed/FrXM7dC9PoQ?autoplay=1";
		break;
    case "MTV":
        document.getElementById("video").src="https://www.youtube.com/embed/XZGiVzIr8Qg?autoplay=1";
         break;
    case "ESPN":
        document.getElementById("video").src="https://www.youtube.com/embed/NmFxqGegyyg?autoplay=1";
         break;
    }
	
};
