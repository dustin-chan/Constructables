class Project < ApplicationRecord
  validates :title, :featured, :category, :description, presence: true

  belongs_to :user
  has_many :steps, dependent: :destroy
  has_many :comments, dependent: :destroy

  has_one_attached :photo

  accepts_nested_attributes_for :steps
end
