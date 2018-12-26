class Api::ProjectsController < ApplicationController
  def create

    @project = Project.new(create_project_params)

    @project.user_id = current_user.id
    @project.featured = :false

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
    require 'open-uri'

    @project = Project.find(params[:id])
    updated_steps = updated_steps_params[:steps_attributes]

    updated_steps.each do |updated_step|
      next if updated_step[:photo] #add update step to project_steps? HOW TO KEPP IN ORDER?
      # ActiveRecord::Base.connection_pool.with_connection do
      #   content_provider.logo.attach(
      #     io: photo,
      #     filename: content_provider.website + ".png",
      #     content_type: "image/png"
      #   )
      # end
      if updated_step[:photoUrl]
        # updated_step[:photo] = open( updated_step[:photoUrl] )

        updated_step[:photo] = open(updated_step[:photoUrl])

      end
      # steps.each do |step|
      #   debugger
      #   if updated_step[:photo]
      #   elsif
      #   elsif
      #   end
      #
      #   if step[:body] == updated_step[:body] && url_for(step.photo) == updated_step[:photoUrl]
      #
      #   end
      # end
    end

    new_updated_project_params = updated_project_params

    new_updated_project_params[:steps_attributes] = updated_steps

    if @project.update_attributes(updated_project_params)
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

  def create_project_params
    params.require(:project).permit(:title, :category, :description,
      :photo, steps_attributes: [:body, :photo, :photoUrl] )
  end

  def updated_project_params
    params.require(:project).permit( :title, :category, :description, :photo )
  end

  def updated_steps_params
    params.require(:project).permit( steps_attributes: [:body, :photo, :photoUrl] )
  end

  def search_term
    params[:searchTerm]
  end
end
