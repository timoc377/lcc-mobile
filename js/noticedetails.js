$(function(){
	var serviceURL = "http://m.go2lighthouse.org/services/";

	$(document).bind("pagebeforechange", function( event, data ) {
	$.mobile.pageData = (data && data.options && data.options.pageData)
	  ? data.options.pageData
	  : null;
	});

	$('#noticeDetailsPage').live('pageshow', function(event) {
		var id = $.mobile.pageData.id;
		$.getJSON(serviceURL + 'getnotice.php?id='+id, displayNotice);
	});

	function displayNotice(data) {
		var myNotice = data.item;
		console.log(data);
		$('#noticeTitle').text(myNotice.title);
		myNotice.description = myNotice.description.replace(/\<p\>/g, '');
		myNotice.description = myNotice.description.replace(/\<\/p\>/g, '');
		$('#noticeDescription').text(myNotice.description);
		$('#noticeList').listview('refresh');		
	}

})
