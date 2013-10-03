GistCloneApp.Views.GistDetailView = Backbone.View.extend({

  tagName: "li",

  template: JST['gists/detail'],

  events: {
    "click button.favorite": "favorite",
    "click button.unfavorite": "unfavorite"
  },

  render: function() {
    var that = this;

    if (that.model.get('favorites').findWhere({user_id: CURRENT_USER_ID})) {
      this.$el.addClass("favorited");
    }

    var renderedContent = this.template({
      gist: that.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  favorite: function(event) {
    var that = this;
    event.preventDefault();

    var favoritesCollection = this.model.get('favorites');
    console.log(favoritesCollection);
    favoritesCollection.create({
      user_id: CURRENT_USER_ID,
      gist_id: that.model.get("id")
    });

    this.$el.addClass("favorited");
  },

  unfavorite: function(event) {
    var that = this;
    event.preventDefault();

    var favoritesCollection = this.model.get('favorites');
    console.log(favoritesCollection);

    var favoriteModel = favoritesCollection.findWhere({user_id: CURRENT_USER_ID});
    favoriteModel.destroy({url: '/gists/' + this.model.get("id") + '/favorite'});

    this.$el.removeClass("favorited");
  },

});
