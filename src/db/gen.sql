CREATE TABLE
    studios (
        studio_id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        address_line1 VARCHAR(200) NOT NULL,
        address_line2 VARCHAR(200),
        city VARCHAR(100) NOT NULL,
        postcode VARCHAR(20),
        country VARCHAR(100),
        phone VARCHAR(30)
    );

CREATE TABLE
    instructors (
        instructor_id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        phone VARCHAR(30),
        bio TEXT,
        hire_date DATE,
        is_active BOOLEAN NOT NULL DEFAULT TRUE
    );

CREATE TABLE
    students (
        student_id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        phone VARCHAR(30),
        date_of_birth DATE,
        emergency_contact_name VARCHAR(150),
        emergency_contact_phone VARCHAR(30),
        is_active BOOLEAN NOT NULL DEFAULT TRUE
    );

CREATE TABLE
    employees (
        employee_id SERIAL PRIMARY KEY,
        studio_id INT NOT NULL REFERENCES studios (studio_id),
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        phone VARCHAR(30),
        role VARCHAR(50) NOT NULL, -- e.g. 'front_desk','manager'
        hire_date DATE,
        is_active BOOLEAN NOT NULL DEFAULT TRUE
    );

CREATE TABLE
    classes (
        class_id SERIAL PRIMARY KEY,
        studio_id INT NOT NULL REFERENCES studios (studio_id),
        instructor_id INT NOT NULL REFERENCES instructors (instructor_id),
        name VARCHAR(150) NOT NULL,
        description TEXT,
        level VARCHAR(50), -- 'beginner','all_levels', etc.
        start_datetime TIMESTAMP NOT NULL,
        end_datetime TIMESTAMP NOT NULL,
        capacity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        status VARCHAR(20) NOT NULL DEFAULT 'scheduled'
        -- consider: CHECK (status IN ('scheduled','cancelled','completed'))
    );

CREATE TABLE
    bookings (
        booking_id SERIAL PRIMARY KEY,
        class_id INT NOT NULL REFERENCES classes (class_id),
        student_id INT NOT NULL REFERENCES students (student_id),
        booking_datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(20) NOT NULL DEFAULT 'booked',
        payment_status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
        source VARCHAR(20) NOT NULL DEFAULT 'web'
        -- e.g. status: 'booked','waitlisted','cancelled','attended','no_show'
        -- payment_status: 'unpaid','paid','refunded'
    );

-- prevent same student double-booking same class
CREATE UNIQUE INDEX ux_bookings_class_student ON bookings (class_id, student_id);

CREATE TABLE
    plans (
        plan_id SERIAL PRIMARY KEY,
        student_id INT NOT NULL REFERENCES students (student_id),
        studio_id INT REFERENCES studios (studio_id),
        plan_name VARCHAR(100) NOT NULL,
        plan_type VARCHAR(50) NOT NULL, -- 'unlimited','class_pack','membership'
        total_credits INT, -- for packs
        remaining_credits INT,
        start_date DATE NOT NULL,
        end_date DATE,
        is_recurring BOOLEAN NOT NULL DEFAULT FALSE,
        price_per_period DECIMAL(10, 2),
        billing_period VARCHAR(20), -- 'month','year'
        status VARCHAR(20) NOT NULL DEFAULT 'active'
    );

CREATE TABLE
    plan_usages (
        usage_id SERIAL PRIMARY KEY,
        plan_id INT NOT NULL REFERENCES plans (plan_id),
        booking_id INT NOT NULL REFERENCES bookings (booking_id),
        used_credits INT NOT NULL DEFAULT 1,
        usage_datetime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE (plan_id, booking_id)
    );