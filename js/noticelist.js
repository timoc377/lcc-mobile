var serviceURL = "http://m.go2lighthouse.org/v2/services/";

	getNoticeList();

function getNoticeList() {
	$.getJSON(serviceURL + 'getnotices.php', function(data) {
		$('#noticeList').empty();
		myNotices = data.items;
		$.each(myNotices, function(index, myNotice) {
			$('#noticeList').append('<a class="list-group-item" href="noticeDetails.html?id=' + myNotice.id + '">' +
					myNotice.title +
					'</a>');
		});
	});
}