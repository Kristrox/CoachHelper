require 'rails_helper'

RSpec.describe "events/show", type: :view do
  before(:each) do
    @event = assign(:event, Event.create!(
      :opponent => "Opponent"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Opponent/)
  end
end
