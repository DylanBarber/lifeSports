
# LifeSports Challlenge and Hackathon

### About Us

We are team New York at R2H, creating this website for the non-profit LifeSports in Charlotte, NC. 

### About this Application

This repo contains a MERN (MongoDB, Express, React, NodeJS) application that tracks users and their exercise routines.

To see this application in action, check out it out on Heroku: https://lifesportswebsite.herokuapp.com/

### Build Components

Within this repository you will find the following:

1. **client** folder (contains the React Application)

1. **models** folder (contains the schema models for the _users_ and _exercises_ collections)

1. **routes** folder (contains the API endpoints for both the _users_ and the _exercises_)

1. **.gitignore** file (contains files that are resticted from pushing to GitHub)

1. **index.js**  file (contains a _ NodeJS Express_ server as well as connections to _MongoDB_ and _MongoDB Atlas_)

1. **LICENSE**

1. **package-lock.json** file (contains an exact dependency tree)

1. **package.json** file (contains application metadata, custom scripts, the license, devDependencies, dependencies and the needed version of _node_)

### Usage

The **package.json** file contained within this repo holds several custom scripts used to start the application.

Below are instructions on how to run the application using the scripts (assuming you have cloned the repo)

**NOTE:** These commands must be executed in your Terminal:

```js
npm start       - (this command checks if the enviroment is in production or development, then it will start the React App and the Express server simultaneously)

npm start:prod      - (this command will run the application in a production enviroment)

npm start:dev       - (this command will run the application in a development enviroment)
```

#### Challenge Instructions

The challenge requirements for this week are as follows:

1. Complete the API endpoints in the LifeSports Express server. Note that all MongoDB functions must use the mongoose data model that is provides

2. Refactor this code to work with your MongoDB Atlas database. You should update your .env file so that you can use either mongodb locally on on Atlas

3. Deploy your app to Heroku

4. Submit the link to your professionally composed GitHub acct with the Link to your working app by Monday, Oct 21 at 5pm. The github acct should have the link to your live heroku app

The APIs will be tested and the github accts reviewed to determine the number of points earned n the challenge submission

#### Hackathon Challenge

1. Use the working version of your LifeSports app from the Challenge to go the next level!

2. Be creative! Develop a new and more engaging UI for your 'workout tracker' and deliver an app that will captivate the LifeSports' coaches!

3. Each submission should include an updated UI, with updates, as required, to the mongoose data model, api server and integrations. All Submissions must be deployed with a professionally composed github repo and a live working app on Heroku

4. The deadline for all submissions in Thursday, Oct 24 at 5pm

# lifeSports
