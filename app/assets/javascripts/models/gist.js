GistCloneApp.Models.Gist = Backbone.Model.extend({

  parse: function(response) {
    console.log(response);
    response['favorites'] = new GistCloneApp.Collections.Favorites(response['favorites'], {
      url: '/gists/' + response["id"] + '/favorite'
    });

    response['gist_files'] = new GistCloneApp.Collections.GistFiles(response['gist_files']);
    return response;
  }
});
