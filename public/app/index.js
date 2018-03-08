import home from './home/home.vue'
import tasks from './tasks/tasks.vue'
import homeTasks from './tasks/home.vue'
import board from './board/board.vue'
import form from './tasks/form.vue'
import main from './Main.vue'
import login from './login/login.vue'

const app = {
  ROUTES: [
    { path: '/login', component: login },
    { path: '',
      component: main,
      children: [
        { path: 'home', component: home },
        { path: 'board', name: 'board', component: board },
        { path: '/form', component: form },
        { path: '/tasks', component: tasks,
          children: [
            { path: '', component: homeTasks }
          ]
        }
      ]
    }
  ]
}

export default app
