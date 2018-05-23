* Why use validations
    - Users are dumb (show gif)

- Different types of validations.  Model level validations are database-agnostic and use the power of ActiveRecord

* What's important about our snacks?
    - shouldn't have duplicate info

snack.rb

`validates :name, presence: true`
    - Snack should have name, calories, deliciousness
    - Show failure in console (works with new, not with create--validations fire on create/update, i.e., when it hits the database)
    - show snack.errors; snack.errors.messages
    - Demonstrate behavior in browser and necessity for feedback

```
<% if @snack.errors %>
    <ul>
    <% @snack.errors.full_messages.each do |message| %>
        <li><%= message %></li>
    <% end %>
    </ul>
<% end %>
```

    - can show inline styling and stylesheets

```
.error {
    color: red;
    list-style-type: square;
}
```


retailer.rb

validates :name, presence: true, uniqueness: true
    validates :year_established, presence: true

    def year_established_must_be_valid
        self.year_established > 1800 && self.year_established <= Date.today.year
    end

QUESTION:  What about update?