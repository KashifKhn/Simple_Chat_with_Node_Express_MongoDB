# Express Chat Application

A simple chat application built with Express.js and MongoDB.

## Setup

```bash
git clone https://github.com/KashifKhn/Simple_Chat_with_Node_Express_MongoDB.git
```

```bash
npm install
```

```bash
npm dev run (if nodemon installed)
```

## Dependencies

- Express.js
- Mongoose
- Method-Override
- EJS

## Database

Make sure MongoDB is running locally.

## Routes

- **Home Page:** `/`
- **View All Chats:** `/chats`
- **Edit Chat:** `/chats/:id/edit`
- **Create New Chat:** `/chats/new`
- **Update Chat:** `PUT /chats/:id`
- **Delete Chat:** `DELETE /chats/:id`

## Running the Application

```bash
npm dev run (if nodemon installed)
```

The application will be running at [http://localhost:3000](http://localhost:3000).

## Authors

- @KashifKhn  
- <kashifkhnx04@gmail.com>

## License
This project is licensed under the [MIT License](LICENSE)