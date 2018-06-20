import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import TodoList from "./views/TodoList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "todolist",
      component: TodoList
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
