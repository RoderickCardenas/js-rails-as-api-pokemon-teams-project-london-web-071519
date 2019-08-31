class PokemonsController < ApplicationController
  def index
  end

  def create
  end

  def show
    trainer_id = Trainer.find(params[:id])
    pokemon = Pokemon.new
    pokemon.createPokemon(trainer_id)
    render json: pokemon
  end
end
