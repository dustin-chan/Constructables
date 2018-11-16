json.project do

end

json.steps do
  @project.steps.each do
    json.set!
  end
end
