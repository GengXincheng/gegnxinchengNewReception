//2引入并声明使用插件
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
// VueRouter是路由器对象的方法
const originReplace = VueRouter.prototype.replace;
const originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originPush.call(this, location).catch(() => {});
  }else{
    return originPush.call(this, location,onResolved, onRejected)
  }
};
VueRouter.prototype.replace = function(location, onResolved, onRejected) {
  if (onResolved === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(() => {});
  }else{
    return originReplace.call(this, location,onResolved, onRejected)
  }
};

//3向外暴露一个路由器对象
export default new VueRouter({
  routes: [
    {
      path: "/", //重定向路由
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/search/:keyword?",
      component: Search,
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isHidden: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isHidden: true,
      },
    },
  ], //配置路由
});
