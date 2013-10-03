window.GistCloneApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log("started");

    var $rootEl = $('#content');
    GistCloneApp.gists = new GistCloneApp.Collections.Gists();

    GistCloneApp.gists.fetch({
      success: function() {
        new GistCloneApp.Routers.GistsRouter($rootEl);
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