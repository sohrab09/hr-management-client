import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserPlus, faUsers, faList, faAt } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [
    {
        title: "Admin Home",
        path: '/admin',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        title: "Add Single Employee",
        path: '/singleEmployee',
        icon: <FontAwesomeIcon icon={faUserPlus} />
    },
    {
        title: "Add Multiple Employee",
        path: '/multipleEmployee',
        icon: <FontAwesomeIcon icon={faUsers} />
    },
    {
        title: 'Employee List',
        path: '/employeeList',
        icon: <FontAwesomeIcon icon={faList} />
    },
    {
        title: 'Send Email',
        path: '/sendMail',
        icon: <FontAwesomeIcon icon={faAt} />
    }
]

