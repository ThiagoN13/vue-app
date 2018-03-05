import home from './home/home.vue'
import tasks from './tasks/tasks.vue'
import homeTasks from './tasks/home.vue'
import form from './tasks/form.vue'

const app = {
  ROUTES: [
    { path: '/home', name: 'home', component: home },
    {
      name: 'tasks',
      path: '/tasks',
      component: tasks,
      children: [
        {
          path: 'form',
          component: form
        },
        {
          path: '',
          component: homeTasks
        }
      ]
    }
  ]
}

export default app
