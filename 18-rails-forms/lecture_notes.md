lecture_notes.md

- `rails new snack-tracker`
- `rails g model Snack name calories:integer deliciousness:integer`
	- Look at what it's built
		-model
		-migration
		-test file
		-fixtures 
-`rails db:migrate`
	- show schema
		- null: false
- Review RESTful routes (index, show, edit, create, new, update, destroy)
	- `resources :snack, only [:index]`
		- start with the ones we need
- app/controller/snacks_controller.rb
	resources :snacks, only [:index]
```
class SnacksController < ApplicationController

		def index
			@snacks = Snack.all
			
		end

end
```

- Build the view in the snacks folder
	- Point out extension `.html.erb`
- Go to localhost:3000/index, which is wrong.  Show `rails routes`
	- localhost:3000/snacks

- make data in rails console

- add show route, controller, view.  Will work without restarting.  App folder can change without restart; routes need restart (but I guess not if just changing the only?)

- add :new :create
	- @snack = Snack.new
	- new.html.erb
	- `form_for` vs `form_tag`
		-`form_for` represents an ActiveRecord model
		-`form_tag` doesn't, and should be used for custom forms
		- both include csrf validation.  Before defining fields, show the form (with all hidden fields) in the inspector
```
<h1>New Snack:</h1>
<%= form_for @snack do |b| %>
	<%= b.label :name %>
	<%= b.text_field :name %>
	<%= b.label :calories %>
	<%= b.number_field :calories %>
	<%= b.label :deliciousness %>
	<%= b.select :deliciousness, (1..10) %>
	<%= b.submit "Snackify" %>
<% end %>
```

- put byebug in Create
- Show params
- Show Snack.create(params) and Snack.create(params[:snack]) give same error.
	- Security risk
		- Mass assignment, can put in bad code
		- https://xkcd.com/327/

- add :update and :edit to routes
- edit.html.erb matches new.html.erb
- add link from detail page to edit page
    - `<%= link_to "Edit", edit_snack_url(@snack) %>`
- add link on index page to show page
    - `<%= link_to snack.name, snack_url(snack) %>`
- SnackController#update matches create.  Move allowed_params into private method
- Destroy method
    - can remove `only:` now since we're doing them all
- add form_tag (custom form so not form_for) to edit page

```
    <%= form_tag @snack, method: "DELETE" do %>
        <%= submit_tag "Delete" %>
    <% end %>
```

```
    def destroy
        Snack.destroy(params[:id])
        redirect_to snacks_path
    end
```