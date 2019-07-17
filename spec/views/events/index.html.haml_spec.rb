require 'rails_helper'

RSpec.describe "events/index", type: :view do
  before(:each) do
    assign(:events, [
      Event.create!(
        :opponent => "Opponent"
      ),
      Event.create!(
        :opponent => "Opponent"
      )
    ])
  end

  it "renders a list of events" do
    render
    assert_select "tr>td", :text => "Opponent".to_s, :count => 2
  end
end
