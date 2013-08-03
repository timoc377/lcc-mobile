$('#noticeDetailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getnotice.php?id='+id, displayNotice);
});

function displayNotice(data) {
	var myNotice = data.item;
	console.log(data);
	$('#noticeTitle').text(myNotice.title);
	$('#noticeDescription').text(myNotice.description);
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
