window.GistCloneApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log("started");

    var $rootEl = $('#content');
    var $sidebarEl = $('#sidebar');
    GistCloneApp.gists = new GistCloneApp.Collections.Gists();

    GistCloneApp.gists.fetch({
      success: function() {
        new GistCloneApp.Routers.GistsRouter($rootEl, $sidebarEl);
        Backbone.history.start();
      },
      error: function() {
        console.log("major fail.");
      }

    })

  }
};

$(document).ready(function(){
  GistCloneApp.initialize();
});