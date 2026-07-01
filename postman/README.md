# Postman Collection

This folder contains the Postman collection used to test the Task Manager API.

## What's included

The collection contains automated tests for:

### Authentication

- `POST /api/signup`
- `POST /api/login`
- `GET /api/profile`

### Tasks

- `POST /api/tasks`
- `GET /api/tasks`
- `PUT /api/tasks/:taskId`
- `DELETE /api/tasks/:taskId`

Both successful requests and error scenarios are covered, including:

- Input validation
- Authentication errors
- Invalid data
- Query parameter validation
- Resource not found
- Response structure and property types
- HTTP status codes
- JSON response headers

---

## Authentication

The collection uses a collection variable named `token`.

After a successful **Signup** or **Login**, the JWT is automatically stored and reused by all protected endpoints.

```
Authorization: Bearer {{token}}
```

This means the collection can be executed without manually copying or updating the token.

---

## Running the tests

Import the collection into Postman.

Execute the requests individually or run the complete collection using the **Collection Runner**.

The tests verify:

- Expected HTTP status codes.
- Response body structure.
- Returned property types.
- Error messages.
- JSON content type.
- Authentication behaviour.

---

## Notes

Some requests modify the database (create, update or delete tasks). For consistent results, it is recommended to execute the collection against a database containing test data.
