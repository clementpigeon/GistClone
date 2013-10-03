GistCloneApp.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],

  render: function() {
    var renderedContent = this.template({
      gists: GistCloneApp.gists
    });
    this.$el.html(renderedContent);
    return this;
  }

});
