import Home from '../components/pages/Home'
import Profile from '../components/pages/Profile'

export default [
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
    },
    {
        path: '/',
        name: 'home',
        component: Home,
    },
]