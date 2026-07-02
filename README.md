# TaskApp

TaskApp is a full-stack task management application built around a modern client-server architecture. It combines a React frontend with a RESTful API developed using Express and MySQL, providing secure user authentication and a solid foundation for managing personal tasks.

The main goal of this project is to consolidate full-stack development skills by applying real-world practices such as authentication, API consumption, relational databases and project organization, while keeping the application clean, maintainable and ready to evolve.

---

## Features

Current implementation includes:

- User registration and authentication using JWT
- Secure password hashing with bcrypt
- Protected API endpoints
- User profile
- Create, edit and delete tasks
- Mark tasks as completed
- Filter tasks by completion status
- Search tasks
- Responsive interface
- Persistent authentication
- Input validation
- Relational MySQL database
- RESTful API
- Postman collection with automated API tests

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- SCSS
- HTML5
- CSS3

### Backend

- Node.js
- Express
- MySQL
- mysql2
- JSON Web Tokens (JWT)
- bcrypt
- dotenv
- cors

---

## Project Structure

```text
.
├── backend/
│   ├── db/
│   ├── postman/
│   ├── public/
│   ├── src/
│   ├── .env_sample
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── documentation/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

---

### Backend

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env_sample .env
```

Configure the required environment variables:

```text
PORT=

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

JWT_SECRET=
```

Run the development server:

```bash
npm run dev
```

---

### Frontend

Install dependencies:

```bash
cd frontend
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Database

The backend uses a MySQL relational database.

The repository includes:

- SQL schema
- MySQL Workbench model
- Entity Relationship Diagram (ERD)

Import the SQL schema before running the application.

---

## Authentication

Authentication is handled using JSON Web Tokens (JWT).

Protected endpoints require a valid token in the request header:

```http
Authorization: Bearer <your_jwt_token>
```

Passwords are securely hashed using bcrypt before being stored in the database.

---

## API Testing

The project includes a Postman collection with automated tests covering:

- Authentication
- Task CRUD operations
- Input validation
- Protected routes
- Error handling

---

## Roadmap

Some planned improvements include:

- Task categories
- Task priorities
- Due dates
- User profile improvements
- Better filtering options
- UI refinements
- Deployment

---

## Preview

Screenshots and live demo will be added once the first stable version is released.

---

## Credits

This project uses:

- [Heroicons](https://heroicons.com/) © Tailwind Labs, licensed under MIT.

---

## Author

Developed by **CrisOnWeb**.
