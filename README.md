# React Authentication System

This project implements a simple React-based authentication system, consisting of login, signup, and profile pages. The system communicates with a backend server to handle user authentication and registration.

## Project Structure

### Components

1. **Login.js**: Manages the login functionality. Users provide their email and password, attempting to log in. Upon successful login, the system redirects to the user's profile page.

2. **Signup.js**: Handles user registration. Users enter a unique username, a unique valid email, and a password. After successful registration, users are redirected to their profile page.

3. **Profile.js**: Displays the user's dashboard, showing profile information and an option to edit and save details. Additionally, it lists all user profiles.

### Usage

1. **Login**: Access the login page through the root URL (`/`). Enter valid credentials to log in successfully.

2. **Signup**: Visit `/signup` to access the signup page. Provide a unique username, a valid email, and a password to register successfully.

3. **Profile**: After login or signup, users are redirected to the profile page (`/profile`). Here, they can view and edit their profile information. The page also displays a list of all user profiles.

### Dependencies

- **React**: The project relies on React to create a dynamic and interactive user interface.

### Backend Integration

- The authentication system communicates with a backend server implemented in django ( you can find code in [backend] part of this assignment ), utilizing endpoints like `/verifycredentials`, `/userupdate`, `/allusernames`, and `/userregistration` for authentication and registration functionalities.
When I first research something I look at [][1] then at [Google][2] then [Wookiepedia][3].

[1]: https://github.com/rampreethamkanchi/opensoft-assignment-backend      "backend"


### Setup

1. **Clone Repository**: Clone the repository to your local machine.

2. **Install Dependencies**: Run `npm install` in the project root to install the necessary dependencies.

3. **Run the Application**: Start the development server using `npm start` and open the application in your default web browser.

4. **Backend Integration**: Ensure the backend server is running and accessible from the React application. Update fetch URLs in the login, signup, and profile components accordingly.

### Note

- This project assumes the existence of a backend server supporting the specified API endpoints for user authentication and registration.

### THIS IS FOR ASSIGNMENT PURPOSE ONLY. SECURITY IS NOT IMPLEMENTED YET.