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






QUESTION:  What about update?