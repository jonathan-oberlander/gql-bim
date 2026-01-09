/* This file was automatically generated. DO NOT UPDATE MANUALLY. */

import { DateResolver, DateTimeResolver } from 'graphql-scalars'
import { Booking } from './booking/resolvers/Booking'
import { cancelBooking as Mutation_cancelBooking } from './booking/resolvers/Mutation/cancelBooking'
import { markBookingAttended as Mutation_markBookingAttended } from './booking/resolvers/Mutation/markBookingAttended'
import { booking as Query_booking } from './booking/resolvers/Query/booking'
import { bookings as Query_bookings } from './booking/resolvers/Query/bookings'
import { Class } from './class/resolvers/Class'
import { createClass as Mutation_createClass } from './class/resolvers/Mutation/createClass'
import { updateClassStatus as Mutation_updateClassStatus } from './class/resolvers/Mutation/updateClassStatus'
import { class as Query_class } from './class/resolvers/Query/class'
import { classes as Query_classes } from './class/resolvers/Query/classes'
import { setCookie as Mutation_setCookie } from './cookie/resolvers/Mutation/setCookie'
import { cookie as Query_cookie } from './cookie/resolvers/Query/cookie'
import { Employee } from './employee/resolvers/Employee'
import { Instructor } from './instructor/resolvers/Instructor'
import { instructor as Query_instructor } from './instructor/resolvers/Query/instructor'
import { instructors as Query_instructors } from './instructor/resolvers/Query/instructors'
import { cancelPlan as Mutation_cancelPlan } from './plan/resolvers/Mutation/cancelPlan'
import { createPlan as Mutation_createPlan } from './plan/resolvers/Mutation/createPlan'
import { Plan } from './plan/resolvers/Plan'
import { plan as Query_plan } from './plan/resolvers/Query/plan'
import { plans as Query_plans } from './plan/resolvers/Query/plans'
import { PlanUsage } from './planUsage/resolvers/PlanUsage'
import { id as Query_id } from './planUsage/resolvers/Query/id'
import { usageDatetime as Query_usageDatetime } from './planUsage/resolvers/Query/usageDatetime'
import { usedCredits as Query_usedCredits } from './planUsage/resolvers/Query/usedCredits'
import { createBooking as Mutation_createBooking } from './student/resolvers/Mutation/createBooking'
import { createStudent as Mutation_createStudent } from './student/resolvers/Mutation/createStudent'
import { student as Query_student } from './student/resolvers/Query/student'
import { students as Query_students } from './student/resolvers/Query/students'
import { Student } from './student/resolvers/Student'
import { studio as Query_studio } from './studio/resolvers/Query/studio'
import { studios as Query_studios } from './studio/resolvers/Query/studios'
import { Studio } from './studio/resolvers/Studio'
import type { Resolvers } from './types.generated'
export const resolvers: Resolvers = {
  Query: {
    booking: Query_booking,
    bookings: Query_bookings,
    class: Query_class,
    classes: Query_classes,
    cookie: Query_cookie,
    id: Query_id,
    instructor: Query_instructor,
    instructors: Query_instructors,
    plan: Query_plan,
    plans: Query_plans,
    student: Query_student,
    students: Query_students,
    studio: Query_studio,
    studios: Query_studios,
    usageDatetime: Query_usageDatetime,
    usedCredits: Query_usedCredits,
  },
  Mutation: {
    cancelBooking: Mutation_cancelBooking,
    cancelPlan: Mutation_cancelPlan,
    createBooking: Mutation_createBooking,
    createClass: Mutation_createClass,
    createPlan: Mutation_createPlan,
    createStudent: Mutation_createStudent,
    markBookingAttended: Mutation_markBookingAttended,
    setCookie: Mutation_setCookie,
    updateClassStatus: Mutation_updateClassStatus,
  },

  Booking: Booking,
  Class: Class,
  Employee: Employee,
  Instructor: Instructor,
  Plan: Plan,
  PlanUsage: PlanUsage,
  Student: Student,
  Studio: Studio,
  Date: DateResolver,
  DateTime: DateTimeResolver,
}
