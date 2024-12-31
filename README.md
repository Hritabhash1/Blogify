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
   
Navigate into the project folder:

cd blogify
Install the necessary dependencies:


npm install
Create a .env file in the root directory and add your environment variables:

env
MONGO_URL=mongodb://localhost:27017/blogify 
Run the application locally:

npm run dev
This will start the application on http://localhost:8000.

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



Acknowledgments
Node.js
Express.js
EJS
Mongoose
Bootstrap
Multer
vbnet
