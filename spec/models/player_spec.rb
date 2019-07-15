require 'rails_helper'

RSpec.describe Player, type: :model do
    
    describe 'attributes' do
        it 'should have proper attributes' do 
            expect(subject.attributes).to include('name', 'surname', 'bith_date', 'trained_in_club', 'trained_in_country', 'european', 'red_cards', 'yellow_cards', 'end_of_contusion')
        end
    end
    
    describe 'validations' do
        it { is_expected.to validate_presence_of(:name) }
        it { is_expected.to validate_presence_of(:surname) }
        it { is_expected.to validate_presence_of(:bith_date) }
        it { is_expected.to validate_presence_of(:trained_in_club) }
        it { is_expected.to validate_presence_of(:trained_in_country) }
        it { is_expected.to validate_presence_of(:european) }
        it { is_expected.to validate_numericality_of(:red_cards) }
        it { is_expected.to validate_numericality_of(:yellow_cards) }
    end


    describe 'callbacks' do
        let(:player) { create(:player) }
        
        it 'should set red cards to 0' do 
            expect(player.red_cards).to eq(0)
        end

        it 'should set red yellow cards to 0' do
            expect(player.yellow_cards).to eq(0)
        end

        it 'should set red yellow cards to 0' do
            expect(player.end_of_contusion).to eq(nil)
        end
    end

    describe '#expiration_date_cannot_be_in_the_past' do
        let(:player) { create(:player) }
        
        it 'should require future date' do
            player[:end_of_contusion] = Date.today
            expect(player).to be_valid

            player[:end_of_contusion] = Date.today.prev_month
            expect(player).to_not be_valid
        end
    end

end
