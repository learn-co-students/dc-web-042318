class Book < ActiveRecord::Base
  belongs_to :author


  def author_name
    if author
      author.name
    else
      'Unknown Author'
    end
  end

end