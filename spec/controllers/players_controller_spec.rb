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

  describe 'GET #new' do
    before { get :new }

    describe 'successful response' do
      it { expect(response).to be_successful }
      it { expect(response).to render_template }
    end

    context 'player' do
      it 'returns one outhor by given id' do
        expect(assigns(:player)).to be_a(Player)
        expect(assigns(:player).persisted?).to eq(false)
      end
    end
  end

  describe 'GET #edit' do
    let!(:user) { create(:user) }
    before { sign_in user }
    let(:player) { create(:player, user_id: user.id) }
    before { get :edit, params: { id: player.id } }

    describe 'successful response' do
      it { expect(response).to be_successful }
      it { expect(response).to render_template }
    end

    context 'player' do
      it 'returns one author by given id' do
        expect(assigns(:player)).to eq(player)
      end
    end
  end

end