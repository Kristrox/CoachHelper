require 'rails_helper'

RSpec.describe PlayersController, type: :controller do
  describe 'GET #index' do
    subject { get :index }

    #How to test rendering order (Player.all.order(:number)) ??
    describe 'successful response' do
      before { subject }
      it { expect(response).to be_successful }
      it { expect(response).to render_template('index') }
    end

    context 'players' do
      let!(:player1) { create(:player) }
      let!(:player2) { create(:player) }

      it 'returns all playerss' do
        subject
        expect(assigns(:players)).to match_array([player1, player2])
      end
    end
  end
end