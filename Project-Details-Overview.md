# EquiSports: Sports Equipment Online Store

## Live Site URL
[EquiSports Live](#)

## Features

- **Responsive Design:** Ensures a seamless browsing experience on mobile, tablet, and desktop devices.
- **User Authentication:** Supports secure login and registration with email, password, and Google authentication.
- **Dynamic Product Management:** Allows users to add, update, and delete sports equipment items via private routes.
- **Dark/Light Theme Toggle:** Users can switch between themes for personalized viewing.
- **Interactive UI Components:** Includes Lottie animations and React Awesome Reveal for an engaging experience.

## Technologies Used

- **Frontend:** React, React Router, TailwindCSS, Lottie React, React Awesome Reveal
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication
- **Hosting:** Netlify (Client), Vercel (Server)
- **Version Control:** GitHub

## How to Run Locally

### Prerequisites
- Node.js installed
- MongoDB instance running
- Firebase account for authentication

### Steps
1. Clone the repositories:
   - [Client-side](#)
   - [Server-side](#)

2. Install dependencies:
   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Set up environment variables:
   - **Client-side:** Create a `.env` file and add Firebase configuration keys.
   - **Server-side:** Create a `.env` file and add MongoDB connection string.

4. Run the development servers:
   - **Client:**
     ```bash
     npm run start
     ```
   - **Server:**
     ```bash
     npm run dev
     ```

5. Open the client app in your browser:
   ```
   http://localhost:3000
   ```

## Commit Logs

### Client-side
1. Initial project setup
2. Implement Navbar with conditional rendering
3. Create Home Page with banner and product section
4. Add user authentication with Firebase
5. Create private routes for Add Equipment and My Equipment List
6. Implement Add Equipment form with validation
7. Add All Sports Equipment page with sorting functionality
8. Implement View Details page
9. Add Update functionality with form validation
10. Create responsive design for all components
11. Add Dark/Light theme toggle
12. Integrate Lottie animations
13. Implement React Awesome Reveal for transitions
14. Add 404 page for non-existing routes
15. Finalize UI and resolve bugs

### Server-side
1. Set up Express server
2. Connect to MongoDB
3. Create CRUD API for sports equipment
4. Implement authentication middleware
5. Add route for adding equipment
6. Add route for fetching all equipment
7. Add route for updating equipment
8. Add route for deleting equipment

## Deployment

- **Client:** Hosted on Netlify with Firebase authorization
- **Server:** Hosted on Vercel

## Contact
For inquiries or support, contact:
- Email: [support@equisports.com](mailto:support@equisports.com)
- Phone: +1-800-SPORTS

Follow us on social media:
- Facebook: [EquiSports](#)
- Twitter: [@EquiSports](#)
- Instagram: [@EquiSports](#)
