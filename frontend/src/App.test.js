import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Test 1: Original test you provided
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test 2: Check if Home link appears in navbar
test('renders Home link in the navbar', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});

// Test 3: Check if unauthenticated user is redirected to Login when accessing a protected route
test('redirects unauthenticated user from /create-trip to Login page', () => {
  render(
    <MemoryRouter initialEntries={['/create-trip']}>
      <App />
    </MemoryRouter>
  );
  const loginHeading = screen.getByText(/login/i);
  expect(loginHeading).toBeInTheDocument();
});