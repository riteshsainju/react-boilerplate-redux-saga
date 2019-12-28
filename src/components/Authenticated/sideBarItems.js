import { DASHBOARD_PATH, EMPLOYEES, DOCTORS, GENERIC_VALUES, PATIENTS, USERS, BILLING, REPORTS } from 'constants/routes'
import { faHome, faProcedures, faUserCog, faUserMd, faUsers, faList, faUserFriends, faVial,faXRay } from '@fortawesome/free-solid-svg-icons'

const SideBarItems = () => [
  {
    name: 'Dashboard',
    url : DASHBOARD_PATH,
    icon: faHome,
  },
  {
    name: 'Paitients',
    url : PATIENTS.PATIENTS_ROUTE,
    icon: faProcedures,

  },
  {
    name    : 'Admin',
    icon    : faUserCog,
    children: [
      { name: 'Doctors',
        url : DOCTORS.DOCTORS_ROUTE,
        icon: faUserMd,
      },
      { name: 'Employees',
        url : EMPLOYEES.EMPLOYEES_ROUTE,
        icon: faUserFriends

      },
      { name: 'Generic Values',
        url : GENERIC_VALUES.GENERIC_VALUES_ROUTE,
        icon: faList

      },
      { name: 'Users',
        url : USERS.USERS_ROUTE,
        icon: faUsers

      },
    ]
  },
  {
    name: 'Billing',
    url : BILLING.BILLING_ROUTE,
    icon: faProcedures,

  },
  {
    name    : 'Reports',
    icon    : faProcedures,
    children: [
      { name: 'Lab',
        url : REPORTS.LAB_REPORTS_PATH,
        icon: faVial,
      },
      { name: 'X-Ray',
        url : REPORTS.XRAY_REPORTS_PATH,
        icon: faXRay
      },
    ]

  },
]

export default SideBarItems
