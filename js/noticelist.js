var serviceURL = "http://m.go2lighthouse.org/v2/services/";

$('#noticeListPage').live('pageshow', function(event) {
	getNoticeList();
});

function getNoticeList() {
	$.getJSON(serviceURL + 'getnotices.php', function(data) {
		$('#noticeList li').remove();
		myNotices = data.items;
		$.each(myNotices, function(index, myNotice) {
			$('#noticeList').append('<li><a href="noticeDetails.html?id=' + myNotice.id + '">' +
					'<h3>' + myNotice.title + '</h3>' +
					'</a></li>');
		});
		$('#noticeList').listview('refresh');
	});
}