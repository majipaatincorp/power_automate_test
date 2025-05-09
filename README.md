Here’s a simple `README.md` to guide users through the process of setting up and testing the Power Automate project:

---

# Power Automate Test

This project provides a basic testing environment to test form submissions, powered by a backend Node.js server with Express, PostgreSQL, and a frontend HTML form. It also uses Docker for setting up the PostgreSQL database.

## Prerequisites

* **Node.js** (Ensure you have Node.js installed)
* **Docker** (For running the PostgreSQL database)

## Setup Instructions

### 1. Install Dependencies

Navigate to the project directory and install the required dependencies.

```bash
npm install
```

### 2. Set Up PostgreSQL Database with Docker

Run the following command to start the PostgreSQL database using Docker:

```bash
sudo docker-compose up
```

This will start the PostgreSQL database and expose it on `localhost:5432`.

### 3. Start the Backend Server

In a new terminal window, start the Node.js server:

```bash
node server.js
```

This will start the Express server on `http://localhost:8000`.

### 4. Open the Frontend

Open the `index.html` file in your browser, or if using a local server to serve your HTML, visit the following link in your browser:

```
http://localhost:8080
```

### 5. Submit the Form

Fill in the form on the frontend and submit it. The data will be sent to the backend, which will store it in the PostgreSQL database.

### 6. Check Console for Logs

If there are any issues or errors, check the terminal/console where your Node.js server is running for detailed error messages.

## Stopping the Services

To stop the services:

1. Press `Ctrl + C` in the terminal running the Node.js server.
2. To stop Docker containers, use:

```bash
sudo docker-compose down
```

---

This README covers the basic steps to install dependencies, set up Docker, run the backend server, and open the frontend form. Feel free to adjust any URLs or details based on your actual setup!

