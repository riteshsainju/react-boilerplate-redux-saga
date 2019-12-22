export const SETTINGS = {
  DEF: '/settings',  
}

export const DASHBOARD_PATH = '/dashboard'
export const PATIENT_REGISTRATION_PATH = '/registration'

export const ADMIN_PATH = '/admin'
const EMPLOYEES_PATH = `${ADMIN_PATH}/employees`
const GENERIC_VALUES_PATH = `${ADMIN_PATH}/generic-values`
const DOCTORS_PATH = `${ADMIN_PATH}/doctors`
const USERS_PATH = `${ADMIN_PATH}/users`

export const EMPLOYEES = {
  EMPLOYEES_ROUTE: EMPLOYEES_PATH,
  ADD_EMPLOYEE   : `${EMPLOYEES_PATH}/new`,
  EDIT_EMPLOYEE  : `${EMPLOYEES_PATH}/edit/:id`,
}
export const GENERIC_VALUES = {
  GENERIC_VALUES_ROUTE: GENERIC_VALUES_PATH,
  ADD_GENERIC_VALUES  : `${GENERIC_VALUES_PATH}/new`,
  EDIT_GENERIC_VALUES : `${GENERIC_VALUES_PATH}/edit/:id`,
}

export const DOCTORS = {
  DOCTORS_ROUTE: DOCTORS_PATH,
  ADD_DOCTOR   : `${DOCTORS_PATH}/new`,
  EDIT_DOCTOR  : `${DOCTORS_PATH}/edit/:id`,
}

export const USERS = {
  USERS_ROUTE: USERS_PATH,
}

