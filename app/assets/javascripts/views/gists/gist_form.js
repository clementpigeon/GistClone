GistCloneApp.Views.GistFormView = Backbone.View.extend({

  initialize: function() {
    this.childForms = [];

  },

  template: JST['gists/form'],

  events: {
    'submit form': 'save'
  },


  save: function(event){
    event.preventDefault();
    var formData = $(event.target).serializeJSON();
    formData["gist"]["user_id"] = CURRENT_USER_ID;

    console.log(formData);

    GistCloneApp.gists.create(formData);

  },

  render: function(){

    this.$el.html(this.template());

    var gistFileForm = new GistCloneApp.Views.GistFileFormView({index: 0});
    this.childForms.push(gistFileForm);
    this.$el.find(".add_file_forms").append(gistFileForm.render().$el);

    gistFileForm = new GistCloneApp.Views.GistFileFormView({index: 1});
    this.childForms.push(gistFileForm);
    this.$el.find(".add_file_forms").append(gistFileForm.render().$el);

    return this;
  }


})