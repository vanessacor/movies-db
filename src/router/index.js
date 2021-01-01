import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import MovieDetails from "../views/MovieDetails.vue";
import MovieCreate from "../views/MovieCreate.vue";
import MovieEdit from "../views/MovieEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/movies/create",
    name: "movieCreate",
    component: MovieCreate,
  },
  {
    path: "/movies/edit",
    name: "movieEdit",
    component: MovieEdit,
    props: route => ({ data: route.query.data })
  },
  {
    path: "/movies/:id",
    name: "movieDetails",
    component: MovieDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
