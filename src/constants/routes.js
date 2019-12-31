export const SETTINGS = {
  DEF: '/settings',  
}

export const DASHBOARD_PATH = '/dashboard'
export const PATIENTS_PATH = '/patients'
export const ADMIN_PATH = '/admin'
export const EMPLOYEES_PATH = `${ADMIN_PATH}/employees`
export const GENERIC_VALUES_PATH = `${ADMIN_PATH}/generic-values`
export const DOCTORS_PATH = `${ADMIN_PATH}/doctors`
export const USERS_PATH = `${ADMIN_PATH}/users`

export const BILLING_PATH = '/billing'
export const REPORTS_PATH = '/reports'

export const PATIENTS = {
  PATIENTS_ROUTE: PATIENTS_PATH,
  ADD_PATIENT   : `${PATIENTS_PATH}/new`,
  EDIT_PATIENT  : `${PATIENTS_PATH}/edit/:id`,
}

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

export const BILLING = {
  BILLING_ROUTE: BILLING_PATH,
}

export const REPORTS = {
  REPORTS_ROUTE    : REPORTS_PATH,
  LAB_REPORTS_PATH : `${REPORTS_PATH}/lab`,
  XRAY_REPORTS_PATH: `${REPORTS_PATH}/x-rays`
}


