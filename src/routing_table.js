import Home from './routes/home/Home.vue'
import GridExample from './routes/gridExample/GridExample.vue'
import Login from './routes/login/Login.vue'
import Register from './routes/register/Register.vue'
import KanbanExample from './routes/kanbanExample/KanbanExample.vue'
import User from './routes/user/User.vue'
import StoryBoardExample from './routes/storyBoardExample/StoryBoardExample.vue'
import Project from './routes/project/Project.vue'
import Settings from './routes/settings/Settings.vue'
import FormExample from './routes/formExample/FormExample.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/gridexample', component: GridExample},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/KanbanExample/:id', component: KanbanExample},
  {path: '/user/:id', component: User},
  {path: '/storyBoardExample/:id', component: StoryBoardExample},
  {path: '/project/:id', component: Project},
  {path: '/settings', component: Settings},
  {path: '/formExample', component: FormExample},
]
