GistCloneApp.Views.GistShowView = Backbone.View.extend({
  template: JST['gists/show'],

  render: function() {
    var that = this;
    console.log(this.model.get('gist_files'));
    var renderedContent = this.template({
      gist: this.model,
      files: this.model.get('gist_files')
    });
    this.$el.html(renderedContent);

    return this;
  }

})