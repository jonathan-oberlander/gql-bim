// db/schema.ts
import {
  boolean,
  date,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core'

// ---------- studios ----------
export const studios = pgTable('studios', {
  id: serial('studio_id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  addressLine1: varchar('address_line1', { length: 200 }).notNull(),
  addressLine2: varchar('address_line2', { length: 200 }),
  city: varchar('city', { length: 100 }).notNull(),
  postcode: varchar('postcode', { length: 20 }),
  country: varchar('country', { length: 100 }),
  phone: varchar('phone', { length: 30 }),
})

// ---------- instructors ----------
export const instructors = pgTable('instructors', {
  id: serial('instructor_id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 150 }).notNull().unique(),
  phone: varchar('phone', { length: 30 }),
  bio: text('bio'),
  hireDate: date('hire_date'),
  isActive: boolean('is_active').notNull().default(true),
})

// ---------- students ----------
export const students = pgTable('students', {
  id: serial('student_id').primaryKey(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 150 }).notNull().unique(),
  phone: varchar('phone', { length: 30 }),
  dateOfBirth: date('date_of_birth'),
  emergencyContactName: varchar('emergency_contact_name', { length: 150 }),
  emergencyContactPhone: varchar('emergency_contact_phone', { length: 30 }),
  isActive: boolean('is_active').notNull().default(true),
})

// ---------- employees ----------
export const employees = pgTable('employees', {
  id: serial('employee_id').primaryKey(),
  studioId: integer('studio_id')
    .notNull()
    .references(() => studios.id),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 150 }).notNull().unique(),
  phone: varchar('phone', { length: 30 }),
  role: varchar('role', { length: 50 }).notNull(),
  hireDate: date('hire_date'),
  isActive: boolean('is_active').notNull().default(true),
})

// ---------- classes ----------
export const classes = pgTable('classes', {
  id: serial('class_id').primaryKey(),
  studioId: integer('studio_id')
    .notNull()
    .references(() => studios.id),
  instructorId: integer('instructor_id')
    .notNull()
    .references(() => instructors.id),
  name: varchar('name', { length: 150 }).notNull(),
  description: text('description'),
  level: varchar('level', { length: 50 }),
  startDatetime: timestamp('start_datetime', { withTimezone: false }).notNull(),
  endDatetime: timestamp('end_datetime', { withTimezone: false }).notNull(),
  capacity: integer('capacity').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status', { length: 20 }).notNull().default('scheduled'),
})

// ---------- bookings ----------
export const bookings = pgTable(
  'bookings',
  {
    id: serial('booking_id').primaryKey(),
    classId: integer('class_id').notNull(),
    studentId: integer('student_id').notNull(),
    bookingDatetime: timestamp('booking_datetime').notNull().defaultNow(),
    status: text('status', {
      enum: ['booked', 'waitlisted', 'cancelled', 'attended', 'no_show'],
    })
      .notNull()
      .default('booked'),
    paymentStatus: text('payment_status', {
      enum: ['unpaid', 'paid', 'refunded'],
    })
      .notNull()
      .default('unpaid'),
    source: text('source', { enum: ['web', 'app', 'staff'] })
      .notNull()
      .default('web'),
  },
  (table) => [
    uniqueIndex('bookings_class_student_unique').on(
      table.classId,
      table.studentId,
    ),
  ],
)

// ---------- plans ----------
export const plans = pgTable('plans', {
  id: serial('plan_id').primaryKey(),
  studentId: integer('student_id')
    .notNull()
    .references(() => students.id),
  studioId: integer('studio_id').references(() => studios.id),
  planName: varchar('plan_name', { length: 100 }).notNull(),
  planType: varchar('plan_type', { length: 50 }).notNull(), // 'unlimited','class_pack','membership'
  totalCredits: integer('total_credits'),
  remainingCredits: integer('remaining_credits'),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
  isRecurring: boolean('is_recurring').notNull().default(false),
  pricePerPeriod: numeric('price_per_period', { precision: 10, scale: 2 }),
  billingPeriod: varchar('billing_period', { length: 20 }), // 'month','year'
  status: varchar('status', { length: 20 }).notNull().default('active'),
})

// ---------- plan_usages ----------
export const planUsages = pgTable('plan_usages', {
  id: serial('usage_id').primaryKey(),
  planId: integer('plan_id')
    .notNull()
    .references(() => plans.id),
  bookingId: integer('booking_id')
    .notNull()
    .references(() => bookings.id),
  usedCredits: integer('used_credits').notNull().default(1),
  usageDatetime: timestamp('usage_datetime', {
    withTimezone: false,
  })
    .notNull()
    .defaultNow(),
})
