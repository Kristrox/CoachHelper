Rails.application.routes.draw do
  resources :events
  resources :players do
    collection do
      put 'updatePlayer'
      patch 'updatePlayer'

    end
  end
  resources :calendar
  resources :play_books, only: [:show,:new,:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: "home#index"

  put '/players/:id', to: 'players#updatePlayer', as: :update_player_cal
#post '/players/:id', to: 'players#index', as: 'players'

  

  namespace :api do
    namespace :v1 do
      defaults format: :json do
        resources :players, except: [:new, :edit]
      end
    end
  end
end
