class Project < ApplicationRecord
  validates :featured, :category, :image_url, :description, presence: true

  belongs_to :user
  has_many :steps
end
