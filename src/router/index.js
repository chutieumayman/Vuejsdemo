import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BT from '../views/BTView.vue'
import BT2 from '../views/BT2View.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('../views/AboutView.vue')
        },
        {
            path: '/bt',
            name: 'bt',
            component: BT
        }, {
            path: '/bt2',
            name: 'bt2',
            component: BT2
        }, {
            path: '/paginate1',
            name: 'paginate',
            component: () =>
                import ("../views/Paginate1View.vue")
        }, {
            path: '/paginate2',
            name: 'paginate2',
            component: () =>
                import ("../views/Paginate2View.vue")
        },
        {
            path: "/crud",
            name: "crud",
            component: () =>
                import ("../views/CRUDView.vue")
        }
    ]
})

export default router