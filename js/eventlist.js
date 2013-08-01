var serviceURL = "http://m.go2lighthouse.org/v2/services/";

var myEvents;

$('#eventListPage').live('pageshow', function(event) {
	getEventList();
});

function getEventList() {
	$.getJSON(serviceURL + 'getevents.php', function(data) {
		$('#eventList li').remove();
		myEvents = data.items;
		$.each(myEvents, function(index, myEvent) {
			$('#eventList').append('<li><a href="eventDetails.html?id=' + myEvent.id + '">' +
					'<h3>' + myEvent.title + '</h3>' +
					'<h4>Date/Time: ' + myEvent.dates + ' ' + myEvent.times + ' - ' + myEvent.enddates + ' ' + myEvent.endtimes + '</h4>' +
					'</a></li>');
		});
		$('#eventList').listview('refresh');
	});
}