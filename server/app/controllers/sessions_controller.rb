class SessionsController < ApplicationController
  def login
    render json: {success: true}
  end
end
