class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    @comment.user_id = current_user.id
    @comment.project_id = params[:project_id]

    if @comment.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
