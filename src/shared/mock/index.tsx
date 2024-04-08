import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from 'react-icons/md'

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]

const cardsInfo = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
]

export { cardsInfo, menuItems }
