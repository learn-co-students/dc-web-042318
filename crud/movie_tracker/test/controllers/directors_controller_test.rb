require 'test_helper'

class DirectorsControllerTest < ActionDispatch::IntegrationTest
  test "should get show," do
    get directors_show,_url
    assert_response :success
  end

  test "should get index" do
    get directors_index_url
    assert_response :success
  end

end
