class Comment < ApplicationRecord
  belongs_to :project
  belongs_to :user
  belongs_to :parent,
    optional: true,
    foreign_key: :parent_comment_id,
    class: :Comment,
end
