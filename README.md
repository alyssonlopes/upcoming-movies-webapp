## Upcoming Movies Web App

## Architeture

It's a Node.js project, using Express as API (server) and React as front-end tecnology (client).

.
├── client                  # Front-end application developed using React
│   ├── public              # public files that will be included in the application when run the build
│   ├── src                 # Javascript, HTML and CSS source-code 
│   │   └── actions                
│   │   └── components                
│   │   └── helpers        
│   │   └── reducers                
│   │   └── services                
├── server                  # API server developed using Express
│   ├── controllers         # connect the routes with the services
│   ├── services            # connect with the data requested
│   └── utils
│   └── routes.js           # File including the API`s mapped routes
└── ...

## Build Instructions

### `npm run client`

Run the client app locally

### `npm run server`

Run the server API locally

### `npm run dev`

Initializes the application locally and launches the front-end application in the browser.<br>

### `npm run dev:server`

Build and serve the application locally.<br>
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


## Built With

* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js, used to develop de API server
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces, used to develop de Front-end application
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js, used to make the requests to The Movie DB API
* [Dotenv](https://github.com/motdotla/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env, used to store the sensitive data that can`t be saved in the repository (e.g. API key)

