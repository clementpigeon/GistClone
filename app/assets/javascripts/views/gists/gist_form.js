GistCloneApp.Views.GistFormView = Backbone.View.extend({

  template: JST['gists/form'],

  events: {
    'submit form': 'save'
  },

  save: function(event){
    event.preventDefault();
    var formData = $(event.target).find("input").val();

    GistCloneApp.gists.create({title: formData, user_id: CURRENT_USER_ID});

  },

  render: function(){

    this.$el.html(this.template());
    return this;

  }


})