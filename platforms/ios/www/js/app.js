// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

   /* ---------------------------------- Local Variables ---------------------------------- */
   var homeTpl = Handlebars.compile($("#home-tpl").html())
      ,listTpl = Handlebars.compile($("#list-tpl").html())
      ,detailTpl = Handlebars.compile($("#event-detail-tpl").html())
      ,adapter = new JSONPAdapter()
      ,detailsURL = /^#employees\/(\d{1,})/
      ,slider = new PageSlider($('body'))
      ,hash = window.location.hash;

   Handlebars.registerHelper('ifCond', function(v1, v2, options) {
      if(v1 === v2) {
         return options.fn(this);
      }
      return options.inverse(this);
   });

   adapter.initialize().done(function () {
      route();
   });

   /* --------------------------------- Event Registration -------------------------------- */    
   document.addEventListener('deviceready', function () {
      // Style the iOS statusbar
      StatusBar.overlaysWebView( false );
      StatusBar.styleLightContent();
                             

       if (navigator.notification) { // Override default HTML alert with native dialog
         window.alert = function (message) {
            navigator.notification.alert(
               message
               ,null
               ,"Lighthouse Connect"
               ,'Ok'
            );
         };
      }
   }, false);

   FastClick.attach(document.body);
   $(window).on('hashchange', route);

   /* ---------------------------------- Local Functions ---------------------------------- */

   function route() {
      var hash = window.location.hash;

      if(!hash){
         slider.slidePage(new eventView(adapter, homeTpl, listTpl).render().el);
      } else {
         if(hash.indexOf('prayers') != -1){
            if(hash.indexOf('\/') != -1) {
               var arr = hash.split('\/')
                  ,id = arr[1];
               adapter.findPrayerById(Number(id)).done(function(prayer) {
                  prayer.pageTitle = "Prayers";
                  slider.slidePage(new prayerDetailView(adapter, detailTpl, prayer).render().el);
               });

            } else {
               slider.slidePage(new prayersView(adapter, homeTpl, listTpl).render().el);
            }
         }
         if(hash.indexOf('notices') != -1){
            if(hash.indexOf('\/') != -1) {
               var arr = hash.split('\/')
                  ,id = arr[1];
               adapter.findNoticeById(Number(id)).done(function(notice) {
                  notice.pageTitle = "Notices";
                  slider.slidePage(new noticesDetailView(adapter, detailTpl, notice).render().el);
               });

            } else {
               slider.slidePage(new noticesView(adapter, homeTpl, listTpl).render().el);
            }
         }
         if(hash.indexOf('event') != -1){
               var arr = hash.split('\/')
                  ,id = arr[1];
               adapter.findEventById(Number(id)).done(function(eventItem) {
                  eventItem.pageTitle = "Events";
                  slider.slidePage(new eventsDetailView(adapter, detailTpl, eventItem).render().el);
               });
         }
      }
   }

}());