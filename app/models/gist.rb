class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  belongs_to :user,
  class_name: "User",
  primary_key: :id,
  foreign_key: :user_id

  has_many :favorites,
  class_name: "Favorite",
  primary_key: :id,
  foreign_key: :gist_id

  has_many :gist_files,
  class_name: "GistFile",
  primary_key: :id,
  foreign_key: :gist_id

  has_many :favoriters, through: :favorites, source: :user

end
