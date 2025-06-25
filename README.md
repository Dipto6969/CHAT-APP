# CHAT-APP

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) with **WebSocket communication powered by Socket.IO**.  
Supports instant messaging, user authentication and a responsive UI.

---

## Features

- User registration and login with JWT authentication
- Real-time messaging using **WebSocket via Socket.IO**
- Show online/offline user status in real time
- Message history saved in MongoDB
- Responsive design for desktop and mobile

---

## Tech Stack

- **MongoDB** – NoSQL database for users and messages
- **Express.js** – REST API backend
- **React.js** – Frontend user interface
- **Node.js** – Server runtime environment
- **Socket.IO** – Enables real-time bidirectional communication using WebSocket under the hood
- **JWT** – Secure token-based user authentication

---

## How WebSocket (Socket.IO) is Used

The app leverages **Socket.IO**, which uses WebSocket protocol to maintain a persistent connection between client and server, allowing:

- Instant delivery of chat messages without page reload
- Real-time updates of user presence (online/offline)
- Event-based communication for scalability and responsiveness

---
