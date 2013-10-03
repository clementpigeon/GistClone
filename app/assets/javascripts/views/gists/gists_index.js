GistCloneApp.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],

  render: function() {
    var that = this;


    var renderedContent = this.template();
    this.$el.html(renderedContent);

    GistCloneApp.gists.each(function(gist){
      var detailView = new GistCloneApp.Views.GistDetailView({
        model: gist
      });
      that.$('ul').append(detailView.render().$el);
    })

    return this;
  }

});
