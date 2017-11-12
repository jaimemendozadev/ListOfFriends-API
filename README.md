# [ListOfFriends API](https://github.com/jaimemendozadev/ListOfFriends-API)


ListOfFriends Backend API is a simple API for storing a List of your friends. Each friend should have an unique email, profile picture, description all stored on the backend. The API relies on JWT for authentication.

## Table of contents

- Initial Setup
- Create a `.env` File
- Starting the API
- Created By

## Initial Setup
The API is currently accessible at: `https://list-of-friends-api.herokuapp.com/`

But you can clone the repo and run your own version of the API locally.

Open up your terminal and clone the repo locally to your computer by running the following command at the target destination: `$ git clone https://github.com/jaimemendozadev/ListOfFriends-API`

You'll need to have installed MongoDB locally on your computer and get the URL for the Database (DB) connection. The easiest way to setup a Mongo Database would be to create a sandbox database on [mLab](https://mlab.com). Consult the [documentation](http://docs.mlab.com/) on signing up and creating a sandbox account. Once you're done, you'll need the actual Database URL for your `.env` file.

The routes currently available on this API are:

```
GET /api => requires authentication and sends {auth: "success"}
POST /api/signup => sends back JWT to user
POST /api/signin => authenticates user and sends back JWT to user
```

## Create a `.env` File

Fire up your terminal and in the root of the app directory, create a new `.env` file by simply running `$ touch .env`. 

After creating the `.env` file, use your text editor to create the following variables in the file:

- PORT 
- DB_URL 
- JWTSECRET 


There should be no spacing between the lines and do not end the line with punctuation or spacing. Please type the credentials exactly as they appear in the screenshot. 

The `PORT` is the port number for localhost to run your backend API (e.g. `http://localhost:3000`).

The `DB_URL` is the local MongoDB or mLab DB URL for the Mongoose ORM to connect to the database. 

The `JWTSECRET` is a random string you create - it can be anything - for creating a JWT token for user authentication.


![.env Screenshot](/img/env-screenshot.png?raw=true ".env Screenshot ")  
 


## Starting the API

In the root of the repo, run `$ npm install` to install all the API dependencies. Wait until everything finishes loading.

Run the `$ npm start` command in your terminal to start the API.

*Warning*: Do not try to go to the root route at `http://localhost:${PORT_NUMBER}/api` in your favorite browser. By default, the backend is authenticated so you won't have access without a JWT token.

You can however test that the `/signup` route works by using [Postman](https://www.getpostman.com/) to make a `POST` request to create a new user 

![.env Screenshot](/img/Postman-POST-screenshot.png?raw=true ".env Screenshot ")  

and get back a JWT token.

![.env Screenshot](/img/JWT-screenshot.png?raw=true ".env Screenshot ")  


*Note*: When you're playing around with your database, you have the ability to nuke the Users collection in your database to start fresh. In your terminal, run `$ npm run dropdb` to drop all the Users you created in the database. You'll then be able to reseed the database with new Users.

## Created By

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)