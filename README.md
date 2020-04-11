
# STEP 0 Init Project & Install dependencies
# Make the project directory, set the npm init entry point to server.js
mkdir project_dir && cd project_dir & npm init
# Install Production Dependencies
# Express : Backend framwork
# Body Parser : Handle that come in from post request
# Mongoose : Interact with MongoDB - ORM
# Concurrently : To run one or more npm script at a time like Client and Server the same time
npm i express body-parser mongoose concurrently

# Dev Dependencies
# Nodemon  : Watch backend and reload when we make an update without the need of restarting the server.
npm install -D nodemon
# Update npm scripts
# set the start script key to 'node server.js'
# set the server script key to 'nodemon server.js'

# STEP 1 Create a local Mongo Data base or online with mlab.com
# Create a database with its first collection in the clusters tab / cluster of interest
# Set database user. name: Franklin, pass: Franklin
# White list you ip address for dev only or use 0.0.0.0/0  in the network tab

# STEP 2 Create the server.js and setup the initial express server app
# require express mongoose body parser
# init express app
# app use bodyParser middleware
# Or use the newest built in express
# app.use(express.urlencoded({extended: true}));
# app.use(express.json());
# also can use dotenv package to store app credentials in a .env file. and just require('dotenv); then have access to process.env.CREDENTIAL_NAME
# also can app.use(cors()) to solve cross origin errors

# STEP 3 Makes Imports and Setup expres API
# Setups Models
# Setups routes
# Match routes with Models
# Test on Postman

# STEP 4 Create the React Client App
cd client && create-react-app .
# Add proxy in package.json for server api url "proxy": "http://localhost:5000"
# Setup concurrently to row both client and server at the same time 
# "client": "npm start --prefix client" or "cd client && npm start"
# "dev": "concurrently \"npm run server\" \"npm run client\""
# "client-install": "npm install --prefix client",
# Cleanup the client folder removing unecessary files
# Install client dependencies 
npm install bootstrap reactstrap uuid react-transition-group
# Enhance the UI, adding components and transitions, then prepare for redux

# STEP 5 Implement Redux on the client
# Keep in mind that installing Redux in React is like installing nuxt for VueJS
npm install redux react-redux redux-thunk 

# STEP 6 Connect Backend
# Get rid of static reducers
# Add axios
npm install axios
# Connects CRUD queries to backend apis

# STEP 7 Prepare & Deploy