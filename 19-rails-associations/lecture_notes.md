** Remind there is a code challenge **

- Build Retailer model
    - Retailer has many snacks
    - Snacks belongs_to retailer

- `rails g model Retailer name year_established:integer`

- add migration for snack retailer_id:integer
    - `rails g migration AddRetailerToSnacks retailer_id:integer`

- seeds.rb

```retailers = Retailer.create([{name: "Hostess", year_established: 1929},
                                {name: "Girl Scouts", year_established: 1944}])

snacks = Snack.create([{name: "Thin Mints", calories: 200, deliciousness: 6, retailer_id: 1},
                       {name: "Chicken fingers", calories: 650, deliciousness: 8, retailer_id: 2}])
```

- `rake db:reset` (drop, migrate, seed) 
    - Caveat:  nukes db, don't use in production

- `rails g controller Retailers index`

- add belongs_to and has_many to models
```belongs_to :retailer```

- "How should we include retailers on our snack page?" (Elicit dropdown)

```<%= f.collection_select(:retailer_id, Retailer.all, :id, :name, prompt: true) %>```

- Will not create until added to required_params - add in retailer_id

- Create new retailer in Snack Form
- ```accepts_nested_attributes_for :retailer``` at top of Snack model 
    - auto-creates the new retailer
- SnacksController#new 
    - `@snack.build_retailer()` (builds stub for retailer)
```
<%= f.fields_for :retailer do |r| %>
    <div>
        <h3> New Retailer </h3>
            <%= r.label :name %>
            <%= r.text_field :name %>
            <%= r.label :year_established %>
            <%= r.number_field :year_established %>

    </div>
<% end %>
```

** Note `f.fields_for` **

- look at params, won't work with required params as is
    - `        params.require(:snack).permit(:name, :deliciousness, :calories, :retailer_id, retailer_attributes: [:name, :year_established, :country])
`

Build from the other direction:

retailer.rb

```
class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks
end
```


```
class Retailer < ApplicationRecord
    has_many :snacks
    accepts_nested_attributes_for :snacks
end```

  def index
    @retailers = Retailer.all
  end

  def new
    @retailer = Retailer.new
    @retailer.snacks.build
  end

  def create
    @retailer = Retailer.create(retailer_params)
    redirect_to snacks_path
  end

  private

  def retailer_params
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end
end
```

retailers new.html.erb

```
<!DOCTYPE html>
<html>
<head>
    <title>New Retailer</title>
</head>
<body>
    <h1>New Retailer</h1>

    <%= form_for @retailer do |r| %>
        <%= r.label :name %>
        <%= r.text_field :name %>
        <%= r.label :year_established %>
        <%= r.number_field :year_established %>
        <%= r.submit %>

        <h2>Snacks</h2>
        <%= r.fields_for :snacks do |snack| %>
            <%= snack.label :name %>
            <%= snack.text_field :name %>
            <%= snack.label :calories %>
            <%= snack.number_field :calories %>
            <%= snack.label :deliciousness %>
            <%= snack.select :deliciousness, (1..10) %>
        <% end %>
    <% end %>
</body>
</html>
```
