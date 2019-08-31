class TrainersController < ApplicationController
  def index
    @trainers = Trainer.all
    render json: @trainers
  end

  def show
    trainer = Trainer.find(params[:id])
    @trainer_pokemons = trainer.pokemons
    render json: @trainer_pokemons
  end

end
