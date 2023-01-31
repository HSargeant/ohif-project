# Hack.Diversity Tech Dive Template

## Getting Started

This skeleton contains two different applications -- a front end, or "client," created with "Create React App," and a back end, or "API," created with Express. 

In order to make both of them work together, you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

## Client
In order to run the client, you'll run the following commands:

```bash
cd client/
npm i
npm start
```

You should then be able to visit `localhost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.

## API
In order to run the server, you'll run the following commands:

```bash
cd api/
npm i
npm start
or 
npm run dev will start the server in development mode. Server will restart when a file is saved. 
```

You should then be able to visit `localhost:8000/api` in your browser and see the server running.

## .env

if you want to add test exams to the project
create a .env file to hold your evironment varialbes and put in your api folder, 

MONGO_URL =  " your mongodb connection string"
CLOUD_NAME =  "your cloudinary name"
CLOUD_API_KEY = "your cloudinary api key"
CLOUD_API_SECRET = "your cloudinary secret"

