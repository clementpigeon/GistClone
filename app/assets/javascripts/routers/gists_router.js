GistCloneApp.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function($rootEl, $sidebarEl){
    console.log("router initialized");
    this.$rootEl = $rootEl;
    this.$sidebarEl = $sidebarEl;
    var indexView = new GistCloneApp.Views.GistsIndex();
    this.$sidebarEl.append(indexView.render().$el);
  },

  routes:{
    "": "index",
    'gists/new' : 'new',
    'gists/:id': "show"
  },

  index: function(){
    this.$rootEl.empty();
  },

  new: function(){
    var formView = new GistCloneApp.Views.GistFormView();
    this.$rootEl.html(formView.render().$el);
  },

  show: function(id){
    console.log('show action, id: ', id)
    var gist = GistCloneApp.gists.get(id);
    console.log(gist);
    var gistShowView = new GistCloneApp.Views.GistShowView({
      model: gist
    });
  this.$rootEl.html(gistShowView.render().$el);
  }
});
