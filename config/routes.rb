Rails.application.routes.draw do
  resources :events
  resources :players
  resources :calendar, only: [:index,:show]
  resources :play_books, only: [:show,:new,:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: "home#index"
  

  namespace :api do
    namespace :v1 do
      defaults format: :json do
        resources :players, except: [:new, :edit]
      end
    end
  end
end
