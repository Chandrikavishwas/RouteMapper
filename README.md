# Authenticated Map App - Route Planner

A beautiful React application that allows authenticated users to plan routes between two locations with real-time mapping and directions.
# Deployment link
 - https://route-mapper-psi.vercel.app/

## Features

- 🔐 **Firebase Authentication** - Email/password and Google sign-in
- 🗺️ **Interactive Maps** - Google Maps integration with route plotting
- 📍 **Location Autocomplete** - Smart location suggestions as you type
- 🎨 **Beautiful UI** - Formal design with responsive layout
- 📱 **Mobile Friendly** - Optimized for all device sizes
- ⚡ **Real-time Routes** - Live distance and duration calculations

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing project
3. Go to Project Settings → General → Your apps
4. Copy your Firebase config and update `src/firebase/config.js`
5. Enable Authentication in Firebase Console
6. Enable Email/Password and Google sign-in methods

### Opensourceroute
- apikey:-


### 3. Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/         
│   ├── LocationInput.jsx    
│   ├── MapComponent.jsx    
│   ├── Navbar.jsx          
│   └── ProtectedRoute.jsx  
├── contexts/           
│   └── AuthContext.jsx     
├── firebase/           
│   └── config.js         
├── pages/             
│   ├── Dashboard.jsx      
│   ├── Login.jsx         
│   └── Register.jsx     
├── App.jsx            
├── App.css            
└── main.jsx           
```

## Key Features Explained

### Authentication
- Firebase Auth with email/password and Google OAuth
- Protected routes that redirect unauthenticated users
- Persistent login state across browser sessions

### Map Functionality
- Interactive Google Maps with custom styling
- Route calculation between any two points
- Real-time distance and duration display
- Custom markers for start (A) and end (B) points

### Location Autocomplete
- Map Places API integration
- Dropdown suggestions as you type
- Accurate geocoding for route calculation

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface elements

## Usage

1. **Sign Up/Login**: Create an account or sign in with existing credentials
2. **Enter Locations**: Type starting point and destination in the input fields
3. **Get Suggestions**: Select from dropdown suggestions for accurate locations
4. **Calculate Route**: Click "Calculate Route" to see the path on the map
5. **View Details**: See distance and estimated travel time
6. **Clear Route**: Reset the map and start over

## Technologies Used

- **React 18** - Frontend framework
- **Firebase Auth** - Authentication service
- **opensourceroute Maps API** - Maps and routing
- **React Router** - Client-side routing
- **CSS Grid & Flexbox** - Responsive layouts



1. **Environment Variables**: Set up proper environment variables
2. **API Keys**: Restrict API keys to your domain
3. **Firebase Rules**: Configure proper security rules
4. **Build Optimization**: Use `npm run build` for production build
5. **Hosting**: Deploy to Netlify, Vercel, or Firebase Hosting



