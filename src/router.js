import VueRouter from "vue-router";

//导入组件
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import ShoppingCarContainer from './components/ShoppingCarContainer.vue'
import newList from './components/newList.vue'
import newsinfo from './components/newsinfo.vue'

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/member',
            component: MemberContainer
        },
        {
            path: '/shoppingCar',
            component: SearchContainer
        },
        {
            path: '/search',
            component: ShoppingCarContainer
        },
        {
            path: '/home/newList',
            component: newList
        },
        {
            path: '/home/newsinfo/:id',
            component: newsinfo
        }
    ],
    linkActiveClass: 'mui-active' //覆盖默认的router-link-active 类
})

export default router