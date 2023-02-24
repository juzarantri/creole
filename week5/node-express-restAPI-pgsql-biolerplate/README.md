# This is a boilerplate for node express and pgsql.

To setup first install the dependency

- npm install

Then copy the .example.env to .env file

- cp .example.env .env

Replace the fields in DATABASE_URL as per your configuration and remove all {}

- i.e. it should look like postgres://postgres:1234@localhost:5432/boilerplate

To fire query first get the pool object using require("./src/config/database") then use object.query(txt,params)

### Enjoy!!!!

npm start
