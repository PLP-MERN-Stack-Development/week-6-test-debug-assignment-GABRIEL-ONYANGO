## Project Setup: mern-bug-tracker
1. Initialize the Project
mkdir mern-bug-tracker && cd mern-bug-tracker
npm init -y
npx create-react-app client
mkdir server && cd server
npm init -y


2. Install Dependencies
## Backend
npm install express mongoose cors
npm install --save-dev jest supertest jest-mock


## Frontend
cd ../client
npm install axios
npm install --save-dev @testing-library/react @testing-library/jest-dom



## Application Features
Backend (Express + MongoDB)
- Routes: /api/bugs for CRUD operations
- Model: Bug schema with fields like title, description, status, createdAt
Frontend (React)
- Components: BugForm, BugList, BugItem, StatusDropdown
- State Management: Use useState and useEffect or useReducer for complex state

## Testing Requirements
## Backend Testing
Unit Tests (Jest)
- Validate bug input (e.g., title required)

// validateBug.js
function validateBug(bug) {
  return bug.title && bug.description;
}
module.exports = validateBug;


// validateBug.test.js
const validateBug = require('./validateBug');
test('valid bug returns true', () => {
  expect(validateBug({ title: 'Crash', description: 'App crashes' })).toBeTruthy();
});


Integration Tests (Supertest)
const request = require('supertest');
const app = require('../app');

describe('POST /api/bugs', () => {
  it('should create a new bug', async () => {
    const res = await request(app).post('/api/bugs').send({ title: 'Bug', description: 'Details' });
    expect(res.statusCode).toBe(201);
  });
});


## Mocking
Use jest.mock() to simulate DB calls in unit tests.

## Frontend Testing
Unit Tests (React Testing Library)
import { render, screen } from '@testing-library/react';
import BugForm from './BugForm';

test('renders form inputs', () => {
  render(<BugForm />);
  expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
});


## Integration Tests
- Simulate form submission and check if API is called
- Verify UI updates after status change or deletion
UI State Tests
- Empty list
- Error message
- Loading spinner

## Debugging Tasks
Intentional Bugs
- Misspelled variable
- Incorrect API endpoint
- Unhandled promise
Tools
- Console logs: console.log('Bug:', bug)
- Chrome DevTools: Inspect network tab and React component tree
- Node.js Inspector:
node --inspect server/app.js


- React Error Boundaries:
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children;
  }
}



## Error Handling
Backend
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});


Frontend
Wrap critical components in <ErrorBoundary> to catch crashes.


 
