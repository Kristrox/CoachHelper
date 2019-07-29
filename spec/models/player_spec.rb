require 'rails_helper'

RSpec.describe Player, type: :model do
    
    describe 'attributes' do
        it 'should have proper attributes' do 
            expect(subject.attributes).to include('name', 'surname', 'number', 'birth_date', 'trained_in', 'yellow_cards', 'user_id','created_at', 'updated_at')
        end
    end
    
    describe 'validations' do
        it { is_expected.to validate_presence_of(:name) }
        it { is_expected.to validate_presence_of(:surname) }
        it { is_expected.to validate_presence_of(:birth_date) }
        it { is_expected.to validate_presence_of(:trained_in) }
        it { is_expected.to validate_numericality_of(:yellow_cards).only_integer().is_less_than_or_equal_to(4).is_greater_than_or_equal_to(0) }
    end

    describe 'relations' do
        it { is_expected.to have_many(:injuries) }
    end

    describe '#suspend' do
        let(:user) { create(:user) }

        let!(:player1) { create(:player, user_id: user.id, yellow_cards: 4) }
        let!(:player2) { create(:player, user_id: user.id, yellow_cards: 2) }
    
        it 'should delete old author with .delete_old_authors method' do
            expect { player1.suspend! }.to change(player1, :yellow_cards).from(4).to(0)
            expect(player1.suspended).to be true
            expect { player2.suspend! }.to_not change(player2, :yellow_cards)
            expect(player2.suspended).to be false
        end
    end
end
