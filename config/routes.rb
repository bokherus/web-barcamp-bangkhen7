Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
  get 'participants', to: "home#participants"
  match ":url" => "home#comingsoon", :via => [:get], :constraints => { :url => /.*/ }, to: redirect('/comingsoon')
end
