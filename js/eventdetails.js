$(function(){
var serviceURL = "http://m.go2lighthouse.org/v2/services/";

var id = getUrlVars()["id"];
$.getJSON(serviceURL + 'getevent.php?id='+id, displayEvent);

function displayEvent(data) {
	var myEvent = data.item;
	$('#eventTitle').text(myEvent.title);
	$('#eventStartDateTime').text('Starts: ' + myEvent.dates + ' ' + myEvent.times);
	$('#eventEndDateTime').text('Ends: ' + myEvent.enddates + ' ' + myEvent.endtimes);
	$('#eventVenue').text('Location: ' + myEvent.venue);
	$('#eventCategory').text('Category: ' + myEvent.catname);
	$('#eventDescription').text('Description: ' + myEvent.datdescription);
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
});
