var serviceURL = "http://m.go2lighthouse.org/services/";

$('#prayerListPage').live('pageshow', function(event) {
	getPrayerList();
});

function getPrayerList() {
	$.getJSON(serviceURL + 'getprayerrequests.php', function(data) {
		$('#prayerList li').remove();
		myPrayers = data.items;
		console.log(myPrayers);
		$.each(myPrayers, function(index, myPrayer) {
			$('#prayerList').append('<li><a href="#prayerDetailsPage?id=' + myPrayer.id + '">' +
					'<h3>' + myPrayer.title + '</h3>' +
					'</a></li>');
		});
		$('#prayerList').listview('refresh');
	});
}