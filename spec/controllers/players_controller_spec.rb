require 'rails_helper'

RSpec.describe PlayersController, type: :controller do

  let(:user) { create(:user) }
  before { sign_in user }

  describe 'GET #index' do

    subject { get :index }

    describe 'successful response' do
      before { subject }
      it { expect(response).to be_successful }
      it { expect(response).to render_template('index') }
    end

    context 'players' do

      let!(:player1) { create(:player, user_id: user.id, number: 1) }
      let!(:player2) { create(:player, user_id: user.id, number: 2) }

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

  describe 'POST #create' do
    let(:valid_attributes) { { player: attributes_for(:player, user_id: user.id) } }
    let(:invalid_attributes) { { player: attributes_for(:player, user_id: user.id, name: nil) } }

    context 'valid attributes' do
      subject { post :create, params: valid_attributes }
      it { expect(subject).to redirect_to('/players') }
      it { expect { subject }.to change(Player, :count).by(1) } 
    end

    context 'invalid attributes' do
      subject { post :create, params: invalid_attributes }
      it { expect(subject).to render_template('new') }
      it { expect { subject }.to_not change(Player, :count) }
    end
  end

  describe 'GET #edit' do
    let(:player) { create(:player, user_id: user.id) }
    before { get :edit, params: { id: player.id } }

    describe 'successful response' do
      it { expect(response).to be_successful }
      it { expect(response).to render_template('edit') }
    end

    context 'player' do
      it 'returns one author by given id' do
        expect(assigns(:player)).to eq(player)
      end
    end
  end

  describe 'PUT #update' do
    let(:player) { create(:player, user_id: user.id) }
    let(:valid_attributes) { {id: player.id, player: attributes_for(:player) } }
    let(:invalid_attributes) { {id: player.id, player: attributes_for(:player, name: nil) } }

    context 'valid attributes' do
      subject { put :update, params: valid_attributes }
      it { expect(subject).to redirect_to(players_url) }

      it 'redirect with notice' do
        subject
        expect(flash[:notice]).to be_present
      end

      it 'updates author' do
        subject
        expect(player.reload.name).to eq(valid_attributes[:player][:name])
      end
    end

    context 'invalid attributes' do
      subject { put :update, params: invalid_attributes }
      it { expect(subject).to render_template(:edit) }
      it { expect { subject }.not_to change(player, :name) }
      it { expect { subject }.not_to change(player, :surname) }
    end
  end

  describe 'DELETE #destroy' do
    let(:player) { create(:player, user_id: user.id) }
    subject{ delete :destroy, params: {id: player.id } }
    it { expect(subject).to redirect_to(players_url) }

    it 'redirect with notice' do
      subject
      expect(flash[:notice]).to be_present
    end

    it 'delete player' do
      player
      expect { subject }.to change(Player, :count).by(-1)
    end
  end
end