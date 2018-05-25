class StudentsController < ApplicationController
  def index
    @students = Student.all
  end

  def show
    cookies['variety'] = 'chocolate chip'
    @student = Student.find_by(id: params[:id])
  end

  def new
    @student = Student.new
  end

  def create
    Student.create(student_params)
    byebug
    redirect_to students_path
  end

  private

  def student_params
    params.require(:student).permit(:name, :email, :dob)
  end
end
