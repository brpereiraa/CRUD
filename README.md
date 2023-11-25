# CRUD
This is a small ongoing project to better understand small functionalities of both backend and frontend. Starting with the frontend on React and Spring Boot for the backend. It also uses PostgreSQL for the database and Docker to start everything. 

## Frontend
The frontend uses **React** to navigate through the pages, handle the logic to fetch users from the backend and authenticate users with the help of Spring Boot.

```
npm run dev
```

Use this to separately run the frontend.

## Backend
The backend is built using **Spring Boot**, which initializes a table with default values in PostgreSQL and handles the requests to the database, adding, updating and deleting the users from the database. <br>
JWT auth could also be incorporated in the future. <br> <br>

To run the backend by itself you could install **Maven** or use an **IDE** such as IntelliJ.

```
mvn spring-boot:run
```

## Docker
Docker is building the images for each session, backend, frontend and database, and running each one with the proper configuration, making it easier for the user to run everything without having to install anything or without having to worry about having different versions in the technologies used.

```
docker compose up
```

The previous command should start the whole app and set everything up. <br> <br>

> ⚠️ As of the moment this is being written, docker compose is only building the frontend and the database. The Dockerfile for the backend is still being made and doesn't yet work.
