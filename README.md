# Backend for saving likes

This Node.js project uses the Express framework and MongoDB for data management. It's configured to run with MongoDB Atlas for database services.

## Prerequisites

Before starting, make sure you have:
- Node.js installed on your computer.
- Access to a MongoDB Atlas account and cluster (or a local MongoDB installation).

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the Repository**
   Clone the project to your local machine:
   ```bash
   cd into the repo

2. **Install dependencies**
   ```bash
    npm install

3. **Configure Environment Variables**
    Create a .env file in the root directory of the project.
    Refer to the env.example file provided as a template.
    Add your MongoDB connection string and any other environment-specific settings.
    example:
    ```bash
    MONGO_URI=<your-mongodb-connection-string>

4. **Start the Development Server**
   ```bash
    npm run dev
