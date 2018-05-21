- Build Retailer model
    - Retailer has many snacks
    - Snacks belongs_to retailer

- `rails g model Retailer name country year_established:integer`

- add migration for snack retailer_id:integer
    - `rails g migration AddRetailerToSnacks retailer_id:integer`

- seeds.rb

```retailers = Retailer.create([{name: "Hostess", year_established: 1929, country: "USA"},
                             {name: "Girl Scouts", year_established: 1944, country: "USA"}])

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

- Will not create until added to required_params

- Create new retailer in Snack Form
- ```accepts_nested_attributes_for :retailer``` i.e., auto-creates the new retailer
- SnacksController#new 
    - `@snack.build_retailer()` (builds stub for retailer)
```<%= fields_for :retailer do |r| %>
    <div>
        <h3> New Retailer </h3>
            <%= r.label :name %>
            <%= r.text_field :name %>
            <%= r.label :year_established %>
            <%= r.number_field :year_established %>
            <%= r.label :country %>
            <%= r.text_field :country %>
    </div>
<% end %>```