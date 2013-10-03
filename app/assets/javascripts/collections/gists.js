GistCloneApp.Collections.Gists = Backbone.Collection.extend({
  model: GistCloneApp.Models.Gist,
  url: "/gists"
});
