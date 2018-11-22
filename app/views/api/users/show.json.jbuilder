json.extract! @user, :id, :username, :email, :description
if @user.photo.attached?
  json.photoUrl url_for(@user.photo)
else
  json.photoUrl = 'avatar'
end
