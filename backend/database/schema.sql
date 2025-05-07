-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password_hash TEXT,
    role VARCHAR(50),
    society VARCHAR(50)
);

-- Members Table
CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    dob DATE,
    gender VARCHAR(10),
    address TEXT,
    email VARCHAR(100),
    occupation VARCHAR(100),
    society VARCHAR(50),
    class_allocation VARCHAR(50)
);

-- Finances Table
CREATE TABLE finances (
    id SERIAL PRIMARY KEY,
    society VARCHAR(50),
    sunday_collection DECIMAL(10,2),
    pledge DECIMAL(10,2),
    special_effort DECIMAL(10,2),
    total DECIMAL(10,2),
    date DATE
);
