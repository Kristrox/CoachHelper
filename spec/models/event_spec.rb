require 'rails_helper'

RSpec.describe Event, type: :model do
    describe 'attributes' do
        it 'should have proper attributes' do
            expect(subject.attributes).to include('opponent', 'event_date', 'event_type', 'created_at', 'updated_at')
        end
    end

    describe 'validations' do
        it { is_expected.to validate_presence_of(:opponent) }
        it { is_expected.to validate_presence_of(:event_date) }
        it { is_expected.to validate_presence_of(:event_type) }
        it { should define_enum_for(:event_type) }
    end
end