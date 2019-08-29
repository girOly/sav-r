## Set up

### Back end

-   express --view=ejs final-project-name (sav-r)]
-   cd into it
-   run npm install
-   edit bin/www and change the port to 3001
-   add console.log to "Listening on port xxxxx"
-   create .gitignore
-   change vars to const/let
-   npm start (check to see if it listens)
-   install nodemon (npm install -d nodemon)
-   Add Dev script to Package.json for nodemon
-   Npm install dotenv
-   PG Package for SQL Query's ?
-   Knex Package? - knex init (makes config file "Uses SQlite on Development, but we want postgresql") DONT PUT REAL PASSWORD ON KNEXFILE
-   process.env for knex config
-   Create .env
-   Change server migrations on knexfile.js
-   Add Knexconfig to App.js
-   install PG and then create DB
-   createdb final_project -O "User"
-   knex migrate:make "migration_name"
-   export up is what you want to do
-   export down is to rollback (undo) - drop table before recreating
-   Look at Knex DOCS for Schema (Don't forget to use return in the function)
-   table.timestamps(true, true)
-   knew migrate:latest (Runs the latest migration)
-   Dont do any modifications to PSQL if youre using Knex
-   Create Seed File, knex seed:make "01\_<filename>" (knex seeds will be ordered by number, make sure to increment)
-   You can use Faker for seeds
-   Create Routes using Express
-   /api/users for back-end
-   Pass Knex into app.use(userRouter(knex))
-   export routes with knex as a param, return router'
-   put knex db query inside of the users.js route function

### Front End

-   create-react-app client
-   clean up initial react page
-   Make basic HTML to test (<h1> <ul>)
-   Create hooks folder
-   useApplicationData.js - Import UseEffect from React
-   Npm Install Axios and import Axios from axios
-   connect react to the backend using Axios to render the db query
-   axios.get(/api/users).then(result => console.log(result.data))
-   import useApplicationData from hooks inside of the app.js
-   call useApplicationData() inside of app
-   add proxy to package.json ("proxy": "<http://localhost:3001">)
-   look at front-end check logs for any status code errors
-   consider using a reducer function
