class Comment < ApplicationRecord
  validates :body, presence: true
  belongs_to :project
  belongs_to :user
  belongs_to :parent,
    optional: true,
    foreign_key: :parent_comment_id,
    class_name: :Comment
end
