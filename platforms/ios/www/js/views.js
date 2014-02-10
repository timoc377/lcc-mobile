var eventView = function (adapter, template, listItemTemplate) {

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        adapter.eventsList().done(function(events){
            events.pageTitle = "Events";
            $('.list').html(listItemTemplate(events));
        });
    };

    this.render = function() {
        this.el.empty();
        var data = {pageTitle: 'Events'};
        this.el.html(template(data));
        return this;
    };

    this.initialize();

}

var eventsDetailView = function(adapter, template, eventDetail) {

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '#addToCal', this.addToCalendar);
    };

    this.render = function() {
        this.el.html(template(eventDetail));
        return this;
    };
    this.addToCalendar = function(event){
        event.preventDefault();
        
        var eventInfo = eventDetail.item
           ,startDate = new Date(eventInfo.dates + " " + eventInfo.times)
           ,endDate = new Date(eventInfo.enddates + " " + eventInfo.endtimes)
           ,title = eventInfo.title
           ,location = eventInfo.location
           ,notes = ""
           ,success = function(message) { alert("Success: Added the event \"" +eventInfo.title + "\" to your calendar."); }
           ,error = function(message) { alert("Error: " + message); };
        
        window.plugins.calendar.createEvent(title,location,notes,startDate,endDate,success,error);

    }

    this.initialize();

}

var noticesView = function (adapter, template, listItemTemplate) {

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        adapter.noticesList().done(function(notices){
            notices.pageTitle = "Notices";
            $('.list').html(listItemTemplate(notices));
        });
    };

    this.render = function() {
        this.el.empty();
        var data = {pageTitle: 'Notices'};
        this.el.html(template(data));
        return this;
    };

    this.initialize();

}

var noticesDetailView = function(adapter, template, notice) {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(template(notice));
        return this;
    };

    this.initialize();

}

var prayersView = function (adapter, template, listItemTemplate) {

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        adapter.prayersList().done(function(prayers){
            prayers.pageTitle = "Prayers";
            $('.list').html(listItemTemplate(prayers));
        });
    };

    this.render = function() {
        this.el.empty();
        var data = {pageTitle: 'Prayers'};
        this.el.html(template(data));
        return this;
    };

    this.initialize();

}
var prayerDetailView = function(adapter, template, prayer) {

    this.initialize = function() {
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(template(prayer));
        return this;
    };

    this.initialize();

}