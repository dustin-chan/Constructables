class Api::ProjectsController < ApplicationController
  def create

    @project = Project.new(project_params)

    @project.user_id = current_user.id

    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    projects = search_term ? Project.where("title LIKE ?", "%#{search_term}%") : Project.all

    @projects = projects
  end

  def show
    @project = Project.includes(:steps, :user, :comments => [:user]).find(params[:id])
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
  end

  private

  def project_params
    params.require(:project).permit(:title, :category, :description, :featured,
      :photo, steps_attributes: [:body, :photo, :photo_url] )
  end

  def search_term
    params[:searchTerm]
  end
end
