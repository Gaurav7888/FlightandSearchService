# Welcome to FLights Service

## PRoject Setup
- clone the project on your local
- Execute `npm isntall` on the same path as your root directory
- Create a `.env` file and fix the port variable
    - `PORT=3000`
- Inside the src/config folder create a new file `config.json` and then add the following json 

```
{
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

- Once you have added your db config run the below command
`npx sequelize db:create`

- To create model and migrations

`npx sequelize model:generate --name <name> --attributes <attribute>:<datatype>`
`npx sequelize db:migrate`

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Realtionship -> City has many airports and airport belongs to a city (one to many)

`npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`