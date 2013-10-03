class GistFile < ActiveRecord::Base
  attr_accessible :body, :name, :gist_id

  belongs_to :gist,
  class_name: "Gist",
  primary_key: :id,
  foreign_key: :gist_id

end
