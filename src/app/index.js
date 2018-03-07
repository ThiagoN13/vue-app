import home from './home/home.vue'
import tasks from './tasks/tasks.vue'
import homeTasks from './tasks/home.vue'
import board from './board/board.vue'
import form from './tasks/form.vue'

const app = {
  ROUTES: [
    { path: '/home', name: 'home', component: home },
    { path: '/board', name: 'board', component: board },
    {
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
