require 'rails_helper'

RSpec.describe CalendarController, type: :controller do
    let(:user) { create(:user) }
    before { sign_in user }

    describe 'GET #index' do
        subject { get :index }
        it { expect(subject).to be_successful }
        it { expect(subject).to render_template('index') }
    end
end