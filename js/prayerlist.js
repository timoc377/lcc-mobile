var serviceURL = "http://m.go2lighthouse.org/v2/services/";

$('#prayerListPage').live('pageshow', function(event) {
	getPrayerList();
});

function getPrayerList() {
	$.getJSON(serviceURL + 'getprayerrequests.php', function(data) {
		$('#prayerList li').remove();
		myPrayers = data.items;
		$.each(myPrayers, function(index, myPrayer) {
			$('#prayerList').append('<li><a href="prayerDetails.html?id=' + myPrayer.id + '">' +
					'<h3>' + myPrayer.title + '</h3>' +
					'</a></li>');
		});
		$('#prayerList').listview('refresh');
	});
}