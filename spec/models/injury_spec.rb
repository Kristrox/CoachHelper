require 'rails_helper'

RSpec.describe Injury, type: :model do
    describe 'attributes' do
        it 'should have proper attributes' do
            expect(subject.attributes).to include('player_id', 'description', 'final_date', 'created_at', 'updated_at')
        end
    end

    describe 'relations' do
        it { is_expected.to belong_to(:player) } 
    end
end