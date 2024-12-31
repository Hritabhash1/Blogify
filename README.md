# Blogify

Blogify is a Node.js and EJS-based blog application that allows users to create, view, and manage blogs. The application supports user authentication and provides an interface to upload images for each blog post.

## Live Demo

You can check out the live version of Blogify here:  
[https://blogify-s1ah.onrender.com/](https://blogify-s1ah.onrender.com/)

## Features

- **User Authentication**: Users can register, login, and manage their accounts.
- **Blog Management**: Users can create, edit, and delete blogs.
- **Image Upload**: Users can upload images related to their blog posts.
- **Responsive UI**: Built with Bootstrap for a mobile-friendly interface.
- **MongoDB**: Uses MongoDB for storing user and blog data.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building the API.
- **EJS**: Templating engine for rendering dynamic views.
- **Mongoose**: ODM for MongoDB.
- **Bootstrap**: Frontend CSS framework for responsive design.
- **Multer**: Middleware for handling file uploads.
- **JWT (JSON Web Tokens)**: For user authentication.

## Getting Started

Follow these steps to get your local development environment up and running.

### Prerequisites

- **Node.js**: You need to have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **MongoDB**: You need a MongoDB database, either local or hosted (e.g., MongoDB Atlas).

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/blogify.git
Navigate into the project folder:

bash
Copy code
cd blogify
Install the necessary dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your environment variables:

env
Copy code
MONGO_URL=mongodb://localhost:27017/blogify  # Or your MongoDB connection string
JWT_SECRET=your_jwt_secret
Run the application locally:

bash
Copy code
npm run dev
This will start the application on http://localhost:3000.

File Upload Configuration
If you want to upload images, the application stores them in the public/uploads directory. You can modify this to use cloud storage services like AWS S3 for production.

Routes
GET /: Home page displaying all the blog posts.
GET /login: User login page.
POST /login: User login action.
GET /register: User registration page.
POST /register: User registration action.
GET /create: Blog creation page.
POST /create: Create a new blog post.
GET /blog/:id: View a specific blog post.
GET /edit/:id: Edit a specific blog post.
POST /edit/:id: Update a blog post.
POST /delete/:id: Delete a specific blog post.
POST /upload: Handle image uploads.
Deployment
This app is ready to be deployed on platforms like Render, Heroku, or Vercel. If deploying to Render, make sure to use persistent storage for file uploads, such as AWS S3, since Render's filesystem is ephemeral.

Example Deployment on Render
Push the code to a GitHub repository.
Create a new Render web service.
Connect your GitHub repository to Render.
Set up environment variables on Render:
MONGO_URL
JWT_SECRET
Deploy the service.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Node.js
Express.js
EJS
Mongoose
Bootstrap
Multer
vbnet
Copy code

### Key Updates:
- The **Live Demo** section now includes the link to your hosted application on Render:  
  [https://blogify-s1ah.onrender.com/](https://blogify-s1ah.onrender.com/).
