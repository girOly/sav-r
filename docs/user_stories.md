## User should be able to Register

as a User I want to be able to securely register to the website.

Front-end Requirement: Register Form

User Experience Implementation: Input Form, Cancel Button, Confirm Button

Back-end Implementation: User Database, Hashed Passwords

Feature: Register User

DB:

INSERT into USERS,

- Name
- Password
- Email

## User should be able to Login and Log Out

as a User i want to be able to securely Log In and Log out from the website.

Front-end Requirement: Login and Log Out Form

User Experience Implementation: Input Form, Cancel Button, Confirm Button

Back-end Implementation: User Database, Authentication

Feature: Login and Logout

DB:
GET
Findby(Users.Email)
Bcrypt Password Authentication function

## User should be able to input their Monthly Income

As a User i want to be able to accurately input my monthly income in order to propagate valid budget information

Front-end Requirement: Monthly income input

User Experience Implementation: Input Field, Cancel Button, Confirm Button

Back-end Implementation: Budget Database

Feature: Monthly Income

DB:
INSERT into Budget

- Income

## User should be able to input their Monthly Expenses

As a User i want to be able to accurately input my monthly expenses in order to propagate valid budget information

Front-end Requirement: Monthly expenses input

User Experience Implementation: Input Field, Cancel Button, Confirm Button

Back-end Implementation: Budget Database

Feature: Monthly Expenses

DB:
Insert into Categories

- Name (Monthly Expenses)
  JOIN
  Categories on budget_expenses categories.categoryID = categoryID
  INSERT
- Total_cents
- Comment
  JOIN Budget Expenses on budget_expenses.budgetId = budgetId

## User should be able to upload an image of their Receipt

As a User i want to be able to upload an image of my receipts in order to digitally manage my receipt archive

Front-end Requirement: Upload Image input

User Experience Implementation: Input Field, Cancel Button, Confirm Button

Back-end Implementation: Image Database

Feature: Upload Receipt

DB:
Insert into Receipts

- image_url
- Total_cents
- timestamp
  JOIN
  Stores on receipts stores.storeID = storeID
  JOIN
  budget_expenses on receipts budget_expenses.budgetexpenseID = budgetexpenseID
  INSERT
- Total_cents
- Comment
  JOIN Budget Expenses on budget_expenses.budgetId = budgetId

## User should be able to categorize their Receipt Uploads

As a User i want to be able to categorize my receipt archive in order to easily manage my uploads

Front-end Requirement: Upload Receipt feature

User Experience Implementation: Automatically triggered after Upload Receipt

Back-end Implementation: Google Vision OCR Api, Categorization Function off of API Data

Feature: Machine Learning Categorization

DB:

reference Upload Receipt

## User should be able to Edit their Budget Expenses

As a User i want to be able to dynamically modify my budget expenses based off of missed inputted information

Front-end Requirement: Edit transition

User Experience Implementation: Edit allocations input, Input Field, Cancel Button, Confirm Button

Back-end Implementation: Update query to Budget Database

Feature: Edit Budget allocations

DB:

UPDATE

Category join budget_expenses

- Total_cents

## User should be able to visualize and easily access their Budget information

As a User i want to be able to easily access and understand my current Budget information in order to apply accurate financial prudence off of this information

Front-end Requirement: Overview transition

User Experience Implementation: Auto-rendered using Hook

Back-end Implementation: Google Charts API

Feature: Overview Charts

DB:
Get
SELECT "_" from "_"

Pass to Google Charts

## User should be able to revisit and download their Receipt Archive

As a User i want to be able to revisit and download my past receipts in order to properly track my past expenses

Front-end Requirement: DB Image List, Receipt list transition

User Experience Implementation: View Archives button

Back-end Implementation: DB Query Search

Feature: Receipt Search
DB:
Get
SELECT "\_" from Receipts

## User should be able to manually create Saving Goals (First Stretch)

As a User i want to be able to create and manage a specified goal for my Savings in order to personalize my saving goals

Front-end Requirement: Graphs, Title

User Experience Implementation: Create Goal form, Input Form, Delete Button, Edit Button, Save Button

Back-end Implementation: Budget Database

Feature: User Goals

<!-- Stretch, Depending on Deadline -->

## Savings account with interest calculator (Stretch)

Front-end Requirement: User Input

User Experience Implementation: Input Field

Back-end Implementation: Compound Interest Function on User Input

Feature: Saving Account Interest

## Debt goal with interest calculator (Stretch)

Front-end Requirement: TBD

User Experience Implementation: TBD

Back-end Implementation: TBD

Feature: Debt Goal

## Based on last months input, goal will be reached in x time (Stretch)

Front-end Requirement: TBD

User Experience Implementation: TBD

Back-end Implementation: TBD

Feature: Goal Tracker

## User should be able to create a savings plan for a predetermined goal (Stretch)

As a User i want to be able to personalize a savings plan to take advantage of my left over funds from my Budget

Front-end Requirement: TBD

User Experience Implementation: TBD

Back-end Implementation: TBD

Feature: Savings Plan

## User should be able to search their Receipt Archive by Category (Stretch)

As a User i want to be able to access and search my past receipts per category in order to reduce an unnecessary query

Front-end Requirement: TBD

User Experience Implementation: TBD

Back-end Implementation: Db Query Search

Feature: Search Receipts by Category
