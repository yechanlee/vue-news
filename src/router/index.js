import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect: '/news',
        },
        {   //url 정보
            path: '/news',
            // url에 해당하는 주소로 갔을때 컴포넌트
            component: NewsView,

        },
        {
            path: '/ask',
            component: AskView,

        },
        {
            path: '/jobs',
            component: JobsView,

        },
    ]
})