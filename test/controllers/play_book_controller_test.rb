require 'test_helper'

class PlayBookControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get play_book_index_url
    assert_response :success
  end

end
