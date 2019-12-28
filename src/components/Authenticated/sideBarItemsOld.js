import { DASHBOARD_PATH, EMPLOYEES, DOCTORS, GENERIC_VALUES, PATIENTS, USERS } from 'constants/routes'

const SideBarItems = () => [
  {
    name: 'Dashboard',
    link: DASHBOARD_PATH
  },
  {
    name: 'Paitients',
    link: PATIENTS.PATIENTS_ROUTE,
  },
  {
    name : 'Admin',
    items: [
      { name: 'Doctors',
        link: DOCTORS.DOCTORS_ROUTE },
      { name: 'Employees',
        link: EMPLOYEES.EMPLOYEES_ROUTE },
      { name: 'Generic Values',
        link: GENERIC_VALUES.GENERIC_VALUES_ROUTE },
      { name: 'Users',
        link: USERS.USERS_ROUTE },
    ]
  }
]

export default SideBarItems
