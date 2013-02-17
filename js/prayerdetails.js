$(function(){
	var serviceURL = "http://m.go2lighthouse.org/services/";

	$(document).bind("pagebeforechange", function( event, data ) {
	$.mobile.pageData = (data && data.options && data.options.pageData)
	  ? data.options.pageData
	  : null;
	});

	$('#prayerDetailsPage').live('pageshow', function(event) {
		var id = $.mobile.pageData.id;
		$.getJSON(serviceURL + 'getprayer.php?id='+id, displayPrayer);
	});

	function displayPrayer(data) {
		var myPrayer = data.item;
		
		// $('#prayerDescription').hide();
		// $('#prayerDate').hide();
		// $('#prayerDetails').hide();

		myPrayer.title = myPrayer.title.replace(/\\/g, '');
		myPrayer.title = myPrayer.title.replace(/\'/g, '');

		$('#prayerTitle').text(myPrayer.title);
		
		myPrayer.request = myPrayer.request.replace(/\\/g, '');
		myPrayer.request = myPrayer.request.replace(/\'/g, '');

		console.log(myPrayer);
		$('#prayerDescription').text(myPrayer.request);
		$('#prayerDate').text(myPrayer.date);
		$('#prayerDetails').show();
		$('#prayerDetails').listview('refresh');		
	}

})
