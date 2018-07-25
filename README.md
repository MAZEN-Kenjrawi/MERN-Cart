# MERN-Cart
Practicing on MERN stack by building shopping cart application

## Setup
1- Run `npm install` to download server-side dependencies.<br>
2- Run `npm run client-install` to download client-side dependencies.<br>

## Setup MongoDB
1- Sign-up with mLab.<br>
2- Rename `./config/keys.js.example` to `./config/keys.js`<br>
3- Replace `<db_name>` with your database name, `<dbuser>` with your username, and `<dbpassword>` with your password.<br>

## Start
Type `npm start` in your bash.

## Dev Run
1- Run `npm start server` to run the server on the port 5000.<br>
2- Run `npm start client` to run the client on the port 3000.<br>
3- Run `npm start dev` to run both above command using the same command.<br>

## End-Points
Send get reqeust to `http://localhost:5000/api/items` to get all of your items in the DB.<br>
Send post request to `http://localhost:5000/api/items` to create new item in the DB.<br>
Send delete request to `http://localhost:5000/api/items/:id`, replace `:id` with item's id that you want to delete.<br>
