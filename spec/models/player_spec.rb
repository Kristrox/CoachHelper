require 'rails_helper'

RSpec.describe Player, type: :model do
    
    describe 'attributes' do
        it 'should have proper attributes' do 
            expect(subject.attributes).to include('name', 'surname', 'number', 'birth_date', 'trained_in', 'red_cards', 'yellow_cards', 'user_id','created_at', 'updated_at')
        end
    end
    
    describe 'validations' do
        it { is_expected.to validate_presence_of(:name) }
        it { is_expected.to validate_presence_of(:surname) }
        it { is_expected.to validate_presence_of(:birth_date) }
        it { is_expected.to validate_presence_of(:trained_in) }
        it { is_expected.to validate_numericality_of(:red_cards).only_integer().is_less_than_or_equal_to(1).is_greater_than_or_equal_to(0) }
        it { is_expected.to validate_numericality_of(:yellow_cards).only_integer().is_less_than_or_equal_to(4).is_greater_than_or_equal_to(0) }
    end

    describe 'relations' do
        it { is_expected.to have_many(:injuries) }
    end
end
