import { createRouter, createWebHashHistory } from "vue-router"
import DcHeros from "./components/DcHeros"
import Calendar from "./components/Calendar"

const routes = [
    { path: '/dc-heros', component: DcHeros },
    { path: '/calendar', component: Calendar },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})



export default router