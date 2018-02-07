import Home from './pages/home/Home.vue'
import GridExample from './pages/gridExample/GridExample.vue'
import Login from './pages/login/Login.vue'
import Register from './pages/register/Register.vue'
import KanbanExample from './pages/kanbanExample/KanbanExample.vue'
import User from './pages/user/User.vue'
import StoryBoardExample from './pages/storyBoardExample/StoryBoardExample.vue'
import Projects from './pages/projects/Projects.vue'
import Project from './pages/project/Project.vue'
import Settings from './pages/settings/Settings.vue'
import FormExample from './pages/formExample/FormExample.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/gridexample', component: GridExample},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/KanbanExample/:id', component: KanbanExample},
  {path: '/user/:id', component: User},
  {path: '/storyBoardExample/:id', component: StoryBoardExample},
  {path: '/projects', component: Projects},
  {path: '/project/:id', component: Project},
  {path: '/settings', component: Settings},
  {path: '/formExample', component: FormExample},
]
