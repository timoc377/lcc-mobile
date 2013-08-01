$('#prayerDetailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getprayer.php?id='+id, displayPrayer);
});

function displayPrayer(data) {
	var myPrayer = data.item;
	console.log(data);
	$('#prayerTitle').text(myPrayer.title);
	$('#prayerDescription').text(myPrayer.request);
	$('#prayerDate').text('Added: ' + myPrayer.date);
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
