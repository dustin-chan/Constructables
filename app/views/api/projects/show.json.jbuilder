json.project do
  json.extract! @project, :id, :title, :description, :user_id
  json.authorUsername @project.user.username
  if @project.photo.attached?
    json.photoUrl url_for(@project.photo)
  else
    json.photoUrl = 'none'
  end
end
#
json.steps do
  @project.steps.each do |step|
    json.set! step.id do
      json.body step.body
      json.photoUrl url_for(step.photo)
    end
  end

end
