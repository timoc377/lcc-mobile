$(function(){
	var serviceURL = "http://m.go2lighthouse.org/services/";

	  $(document).bind("pagebeforechange", function( event, data ) {
      $.mobile.pageData = (data && data.options && data.options.pageData)
          ? data.options.pageData
          : null;
      });

	$('#eventDetailsPage').live('pageshow', function(event) {
		var id = $.mobile.pageData.id;
		$.getJSON(serviceURL + 'getevent.php?id='+id, displayEvent);
	});

	function displayEvent(data) {
		var myEvent = data.item;
	     console.log(myEvent.title)
		$('#eventTitle').text(myEvent.title);
		$('#eventStartDateTime').text('Starts: ' + myEvent.dates + ' ' + myEvent.times);
		$('#eventEndDateTime').text('Ends: ' + myEvent.enddates + ' ' + myEvent.endtimes);
		$('#eventVenue').text('Location: ' + myEvent.venue);
		$('#eventCategory').text('Category: ' + myEvent.catname);
		$('#eventDescription').text(myEvent.datdescription);
		$('#eventEventList').listview('refresh');
		
	}

})
