## Getting Started
# Getting Started

In order to make bothfront end and back end work together, you'll need to run both, but you can run just one or the other to start. As you begin working on this project, you'll first focus on the client, so you can more or less ignore the API portion of the code for now.

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
if you want to add test exams to the project...
- Create a `.env` file in api folder and add the following as `key = value`
  - MONGO_URL =  " your mongodb connection string"
  - CLOUD_NAME = `your cloudinary cloud name`
  - CLOUD_API_KEY = `your cloudinary api key`
  - CLOUD_API_SECRET = `your cloudinary api secret`
  - GOOGLE_CLIENT_ID="your google client id for google auth"
  - GOOGLE_CLIENT_SECRET="your google client secret for google auth"
  
  
You should then be able to visit `localhost:8000` in your browser and see the server running.

## Authors

- [Henderson Sargeant](https://github.com/HSargeant "HSargeant Github")
- [Harnaljia Fenelon](https://github.com/Harnaljia "Harnaljia Github")
- [Kristophe Yen](https://github.com/KYen24 "KYen24 Github")
- [Lanre Adeojo](https://github.com/lanreadeojo "lanreadeojo Github")
- [Mucteba Bozkurt](https://github.com/mucteba10 "mucteba10 Github")

