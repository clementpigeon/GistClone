GistCloneApp.Views.GistFileFormView = Backbone.View.extend({

  template: JST['gist_files/form'],

  render: function(){

    this.$el.html(this.template({index: this.options["index"]}));
    return this;

  },

  initialize: function(){

    console.log(this.options["index"]);
  }

  // getData: function() {
 //    var name = this.$el.find("#name_0").val();
 //    var body = this.$el.find("#body_0").val();
 //
 //    return { gist_file_attributes: { name: name, body: body }};
 //
 //  }


})