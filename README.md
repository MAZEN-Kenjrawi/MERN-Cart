# MERN-Cart
Practicing on MERN stack by building shopping cart application


## Setup MongoDB
1- Sign-up with mLab.<br>
2- Rename `./config/keys.js.example` to `./config/keys.js`<br>
3- Replace `<db_name>` with your database name, `<dbuser>` with your username, and `<dbpassword>` with your password.<br>

## Start
Type `npm start` in your bash.

## End-Points
Send get reqeust to `http://localhost:5000/api/items` to get all of your items in the DB.<br>
Send post request to `http://localhost:5000/api/items` to create new item in the DB.<br>
Send delete request to `http://localhost:5000/api/items/:id`, replace `:id` with item's id that you want to delete.<br>
