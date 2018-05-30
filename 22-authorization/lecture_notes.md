- Talk about using Git for atomic commits

- uncomment bcrypt in Gemfile

- add has_secure_password to User model

- create user in console
- `user = User.create(username: "paul", password: "password")`
- `user.authenticate("password")` returns User object
- `user.authenticate("something_else")` returns `False`

- `user = User.create(username: "someone", password: "something", password_confirmation, "something_elsxe")` does not get saved

- `user.valid?` is False
- `user.errors.full_messages`

- Build create user page

- routes for user new/create
- resources :users, only: [:new, :create]

- `rails g controller User new` (Why am I not including create?)

new.html.erb

```
<h1>Create a new user or <%= link_to "login", login_path %></h1>

<%= form_for :user do |f| %>
    <%= f.label :username %>
    <%= f.text_field :username %>
    <%= f.label :password %>
    <%= f.text_field :password %>
    <%= f.submit %>
<% end %>
```

```
class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.valid?
        @user.save
        redirect_to snacks_path
    else
        flash[:error] = @user.errors.full_messages
        redirect_to new_user_path
    end
  end


  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
```
Demo creating a user.  How do I make a password field in Rails?  

add to login view:

```
    <%= label_tag "Password" %>
    <%= password_field_tag :password %>
```

Try to login with byebug in SessionsController#create

@user.authenticate(params[:password])

This will break if `user` is undefined--check for `@user && @user.authenticate...`
