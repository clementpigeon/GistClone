GistCloneApp.Models.Gist = Backbone.Model.extend({

  parse: function(response) {
    console.log(response);
    response['favorites'] = new GistCloneApp.Collections.Favorites(response['favorites'], {
      url: '/gists/' + response["id"] + '/favorite'
    });
    return response;
  }

});
