class Step < ApplicationRecord
  belongs_to :project

  #custom validation if neither present must be one

  has_one_attached :photo
end
