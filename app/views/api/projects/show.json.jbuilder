json.project do
  json.extract! @project, :title, :description, :user_id
  json.authorUsername @project.user.username
  json.steps do
    @project.steps.each do |step|
      json.set! step.id, step.body
    end
  end
end
#
