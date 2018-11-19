class Project < ApplicationRecord
  validates :title, :featured, :category, :description, presence: true

  belongs_to :user
  has_many :steps, dependent: :destroy

  accepts_nested_attributes_for :steps
end
