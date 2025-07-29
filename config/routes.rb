Rails.application.routes.draw do
  root 'todos#index'
  
  resources :todos do
    member do
      patch :toggle
    end
  end
  
  # Health check endpoint
  get "up" => "rails/health#show", as: :rails_health_check
  
  # PWA files
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
end
