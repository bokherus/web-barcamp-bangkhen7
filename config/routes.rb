Rails.application.routes.draw do

  # Admins
  devise_for :admins, :controllers => {sessions: 'admins/sessions'}
  namespace :admin do
    resources :users, only: [:index, :show, :update]
    get 'overview', to: 'overview#index'
    root to: 'overview#index'
  end

  # Users
  devise_for :users, :controllers => {sessions: 'users/sessions', registrations: 'users/registrations'}

  root to: "home#index"

  get 'participants', to: "home#participants"
  get 'registration', to: 'home#registration'
  get 'resend', to: 'home#resend'
  post 'resend', to: 'home#resend'
  get 'dev', to: 'dev#index'
  get 'welcome/:id', to: 'home#welcome', as: 'welcome'
  match ":url" => "home#comingsoon", :via => [:get], :constraints => { :url => /.*/ }, to: redirect('/comingsoon')

end
