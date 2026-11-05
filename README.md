# Student Task Manager System

A full-stack web application designed to help students organize, manage and track their daily tasks efficiently.

## Project Overview

Student Task Manager is a web-based application where users can register, log in, create tasks, update task details, manage task status and delete tasks.

The application is developed step by step, starting with frontend development and progressing towards backend integration, database management and authentication.

## Technology Stack

- HTML5
- CSS3
- JavaScript
- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Git & GitHub

---

# Development Progress

## Day 1 – Login Page UI
- Created a login page with email and password fields.
- Added a login button and registration link.
- Designed a centered login container.
- Used CSS Flexbox for layout and alignment.

## Day 2 – Registration Page UI
- Created a registration form.
- Added Full Name, Email, Password and Confirm Password fields.
- Connected registration and login views.
- Maintained consistent UI styling.

## Day 3 – Frontend Navigation
- Implemented switching between login and registration views.
- Used JavaScript event listeners.
- Added navigation without full page reload.

## Day 4 – Form Validation
- Added email format validation.
- Implemented minimum password length validation.
- Checked password confirmation.
- Displayed inline error messages.

## Day 5 – Dashboard UI
- Designed the dashboard layout.
- Added sidebar navigation.
- Created welcome section and statistics cards.
- Organized dashboard content using Flexbox and Grid.

## Day 6 – Task List Interface
- Created task cards.
- Displayed task title, description and status.
- Added Add Task functionality.
- Improved task list layout.

## Day 7 – Task Creation Modal
- Created a task creation modal.
- Added title and description fields.
- Implemented Save and Cancel buttons.
- Added modal overlay functionality.

## Day 8 – Dynamic Task Management
- Implemented dynamic task creation.
- Displayed tasks using JavaScript.
- Added task deletion.
- Updated the interface without page reload.

## Day 9 – LocalStorage Integration
- Saved tasks in browser LocalStorage.
- Retrieved saved tasks on page load.
- Used JSON.stringify() and JSON.parse().
- Maintained task data after refreshing the page.

## Day 10 – Frontend Flow Integration
- Connected login, registration and dashboard views.
- Integrated task creation and persistence.
- Added UI-level logout functionality.
- Improved overall application navigation.

## Day 11 – Node.js Server Setup
- Initialized the backend project using npm.
- Created server.js.
- Installed and configured Express.js.
- Started the server on port 5000.

## Day 12 – Express Routing
- Created basic GET API endpoints.
- Implemented a welcome message route.
- Created a dummy tasks API.
- Returned JSON responses.

## Day 13 – Backend Project Structure
- Created routes and controllers folders.
- Separated routing and controller logic.
- Configured Express JSON middleware.
- Organized backend code.

## Day 14 – MongoDB Connection
- Set up MongoDB database.
- Installed Mongoose.
- Created database connection configuration.
- Handled connection success and errors.

## Day 15 – Task Model
- Created the Task schema.
- Defined title, description and status fields.
- Added createdAt field.
- Configured appropriate data types.

## Day 16 – Create and Read Task APIs
- Implemented POST /tasks.
- Implemented GET /tasks.
- Stored tasks in MongoDB.
- Retrieved task records from the database.

## Day 17 – Update and Delete Task APIs
- Implemented PUT /tasks/:id.
- Implemented DELETE /tasks/:id.
- Added database update and deletion functionality.
- Handled invalid task IDs.

## Day 18 – Frontend and Backend Connection
- Integrated Fetch API.
- Retrieved tasks from backend APIs.
- Displayed database records in the frontend.
- Replaced LocalStorage-based task retrieval.

## Day 19 – Backend Task Creation
- Connected task creation form with POST API.
- Sent task data to the backend.
- Updated the interface after successful creation.
- Handled API responses.

## Day 20 – Complete CRUD Integration
- Integrated task update functionality.
- Connected task deletion with backend.
- Synchronized frontend and database data.
- Tested complete CRUD operations.

## Day 21 – User Model
- Created the User schema.
- Added name, email and password fields.
- Configured unique email validation.
- Added createdAt field.

## Day 22 – User Registration API
- Created POST /auth/register.
- Added required field validation.
- Implemented email format validation.
- Handled duplicate user registration.

