# Social Media Backend

This is a backend system for a social media platform, built with Node.js, Express.js, MongoDB, and Mongoose. It handles user authentication, registration, and management, providing full CRUD (Create, Read, Update, Delete) operations on user data via a REST API. The API endpoints are tested and managed using Postman.

## Problem Statement

Develop a backend service for a social media platform that allows:
- Users to sign up, log in, and authenticate.
- Admins to manage users, including adding, updating, and deleting user accounts.
- The system to handle multiple user registrations and ensure secure authentication.

## Features

- **User Authentication**: Users can securely sign up and log in to the system.
- **User Management**:
  - Add new users.
  - Update user details.
  - Delete users.
- **Token-Based Authentication**: Secure login and session management using JWT.
- **Error Handling**: Provides informative error messages for failed operations.
- **API Testing with Postman**: All API endpoints are managed and tested via Postman for smooth interactions.
  
## Tech Stack

- **Node.js**: JavaScript runtime environment for building the server-side of the application.
- **Express.js**: A minimal and flexible Node.js web application framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user information.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js to provide schema-based data modeling.
- **JWT (JSON Web Token)**: Used for secure token-based authentication.
- **Postman**: For API endpoint testing and validation.
  
## API Endpoints

Here are some of the key API endpoints implemented in this project:

- **User Routes**:
  - `POST /api/user/signup`: Register a new user.
  - `POST /api/user/login`: Log in an existing user.
  - `GET /api/users`: Get a list of all users (admin access).
  - `PUT /api/users/:id`: Update user details.
  - `DELETE /api/users/:id`: Delete a user by ID.
