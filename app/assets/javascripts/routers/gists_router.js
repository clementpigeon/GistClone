GistCloneApp.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function($rootEl){
    console.log("router initialized");
    this.$rootEl = $rootEl;
  },

  routes:{
    "": "index"
  },

  index: function(){
    var indexView = new GistCloneApp.Views.GistsIndex();
    this.$rootEl.append(indexView.render().$el);
  }
});
