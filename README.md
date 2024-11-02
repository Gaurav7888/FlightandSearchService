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