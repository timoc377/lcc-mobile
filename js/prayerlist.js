var serviceURL = "http://m.go2lighthouse.org/v2/services/";

getPrayerList();

function getPrayerList() {
	$.getJSON(serviceURL + 'getprayerrequests.php', function(data) {
		$('#prayerList').empty();
		myPrayers = data.items;
		$.each(myPrayers, function(index, myPrayer) {
			$('#prayerList').append('<a class="list-group-item" href="prayerDetails.html?id=' + myPrayer.id + '">'
				 + myPrayer.title + '</a>');
		});
	});
}