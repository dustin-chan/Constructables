class Step < ApplicationRecord
  validates :body, presence: true

  belongs_to :project

  has_one_attached :photo
end
