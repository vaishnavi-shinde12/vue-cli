import Vue from "vue";
import Router from "vue-router";
import Admin from "@/components/Admin";
import User from "@/components/User";
import Detail from "@/components/Detail";
// import FirstRouter from "@/components/FirstRouter";
// import SecondRouter from "@/components/SecondRouter";
import vueinstance from "@/components/vueinstance";
import ConditionalRender from "@/components/ConditionalRender";
import RenderingList from "@/components/RenderingList";
import lifecycle from "@/components/lifecycle";
import First from "@/components/First";
import computedprop from "@/components/computedprop";
import Slots from "@/components/Slots";
import Form from "@/components/Form";

Vue.use(Router);
function lazyLoad(view){                                 //Function for lazyLoading
  return() => import(`@/views/${view}.vue`)
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: lazyLoad("Home")
    },
    {
      path: "/vueinstance",
      name: "vueinstance",
      component: vueinstance
    },
    {
      path: "/about",
      name: "about",
      component: lazyLoad("About") 
    },
    {
      path: "/summary",
      name: "summary",      
      component: lazyLoad("summary")                   //lazy Load
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [{                              // Parent Child Component
        path: "user",
        name: "user",
        component: User,
        children : [{
          path: "detail",
          name: "detail",
          component: Detail
        }]
      }]
    },
    // {
    //   path: "/firstrouter/:name",                // routes with parameters
    //   name: "FirstRouter",                      
    //   component: FirstRouter
    // },
    // {
    //   path: "secondrouter/:name",
    //   name: "SecondRouter",
    //   component: SecondRouter,
    //   children: [{
    //     path: "child",
    //     component: SecondRouter
    //   }]
    // },
    {
      path: "/computedprop",                // routes with parameters
      name: "computedprop",                        
      component: computedprop
    },
    {
      path: "/conditionalrender",
      name: "conditionalrender",
      component: ConditionalRender
    },
    {
      path: "/renderinglist",
      name: "renderinglist",
      component: RenderingList
    },
    {
      path: "/lifecycle",
      name: "lifecycle",
      component: lifecycle
    },
    {
      path: "/firstprop",
      name: "first",
      component: First
    },
    {
      path: "/slots",
      name: "slots",
      component: Slots
    },
    {
      path: "/form",
      name: "form",
      component: Form
    }
  ]
});
