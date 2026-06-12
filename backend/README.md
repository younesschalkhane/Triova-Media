# Triova Media — Contact API Backend

Node.js + Express REST API for the Triova Media contact page. Submitted messages are stored in MongoDB via Mongoose.

## Project structure

```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   └── contactController.js  # Request handlers
├── middleware/
│   ├── errorHandler.js       # Global error handling
│   └── validateContact.js    # Contact form validation
├── models/
│   └── Contact.js            # Mongoose Contact schema
├── routes/
│   └── contactRoutes.js      # /api/contact routes
├── app.js                    # Express app setup
├── server.js                 # Entry point
└── .env                      # Environment variables (create from .env.example)
```

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [MongoDB](https://www.mongodb.com/) running locally, or a [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

## Installation

1. Open a terminal in the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your environment file:

   ```bash
   cp .env.example .env
   ```

4. Edit `.env` and set your MongoDB URI:

   ```
   MONGO_URI=mongodb://localhost:27017/triova-media
   ```

## Running the server

**Development** (auto-restart on file changes):

```bash
npm run dev
```

**Production**:

```bash
npm start
```

The server starts on `http://localhost:5000` by default (or the port set in `PORT`).

## API endpoints

### Health check

```
GET /api/health
```

### Submit a contact message

```
POST /api/contact
Content-Type: application/json
```

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+212600000000",
  "message": "I would like a quote for a new website."
}
```

| Field   | Required | Notes                    |
|---------|----------|--------------------------|
| name    | Yes      | Non-empty string         |
| email   | Yes      | Valid email format       |
| phone   | No       | Optional string          |
| message | Yes      | Non-empty string         |

**Success (201):**

```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon.",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+212600000000",
    "message": "I would like a quote for a new website.",
    "createdAt": "2026-06-12T10:00:00.000Z"
  }
}
```

**Validation error (400):**

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Email must be a valid email address" }
  ]
}
```

### List all contact messages (admin)

```
GET /api/contact
```

Returns all messages sorted by newest first.

**Success (200):**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+212600000000",
      "message": "I would like a quote for a new website.",
      "createdAt": "2026-06-12T10:00:00.000Z"
    }
  ]
}
```

## Example cURL requests

```bash
# Submit a message
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"message\":\"Hello!\"}"

# List all messages (admin)
curl http://localhost:5000/api/contact
```

## Frontend integration

Point your React contact form to:

```
POST http://localhost:5000/api/contact
```

Set `CLIENT_URL` in `.env` to your frontend URL (e.g. `http://localhost:5173`) so CORS allows requests from the client app.
