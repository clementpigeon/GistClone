GistCloneApp.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function($rootEl){
    console.log("router initialized");
    this.$rootEl = $rootEl;
  },

  routes:{
    "": "index",
    'gists/new' : 'new',
    'gits/:id': "show"
  },

  index: function(){
    var indexView = new GistCloneApp.Views.GistsIndex();
    this.$rootEl.append(indexView.render().$el);
  },

  new: function(){
    var formView = new GistCloneApp.Views.GistFormView();
    this.$rootEl.html(formView.render().$el);
  },

  show: function(id){
    GistCloneApp.gists.find
    var gistShowView = new GistCloneApp.Views.GistShowView({
      model:
    });
  }
});
