var JSONPAdapter = function() {

    this.initialize = function(data) {
        url = typeof data !== 'undefined' ? data : "http://m.go2lighthouse.org";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    /* Get all service requests */
    this.eventsList = function(id) {
        return $.ajax({url: url + '/services/getevents.php', dataType: "json"});
    }
    this.prayersList = function(id) {
        return $.ajax({url: url + '/v2/services/getprayerrequests.php', dataType: "json"});
    }
    this.noticesList = function(id) {
        return $.ajax({url: url + '/v2/services/getnotices.php', dataType: "json"});
    }   
    /* End Get all service requests*/

    /* Find by id service requests */
    this.findEventById = function(id) {
        return $.ajax({url: url + "/services/getevent.php?id=" + id, dataType: "json"});
    }
    this.findPrayerById = function(id) {
        return $.ajax({url: url + "/v2/services/getprayer.php?id=" + id, dataType: "json"});
    }
    this.findNoticeById = function(id) {
        return $.ajax({url: url + "/v2/services/getnotice.php?id=" + id, dataType: "json"});
    }
    /* End find by id service requests */

}