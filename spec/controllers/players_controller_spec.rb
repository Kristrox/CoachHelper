require 'rails_helper'

RSpec.describe PlayersController, type: :controller do

  describe 'GET #index' do

    subject { get :index }

    # How to test rendering order (Player.all.order(:number)) ??
    describe 'successful response' do
      before { subject }
      it { expect(response).to be_successful }
      it { expect(response).to render_template('index') }
    end

    context 'players' do
      
      let!(:user1) { create(:user) }
      before { sign_in user1 }

      # it "should have a current_user" do
      #   expect(User.find(session[user1.id])).to_not eq(nil)
      # end

      let!(:player1) { create(:player, user_id: user1.id) }
      let!(:player2) { create(:player, user_id: user1.id) }

      it 'returns all players' do
        subject
        expect(assigns(:players)).to match_array([player1, player2])
      end
    end
  end
end