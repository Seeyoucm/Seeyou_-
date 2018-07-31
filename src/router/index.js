import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

// import bus from "../javascripts/bus.js"

// 创建实例
const router = new VueRouter({
    routes:[
        {
            path:"",
            redirect:"/home"
            
        },
        {
            path:"/home",
            component:resolve => require(["../components/pages/home/Home.vue"],resolve)
        },
        {
            path:"/films",
            component:resolve => require(["../components/pages/films/Films.vue"],resolve)
        },
        {
            path:"/detail/:id",
            name:"detail",
            component:resolve => require(["../components/pages/detail/Detail.vue"],resolve),
            props:true
        },
        {
            path:"/404",
            component:resolve => require(["../components/common/NotFound.vue"],resolve)
        },
        {
            path:"**",
            redirect:"/404"
        }
    ]
});


// router.beforeEach((to,from,next)=>{
//     bus.$emit("closeNav");
//     next();
// })

export default router;