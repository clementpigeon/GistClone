GistCloneApp::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  resources :gists, only: [:create, :index, :destroy] do
    resource :favorite, only: [:create, :destroy]
  end

  resources :favorites, only: [:index]

  root :to => "root#root"
end
