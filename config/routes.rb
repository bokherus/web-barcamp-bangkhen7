Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'users/sessions', registrations: 'users/registrations'}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
  get 'participants', to: "home#participants"
  get 'profile', to: 'profile#index'
  get 'registration', to: 'home#registration'
  get 'dev', to: 'dev#index'
  get 'sessions', to: 'home#sessions'
  match ":url" => "home#comingsoon", :via => [:get], :constraints => { :url => /.*/ }, to: redirect('/comingsoon')
end
