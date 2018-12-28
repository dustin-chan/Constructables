class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    @comment.user_id = current_user.id
    @comment.project_id = params[:project_id]

    if @comment.save
      @project = Project.includes(:steps, :user, :comments => [:user]).find(@comment.project_id)
      render "api/projects/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes(comment_params)
      @project = Project.find(@comment.project_id)
      render "api/projects/show"
    else
      render json: @comment.errors.full_messages, status: 422
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