## Day 23 – Password Hashing
- Integrated bcrypt.
- Implemented password hashing.
- Stored hashed passwords in MongoDB.
- Avoided plain-text password storage.

## Day 24 – User Login API
- Created POST /auth/login.
- Checked user credentials.
- Compared passwords using bcrypt.
- Implemented login responses.

## Day 25 – JWT Authentication
- Integrated JSON Web Tokens.
- Generated tokens after successful login.
- Included user ID in token payload.
- Configured token expiration.

## Day 26 – Authentication Middleware
- Created JWT verification middleware.
- Extracted authenticated user information.
- Protected backend routes.
- Restricted unauthorized API access.

## Day 27 – User-Specific Tasks
- Added userId reference to Task model.
- Associated tasks with individual users.
- Implemented user-specific task retrieval.
- Maintained data isolation.

## Day 28 – Frontend Authentication Integration
- Connected login and registration forms with backend APIs.
- Integrated authentication token handling.
- Added authorization headers to API requests.
- Connected login flow with dashboard.

## Day 29 – Protected Routes
- Implemented dashboard access restrictions.
- Redirected unauthenticated users to login.
- Handled token expiration.
- Improved application access control.

## Day 30 – Authentication Integration
- Integrated complete registration and login flow.
- Connected user-specific task management.
- Implemented persistent session handling.
- Added logout functionality.

## Day 31 – Project Architecture Planning
- Planned application features.
- Defined API endpoints.
- Designed database schemas.
- Created basic architecture planning.

## Day 32 – Backend Refactoring
- Organized routes, controllers, models and middleware.
- Improved code modularity.
- Separated application responsibilities.
- Improved maintainability.

## Day 33 – Advanced Task Management
- Implemented task filtering.
- Added date-based sorting.
- Implemented title-based search.
- Improved task management functionality.

## Day 34 – Pagination
- Implemented pagination for task listing.
- Added page and limit query parameters.
- Restricted the number of records per page.
- Added page navigation.

## Day 35 – Error Handling and Logging
- Implemented centralized error handling.
- Standardized API error responses.
- Added basic logging.
- Improved backend reliability.

## Day 36 – Frontend Component Refactoring
- Organized frontend into reusable components.
- Structured Navbar, Sidebar, TaskCard and Modal.
- Improved code organization.
- Reduced repeated UI code.

## Day 37 – Loading and Error States
- Added loading indicators.
- Implemented API error messages.
- Handled empty task lists.
- Improved user experience during API operations.

## Day 38 – Role-Based Access Control
- Introduced Admin and User roles.
- Implemented role-based permissions.
- Restricted access according to user roles.
- Improved authorization handling.

## Day 39 – Admin Dashboard
- Created an admin dashboard.
- Displayed total users and total tasks.
- Added completed and pending task statistics.
- Organized dashboard information.

## Day 40 – Performance Optimization
- Reviewed database queries.
- Improved frontend rendering efficiency.
- Reduced unnecessary operations.
- Focused on application performance.

## Day 41 – E-commerce Project Planning
- Planned an e-commerce application.
- Defined product model requirements.
- Planned shopping cart functionality.
- Designed basic order flow and APIs.

## Day 42 – E-commerce Backend APIs
- Created product-related APIs.
- Implemented product creation.
- Implemented product retrieval.
- Designed basic cart structure.

## Day 43 – E-commerce Frontend Integration
- Connected frontend with product APIs.
- Displayed products dynamically.
- Implemented Add to Cart functionality.
- Displayed cart items.

## Day 44 – Application Testing
- Tested authentication functionality.
- Tested task CRUD operations.
- Tested shopping cart functionality.
- Identified and fixed application bugs.

## Day 45 – Final Project Integration
- Reviewed the complete application.
- Demonstrated project functionality.
- Explained application architecture.
- Reviewed implementation and development progress.

---

## Future Improvements

- File Upload and Cloud Storage
- Payment Gateway Integration
- Docker-based Deployment
- Advanced Security Improvements
- Scalable Application Architecture

## Development Flow

Frontend → Backend → Database → Authentication → Integration → Advanced Features → Testing → Deployment

---

**Project:** Student Task Manager System  
**Domain:** Full Stack Web Development  
**Primary Stack:** MERN
