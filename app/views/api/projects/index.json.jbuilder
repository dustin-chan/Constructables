@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :category, :user_id
    json.authorUsername project.user.username
    if project.photo.attached?
      json.photoUrl url_for(project.photo)
    else
      json.photoUrl = 'none'
    end
  end
end
