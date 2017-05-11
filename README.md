# Building a RESTful API in Node JS, Express, MongoDB
# Application structures
```
    - models                        <!-- our user model -->
    ------ user.js  
    - routes                        <!-- all the routes for our application -->
    ------ users.js    
    - config
    ------ config.js                <!-- will hold our database connection settings -->
    - package.json                  <!-- handle our npm packages -->
    - app.js                        <!-- setup our application -->
    - server.js                     <!-- setup our application -->
```

# Installation & Configuration
1. Clone the repository: `git clone https://github.com/ggolfko/node-restful.git`
2. `cd node-restful`
3. Install the application: `npm install`
4. Start the server: `node server.js`
5. View in browser at [http://localhost:8080/api](http://localhost:8080/api)
6. Open `postman` to test method (GET, POST, PUT and DELETE)

# RESTful API
* create a user (accessed at POST http://localhost:8080/api/users)
* get all the user (accessed at GET http://localhost:8080/api/users)
* get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
* update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
* delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)

