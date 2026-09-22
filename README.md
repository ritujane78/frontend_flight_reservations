# Flight Reservations Frontend

A React and Vite frontend for searching flights and working with flight reservation functionality.

## Overview

This application provides the client-side interface for the flight reservation learning project. It collects flight search information, communicates with the backend flight service through HTTP requests, displays matching flights, and supports reservation-related workflows.

The repository is maintained separately from the Spring Boot backend so that the frontend and backend can be developed independently.

## Tech Stack

- React 19
- Vite
- Axios
- React Router
- JavaScript
- ESLint

## Project Structure

```text
frontend_flight_reservations/
├── public/
├── screenshots/
├── src/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

## Main Frontend Flow

A typical user flow is:

1. Enter departure city.
2. Enter arrival city.
3. Select a departure date.
4. Submit the flight search form.
5. Navigate to the flight-results page.
6. Display flights returned by the backend.
7. Continue with the reservation workflow.

The application uses React Router to move between pages and Axios for backend communication.

## Backend Integration

The frontend is designed to communicate with the Spring Boot flight service (https://github.com/ritujane78/backend_flight_services).

The backend project contains the flight REST API and uses MySQL for persistence. Configure the frontend API URL to match the port on which the backend is running.

## Development Notes

The application uses React Router navigation state to pass search criteria between the flight-search and results views. Axios is used to retrieve matching flight data from the backend.

## Learning Goals

This project demonstrates:

- React component development
- Form state management
- React Router navigation
- Passing data between routes
- REST API integration with Axios
- Building a frontend for a Spring Boot application