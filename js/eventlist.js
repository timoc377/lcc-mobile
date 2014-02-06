$(function(){
	var serviceURL = "http://m.go2lighthouse.org/v2/services/";
	var myEvents;

	getEventList();

	$('#test').on('touchstart', function(){
		var startDate = new Date("September 24, 2013 13:00:00");
		endDate = new Date("September 24, 2013 14:30:00"),
		title = "My nice event",
		location = "Home",
		notes = "Some notes about this event.",
		success = function(message) { alert("Success: " + JSON.stringify(message)); },
		error = function(message) { alert("Error: " + message); };

		window.plugins.calendar.createEvent(title,location,notes,startDate,endDate,success,error);
		alert(window.plugins.calendar);
	});

	function getEventList() {
		var startDate = new Date("September 24, 2013 13:00:00")
			,endDate = new Date("September 24, 2013 14:30:00")
			,title = "My nice event"
			,location = "Home"
			,notes = "Some notes about this event."
			,success = function(message) { alert("Success: " + JSON.stringify(message)); }
			,error = function(message) { alert("Error: " + message); };

		window.plugins.calendar.createEvent(title,location,notes,startDate,endDate,success,error);
		
		$.getJSON(serviceURL + 'getevents.php', function(data) {
			$('#eventList').empty();
			myEvents = data.items;
	      
			$.each(myEvents, function(index, myEvent) {
				$('#eventList').append('<a class="list-group-item" href="eventDetails.html?id=' + myEvent.id + '">' + myEvent.title + '<br />' + 
						'Date/Time: ' + myEvent.dates + ' ' + myEvent.times + ' - ' + myEvent.enddates + ' ' + myEvent.endtimes + '<br />' +
						'</a>');
	               
			});
		});
	}
});