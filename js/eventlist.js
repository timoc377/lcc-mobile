var serviceURL = "http://m.go2lighthouse.org/services/";

var myEvents;

$('#eventListPage').live('pageshow', function(event) {
	getEventList();
});

function getEventList() {
	$.getJSON(serviceURL + 'getevents.php', function(data) {
		$('#eventList li').remove();
		myEvents = data.items;
		$.each(myEvents, function(index, myEvent) {
			var date = "";
			
			if(myEvent.enddates){
				date = myEvent.dates + ' ' + myEvent.times + ' - ' + myEvent.enddates + ' ' + myEvent.endtimes;
			} else {
				date = myEvent.dates + ' ' + myEvent.times;
			}

			$('#eventList').append('<li><a href="#eventDetailsPage?id=' + myEvent.id + '">' +
					'<h3>' + myEvent.title + '</h3>' +
					'<h4>Date/Time: ' + date + '</h4>' +
					'</a></li>');
		});
		$('#eventList').listview('refresh');
	});
}