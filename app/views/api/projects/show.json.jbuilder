json.project do
  json.extract! @project, :id, :title, :description, :user_id
  json.authorUsername @project.user.username
  if @project.photo.attached?
    json.photoUrl url_for(@project.photo)
  else
    json.photoUrl = 'none'
  end
end

if @project.steps
  json.steps do
    @project.steps.each do |step|
      if step
        json.set! step.id do
          json.id step.id
          json.body step.body
          if step.photo_url
            json.photoUrl step.photo_url
          elsif step.photo.attached?
            json.photoUrl url_for(step.photo)
          end
          json.projectId step.project_id
        end
      end
    end
  end
end

if @project.comments
  json.comments do
    @project.comments.each do |comment|
      json.set! comment.id do
        json.id comment.id
        json.body comment.body
        json.parent_comment_id comment.parent_comment_id
        json.projectId comment.project_id
        json.authorId comment.user.id
        json.authorUsername comment.user.username
      end
    end
  end
end
