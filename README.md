# Contacts Agenda API Documentation

## Project Overview
This project is a REST API built with Node.js 16+ using hexagonal architecture. The API provides endpoints for managing resources related to contacts. It supports creating, find by id and find all operations and returns responses in JSON format.

## Key Features
- Endpoints for operations on contacts resources
- Node.js 16+ and Express 4
- Custom Database for in-memory persistence

## Prerequisites
Before you can run this project, ensure that you have the following installed:

- Node.js 16+
- Npm 8+
- Git (for cloning the repository)
- Postman, cURL or a client for testing API endpoints

## Running the Project

### Step 1: Clone the Repository
```bash
git clone https://github.com/b3nkos/agenda-hexagonal-architecture.git
```

```bash
cd agenda-hexagonal-architecture
```

### Step 2: Install dependencies
You can install dependencies of the project using NPM. execute the following:
```bash
npm install
```

### Step 3: Run the Application
After install dependencies of the project, you can run the application using the following Node.js command:
```bash
node src/app.js
```

### Step 4: Accessing the API
The API will be accessible at `http://localhost:3000`. You can test the endpoints using tools like Postman or cURL.

For example, to fetch all contacts, use:
```bash
curl -X GET --location "http://localhost:3000/contacts"
```

## API Endpoints

| HTTP Method | Endpoint         | Description                  |
|-------------|------------------|------------------------------|
| GET         | `/contacts`      | Get a list of all contacts   |
| GET         | `/contacts/{id}` | Get a specific contact by ID |
| POST        | `/contacts`      | Create a new contact         |

### Example Request: Create a Member
```bash
curl -X POST --location "http://localhost:3000/contacts" \
    -H "Content-Type: application/json" \
    -d '{
          "name": "Alice Johnson",
          "email": "alice.johnson@example.com",
          "phone": "+1-555-123-4567"
        }'
```

### Example Response:

```bash
{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com",
  "phone": "84776383993",
  "id": "138e98f8-08af-4512-8a77-d1d497ea1350"
}
```
