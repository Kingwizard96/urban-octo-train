# E-Commerce Back End

## User Story

As a manager at an internet retail company, I want a back end for my e-commerce website that uses the latest technologies so that my company can compete with other e-commerce companies.

## Acceptance Criteria

To meet the manager's requirements, this project should satisfy the following acceptance criteria:

### 1. Database Setup

- **Given** a functional Express.js API
- **When** I add my database name, MySQL username, and MySQL password to an environment variable file
- **Then** I am able to connect to a database using Sequelize

### 2. Database Initialization

- **When** I enter schema and seed commands
- **Then** a development database is created and is seeded with test data

### 3. Server Initialization

- **When** I enter the command to invoke the application
- **Then** my server is started, and the Sequelize models are synced to the MySQL database

### 4. API Routes

- **When** I open API GET routes in Insomnia Core for categories, products, or tags
- **Then** the data for each of these routes is displayed in a formatted JSON

### 5. API Operations

- **When** I test API POST, PUT, and DELETE routes in Insomnia Core
- **Then** I am able to successfully create, update, and delete data in my database

## Getting Started

To set up and run this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
