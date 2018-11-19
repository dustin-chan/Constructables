@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :category, :user_id
    json.authorUsername project.user.username
  end
end
