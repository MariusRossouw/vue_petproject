import Home from './routes/home/Home.vue'
import Login from './routes/login/Login.vue'
import Register from './routes/register/Register.vue'
import Dashboard from './routes/dashboard/Dashboard.vue'
import User from './routes/user/User.vue'
import Sprint from './routes/sprint/Sprint.vue'
import Project from './routes/project/Project.vue'
import Settings from './routes/settings/Settings.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/dashboard/:id', component: Dashboard},
  {path: '/user/:id', component: User},
  {path: '/sprint/:id', component: Sprint},
  {path: '/project/:id', component: Project},
  {path: '/settings', component: Settings},
]
