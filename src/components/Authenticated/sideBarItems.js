import { DASHBOARD_PATH, EMPLOYEES, DOCTORS, GENERIC_VALUES, PATIENTS, USERS } from 'constants/routes'
import { faHome, faProcedures, faUserCog, faUserMd, faUsers, faList, faUserFriends } from '@fortawesome/free-solid-svg-icons'

// import { faHome, faProcedures, faUserCog, faUserMd, faUsers, faList, faUserFriends, faVial,faXRay } from '@fortawesome/free-solid-svg-icons'

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

  // {
  //   name: 'Billing',
  //   url  : USERS.USERS_ROUTE,
  //   icon: faProcedures,

  // },
  // {
  //   name    : 'Reports',
  //   icon    : faProcedures,
  //   children: [
  //     { name : 'Lab',
  //       url  : USERS.USERS_ROUTE,
  //       style: { paddingLeft: '18px' },
  //       icon : faVial,
  //     },
  //     { name : 'X-Ray',
  //       url  : USERS.USERS_ROUTE,
  //       style: { paddingLeft: '18px' },
  //       icon : faXRay
  //     },
  //   ]

  // },
]

export default SideBarItems
