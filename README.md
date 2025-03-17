# Photo Hero

Photo Hero is an AI-powered service that generates custom photos and videos using advanced AI models.

## Features

- Modern, responsive landing page with dark theme (black and violet)
- Interactive photo and video demo galleries
- Firebase Authentication (Email and Google sign-in)
- PayPal payment integration with hybrid payment model
- User dashboard for generating AI photos and videos

## Tech Stack

- React.js for frontend development
- Firebase for authentication and backend services
- PayPal for payment processing
- Styled Components for styling
- React Router for navigation
- Cypress for integration testing

## Project Structure

```
photo-hero/
├── .cursor/                  # Cursor IDE configuration
├── public/                   # Static files
├── src/                      # Source files
│   ├── components/           # Reusable UI components
│   ├── config/               # Configuration files
│   │   ├── firebase-config.js # Firebase configuration
│   │   └── paypal-config.js   # PayPal configuration
│   ├── pages/                # Page components
│   ├── context/              # React contexts
│   ├── hooks/                # Custom React hooks
│   ├── styles/               # Global styles
│   ├── utils/                # Utility functions
│   ├── App.js                # Main App component
│   └── index.js              # Entry point
├── cypress/                  # Integration tests
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Firebase account
- PayPal Developer account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/photo-hero.git
   cd photo-hero
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project at https://console.firebase.google.com/
   - Enable Authentication (Email/Password and Google providers)
   - Copy your Firebase configuration to `src/config/firebase-config.js`

4. Configure PayPal:
   - Create a PayPal Developer account at https://developer.paypal.com/
   - Create a sandbox application
   - Copy your PayPal client ID to `src/config/paypal-config.js`

5. Start the development server:
   ```
   npm start
   ```

## Development Workflow

1. Follow the test-driven development approach
2. Create integration tests for new features
3. Document design decisions and API references
4. Use environment variables for sensitive information
5. Follow the code style and naming conventions in project rules

## Testing

Run integration tests:
```
npm run cypress:open
```

Run unit tests:
```
npm test
```

## Deployment

The application is designed to be deployed to Firebase Hosting:

```
npm run build
firebase deploy
```

## License

This project is licensed under the MIT License. 