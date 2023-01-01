## Background
This is a project I did for my intro to database class. It's a simple full stack website that fetches information from a database and displays them on a website.

## How to Run Locally

You need to install Node.js. Go to this link https://nodejs.org/en/download/ and install Node. <br>

### Install all dependencies 
* Open terminal
* Go into the “backend” directory
* Type “npm install” to install all dependencies 
* Go into the “client” directory
* Type “npm install” to install all dependencies 

### Prepare the database
* Inside the "backend" directory, there is an sql file. Open MySQL and run the script to create the database with all the info.
* Go into the index.js file in the "backend" directory and modify the db_config variable to have the correct host, user, and password

### How to run website 
* Run the API
* Open terminal
* Go into the “backend” directory
* Run the command “npm start” in the terminal. 
* There should be a message saying “Connected to backend!” when the backend is ready
* The backend runs locally at port 8800. If you go to http://localhost:8800/, you should see a bunch of information 
* Go to next step without closing this terminal

### Run the React app (*run the API first before the React app)
* Open another terminal 
* From the new terminal go into the “client” directory
* Run the command “npm start” in the terminal. 
* The website should automatically open in your browser.
* It might take sometimes because the website is kind off slow 
* Also leave this terminal running while using the website.
