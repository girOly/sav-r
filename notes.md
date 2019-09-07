# Routes Made

All Expenses for a Given Budget
http://localhost:3005/api/budget_expenses/1
All Expenses, Summed in Categories
http://localhost:3005/api/budgets/1/categories
All Budgets, for a User
http://localhost:3005/api/users/1/budgets

Individual Budget, for a User
http://localhost:3005/api/users/1/budgets/2

## Routes needid

<!-- Restful Route for Add EXPENSE (POST)

- /users/:id/budgets/:id/budget_expenses -->

Restful Route for Add Receipt (POST)

- /users/:id/budgets/:id/receipts

- Get ALL receipts route

## Receipt Route

First push parsed receipt - total_cents, comments, category_id and budget_id to Budget_Expenses on upload

return budget_expenses_id

.then

insert into receipts
total_cents,image_url and budget_expenses_id

## Add EXPENSE

Wont be reflected in index until reload, we need to update state on the resolution of create_expense
