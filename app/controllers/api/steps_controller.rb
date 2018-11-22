# class Api::StepsController < ApplicationController
#   def create
#     @step = Step.new(params[:step][:body] = '')
#     if @step.save
#     else
#       render @step.errors.full_messages, status: 422
#     end
#   end
#
#   def edit
#     @step = Step.find(params[:id])
#     if @step.update_attributes()
#   end
#
#   def destroy
#     @step = Step.find(params[:id])
#   end
# end
